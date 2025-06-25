'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
export default function WhySentosa() {
  const t = useTranslations('Global');

  return (
    <div className='flex flex-col'>
        <div
            className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: "url('/bg_why_neo.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
                    {t('manage_finance')}
                    </h1>

                    <div className="flex justify-center gap-6 flex-wrap">
                    <Link
                        href="#"
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                    >
                        {t('individual')}
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                        href="#"
                        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                    >
                        {t('corporate')}
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                    </div>
                </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 relative w-full min-h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-around">
            <div className="relative z-10 text-center text-white px-4 max-w-2xl flex flex-col">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
                    {t('why_use_sentosa')}
                </h1>
                <span className="text-lg md:text-xl font-bold mb-6 leading-snug">
                    {t('fast_simple_secure')}
                </span>
                <span className="text-lg md:text-xl font-bold mb-6 leading-snug">
                    {t('manage_money_all_in_one')}
                </span>
            </div>

            <div className="w-full flex justify-center md:block md:w-auto">
                <img 
                  src="/app_sc_1.png" 
                  className="w-full max-w-xs md:max-w-none md:h-[36rem] max-h-72 md:max-h-none object-contain mx-auto"
                  alt="App Screenshot"
                />
            </div>
        </div>
    </div>
  );
}
