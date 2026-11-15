import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProcedurePageHero({ pageKey, image, children }) {
  const { t } = useLanguage();
  const p = t.pages[pageKey];

  return (
    <section className="relative pt-36 pb-16 md:pt-40 md:pb-20 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <nav className="flex items-center gap-2 text-[12px] mb-8 tracking-wide" aria-label="Breadcrumb">
          <Link to="/" className="text-white/55 hover:text-white transition-colors">{t.nav.home}</Link>
          <ChevronRight size={12} className="text-white/35" aria-hidden="true" />
          <span className="text-gold-300">{p.breadcrumb}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            {p.badge && (
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold-400 mb-5">
                {p.badge}
              </p>
            )}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[3rem] font-medium text-white leading-[1.12] tracking-tight mb-6">
              {p.title}{' '}
              <span className="text-gold-300">{p.titleAccent}</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-[1.7] mb-8 max-w-xl">
              {p.subtitle}
            </p>
            {children}
          </div>

          {image && (
            <div className="hidden lg:block relative aspect-[5/4] overflow-hidden bg-navy-800 border border-white/10">
              <img
                src={image}
                alt={p.breadcrumb}
                width={1200}
                height={960}
                loading="eager"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
