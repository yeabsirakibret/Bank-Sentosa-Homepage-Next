'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WhySentosa() {
  const t = useTranslations('Global');

  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/bg_why_neo.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          {t('manage_finance')}
        </h1>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="#"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-blue-100 transition"
          >
            {t('individual')}
          </Link>
          <Link
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            {t('corporate')}
          </Link>
        </div>
      </div>
    </div>
  );
}
