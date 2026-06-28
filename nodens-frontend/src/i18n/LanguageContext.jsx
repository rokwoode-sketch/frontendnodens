import { createContext, useContext, useState, useEffect } from 'react';

const langLoaders = {
  en: () => import('./en'),
  fr: () => import('./fr'),
  ar: () => import('./ar'),
  es: () => import('./es'),
};

const LanguageContext = createContext(null);

function detectInitialLang() {
  const saved = localStorage.getItem('nc_lang');
  if (saved && langLoaders[saved]) return saved;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  if (langLoaders[browser]) return browser;
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);
  const [t, setT] = useState(null);

  useEffect(() => {
    let cancelled = false;
    langLoaders[lang]().then((mod) => {
      if (!cancelled) setT(mod.default);
    });
    return () => { cancelled = true; };
  }, [lang]);

  useEffect(() => {
    if (!t) return;
    localStorage.setItem('nc_lang', lang);
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    if (t.dir === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [lang, t]);

  const changeLanguage = (code) => {
    if (langLoaders[code]) setLang(code);
  };

  if (!t) {
    return <div className="min-h-screen bg-navy-950" aria-busy="true" />;
  }

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage, languages: Object.keys(langLoaders) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
