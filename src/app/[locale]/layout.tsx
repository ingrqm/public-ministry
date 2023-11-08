import type { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';

import getMessages, { locales } from '@/i18n';

import { ThemeProvider } from '@/providers';

import { cn } from '@/utils';

import '@/styles/global.css';

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const { messages } = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
