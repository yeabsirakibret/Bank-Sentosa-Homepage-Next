import { getTranslations } from 'next-intl/server';
import SliderTestClient from '@/components/SliderTest'; // renamed to clarify it's a client component
import BankStats from '@/components/HomePageComponents/BankStatsComponent';



export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <div className="pt-0">
        <SliderTestClient />
        <BankStats />
      </div>
    </div>
  );
}
