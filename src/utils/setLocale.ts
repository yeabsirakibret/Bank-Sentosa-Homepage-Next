export function setLocale(locale: string) {
  document.cookie = `locale=${locale}; path=/; max-age=31536000`; // 1 year
  window.location.reload(); // Reload to apply new locale
}