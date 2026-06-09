import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function PageHeader({ title, titleAccent, subtitle, breadcrumbs = [] }) {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-10 gradient-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {breadcrumbs.length > 0 && (
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">{t.nav.home}</Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
          {titleAccent && <> <span className="text-gold-400">{titleAccent}</span></>}
        </h1>
        {subtitle && <p className="text-white/70 text-lg max-w-3xl leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
