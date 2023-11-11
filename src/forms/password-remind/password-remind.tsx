'use client';

import { useTranslations } from 'next-intl';

import { api } from '@/api';

import { useForm, useLocale } from '@/hooks';

import { Button, Input } from '@/components/ui';

import { defaultValues, FormInputs, type FormTypes, schema } from './password-remind.schema';

export const PasswordRemindForm = () => {
  const t = useTranslations('form');
  const locale = useLocale();

  const [
    Form,
    FormField,
    {
      formState: { isSubmitting },
    },
  ] = useForm<FormTypes>({
    schema,
    defaultValues,
    key: 'password-remind',
  });

  const handleSubmit = (values: FormTypes) =>
    api.passwordReset.request({
      locale,
      email: values.email,
    });

  return (
    <Form onSubmit={handleSubmit}>
      <FormField name={FormInputs.email} label={t('input.email.label')}>
        <Input type="text" placeholder={t('input.email.placeholder')} />
      </FormField>

      <Button className="mt-2 w-full" type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
        {t('password-remind.button.submit.label')}
      </Button>
    </Form>
  );
};
