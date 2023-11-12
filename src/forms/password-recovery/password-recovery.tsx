'use client';

import { useTranslations } from 'next-intl';

import { api } from '@/api';

import { useForm, useLocale, useNavigate } from '@/hooks';

import { Button, Input } from '@/components/ui';

import { defaultValues, FormInputs, type FormTypes, schema } from './password-recovery.schema';

type PasswordRecoveryFormProps = {
  token: string;
};

export const PasswordRecoveryForm = ({ token }: PasswordRecoveryFormProps) => {
  const t = useTranslations('form');
  const locale = useLocale();
  const navigate = useNavigate();

  const [
    Form,
    FormField,
    {
      formState: { isSubmitting },
    },
  ] = useForm<FormTypes>({
    schema,
    defaultValues,
    key: 'password-recovery',
  });

  const handleSubmit = async (values: FormTypes) => {
    const request = await api.passwordReset.confirm({
      locale,
      token,
      password: values.password,
    });

    navigate('/sign-in');

    return request;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField name={FormInputs.password} label={t('input.password.label')}>
        <Input type="password" placeholder={t('input.password.placeholder')} />
      </FormField>

      <FormField name={FormInputs.repeatPassword} label={t('input.repeat-password.label')}>
        <Input type="password" placeholder={t('input.repeat-password.placeholder')} />
      </FormField>

      <Button className="mt-2 w-full" type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
        {t('password-recovery.button.submit.label')}
      </Button>
    </Form>
  );
};
