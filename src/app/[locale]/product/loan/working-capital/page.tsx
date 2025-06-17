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


export default async function WorkingCapital() {
  const t = await getTranslations('Global');

  return(
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('working_capital')}</h1>
        </div>
        

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center mx-12 my-8'>

            <div className="aspect-[4/3] w-full max-w-md rounded-lg overflow-hidden">
                <img className='rounded-lg' src="/bank_sentosa_pinjaman_modal_kerja-01.png" />
            </div>

            <div className=''>
                <div className='flex flex-col md:mx-10 mx-2'>
                    
                    <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                        {t('working_capital')}
                    </h2>
                    <p>
                        {t('working_capital_description')}
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