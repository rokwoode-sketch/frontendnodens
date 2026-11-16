import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_URLS } from '../data/socialLinks';

export default function InstitutionalCta({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  secondaryTo = '/contact',
  whatsappText,
}) {
  const { t } = useLanguage();
  const prefill = whatsappText || t.contact.whatsappPrefill;
  const href = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(prefill)}`;

  return (
    <section className="journey-band">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-stretch">
          <div data-aos="fade-up" className="flex flex-col justify-center">
            <div className="w-10 h-px bg-gold-400 mb-6" aria-hidden="true" />
            <h2 className="font-serif text-[1.85rem] md:text-[2.35rem] font-medium text-white leading-[1.15] tracking-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-white/75 text-base md:text-lg leading-[1.7] max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div
            className="journey-cta-panel flex flex-col justify-center px-7 py-9 md:px-10 md:py-11"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-teal-medical mb-5">
              {t.patientJourney.ctaLabel}
            </p>
            <div className="flex flex-col gap-3">
              <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                <MessageCircle size={16} aria-hidden="true" />
                {primaryLabel || t.patientJourney.ctaWhatsapp}
              </a>
              {secondaryLabel && (
                <Link to={secondaryTo} className="btn-secondary justify-center">
                  {secondaryLabel}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </div>
            <p className="mt-6 text-navy-400 text-[13px] leading-relaxed">
              {t.patientJourney.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
