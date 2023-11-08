import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export enum FormInputs {
  mail = 'mail',
  password = 'password',
  rememberMe = 'rememberMe',
}

export const getSchema = (t: (key: string) => string) =>
  z.object({
    [FormInputs.mail]: z.string().min(1, t('email.validation.required')).email(t('email.validation.format')),
    [FormInputs.password]: z.string().min(1, t('password.validation.required')).min(6, t('password.validation.min')),
    [FormInputs.rememberMe]: z.boolean(),
  });

export const getResolver = (t: (key: string) => string) => zodResolver(getSchema(t));

export type FormTypes = z.output<ReturnType<typeof getSchema>>;

export const defaultValues: FormTypes = {
  [FormInputs.mail]: '',
  [FormInputs.password]: '',
  [FormInputs.rememberMe]: false,
};
