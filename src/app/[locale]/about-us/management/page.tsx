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


export default async function Management() {
  const t = await getTranslations('Global');

  const managementMap = [
    {
        title: t('board_of_commissioners'),
        children: [
            {
                fullName: "Lena Erdawati",
                positionTitle: t('commissioner'),
                imgUrl: "/management-pics/Lena.png"
            }
        ]
    },
    {
        title: t('board_of_directors'),
        children: [
            {
                fullName: "Hariyanto",
                positionTitle: t('president_director'),
                imgUrl: "/management-pics/hariyanto.jpeg"
            },
            {
                fullName: "Harjito",
                positionTitle: t('director'),
                imgUrl: "/management-pics/harjito.png"
            }
        ]
    }
  ]

  return (
    <div className={`${geistSans.className} w-full flex flex-col`}>
        <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
            <h1 className="text-3xl">{t('management')}</h1>
        </div>
      
        {
            managementMap.map((item, index)=>(
                <div key={index} className={`${geistMono.className} py-14 px-11`}>

                    <h1 className='text-center text-3xl md:underline underline-offset-8 mb-8'>
                        {item.title}
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {
                            item.children.map((child, childIndex) =>(
                                <div key={childIndex} className='flex justify-center items-center'>
                                    <div className="max-w-sm hover:scale-105 hover:shadow-blue-900 bg-white border border-gray-200 rounded-lg shadow-xl shadow-blue-400">
                                        <a href="#">
                                            <img className="rounded-t-lg" src={child.imgUrl} alt="" />
                                        </a>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                                    {child.fullName}
                                                </h5>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 ">
                                                {child.positionTitle}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  );
}