import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FEATURED_SOCIALS } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

function FeaturedCard({ id, href, handle, title, desc, cta }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — ${handle}`}
      className="group flex flex-col gap-4 border border-white/15 bg-white/[0.03] p-6 hover:border-gold-400/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 border border-white/20 flex items-center justify-center text-gold-400">
          <SocialIcon name={id} size={20} />
        </div>
        <ArrowUpRight size={16} className="text-white/35 group-hover:text-gold-400 transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
      </div>
      <div>
        <div className="font-serif text-xl font-medium text-white mb-1 tracking-tight">{title}</div>
        <div className="text-gold-400 text-sm font-medium mb-2">{handle}</div>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
      </div>
      <span className="text-gold-400 text-sm font-semibold group-hover:underline">{cta}</span>
    </a>
  );
}

export function SocialFollowHome() {
  const { t } = useLanguage();
  const s = t.social;

  return (
    <section id="social" className="py-20 md:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 md:mb-14" data-aos="fade-up">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-gold-400 mb-4">{s.sectionLabel}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white tracking-tight leading-[1.15] mb-5">
            {s.h2a}{' '}
            <span className="text-gold-300">{s.h2b}</span>
          </h2>
          <p className="text-white/65 text-base leading-[1.7]">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-12" data-aos="fade-up">
          {FEATURED_SOCIALS.map(({ id, href, handle }) => (
            <FeaturedCard
              key={id}
              id={id}
              href={href}
              handle={handle}
              title={s.platforms[id].title}
              desc={s.platforms[id].desc}
              cta={s.platforms[id].cta}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12" data-aos="fade-up">
          {s.proofPoints.map(({ value, label }) => (
            <div key={label}>
              <div className="font-serif text-2xl font-medium text-gold-300 tabular-nums">{value}</div>
              <div className="text-white/50 text-[11px] mt-1 uppercase tracking-[0.16em]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialFollowContact() {
  const { t } = useLanguage();
  const s = t.social.contact;

  return (
    <div className="border border-clinical-line bg-navy-950 px-7 py-9 md:px-10 md:py-11" data-aos="fade-up">
      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-400 mb-3">{s.sectionLabel}</p>
      <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
        {s.title}{' '}
        <span className="text-gold-300">{s.titleAccent}</span>
      </h3>
      <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-md">{s.subtitle}</p>

      <div className="grid sm:grid-cols-2 gap-3 max-w-lg">
        {FEATURED_SOCIALS.map(({ id, href, handle }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.social.platforms[id].title} — ${handle}`}
            className="flex items-center gap-4 border border-white/15 px-4 py-3.5 hover:border-gold-400/40 transition-colors"
          >
            <div className="w-9 h-9 border border-white/20 flex items-center justify-center text-gold-400 flex-shrink-0">
              <SocialIcon name={id} size={18} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">{t.social.platforms[id].title}</div>
              <div className="text-gold-400 text-xs">{handle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
