import { getTranslations } from 'next-intl/server';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../../../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});


const geistMono = localFont({
    src: '../../../../fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});


export default async function InvestmentCredit() {
  const t = await getTranslations('Global');

  return(
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('working_capital')}</h1>
        </div>
        

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center mx-12 my-8'>

            <div className="aspect-[4/3] w-full max-w-md rounded-lg overflow-hidden">
                <img src="/bank_sentosa_pinjaman_kredit_investasi-01.png" alt="Investment Credit" className="w-full h-full object-cover" />
            </div>

            <div className=''>
                <div className='flex flex-col md:mx-10 mx-2'>
                    
                    <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                        {t('investment_credit')}
                    </h2>
                    <p>
                        {t('investment_credit_description')}
                    </p>
                    <p className='my-2'>
                        {t('working_capital_cta')}
                    </p>
                    <p className='mt-2 font-bold'>
                        {t('condition')}:
                    </p>
                    <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                        <li>
                            {t('employee_entrepreneur')}
                        </li>
                        <li>
                            {t('debtor_age_condition')}
                        </li>
                        <li>
                            {t('house_ownership_condition')}
                        </li>
                        <li>
                            {t('sid_condition')}
                        </li>
                        <li>
                            {t('business_age_condition')}
                        </li>
                        
                    </ul>

                </div>
            </div>

        </div>
    </div>
  );
}