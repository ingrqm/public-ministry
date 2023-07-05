import { Inter } from 'next/font/google';

import '../styles/global.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='pl'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
