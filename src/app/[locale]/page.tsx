import { getTranslations } from 'next-intl/server';
import SliderTestClient from '@/components/SliderTest'; // renamed to clarify it's a client component



export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <div className="p-5">
        <SliderTestClient />
      </div>
    </div>
  );
}
