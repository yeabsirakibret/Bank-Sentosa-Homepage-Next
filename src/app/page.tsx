import { useTranslations } from 'next-intl';
import LanguageSwitch from '../components/LanguageSwitch';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      
      <h1 className="text-3xl font-bold underline">
        {t('title')}
      </h1>

      <a href="/about" className="mt-4 inline-block text-blue-500 hover:underline">
        About
      </a>
      

      
    </div>
  );
}