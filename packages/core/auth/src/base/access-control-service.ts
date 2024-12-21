/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

export interface IAccessControlConfig {
  tokenExpirationTime: string;
  maxTokenLifetime: string;
  renewalTokenEnabled: boolean;
  maxInactiveInterval: string;
  opTimeoutControlEnabled: boolean;
}

interface TokenStatus {
  valid: boolean;
  invalidType: 'expired' | 'other' | null;
}
export interface IAccessControlService<AccessInfo = any> {
  config: IAccessControlConfig;
  getConfig(): IAccessControlConfig;
  setConfig(config: IAccessControlConfig): void;
  refreshAccess(
    accessId: string,
  ): { status: 'success'; id: string } | { status: 'failed'; type: 'not_found' | 'resigned' };
  addAccess(): void;
  canAccess(accessId: string): boolean;
}
