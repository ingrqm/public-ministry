import type { FC } from 'react';

import { useTranslations } from 'next-intl';

import type { Congregation } from '@/api/congregations';

import type { FormFieldProps } from '@/hooks';

import {
  Button,
  FormControl,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

import { FormInputs, type FormTypes } from '../../sign-up.schema';

type AccountProps = {
  field: FC<FormFieldProps<FormTypes>>;
  congregations: Congregation[];
};

export const Profile = ({ field: FormField, congregations }: AccountProps) => {
  const t = useTranslations('form');

  return (
    <>
      <FormField name={FormInputs.name} label={t('input.name.label')}>
        <Input type="text" placeholder={t('input.name.placeholder')} />
      </FormField>

      <FormField name={FormInputs.surname} label={t('input.surname.label')}>
        <Input type="text" placeholder={t('input.surname.placeholder')} />
      </FormField>

      <FormField name={FormInputs.phone} label={t('input.phone.label')}>
        <Input type="text" placeholder={t('input.phone.placeholder')} />
      </FormField>

      <FormField name={FormInputs.congregation} label={t('input.congregation.label')} valuePropName="selected">
        <Select>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={t('input.congregation.placeholder')} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {congregations.map(({ id, name }) => (
              <SelectItem key={id} value={`${id}`}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <Button className="mt-6 w-full" type="submit">
        {t('sign-up.button.submit.label')}
      </Button>
    </>
  );
};
