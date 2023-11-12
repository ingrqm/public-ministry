import { z } from 'zod';

import { getValidator } from '@/utils';

export enum FormInputs {
  password = 'password',
  repeatPassword = 'repeat-password',
}

export const schema = (t: (key: string) => string) => {
  const validator = getValidator({ t });

  return z.object({
    [FormInputs.password]: validator.password({ inputKey: FormInputs.password }),
    [FormInputs.repeatPassword]: validator.password({ inputKey: FormInputs.repeatPassword }),
  });
};

export type FormTypes = z.infer<ReturnType<typeof schema>>;

export const defaultValues: FormTypes = {
  [FormInputs.password]: '',
  [FormInputs.repeatPassword]: '',
};
