import { getTranslations } from 'next-intl/server';
import SliderTestClient from '@/components/SliderTest'; // renamed to clarify it's a client component



export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <div className="pt-0">
        <SliderTestClient />
      </div>
    </div>
  );
}
