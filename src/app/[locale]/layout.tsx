import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";
import LanguageSwitch from '@/components/LanguageSwitch';

import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Link from 'next/link';
 
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
          <header className="bg-gray-900 text-white p-4">
            <nav className="max-w-7xl mx-auto flex justify-between">
              <div>Logo</div>
            
              <ul className="flex space-x-6">
                <li><Link href="/">{/* home */}Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>

                {/* 🔥 locale-aware link to /news */}
                <li>
                  <Link href="/news">News</Link>
                </li>
              </ul>

              <LanguageSwitch />
            </nav>
          </header>

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

