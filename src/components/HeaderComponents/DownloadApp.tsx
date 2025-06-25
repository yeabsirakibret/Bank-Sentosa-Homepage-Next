"use client";
import { useState } from 'react';   
import Link from 'next/link';
import { CloudDownload } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function DownloadApp() {
    const t = useTranslations('Layout');
      
    return (
        <Link
            href="https://play.google.com/store/apps/details?id=id.bank.sentosa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white hover:text-black px-3 py-1.5 rounded-full flex items-center space-x-2 hover:bg-blue-300 text-sm"
        >
            <CloudDownload className="w-4 h-4" />
            <span className='block text-center w-full'>
                {t('download')} Bank Sentosa
            </span>
        </Link>
    )
}