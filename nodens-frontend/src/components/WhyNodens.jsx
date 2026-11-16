import { GraduationCap, ShieldCheck, GitMerge, Star, Clock, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_URLS } from '../data/socialLinks';

const icons = [GraduationCap, Clock, GitMerge, Star, ShieldCheck, Globe];

export default function WhyNodens() {
  const { t } = useLanguage();
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <section id="why" className="py-20 md:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-end mb-14 md:mb-16">
          <div data-aos="fade-up">
            <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold-400 mb-4">
              {t.why.sectionLabel}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-[1.15] tracking-tight">
              {t.why.h2a}{' '}
              <span className="text-gold-300">{t.why.h2b}</span> {t.why.h2c}
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="60">
            <p className="text-white/70 text-base md:text-lg leading-[1.7]">
              {t.why.intro}{' '}
              <strong className="text-white font-semibold">{t.why.introHighlight}</strong>
              {t.why.introRest}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="bg-navy-950 p-7 md:p-8"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <Icon size={20} className="text-gold-400 mb-5" aria-hidden="true" />
                <h3 className="font-serif text-lg font-medium text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 md:mt-14 border border-white/15 px-7 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-2 tracking-tight">
              {t.why.ctaText}
            </h3>
            <p className="text-white/65 text-sm">{t.why.ctaSub}</p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            {t.why.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
