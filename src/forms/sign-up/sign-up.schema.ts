import { z } from 'zod';

import type { TranslateFunction } from '@/i18n';

import { getValidator } from '@/utils';

export enum FormInputs {
  email = 'email',
  password = 'password',
  repeatPassword = 'repeat-password',
  name = 'name',
  surname = 'surname',
  phone = 'phone',
  congregation = 'congregation',
}

export enum FormTab {
  account = 'account',
  profile = 'profile',
}

export const schema = (t: TranslateFunction) => {
  const validator = getValidator({ t });

  return z
    .object({
      [FormInputs.email]: validator.email({ inputKey: FormInputs.email }),
      [FormInputs.password]: validator.password({ inputKey: FormInputs.password }),
      [FormInputs.repeatPassword]: validator.password({ inputKey: FormInputs.repeatPassword }),
      [FormInputs.name]: validator.name({ inputKey: FormInputs.name }),
      [FormInputs.surname]: validator.surname({ inputKey: FormInputs.surname }),
      [FormInputs.phone]: validator.phone({ inputKey: FormInputs.phone }),
      [FormInputs.congregation]: validator.congregation({ inputKey: FormInputs.congregation }),
    })
    .refine(
      ...validator.match({
        inputKey: FormInputs.repeatPassword,
        inputs: [FormInputs.password, FormInputs.repeatPassword],
      }),
    );
};

export type FormTypes = z.output<ReturnType<typeof schema>>;

export const defaultValues: FormTypes = {
  [FormInputs.email]: '',
  [FormInputs.password]: '',
  [FormInputs.repeatPassword]: '',
  [FormInputs.name]: '',
  [FormInputs.surname]: '',
  [FormInputs.phone]: '',
  [FormInputs.congregation]: '',
};
