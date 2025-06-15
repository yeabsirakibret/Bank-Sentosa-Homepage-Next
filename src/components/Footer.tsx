'use client';

import React from 'react';
import { appVersion } from '@/lib/version';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations('Global');

  return (
    <footer className="w-full bg-gray-100 text-gray-800 border-t border-gray-300 py-4">
      <div className="w-full mx-auto px-4 flex flex-col md:flex-col ">
        
        <div className='grid grid-cols-1 md:grid-cols-3 mb-6 gap-4'>
          {/* <div className="flex items-center flex-col space-y-1">
            <span className="font-bold">
              info_bank_bhp
            </span>
            <a href="/locations" className="block py-2 px-3 text-black rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500  dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
              bank_bhp_locations
            </a>
            <a href="/fees-interest" className="block py-2 px-3 text-black rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500  dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
              fees_and_interests
            </a>
          </div> */}

          <div className="flex items-center flex-col space-y-1">
            <span className="font-bold">
              {t('contact_us')}
            </span>
            <a href="tel:+622122225111" className="block py-2 px-3 text-black rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500  dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
              +62-21-2222-5111
            </a>
            <a href="mailto:info@banksentosa.co.id" className="block py-2 px-3 text-black rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500  dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
              info@banksentosa.co.id
            </a>
          </div>


          <div className="flex flex-col">
            <p className="text-sm text-center mb-2 font-bold">
              {t('licensed_supervised_by')}
            </p>


            <div className="flex gap-3 justify-center align-middle">
              <img src="/bpr_logo_min.png" className="h-20" alt="Logo" />
              <img src="/ojk_logo.png" className="h-20" alt="Logo" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-center mb-2 font-bold">
              {t('participant_in_guarantee')}
            </p>

            <div className="flex justify-center align-middle">
              <img src="/lps.png"  className="h-20" alt="Logo" />
            </div>
          </div>

        </div>


        <div className='justify-center items-center text-center'>
          <p className="text-sm">
            &copy; {year} Bank Sentosa. All rights reserved.
          </p>
          <p className="text-xs">
            Version: <span className="font-medium">{appVersion}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
