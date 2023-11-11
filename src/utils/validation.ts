import { type IssueData, z } from 'zod';

import type { TranslateFunction } from '@/i18n';

type ValidatorProps = {
  t: TranslateFunction;
};

type ValidatorBaseProps = {
  inputKey?: string;
  placementKey?: string;
};

type ValidatorMatchProps = {
  inputKey?: string;
  placementKey?: string;
  inputs: [string, string];
};

type ValidatorCustomProps = {
  inputKey?: string;
  placementKey?: string;
  min?: number;
  max?: number;
  format?: RegExp;
};

const getTranslationKey = ({ inputKey, placementKey = 'input' }: ValidatorBaseProps) => {
  return `${placementKey}.${inputKey}.validation`;
};

export const getValidator = ({ t }: ValidatorProps) => ({
  email: ({ inputKey = 'email', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .email(t(`${baseKey}.format`));
  },
  password: ({ inputKey = 'password', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .min(6, t(`${baseKey}.min`, { min: 6 }));
  },
  name: ({ inputKey = 'name', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .min(3, t(`${baseKey}.min`, { min: 3 }));
  },
  surname: ({ inputKey = 'surname', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .min(2, t(`${baseKey}.min`, { min: 2 }));
  },
  phone: ({ inputKey = 'phone', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });
    const phoneRegex =
      /^(?:(?:\+48|0048)\s?)?(?:(\d{3}\s?\d{3}\s?\d{3})|(\(\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2})|(\(\d{3}\)\s?\d{2}\s?\d{2}\s?\d{2}))$/;

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .regex(phoneRegex, t(`${baseKey}.format`));
  },
  congregation: ({ inputKey = 'congregation', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z.string().min(1, t(`${baseKey}.required`));
  },
  match: ({
    inputKey = 'repeat-password',
    placementKey,
    inputs,
  }: ValidatorMatchProps): [(data: any) => boolean, IssueData] => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return [
      (data: any) => data?.[inputs[0]] === data?.[inputs[1]],
      {
        message: t(`${baseKey}.match`),
        path: [inputKey],
      } as any,
    ];
  },
  custom: ({ inputKey = 'text', placementKey, min, max, format }: ValidatorCustomProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });
    let schema = z.string().min(1, t(`${baseKey}.required`));

    if (min !== undefined) {
      schema = schema.min(min, t(`${baseKey}.min`, { min }));
    }

    if (max !== undefined) {
      schema = schema.max(max, t(`${baseKey}.max`, { max }));
    }

    if (format !== undefined) {
      schema = schema.regex(format, t(`${baseKey}.format`));
    }

    return schema;
  },
});
