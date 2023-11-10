import { z } from 'zod';

type ValidatorProps = {
  t: (key: string) => string;
};

type ValidatorBaseProps = {
  inputKey?: string;
  placementKey?: string;
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
      .min(6, t(`${baseKey}.min`));
  },
  name: ({ inputKey = 'name', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .min(3, t(`${baseKey}.min`));
  },
  surname: ({ inputKey = 'surname', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .min(2, t(`${baseKey}.min`));
  },
  phone: ({ inputKey = 'phone', placementKey }: ValidatorBaseProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });
    const phoneRegex =
      /^\+?\d{2}(\s\d{3}\s\d{3}\s\d{3}|\s\d{3}\s\d{3}|\(\d{2}\)\s\d{2}\s\d{3}\s\d{2}|\d{11}|\d{9}|\(\d{2}\)\d{7})$/;

    return z
      .string()
      .min(1, t(`${baseKey}.required`))
      .regex(phoneRegex, t(`${baseKey}.format`));
  },
  custom: ({ inputKey = 'text', placementKey, min, max, format }: ValidatorCustomProps) => {
    const baseKey = getTranslationKey({ inputKey, placementKey });
    let schema = z.string().min(1, t(`${baseKey}.required`));

    if (min !== undefined) {
      schema = schema.min(min, t(`${baseKey}.min`));
    }

    if (max !== undefined) {
      schema = schema.max(max, t(`${baseKey}.max`));
    }

    if (format !== undefined) {
      schema = schema.regex(format, t(`${baseKey}.format`));
    }

    return schema;
  },
});
