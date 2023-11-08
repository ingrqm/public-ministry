import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export enum FormInputs {
  mail = 'mail',
}

export const getSchema = (t: (key: string) => string) =>
  z.object({
    [FormInputs.mail]: z.string().min(1, t('email.validation.required')).email(t('email.validation.format')),
  });

export const getResolver = (t: (key: string) => string) => zodResolver(getSchema(t));

export type FormTypes = z.infer<ReturnType<typeof getSchema>>;

export const defaultValues: FormTypes = {
  [FormInputs.mail]: '',
};
