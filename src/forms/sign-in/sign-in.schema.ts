import { z } from 'zod';

import type { TranslateFunction } from '@/i18n';

import { getValidator } from '@/utils';

export enum FormInputs {
  email = 'email',
  password = 'password',
  rememberMe = 'remember-me',
}

export const schema = (t: TranslateFunction) => {
  const validator = getValidator({ t });

  return z.object({
    [FormInputs.email]: validator.email({ inputKey: FormInputs.email }),
    [FormInputs.password]: validator.password({ inputKey: FormInputs.password }),
    [FormInputs.rememberMe]: z.boolean(),
  });
};

export type FormTypes = z.output<ReturnType<typeof schema>>;

export const defaultValues: FormTypes = {
  [FormInputs.email]: '',
  [FormInputs.password]: '',
  [FormInputs.rememberMe]: false,
};
