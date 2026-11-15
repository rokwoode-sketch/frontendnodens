import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const images = [siteImages.hairFue, siteImages.dental, siteImages.rhinoplastyProc, siteImages.transplantTreatment];
const pageLinks = ['/hair-transplant', '/dental', '/plastic-surgery', '/complex-treatments'];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16 md:mb-20" data-aos="fade-up">
          <p className="section-subtitle mb-5">{t.services.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.services.h2a}{' '}
            <span className="text-teal-medical">{t.services.h2b}</span>
          </h2>
          <p className="text-navy-500 text-lg leading-[1.7]">{t.services.subtitle}</p>
        </div>

        <div className="space-y-0 border-t border-clinical-line" data-aos="fade-up">
          {t.services.items.map((service, i) => (
            <article
              key={service.title}
              className={`pathway-row ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="relative aspect-[5/4] md:aspect-auto md:min-h-[340px] lg:min-h-[400px] overflow-hidden bg-navy-100">
                <img
                  src={images[i]}
                  alt={service.title}
                  width={800}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="pathway-img"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 lg:px-16 bg-white">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-navy-400 mb-4">
                  0{i + 1} — {service.subtitle}
                </p>
                <h3 className="font-serif text-[1.75rem] md:text-[2.15rem] font-medium text-navy-950 mb-5 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-navy-500 text-[15px] md:text-base leading-[1.75] mb-7 max-w-md">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-9 text-[13px] text-navy-700">
                  {service.procedures.map((proc) => (
                    <li key={proc} className="flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-teal-medical flex-shrink-0" aria-hidden="true" />
                      {proc}
                    </li>
                  ))}
                </ul>
                <Link
                  to={pageLinks[i]}
                  className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.04em] text-teal-medical hover:text-teal-700 transition-colors group"
                >
                  {t.services.explore}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
