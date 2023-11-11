import { z } from 'zod';

import { getValidator } from '@/utils';

export enum FormInputs {
  email = 'email',
}

export const schema = (t: (key: string) => string) => {
  const validator = getValidator({ t });

  return z.object({
    [FormInputs.email]: validator.email({ inputKey: FormInputs.email }),
  });
};

export type FormTypes = z.infer<ReturnType<typeof schema>>;

export const defaultValues: FormTypes = {
  [FormInputs.email]: '',
};
