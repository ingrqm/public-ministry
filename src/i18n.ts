import { getRequestConfig } from 'next-intl/server';

export const locales = ['pl'] as const;

export const defaultLocale = locales[0];

export type Locale = (typeof locales)[number];

export type Locales = typeof locales;

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
