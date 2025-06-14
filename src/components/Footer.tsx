'use client';

import React from 'react';
import { appVersion } from '@/lib/version';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 text-gray-800 border-t border-gray-300 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {year} Bank Sentosa. All rights reserved.
        </p>
        <p className="text-sm text-center md:text-right mt-2 md:mt-0">
          Version: <span className="font-medium">{appVersion}</span>
        </p>
      </div>
    </footer>
  );
}
