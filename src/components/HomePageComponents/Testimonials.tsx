'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('Global');

  return (
    <div className="flex flex-col mx-4 my-10 items-center">
      <h1 className="md:text-5xl text-3xl text-center font-bold mb-8">
        {t('what_are_they_saying')}
      </h1>

      <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg border">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/T88cRC7anmM"
          title="Welcome to Indonesia"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
