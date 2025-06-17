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


export default async function Deposit() {
  const t = await getTranslations('Global');

  return(
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('deposit')}</h1>
        </div>
        

        <div className='flex flex-col md:flex-row gap-4 justify-center items-center mx-12 my-8'>

            <div className="aspect-[4/3] w-full max-w-md rounded-lg overflow-hidden">
                <img className='rounded-lg' src="/bpr_sentosa_deposito.jpg" />
            </div>

            <div className=''>
                <div className='flex flex-col md:mx-10 mx-2'>
                    
                    <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                        {t('deposit')}
                    </h2>
                    <p>
                        {t('deposit_description')}
                    </p>
                    <p className='mt-2 font-bold'>
                        {t('advantages_benefits')}
                    </p>
                    <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                        <li>
                            {t('high_interest')}
                        </li>
                        <li>
                            {t('aro')}
                        </li>
                        <li>
                            {t('interest_option')}
                        </li>
                        <li>
                            {t('personal_service')}
                        </li>
                        
                    </ul>

                </div>
            </div>
        </div>

        <div className="relative overflow-x-auto md:mx-10 mx-2 my-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            {t('nominal')}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            1 {t('month')}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            3 {t('months')}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            6 {t('months')}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            12 {t('months')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b  border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            10 {t('million')} {"=<"} 50 {t('million')}
                        </th>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            50 {t('million')} {"=<"} 100 {t('million')}
                        </th>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                    </tr>

                    <tr className="bg-white border-b  border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            100 {t('million')} {"=<"} 200 {t('million')}
                        </th>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                        <td className="px-6 py-4">
                            6,50 %
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
  );
}