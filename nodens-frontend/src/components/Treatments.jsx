import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_URLS } from '../data/socialLinks';
import { siteImages } from '../data/siteImages';

const FILTER_KEYS = [null, 'plastic', 'dental', 'hair', 'complex'];

export default function Treatments() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const pc = t.procedureCards;

  const filtered = FILTER_KEYS[activeCategory]
    ? pc.packages.filter((item) => item.categoryKey === FILTER_KEYS[activeCategory])
    : pc.packages;

  const whatsappMessage = (name) =>
    `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(`${t.contact.whatsappPrefill} (${name})`)}`;

  return (
    <section id="treatments" className="inst-section-muted">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.treatments.sectionLabel}</p>
          <h2 className="section-title mb-5">
            {t.treatments.h2a}{' '}
            <span className="text-teal-medical">{t.treatments.h2b}</span>
          </h2>
          <p className="text-navy-500 leading-[1.7]">{t.treatments.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up">
          {t.treatments.filter.map((cat, i) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(i)}
              aria-pressed={activeCategory === i}
              className={`px-5 py-2 text-sm font-semibold transition-colors duration-200 border ${
                activeCategory === i
                  ? 'bg-navy-950 text-white border-navy-950'
                  : 'bg-white text-navy-600 border-clinical-line hover:border-teal-medical hover:text-teal-medical'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((item, i) => (
            <div key={item.id} className="group bg-white border border-clinical-line flex flex-col" data-aos="fade-up" data-aos-delay={i * 40}>
              <div className="relative h-52 overflow-hidden bg-navy-100">
                <img
                  src={siteImages[item.imageKey]}
                  alt={item.name}
                  width={688}
                  height={416}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-navy-950 text-white text-[10px] font-semibold tracking-[0.14em] uppercase px-3 py-1">
                    {pc.popular}
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/10 text-white text-[11px] font-semibold tracking-wide px-3 py-1 border border-white/25">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-medium text-navy-950 mb-1 tracking-tight">{item.name}</h3>
                <p className="text-teal-medical text-xs font-semibold mb-4">{item.subtitle}</p>
                <ul className="space-y-1.5 mb-5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-navy-600 text-sm">
                      <ChevronRight size={13} className="text-gold-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-clinical-line">
                  <div>
                    {item.priceEur === 'Custom' ? (
                      <span className="text-navy-950 font-semibold text-lg">{t.treatments.customQuote}</span>
                    ) : (
                      <>
                        <span className="text-navy-950 font-medium text-2xl font-serif">€{item.priceEur}</span>
                        <span className="text-navy-400 text-sm ml-2">/ ${item.priceUsd}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.link && (
                      <Link to={item.link} className="text-teal-medical hover:text-teal-700 text-xs font-semibold underline underline-offset-2 whitespace-nowrap">
                        {pc.learnMore}
                      </Link>
                    )}
                    <a
                      href={whatsappMessage(item.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.treatments.chatNow}: ${item.name}`}
                      className="inline-flex items-center gap-1.5 bg-navy-950 hover:bg-navy-800 text-white text-xs font-semibold px-4 py-2.5 transition-colors"
                    >
                      <MessageCircle size={13} />
                      {t.treatments.chatNow}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-navy-400 text-sm mt-10" data-aos="fade-up">
          {t.treatments.priceNote}{' '}
          <a href={SOCIAL_URLS.whatsapp} className="text-teal-medical hover:underline">{t.treatments.priceLinkText}</a>.
        </p>
      </div>
    </section>
  );
}
