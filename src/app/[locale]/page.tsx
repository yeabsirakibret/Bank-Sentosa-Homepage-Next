import { useTranslations } from 'next-intl';

import {Link} from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      
      <h1 className="text-3xl font-bold underline">
        {t('title')}
      </h1>


      <Link href="/about">
        {t('aboutLink')}
      </Link>
      

      
    </div>
  );
}


// export async function HomePageAs() {
//   const t = await getTranslations('HomePage');
//   return <h1>{t('title')}</h1>;
// }