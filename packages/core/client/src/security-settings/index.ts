/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import type { Application } from '../application';
const pluginName = 'security-settings';
export const addSecuritySettingsPlugin = (app: Application) => {
  app.pluginSettingsManager.add(pluginName, {
    icon: 'SettingOutlined',
    title: '{{t("Security settings")}}',
    Component: 'a',
    aclSnippet: `pm.${pluginName}.${pluginName}`,
  });
};

export const registerSecuritySettingsTab = ({
  app,
  tabName,
  tabTitle,
  sort,
  Component,
}: {
  app: Application;
  tabName: string;
  tabTitle: string;
  sort: number;
  Component: any;
}) => {
  app.pluginSettingsManager.add(`${pluginName}.${tabName}`, {
    title: tabTitle,
    Component: Component,
    aclSnippet: `pm.notification.channels`,
    sort: 1,
  });
};
