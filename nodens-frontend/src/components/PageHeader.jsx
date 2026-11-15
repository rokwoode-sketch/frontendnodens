import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PageHeader({ title, titleAccent, subtitle, breadcrumbs = [] }) {
  const { t } = useLanguage();

  return (
    <div className="pt-36 pb-12 md:pt-40 md:pb-14 bg-navy-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-[12px] mb-6 flex-wrap tracking-wide" aria-label="Breadcrumb">
            <Link to="/" className="text-white/55 hover:text-white transition-colors">{t.nav.home}</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <ChevronRight size={12} className="text-white/35" aria-hidden="true" />
                {crumb.to ? (
                  <Link to={crumb.to} className="text-white/55 hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gold-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="w-10 h-px bg-gold-400 mb-6" aria-hidden="true" />
        <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white tracking-tight leading-[1.15] mb-4">
          {title}
          {titleAccent && <> <span className="text-gold-300">{titleAccent}</span></>}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-base md:text-lg max-w-2xl leading-[1.7]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
