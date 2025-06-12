"use client";

import { setLocale } from '../utils/setLocale';

export default function LanguageSwitch() {
  return (
    <div>
      <button onClick={() => setLocale('id')}>ID</button>
      <button onClick={() => setLocale('en')}>EN</button>
    </div>
  );
}