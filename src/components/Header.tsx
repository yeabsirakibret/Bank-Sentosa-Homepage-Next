'use client';

import { useState, useEffect, useRef } from 'react';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import DownloadApp from './HeaderComponents/DownloadApp';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    {
      title: t('individual'),
      submenu: [t('savings'), t('loans'), t('digitalBanking')],
    },
    {
      title: t('corporate'),
      submenu: [t('businessAccounts'), t('corporateLoans'), t('cashManagement')],
    },
    {
      title: t('companyInformation'),
      submenu: [t('aboutUs'), t('leadership'), t('investorRelations')],
    },
    {
      title: t('newsAndArticle'),
      submenu: [],
    },
  ];

  // Close submenu and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenuIndex(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle submenu for mobile and desktop
  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 text-black p-4 shadow-lg shadow-yellow-50">
        <nav ref={menuRef} className="max-w-7xl mx-auto flex flex-wrap items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold mx-4">
            <img src="/sentosa_full_logo.png" alt="Sentosa Bank Logo" className="h-[50px]" />
          </Link>

          {/* Hamburger menu */}
          <button
            className="md:hidden block text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation */}
          <ul
            className={`w-full md:w-auto md:flex items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
              menuOpen ? 'block' : 'hidden md:flex'
            }`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenSubmenuIndex(index)}
                // onMouseLeave removed from here
              >
                {/* Desktop & Mobile link */}
                <div
                  className="flex items-center justify-between cursor-pointer px-3 py-2 hover:text-yellow-500 font-bold transition-colors duration-200"
                  onClick={() => toggleSubmenu(index)}
                >
                  <span>{item.title}</span>
                  {item.submenu.length > 0 && (
                    openSubmenuIndex === index ? (
                      <ChevronUp className="w-4 h-4 ml-2 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-200" />
                    )
                  )}
                </div>

                {/* Submenu */}
                {item.submenu.length > 0 && (
                  <ul
                    className={`
                      absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50
                      transition-all duration-200 ease-in-out
                      ${openSubmenuIndex === index ? 'block opacity-100' : 'hidden opacity-0'}
                      md:group-hover:block md:group-hover:opacity-100
                    `}
                    onMouseLeave={() => setOpenSubmenuIndex(null)}
                    onMouseEnter={() => setOpenSubmenuIndex(index)}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap transition-colors duration-200"
                      >
                        <Link href="#" className="block w-full">
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* Language Switch & App Download */}
            <li className="px-3">
              <LanguageSwitch />
            </li>
            <li className="px-3">
              <DownloadApp />
            </li>
          </ul>
        </nav>
      </header>

      
      {/* {
        openSubmenuIndex !== null && menuItems[openSubmenuIndex]?.submenu.length > 0 && (
          <div 
            className="bg-gray-100 text-black w-full block md:block py-4 shadow-lg shadow-yellow-100 border-1 "
            onMouseLeave={() => setOpenSubmenuIndex(null)}>
            <div className="max-w-7xl mx-auto flex flex-wrap gap-4 px-4 transition-opacity duration-500">
              {menuItems[openSubmenuIndex].submenu.map((subItem, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-black hover:text-yellow-700 font-medium transition-colors duration-200"
                >
                  {subItem}
                </Link>
              ))}
            </div>
          </div>
        )
      } */}
      
      

    </div>
   
  );
}