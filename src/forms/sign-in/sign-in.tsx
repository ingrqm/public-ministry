'use client';

import { useTranslations } from 'next-intl';

import { useForm } from '@/hooks';

import { Link, SocialAuth } from '@/components';
import { Button, Checkbox, Input, Typography } from '@/components/ui';

import { defaultValues, FormInputs, type FormTypes, schema } from './sign-in.schema';

export const SignInForm = () => {
  const t = useTranslations('form');

  const [Form, FormField] = useForm<FormTypes>({
    schema,
    defaultValues,
    key: 'sign-in',
  });

  const handleSubmit = (values: FormTypes) => {
    // TODO: connect to API
    console.log(values);
  };

  return (
    <>
      <SocialAuth onAppleAuth={() => {}} onGoogleAuth={() => {}} />

      <Form onSubmit={handleSubmit}>
        <FormField name={FormInputs.email} label={t('input.email.label')}>
          <Input type="text" placeholder={t('input.email.placeholder')} />
        </FormField>

        <FormField name={FormInputs.password} label={t('input.password.label')}>
          <Input type="password" placeholder={t('input.password.placeholder')} />
        </FormField>

        <FormField
          name={FormInputs.rememberMe}
          valuePropName="checked"
          label={t('sign-in.remember-me.label')}
          addon={
            <Link href="/password-remind" className="leading-none">
              <Typography.Small className="ml-auto underline">{t('sign-in.forgot-password.label')}</Typography.Small>
            </Link>
          }
        >
          <Checkbox />
        </FormField>

        <Button className="mt-6 w-full" type="submit">
          {t('sign-in.button.submit.label')}
        </Button>
      </Form>
    </>
  );
};
