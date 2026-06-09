import { Link } from 'react-router-dom';
import { ArrowRight, Users, Image, BookOpen, Package, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const pageRoutes = ['/packages', '/doctors', '/results', '/blog', '/contact'];
const pageIcons = [Package, Users, Image, BookOpen, Phone];

export default function HomeExplore() {
  const { t } = useLanguage();
  const h = t.homeExplore;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="section-subtitle mb-4">{h.sectionLabel}</p>
          <h2 className="section-title mb-4">{h.h2}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{h.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {h.pages.map((page, i) => {
            const Icon = pageIcons[i];
            return (
              <Link
                key={pageRoutes[i]}
                to={pageRoutes[i]}
                className="group bg-white rounded-2xl p-7 border border-gray-100 card-hover shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="w-11 h-11 bg-gold-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon size={20} className="text-gold-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950 mb-2">{page.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{page.desc}</p>
                <span className="flex items-center gap-1.5 text-gold-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {page.label} <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
          <Link
            to="/about"
            className="group bg-navy-950 rounded-2xl p-7 border border-navy-800 card-hover sm:col-span-2 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">{h.aboutBadge}</p>
            <h3 className="font-serif text-lg font-bold text-white mb-2">{h.aboutTitle}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{h.aboutDesc}</p>
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold text-sm group-hover:gap-2.5 transition-all">
              {h.aboutLabel} <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
