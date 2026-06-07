import { createContext, useContext, useState, useEffect } from 'react';
import en from './en';
import fr from './fr';
import ar from './ar';
import es from './es';

const translations = { en, fr, ar, es };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('nc_lang');
    if (saved && translations[saved]) return saved;
    const browser = navigator.language?.slice(0, 2).toLowerCase();
    if (translations[browser]) return browser;
    return 'en';
  });

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem('nc_lang', lang);
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    // RTL body class for Tailwind
    if (t.dir === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [lang, t]);

  const changeLanguage = (code) => {
    if (translations[code]) setLang(code);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage, languages: Object.keys(translations) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
