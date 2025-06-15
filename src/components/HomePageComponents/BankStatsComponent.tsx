'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function BankStats() {
  const t = useTranslations('Global');

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-around min-h-[300px] gap-6 p-4">
      
      {/* Left: Image + Welcome */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white rounded-3xl p-6 text-center shadow-md">
        <img
          src="/walking_up.gif"
          alt="Welcome"
          className="max-h-[300px] object-contain mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
        <p className="text-base text-gray-700">
          Let&apos;s get you introduced to Sentosa Bank
        </p>
      </div>

      {/* Right: Stats Cards */}
      <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        
        <div className="hover:scale-105 relative p-0.5 rounded-3xl overflow-hidden group bg-gradient-to-br from-blue-600 to-yellow-500 hover:from-purple-700 hover:to-blue-600 transition">
          <div className="bg-gray-100 group-hover:bg-transparent text-gray-900 group-hover:text-white rounded-[1.65rem] flex flex-col items-center justify-center h-full min-h-[300px] p-6 text-center transition-all">
            <h3 className="text-3xl font-semibold mb-2">
                Re-open
            </h3>
            <p className="text-base">
              PT. BANK PERKREDITAN RAKYAT KARYA PRIMA SENTOSA
            </p>
            <p className="italic mt-2 text-sm">
              (PT. BPR KARYA PRIMA SENTOSA)
            </p>
          </div>
        </div>

        <div className="hover:scale-105 relative p-0.5 rounded-3xl overflow-hidden group bg-gradient-to-br from-blue-600 to-yellow-500 hover:from-purple-700 hover:to-blue-600 transition">
          <div className="bg-gray-100 group-hover:bg-transparent text-gray-900 group-hover:text-white rounded-[1.65rem] flex flex-col items-center justify-center h-full min-h-[300px] p-6 text-center transition-all">
            <h3 className="text-3xl font-semibold mb-2">
                New Name
            </h3>
            <p className="text-base">
              PT. BANK PEREKONOMIAN RAKYAT KARYA PRIMA SENTOSA
            </p>
            <p className="italic mt-2 text-sm">
              (PT. BPR KARYA PRIMA SENTOSA)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
