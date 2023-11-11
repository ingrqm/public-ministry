import { getRequestConfig } from 'next-intl/server';

export const locales = ['pl'] as const;

export const defaultLocale = locales[0];

export type Locale = (typeof locales)[number];

export type Locales = typeof locales;

export type TranslateFunction = (key: string, options?: Record<string, any>) => string;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
