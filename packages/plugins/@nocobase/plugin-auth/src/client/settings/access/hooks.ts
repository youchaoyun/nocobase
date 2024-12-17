/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { useMemo, useEffect } from 'react';
import { createForm } from '@formily/core';
import { useAPIClient } from '@nocobase/client';
import { secAccessCtrlConfigCollName, secAccessCtrlConfigKey } from '../../../constants';

const useEditForm = () => {
  const apiClient = useAPIClient();

  const form = useMemo(() => createForm(), []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await apiClient
          .resource(secAccessCtrlConfigCollName)
          .find({ filterByTk: secAccessCtrlConfigKey });
        form.setValues(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [form, apiClient]);
  return { form };
};

export const hooksNameMap = {
  useSubmitActionProps: 'useSubmitActionProps',
  useEditForm: 'useEditForm',
};

export const hooksMap = {
  [hooksNameMap.useEditForm]: useEditForm,
};
