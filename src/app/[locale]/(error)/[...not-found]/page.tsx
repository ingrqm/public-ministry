import type { Locale } from '@/i18n';
import { getTranslator } from 'next-intl/server';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.error.not-found');

  return {
    title: t('meta.title'),
  };
}

export default function NotFound() {
  return <div>not found</div>;
}
