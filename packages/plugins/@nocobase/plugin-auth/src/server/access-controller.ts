/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { IAccessControlService, IAccessControlConfig } from '@nocobase/auth';
import { randomUUID } from 'crypto';
type AccessInfo = {
  id: string;
  lastAccessTime: EpochTimeStamp;
  resigned: boolean;
};
export class AccessController implements IAccessControlService<AccessInfo> {
  public config: IAccessControlConfig;
  private accessMap: Map<string, AccessInfo> = new Map();
  getConfig() {
    return this.config;
  }
  setConfig(config: Partial<IAccessControlConfig>): void {
    this.config = { ...this.config, ...config };
  }
  addAccess() {
    const id = randomUUID();
    this.accessMap.set(id, {
      id,
      lastAccessTime: Date.now(),
      resigned: false,
    });
  }
  updateAccess(id: string, value: Partial<AccessInfo>) {
    const accessInfo = this.accessMap.get(id);
    if (!accessInfo) throw new Error('Access not found');
    this.accessMap.set(id, { ...accessInfo, ...value });
  }
  refreshAccess(id: string): { status: 'success'; id: string } | { status: 'failed'; type: 'not_found' | 'resigned' } {
    const access = this.accessMap.get(id);
    if (!access) return { status: 'failed', type: 'not_found' };
    if (access.resigned) return { status: 'failed', type: 'resigned' };
    const newId = randomUUID();
    this.updateAccess(id, { resigned: true });
    const accessInfo = {
      id: newId,
      lastAccessTime: Date.now(),
      resigned: false,
    };
    this.accessMap.set(newId, accessInfo);
    return { status: 'success', id: newId };
  }
  canAccess(id: string): boolean {
    return true;
  }
}
