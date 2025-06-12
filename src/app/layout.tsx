import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import "./globals.css";

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}