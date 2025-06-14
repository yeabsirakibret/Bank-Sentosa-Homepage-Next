"use client";
import { useState } from 'react';   
import Link from 'next/link';
import { CloudDownload } from 'lucide-react';
import { useTranslations } from 'next-intl';


export default function DownloadApp() {
    const t = useTranslations('Layout');
      
    return (
        <Link
            href="#"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-300"
        >
            <CloudDownload className="w-5 h-5" />
            <span className='block text-center w-full'>
                {t('download')} Bank Sentosa
            </span>
        </Link>
    )
}