"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface EFormFile {
  filename: string;
  url: string;
  size: string;
}

export default function EForm() {

    const [files, setFiles] = useState<EFormFile[]>([]);
    const t =  useTranslations('Global');

    useEffect(() => {
        async function fetchFiles() {
            const res = await fetch("/api/report/e-form");
            const json = await res.json();
            setFiles(json.data);
        }

        fetchFiles();
    }, []);

    return (
        <div className={`${geistSans.className} w-full flex flex-col`}>
            {/* Header */}
            <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
                <h1 className="text-3xl">{t('download')} E-Form</h1>
                <p className="mt-2 text-sm text-blue-100">
                    {t('download_forms_description')}
                </p>
            </div>
            
            {/* Table */}
            <div className="p-6 max-w-4xl mx-auto w-full my-14">
                <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border border-gray-300 p-3">
                                {t('file_name')}
                            </th>
                            <th className="border border-gray-300 p-3 text-center">
                                {t('size')}
                            </th>
                            <th className="border border-gray-300 p-3 text-center">
                                {t('action')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr key={index} className="odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 p-3">{file.filename}</td>
                                <td className="border border-gray-300 p-3 text-center">{file.size} MB</td>
                                <td className="border border-gray-300 p-3 text-center">
                                    <a
                                        href={file.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline">
                                            {t('view_download')}
                                    </a>
                                </td>
                            </tr>
                        ))}
                        {files.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center p-4 text-gray-500">
                                    {t('no_files')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
