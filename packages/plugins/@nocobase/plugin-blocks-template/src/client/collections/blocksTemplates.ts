/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

export const blocksTemplatesCollection = {
  name: 'blocksTemplates',
  filterTargetKey: 'key',
  fields: [
    {
      type: 'string',
      name: 'title',
      interface: 'input',
      uiSchema: {
        type: 'string',
        title: "{{t('Title')}}",
        required: true,
        'x-component': 'Input',
      },
    },
    {
      type: 'string',
      name: 'description',
      interface: 'textarea',
      uiSchema: {
        type: 'string',
        title: "{{t('Description')}}",
        'x-component': 'Input.TextArea',
      },
    },
  ],
};
