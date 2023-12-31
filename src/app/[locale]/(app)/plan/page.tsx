import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.app.plan');

  return {
    title: t('meta.title'),
  };
}

export default function Plan() {
  return <div>plan</div>;
}
