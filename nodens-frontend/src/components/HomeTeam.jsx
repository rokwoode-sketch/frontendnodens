import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { doctors } from '../data/doctors';

export default function HomeTeam() {
  const { lang, t } = useLanguage();
  const d = t.doctors;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16" data-aos="fade-up">
          <div className="max-w-2xl">
            <p className="section-subtitle mb-5">{d.sectionLabel}</p>
            <h2 className="section-title mb-5">
              {d.h2a}{' '}
              <span className="text-teal-medical">{d.h2b}</span>
            </h2>
            <p className="text-navy-500 text-lg leading-[1.7]">{d.subtitle}</p>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.04em] text-teal-medical hover:text-teal-700 transition-colors flex-shrink-0 group"
          >
            {d.matchBtn}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 md:gap-6" data-aos="fade-up">
          {doctors.map((doc) => {
            const tr = doc.translations[lang] || doc.translations.en;
            return (
              <Link
                key={doc.slug}
                to={`/doctors/${doc.slug}`}
                className="group border border-clinical-line bg-white hover:border-navy-300 transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden bg-navy-100">
                  <img
                    src={doc.image}
                    alt={tr.name}
                    width={480}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-5 py-6 md:px-6 border-t border-clinical-line">
                  <h3 className="font-serif text-xl font-medium text-navy-950 mb-2 tracking-tight group-hover:text-teal-medical transition-colors">
                    {tr.name}
                  </h3>
                  <p className="text-navy-600 text-[14px] leading-snug mb-3">{tr.title}</p>
                  <p className="text-[11px] tracking-[0.14em] uppercase text-navy-400 font-semibold">
                    {tr.affiliation.split('·')[0].trim()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-clinical-line" data-aos="fade-up">
          <p className="text-navy-500 text-[15px] leading-[1.7] max-w-3xl">
            <span className="font-semibold text-navy-900">{d.networkTitle}.</span>{' '}
            {d.networkDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
