'use client';

import { useState, useEffect, useRef } from 'react';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import DownloadApp from './HeaderComponents/DownloadApp';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [mobileSubmenusOpen, setMobileSubmenusOpen] = useState<{ [key: string]: boolean }>({});
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const menuItems = [
    {
      title: t('home'),
      submenu: [],
    },
    {
      title: t('about_us'),
      submenu: [
        { title: t('about_us') },
        { title: t('management') },
      ],
    },
    {
      title: t('product'),
      submenu: [
        { 
          title: t('savings'),
          submenu: [
            { title: t('savings') },
            { title: t('deposit') }
          ],
        },
        {
          title: t('loan'),
          submenu: [
            { title: t('working_capital') },
            { title: t('investment_credit') },
            { title: t('consumer_credit') }
          ],
        },
        { title: t('auction_info') },
      ],
    },
    {
      title: t('report'),
      submenu: [
        { title: t('financial_statements') },
        { title: t('governance_report') },
        { title: t('annual_report') },
      ],
    },
    {
      title: t('e_form'),
      submenu: [],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenuIndex(null);
        setMenuOpen(false);
        setMobileSubmenusOpen({});
      }
    };

    

    document.addEventListener('mousedown', handleClickOutside);
    

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      
    };
  }, []);


  const toggleSubmenu = (index: number) => {
    setMobileSubmenusOpen({});
    if (openSubmenuIndex === index) {
      setOpenSubmenuIndex(null);
    } else {
      setOpenSubmenuIndex(index);
    }
  };
  
  const toggleMobileNestedSubmenu = (path: string) => {
      setMobileSubmenusOpen(prev => {
          const isOpen = !!prev[path];
          const newStates = { ...prev };

          const parentPath = path.substring(0, path.lastIndexOf('-'));
          Object.keys(newStates).forEach(key => {
              if (key.startsWith(parentPath + '-') && key.lastIndexOf('-') === path.lastIndexOf('-') && key !== path) {
                  delete newStates[key];
              }
          });

          if (isOpen) {
              Object.keys(newStates).forEach(key => {
                  if (key.startsWith(path)) {
                      delete newStates[key];
                  }
              });
          } else {
              newStates[path] = true;
          }

          return newStates;
      });
  };

  const renderSubmenu = (items: any[], level = 1, parentPath = '') => {
    return (
      <ul
        className={`
          w-full pl-4 md:pl-0
          md:absolute  md:shadow-xl md:rounded-lg md:py-2 z-50 md:whitespace-nowrap md:min-w-[200px]
          ${level === 1 ? 'md:left-0 md:top-full md:mt-1 bg-white' : 'md:left-full md:top-0 md:ml-0 bg-white'}
        `}
        onMouseLeave={() => window.innerWidth >= 768 && level === 1 && setOpenSubmenuIndex(null)}
      >
        {items.map((item, idx) => {
          const currentPath = `${parentPath}-${idx}`;
          const isMobileSubmenuOpen = !!mobileSubmenusOpen[currentPath];
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          return (
            <li key={idx} className="relative group/submenu">
              <div
                className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={(e) => {
                  if (hasSubmenu) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileNestedSubmenu(currentPath);
                  }
                }}
              >
                <Link href="#" className="block w-full">
                  {item.title}
                </Link>
                {hasSubmenu && (
                  <>
                    <span className="md:hidden">
                      {isMobileSubmenuOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                    </span>
                    <span className="hidden md:block">
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </span>
                  </>
                )}
              </div>

              {hasSubmenu && (
                 <div className={`
                    ${isMobileSubmenuOpen ? 'block' : 'hidden'}
                    md:hidden md:absolute md:top-0 md:left-full md:group-hover/submenu:block
                 `}>
                  {renderSubmenu(item.submenu, level + 1, currentPath)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-gray-100 text-gray-600 p-4 shadow-lg ">
        <nav ref={menuRef} className="max-w-7xl mx-auto flex flex-wrap items-center justify-between relative">
          <Link href="/" className="text-lg font-bold mx-4">
            <img src="/sentosa_full_logo.png" alt="Sentosa Bank Logo" className="h-[50px]" />
          </Link>

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

          <ul
            className={`w-full md:w-auto md:flex items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 transition-all duration-300 ease-in-out ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => window.innerWidth >= 768 && setOpenSubmenuIndex(index)}
                // onMouseLeave={() => window.innerWidth >= 768 && setOpenSubmenuIndex(null)}
              >
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

                {item.submenu.length > 0 && (
                  <div
                    className={`
                      w-full md:w-auto
                      transition-all duration-200 ease-in-out
                      md:absolute md:left-0 md:bg-white md:shadow-xl md:rounded-lg md:py-2 md:z-50
                      ${openSubmenuIndex === index ? 'block' : 'hidden'}
                    `}
                  >
                    {renderSubmenu(item.submenu, 1, `${index}`)}
                  </div>
                )}
              </li>
            ))}

            <li className="px-3">
              <LanguageSwitch />
            </li>
            <li className="px-3">
              <DownloadApp />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}