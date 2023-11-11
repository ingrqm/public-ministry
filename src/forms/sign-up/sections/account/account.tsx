import type { FC } from 'react';

import { useTranslations } from 'next-intl';

import type { FormFieldProps } from '@/hooks';

import { Button, Input } from '@/components/ui';

import { FormInputs, type FormTypes } from '../../sign-up.schema';

type AccountProps = {
  field: FC<FormFieldProps<FormTypes>>;
  onGoToProfile: () => void;
};

export const Account = ({ field: FormField, onGoToProfile }: AccountProps) => {
  const t = useTranslations('form');

  return (
    <>
      <FormField name={FormInputs.email} label={t('input.email.label')}>
        <Input type="text" placeholder={t('input.email.placeholder')} />
      </FormField>

      <FormField name={FormInputs.password} label={t('input.password.label')}>
        <Input type="password" placeholder={t('input.password.placeholder')} />
      </FormField>

      <FormField name={FormInputs.repeatPassword} label={t('input.repeat-password.label')}>
        <Input type="password" placeholder={t('input.repeat-password.placeholder')} />
      </FormField>

      <Button type="button" onClick={onGoToProfile} className="mt-2 w-full">
        {t('sign-up.button.profile.label')}
      </Button>
    </>
  );
};
