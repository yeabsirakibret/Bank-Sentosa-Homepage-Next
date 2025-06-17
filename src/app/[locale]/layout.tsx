import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'BPR Karya Prima Sentosa',
  description: 'BPR terpercaya di Indonesia',
};

 // app/[locale]/layout.tsx
export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

 
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <Header />

          <main className="w-full flex-1 mt-20 bg-white">
            {children}
          </main>

          <Footer/>
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
      
    </html>
  );
}

