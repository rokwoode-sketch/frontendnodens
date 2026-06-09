import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProcedurePageHero({ pageKey, image, children }) {
  const { t } = useLanguage();
  const p = t.pages[pageKey];

  return (
    <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
          <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
          <ChevronRight size={14} />
          <span className="text-white">{p.breadcrumb}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {p.badge && (
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">{p.badge}</span>
              </div>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {p.title} <span className="text-gold-400">{p.titleAccent}</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">{p.subtitle}</p>
            {children}
          </div>
          {image && (
            <div className="hidden lg:block">
              <img src={image} alt={p.breadcrumb} className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-white/10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
