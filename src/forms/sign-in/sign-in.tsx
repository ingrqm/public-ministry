'use client';

import { useTranslations } from 'next-intl';

import { useForm } from 'react-hook-form';

import { Link } from '@/components';
import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography,
} from '@/components/ui';

import { defaultValues, FormInputs, getResolver, type FormTypes } from './sign-in.schema';

export const SignInForm = () => {
  const t = useTranslations('form.sign-in');

  const form = useForm<FormTypes>({
    resolver: getResolver(t),
    defaultValues,
  });

  function onSubmit(values: FormTypes) {
    // TODO: connect to API
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
        <FormField
          control={form.control}
          name={FormInputs.password}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('password.label')}</FormLabel>
              <FormControl>
                <Input type="password" placeholder={t('password.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={FormInputs.rememberMe}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                />
              </FormControl>
              <div className="flex justify-between items-center w-full">
                <FormLabel className="mb-0">{t('remember-me.label')}</FormLabel>
                <Link href="/password-remind">
                  <Typography.Small className=" ml-auto underline">Zapomniałeś hasła?</Typography.Small>
                </Link>
              </div>
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
