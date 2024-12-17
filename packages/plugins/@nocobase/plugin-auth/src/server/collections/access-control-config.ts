/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import Database, { defineCollection } from '@nocobase/database';
import { secAccessCtrlConfigCollName, secAccessCtrlConfigKey } from '../../constants';
import { SecurityAccessConfig } from '../../types';
export default defineCollection({
  name: secAccessCtrlConfigCollName,
  autoGenId: false,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true,
  fields: [
    {
      name: 'key',
      type: 'string',
      primaryKey: true,
      allowNull: false,
      interface: 'input',
    },
    {
      type: 'json',
      name: 'config',
      allowNull: false,
      defaultValue: {},
    },
  ],
});

export const createAccessCtrlConfigRecord = async (db: Database) => {
  const repository = db.getRepository(secAccessCtrlConfigCollName);
  const exist = await repository.findOne({ filterByTk: secAccessCtrlConfigKey });
  if (exist) {
    return;
  }
  const config: SecurityAccessConfig = {
    tokenExpirationTime: '1h',
    maxTokenLifetime: '7d',
    renewalTokenEnabled: true,
    maxInactiveInterval: '1h',
    opTimeoutControlEnabled: true,
  };
  await repository.create({
    values: {
      key: secAccessCtrlConfigKey,
      config,
    },
  });
};
