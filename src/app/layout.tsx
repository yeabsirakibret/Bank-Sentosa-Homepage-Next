import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";
import LanguageSwitch from '@/components/LanguageSwitch';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

 
  return (
    <html lang={locale}>
      <body>
        
        <header className="bg-gray-900 text-white p-4">
          <nav className="max-w-7xl mx-auto flex justify-between">
            <div>Logo</div>
           
            <ul className="flex space-x-6">
              <li>Home</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <LanguageSwitch />
          </nav>
        </header>

        <main className="max-w-7xl mx-auto p-6">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </main>

        <footer className="bg-gray-800 text-gray-300 p-4 mt-12 text-center">
          &copy; 2025 Yeabsira's Company
        </footer>
      </body>
      
    </html>
  );
}