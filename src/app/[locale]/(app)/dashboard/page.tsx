import { Locale } from '@/i18n';
import { getTranslator } from 'next-intl/server';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.app.dashboard');

  return {
    title: t('meta.title'),
  };
}

export default function Dashboard() {
  return <div>dashboard</div>;
}
