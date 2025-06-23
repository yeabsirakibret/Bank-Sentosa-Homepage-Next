// app/management/page.tsx
import { getTranslations } from 'next-intl/server';
import localFont from 'next/font/local';
import Image from 'next/image';

const geistSans = localFont({
  src: '../../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

const managementData = {
  board_of_commissioners: [
    {
      fullName: {
        en: 'Lena Erdawati',
        id: 'Lena Erdawati',
      },
      positionTitle: {
        en: 'Commissioner',
        id: 'Komisaris',
      },
      description: {
        en: 'Dedicated her career for 3 decades in the world of Banking. Developed expertise in Banking Management and built professional networks among industry and regulators. Now focusing on strengthening Corporate governance and long-term strategy.',
        id: 'Mendedikasikan kariernya selama 3 dekade dalam dunia Perbankan. Mengembangkan keahlian dalam Manajemen Perbankan serta membangun jaringan profesional di kalangan industri dan regulator. Kini fokus pada penguatan tata kelola Perusahaan dan strategi jangka panjang.',
      },
      imgUrl: '/management-pics/Lena.png',
    },
  ],
  board_of_directors: [
    {
      fullName: {
        en: 'Hariyanto',
        id: 'Hariyanto',
      },
      positionTitle: {
        en: 'President Director',
        id: 'Direktur Utama',
      },
      description: {
        en: "Has more than 30 years of experience in the financial industry (Bank, Multifinance, Life Insurance, and Rural Bank) including at HSBC, GE Finance, Citibank, Prudential Life Assurance, Avrist Assurance, Zurich Topas Life, Bank Danamon, and SME Finance. Appointed as President Director since 2024. Holds a Bachelor's degree from Atma Jaya University majoring in Business Administration.",
        id: 'Memiliki lebih dari 30 tahun pengalaman di industri keuangan (Bank, Multifinance, Asuransi Jiwa, dan Bank Perkreditan Rakyat) termasuk di HSBC, GE Finance, Citibank, Prudential Life Assurance, Avrist Assurance, Zurich Topas Life, Bank Danamon, dan SME Finance. Diangkat sebagai Direktur Utama sejak tahun 2024. Meraih gelar Sarjana dari Universitas Atma Jaya dengan jurusan Administrasi Bisnis.',
      },
      imgUrl: '/management-pics/hariyanto.jpeg',
    },
    {
      fullName: {
        en: 'Drs. Harjito',
        id: 'Drs. Harjito',
      },
      positionTitle: {
        en: 'Director of Operations',
        id: 'Direktur Operasional',
      },
      description: {
        en: 'Experienced in Banking Management and Financial Supervision. Has a track record of 22 years as a Bank Supervisor at Bank Indonesia and continues his service as a Senior Bank Supervisor at the Financial Services Authority (OJK) for 6 years.',
        id: 'Berpengalaman di bidang Manajemen Perbankan dan Pengawasan Keuangan. Memiliki rekam jejak selama 22 tahun sebagai Pengawas Bank di Bank Indonesia dan melanjutkan pengabdiannya sebagai Pengawas Bank Senior di Otoritas Jasa Keuangan (OJK) selama 6 tahun.',
      },
      imgUrl: '/management-pics/harjito.png',
    },
  ],
};

export default async function Management(props: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations('Global');
  const { locale } = await props.params;
  const safeLocale = (locale === 'id' || locale === 'en') ? locale : 'en';

  const sections = [
    { key: 'board_of_commissioners', label: t('board_of_commissioners') },
    { key: 'board_of_directors', label: t('board_of_directors') },
  ];

  let globalIdx = 0;

  return (
    <div className={`${geistSans.className} w-full flex flex-col`}>
      <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
        <h1 className="text-3xl font-bold">{t('management')}</h1>
      </div>

      {sections.map((section) => (
        <div key={section.key} className={`${geistMono.className} py-14 px-6 md:px-20`}>
          <h2 className="text-center text-3xl  mb-8">
            {section.label}
          </h2>

          <div className="flex flex-col gap-10">
            {(managementData[section.key as keyof typeof managementData] as typeof managementData.board_of_commissioners).map((person) => {
              const idx = globalIdx++;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-white shadow-xl hover:shadow-gray-300 transition-shadow duration-300 rounded-xl overflow-hidden p-4 md:p-6 border border-gray-200`}
                >
                  <div className="min-w-[200px] max-w-[300px]">
                    <Image
                      src={person.imgUrl}
                      alt={person.fullName[safeLocale]}
                      width={400}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{person.fullName[safeLocale]}</h3>
                    <p className="text-md font-medium text-blue-600 mb-2">{person.positionTitle[safeLocale]}</p>
                    <p className="text-gray-700 text-base whitespace-pre-line">{person.description[safeLocale]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}