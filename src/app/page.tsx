import { useTranslations } from 'next-intl';
import LanguageSwitch from '../components/LanguageSwitch';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <LanguageSwitch />
      <h1>{t('title')}</h1>
    </div>
  );
}