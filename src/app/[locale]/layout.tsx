import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";
import LanguageSwitch from '@/components/LanguageSwitch';

import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';
import Header from '@/components/Header';
 
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />

          <main className="max-w-7xl mx-auto p-6">
            {children}
          </main>

          <footer className="bg-gray-800 text-gray-300 p-4 mt-12 text-center">
            &copy; 2025 Yeabsira's Company
          </footer>
        </NextIntlClientProvider>
      </body>
      
    </html>
  );
}

