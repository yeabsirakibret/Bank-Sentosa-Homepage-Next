import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <div>
        <h1 className="text-3xl font-bold underline">
            {t('title')}
        </h1>
        <p className="mt-4">
            {t('description')}
        </p>
    </div>
  );
}