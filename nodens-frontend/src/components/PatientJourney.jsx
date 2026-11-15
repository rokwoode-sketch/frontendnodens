import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_URLS } from '../data/socialLinks';

export default function PatientJourney() {
  const { t } = useLanguage();
  const j = t.patientJourney;
  const whatsappHref = `${SOCIAL_URLS.whatsapp || 'https://wa.me/905546745516'}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <section className="journey-band">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-stretch">
          <div data-aos="fade-up" className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold-400 mb-5">
              {j.sectionLabel}
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.75rem] font-medium text-white leading-[1.15] tracking-tight mb-6">
              {j.h2a}{' '}
              <span className="text-gold-300">{j.h2b}</span>
            </h2>
            <p className="text-white/85 text-lg leading-[1.7] mb-12 max-w-lg">
              {j.subtitle}
            </p>

            <ol className="space-y-0">
              {j.steps.map((step, i) => (
                <li
                  key={step.title}
                  className={`grid grid-cols-[3.25rem_1fr] gap-5 py-6 ${i < j.steps.length - 1 ? 'border-b border-white/20' : ''}`}
                >
                  <span className="font-serif text-2xl text-gold-300 tabular-nums leading-none pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-[15px] leading-[1.7] max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="journey-cta-panel flex flex-col justify-center px-8 py-10 md:px-11 md:py-12"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="w-10 h-px bg-teal-medical mb-6" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-teal-medical mb-4">
              {j.ctaLabel}
            </p>
            <h3 className="font-serif text-[1.65rem] md:text-[1.85rem] font-medium text-navy-950 mb-4 tracking-tight leading-snug">
              {j.ctaTitle}
            </h3>
            <p className="text-navy-600 text-[15px] leading-[1.7] mb-9">
              {j.ctaDesc}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <MessageCircle size={16} />
                {j.ctaWhatsapp}
              </a>
              <Link to="/contact" className="btn-secondary justify-center">
                {j.ctaContact}
                <ArrowRight size={14} />
              </Link>
            </div>
            <p className="mt-7 text-navy-400 text-[13px] leading-relaxed">
              {j.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
