import { ISchema } from '@formily/react';
import { defaultProps, operators } from './properties';
import { IField } from './types';
import { CollectionFieldInterfaceV2 } from '../../application';

export const url: IField = {
  name: 'url',
  type: 'string',
  group: 'basic',
  order: 5,
  title: '{{t("URL")}}',
  default: {
    type: 'string',
    uiSchema: {
      type: 'string',
      'x-component': 'Input.URL',
    },
  },
  availableTypes: ['string'],
  schemaInitialize(schema: ISchema, { block }) {},
  properties: {
    ...defaultProps,
  },
  titleUsable: true,
  filterable: {
    operators: operators.string,
  },
};

export class UrlFieldInterface extends CollectionFieldInterfaceV2 {
  name = 'url';
  type = 'string';
  group = 'basic';
  order = 5;
  title = '{{t("URL")}}';
  default = {
    type: 'string',
    uiSchema: {
      type: 'string',
      'x-component': 'Input.URL',
    },
  };
  availableTypes = ['string'];
  schemaInitialize(schema: ISchema, { block }) {}
  properties = {
    ...defaultProps,
  };
  titleUsable = true;
  filterable = {
    operators: operators.string,
  };
}
