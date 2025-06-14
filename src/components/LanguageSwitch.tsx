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
    <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm">
        <Link
          href={makePathWithLocale('id')}
          className={`${currentLocale === 'id'? 'text-yellow-600 text-lg' : 'text-gray-400'}`}>
            ID
        </Link>
        |
        <Link
          href={makePathWithLocale('en')}
          className={`${currentLocale === 'en'? 'text-yellow-600 text-lg' : 'text-gray-400'}`}>
            EN
        </Link>
      </div>
  );
}
