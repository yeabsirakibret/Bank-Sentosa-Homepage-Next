import { getTranslations } from 'next-intl/server';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});


const geistMono = localFont({
    src: '../../../fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});


export default async function AuctionInfo() {
  const t = await getTranslations('Global');

  return(
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('auction_info')}</h1>
        </div>

        <div className='my-10 mx-4'>
             <div className="flex justify-center items-center">
                <img className='' src="/bank_sentosa_lelang_nurlela_hastuti.png" />
            </div>
        </div>
    </div>
  );
}