'use client';

import { useTranslations } from 'next-intl';

import { useForm } from '@/hooks';

import { Button, Input } from '@/components/ui';

import { defaultValues, FormInputs, type FormTypes, schema } from './password-remind.schema';

export const PasswordRemindForm = () => {
  const t = useTranslations('form');

  const [Form, FormField] = useForm<FormTypes>({
    schema,
    defaultValues,
  });

  const handleSubmit = (values: FormTypes) => {
    console.log(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField name={FormInputs.email} label={t('input.email.label')}>
        <Input type="text" placeholder={t('input.email.placeholder')} />
      </FormField>

      <Button className="mt-6 w-full" type="submit">
        {t('password-remind.button.submit.label')}
      </Button>
    </Form>
  );
};
