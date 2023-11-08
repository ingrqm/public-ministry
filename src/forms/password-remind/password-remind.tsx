'use client';

import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui';

import { defaultValues, FormInputs, getResolver, type FormTypes } from './password-remind.schema';

export const PasswordRemindForm = () => {
  const t = useTranslations('form.password-remind');

  const form = useForm<FormTypes>({
    resolver: getResolver(t),
    defaultValues,
  });

  function onSubmit(values: FormTypes) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name={FormInputs.mail}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email.label')}</FormLabel>
              <FormControl>
                <Input type="text" placeholder={t('email.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="mt-6 w-full" type="submit">
          {t('submit.label')}
        </Button>
      </form>
    </Form>
  );
};
