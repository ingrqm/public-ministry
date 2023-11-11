'use client';

import { cloneElement, useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { useTranslations } from 'next-intl';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useFormRaw } from 'react-hook-form';
import type { Control, UseFormReturn, FieldValues, Path, DefaultValues } from 'react-hook-form';
import type { ZodType, AnyZodObject } from 'zod';

import type { TranslateFunction } from '@/i18n';

import {
  Form as FormRaw,
  FormControl,
  FormField as FormFieldRaw,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui';

export type FormFieldProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  children: ReactElement;
  addon?: ReactNode;
  label?: string | ReactNode;
  valuePropName?: 'checked' | 'selected';
  hideMessage?: boolean;
};

function getFormField<TFieldValues extends FieldValues>(control: Control<TFieldValues>) {
  return function FormField({
    addon,
    name,
    children,
    label,
    valuePropName,
    hideMessage = false,
  }: FormFieldProps<TFieldValues>) {
    if (valuePropName === 'selected') {
      return (
        <FormFieldRaw
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              {cloneElement(children, { onValueChange: field.onChange, defaultValue: field.value })}
              <FormMessage />
            </FormItem>
          )}
        />
      );
    }

    if (valuePropName === 'checked') {
      return (
        <FormFieldRaw
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex justify-center items-center">
              <FormControl>
                {cloneElement(children, {
                  checked: field.value,
                  onCheckedChange: (checked: boolean) => {
                    field.onChange(checked);
                  },
                })}
              </FormControl>
              <div className="flex justify-between items-center w-full">
                {label && <FormLabel className="ml-2 mb-0">{label}</FormLabel>}
                {Boolean(addon) && addon}
              </div>
            </FormItem>
          )}
        />
      );
    }

    return (
      <FormFieldRaw
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>{cloneElement(children, field)}</FormControl>
            {Boolean(addon) && addon}
            {!hideMessage && <FormMessage />}
          </FormItem>
        )}
      />
    );
  };
}

type FormProps = {
  onSubmit: (values: any) => void;
  children: ReactNode;
};

function getForm<T extends FieldValues>(form: UseFormReturn<T>) {
  return function Form({ onSubmit, children }: FormProps) {
    return (
      <FormRaw {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {children}
        </form>
      </FormRaw>
    );
  };
}

type UseFormProps<T extends FieldValues> = {
  schema: (t: TranslateFunction) => ZodType<T, any, any> | AnyZodObject;
  defaultValues: DefaultValues<T>;
};

export function useForm<T extends FieldValues>({
  schema,
  defaultValues,
}: UseFormProps<T>): [ReturnType<typeof getForm>, ReturnType<typeof getFormField<T>>, UseFormReturn<T>] {
  const t = useTranslations('form');

  const form = useFormRaw<T>({
    resolver: zodResolver(schema(t)),
    defaultValues,
    mode: 'onChange',
  });

  const Form = useMemo(() => getForm<T>(form), [form]);

  const FormField = useMemo(() => getFormField<T>(form.control), [form.control]);

  return [Form, FormField, form];
}
