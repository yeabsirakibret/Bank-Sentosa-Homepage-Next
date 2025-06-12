import { useTranslations } from 'next-intl';
import LanguageSwitch from '../components/LanguageSwitch';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <LanguageSwitch />
  
      <h1 className="text-3xl font-bold underline">
        {t('title')}
      </h1>

      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-900">Hello Tailwind!</h1>
      </div>
    </div>
  );
}