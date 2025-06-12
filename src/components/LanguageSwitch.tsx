"use client";

import { setLocale } from '../utils/setLocale';

export default function LanguageSwitch() {
  return (
    <div className='flex gap-2 mb-4'>
      
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded'
        onClick={() => setLocale('en')}
      >
        English
      </button>
      
      <button
        className='px-4 py-2 bg-blue-500 text-white rounded'
        onClick={() => setLocale('id')}
      >
        Bahasa
      </button>

    </div>
  );
}