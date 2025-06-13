"use client"
import { useTranslations } from 'next-intl';

import {Link} from '@/i18n/navigation';
import SliderTest from '@/components/SliderTest';


export default function HomePage() {
  const t = useTranslations('HomePage');
  

  return (
    <div>
      
      <h1 className="text-3xl font-bold underline">
        {t('title')}
      </h1>
      <br />

{/* 
      <Link href="/about">
        {t('aboutLink')}
      </Link> */}

      <SliderTest />
      

      
    </div>
  );
}


// export async function HomePageAs() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }