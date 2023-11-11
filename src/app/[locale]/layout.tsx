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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="194x194" href="/assets/favicon-194x194.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#09090b" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#09090b" />
        <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png" />
        <meta name="msapplication-config" content="/assets/browserconfig.xml" />
        <meta name="theme-color" content="#09090b" />
      </head>

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
