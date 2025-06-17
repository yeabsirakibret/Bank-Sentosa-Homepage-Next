import { getTranslations } from 'next-intl/server';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});


const geistMono = localFont({
    src: '../../fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});


export default async function AboutUs() {
  const t = await getTranslations('Global');

  return (
    <div className={`${geistSans.className} w-full flex flex-col`}>
      <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
        <h1 className="text-3xl">{t('about_us')}</h1>
      </div>

      <div className="py-8 px-11">
        <div
          className="text-xl"
          dangerouslySetInnerHTML={{ __html: t.raw('about_description') }}
        />
        
        <hr className='my-8 text-gray-400' />

        <div className='flex flex-col md:flex-row justify-between p-5 gap-7'>
            <div className='flex flex-col'>
                <h1 className={`${geistMono.className} text-4xl uppercase`} dangerouslySetInnerHTML={{ __html: t.raw('who_we_are') }}/>
                
                <span className='py-2' dangerouslySetInnerHTML={{ __html: t.raw('who_we_are_description') }}/>

                <span className='py-2' dangerouslySetInnerHTML={{ __html: t.raw('commitment') }}/>
                    
            </div>
            

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl ">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold  text-gray-900 ">
                        {t('lps_membership_no')}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                    31300195
                </p>
                <a href='https://apps.lps.go.id/bankpesertapenjaminan' className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    {t('check')}
                </a>
            </div>

        </div>

        <hr className='my-8 text-gray-400' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col mx-10'>
                
                <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                    {t('all')}
                </h2>
                <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                    <li>
                        {t('vision')}
                    </li>
                </ul>

            </div>

            <div className='flex flex-col mx-10'>
                
                <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                    {t('mission')}
                </h2>
                <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                    <li>
                        {t('mission_1')}
                    </li>
                    <li>
                        {t('mission_2')}
                    </li>
                    <li>
                        {t('mission_3')}
                    </li>
                    <li>
                        {t('mission_4')}
                    </li>
                    <li>
                        {t('mission_5')}
                    </li>
                </ul>

            </div>
        </div>

        <hr className='my-8 text-gray-400' />

        <div className=''>
            <div className='flex flex-col mx-10'>
                
                <h2 className="mb-2 text-4xl font-semibold text-blue-900 uppercase">
                    {t('policy_direction')}
                </h2>
                <ul className="max-w-md space-y-1 text-gray-600 list-disc list-inside ">
                    <li>
                        {t('policy_1')}
                    </li>
                    <li>
                        {t('policy_2')}
                    </li>
                    <li>
                        {t('policy_3')}
                    </li>
                    <li>
                        {t('policy_4')}
                    </li>
                    <li>
                        {t('policy_5')}
                    </li>
                    <li>
                        {t('policy_6')}
                    </li>

                </ul>

            </div>
        </div>

      </div>
    </div>
  );
}
