'use client';

import { useState } from 'react';

import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-black p-4 shadow-lg shadow-yellow-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">

        <div className="text-lg font-bold mx-4">
          <img src="/sentosa_full_logo.png" alt="Sentosa Bank Logo" style={{ height: '50px' }} />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden block text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <ul
          className={`w-full md:w-auto md:flex items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <li><Link href="/">{/* home */}Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><LanguageSwitch /></li>
          <li>
            <Link
              href="#"
              className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-yellow-300"
            >
              <img src="/sentosa_logo_only.png" alt="icon" className="w-5 h-5" />
              
              <span>Download neobank</span>
            </Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}
