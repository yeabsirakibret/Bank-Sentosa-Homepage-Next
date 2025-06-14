import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";
import Header from '@/components/Header';

export const metadata = {
  title: 'BPR Karya Prima Sentosa',
  description: 'BPR terpercaya di Indonesia',
};
 
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

          <main className="max-w-7xl mx-auto p-6 mt-20">
            {children}
          </main>

          <footer className="w-full bg-gray-100 text-black p-4  mt-12 text-center">
            &copy; Copyright Bank Sentosa (BPR) . All Rights Reserved
          </footer>
        </NextIntlClientProvider>
      </body>
      
    </html>
  );
}

