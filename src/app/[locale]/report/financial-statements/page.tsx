"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import { useTranslations } from "next-intl";

const geistSans = localFont({
  src: "../../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export interface FinancialReport {
  filename: string;
  url: string;
  year_period: string; // e.g. "2025 I"
}

export default function FinancialStatements() {
  const t = useTranslations("Global");
  const [files, setFiles] = useState<FinancialReport[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    async function fetchFiles() {
      const res = await fetch(`/api/report/financial-statements?page=${currentPage}`);
      const json = await res.json();
      setFiles(json.data);
      setTotalPages(json.totalPages);
    }

    fetchFiles();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`${geistSans.className} w-full flex flex-col`}>
      {/* Header */}
      <div className="p-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-2xl">
        <h1 className="text-3xl">
          {t("download")} {t("financial_statements")}
        </h1>
      </div>

      {/* Table */}
      <div className="p-6 max-w-4xl mx-auto w-full my-14">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 p-3">{t("year")}</th>
              <th className="border border-gray-300 p-3">{t("file_name")}</th>
              <th className="border border-gray-300 p-3 text-center">{t("action")}</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-300 p-3">{file.year_period}</td>
                <td className="border border-gray-300 p-3">{file.filename}</td>
                <td className="border border-gray-300 p-3 text-center">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {t("view_download")}
                  </a>
                </td>
              </tr>
            ))}
            {files.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center p-4 text-gray-500">
                  {t("no_files")}
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2 items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded text-sm ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 text-sm rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
