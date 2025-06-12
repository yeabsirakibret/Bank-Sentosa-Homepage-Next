'use client';

import { useState } from 'react';

import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="text-lg font-bold">Logo</div>

        {/* Hamburger */}
        <button
          className="md:hidden block text-white"
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
        </ul>
      </nav>
    </header>
  );
}
