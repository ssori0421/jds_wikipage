import '../styles/_global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from './layout.module.scss';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jds-wikipage',
  description: 'Flunti 교육 위키페이지지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={styles.container}>{children}</div>
      </body>
    </html>
  );
}
