'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitch() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'id') {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join('/') || '/';

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="flex items-center gap-2 text-gray-400 font-semibold text-sm">
      <button
        onClick={() => switchLocale('id')}
        className={`${currentLocale === 'id' ? 'text-yellow-600 text-lg' : 'text-gray-400'}`}
      >
        ID
      </button>
      |
      <button
        onClick={() => switchLocale('en')}
        className={`${currentLocale === 'en' ? 'text-yellow-600 text-lg' : 'text-gray-400'}`}
      >
        EN
      </button>
    </div>
  );
}
