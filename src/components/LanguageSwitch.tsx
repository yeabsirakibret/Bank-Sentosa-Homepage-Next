"use client";

import { setLocale } from '../utils/manageLocale';

export default function LanguageSwitch() {
  return (
    <div className='flex gap-2 mb-4'>
      

      <button type="button" onClick={() => setLocale('en')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        English
      </button>

      <button type="button" onClick={() => setLocale('id')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Bahasa
      </button>
      

    </div>
  );
}