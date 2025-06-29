import { getTranslations } from 'next-intl/server';
import SliderTestClient from '@/components/SliderTest'; // renamed to clarify it's a client component
import BankStats from '@/components/HomePageComponents/BankStatsComponent';
import WhySentosa from '@/components/HomePageComponents/WhySentosaComponent';
import Testimonials from '@/components/HomePageComponents/Testimonials';



export default async function HomePage() {
  const t = await getTranslations('HomePage');

  return (
    <div>
      <div className="pt-0">
        <SliderTestClient />
        <BankStats />
        <WhySentosa />
        <Testimonials />
      </div>
    </div>
  );
}
