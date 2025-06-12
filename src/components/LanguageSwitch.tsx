'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitch() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  // Replace only the first part of the path
  const makePathWithLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // swap out locale segment
    return segments.join('/') || '/';
  };

  return (
    <div className="flex gap-2 mb-4">
      <Link
        href={makePathWithLocale('en')}
        className={`text-white ${
          currentLocale === 'en'
            ? 'bg-green-800'
            : 'bg-blue-700 hover:bg-blue-800'
        } focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        English
      </Link>
      <Link
        href={makePathWithLocale('id')}
        className={`text-white ${
          currentLocale === 'id'
            ? 'bg-green-800'
            : 'bg-blue-700 hover:bg-blue-800'
        } focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      >
        Bahasa
      </Link>
    </div>
  );
}
