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


export default async function Savings() {
  const t = await getTranslations('Global');

  return(
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('savings')}</h1>
        </div>
        

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center mx-12 my-8'>

            <div>
                <img className='rounded-lg' src="/bpr_sentosa_tabungan.jpg" />
            </div>

            <div className=''>
                <div className='flex flex-col mx-10'>
                    
                    <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                        {t('savings')}
                    </h2>
                    <p>
                        {t('savings_description')}
                    </p>
                    <p className='mt-2 font-bold'>
                        {t('advantages_benefits')}
                    </p>
                    <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                        <li>
                            {t('competitive_interest')}
                        </li>
                        <li>
                            {t('low_admin_fee')}
                        </li>
                        <li>
                            {t('safe_lps')}
                        </li>
                        
                    </ul>

                </div>
            </div>

        </div>
    </div>
  );
}