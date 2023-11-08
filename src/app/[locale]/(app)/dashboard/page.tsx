import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

import { Link } from '@/components';

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
  return (
    <div>
      dashboard<Link href="/not-working">test</Link>
    </div>
  );
}
