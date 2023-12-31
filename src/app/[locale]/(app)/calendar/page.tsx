import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.app.calendar');

  return {
    title: t('meta.title'),
  };
}

export default function Calendar() {
  return <div>calendar</div>;
}
