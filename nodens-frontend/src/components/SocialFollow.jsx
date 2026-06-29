import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FEATURED_SOCIALS } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

function FeaturedCard({ id, href, handle, color, title, desc, cta }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — ${handle}`}
      className={`group flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-200 ${color}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 bg-gold-500/20 border border-gold-500/30 rounded-xl flex items-center justify-center text-gold-400">
          <SocialIcon name={id} size={22} />
        </div>
        <ArrowUpRight size={18} className="text-white/40 group-hover:text-gold-400 transition-colors flex-shrink-0 mt-1" aria-hidden="true" />
      </div>
      <div>
        <div className="font-serif text-xl font-bold text-white mb-1">{title}</div>
        <div className="text-gold-400 text-sm font-medium mb-2">{handle}</div>
        <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
      </div>
      <span className="text-gold-400 text-sm font-semibold group-hover:underline">{cta}</span>
    </a>
  );
}

export function SocialFollowHome() {
  const { t } = useLanguage();
  const s = t.social;

  return (
    <section id="social" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="section-subtitle mb-4 text-gold-400">{s.sectionLabel}</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            {s.h2a}
            <br />
            <span className="text-gold-400">{s.h2b}</span>
          </h2>
          <p className="text-white/65 max-w-2xl mx-auto">{s.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12" data-aos="fade-up">
          {FEATURED_SOCIALS.map(({ id, href, handle, color }) => (
            <FeaturedCard
              key={id}
              id={id}
              href={href}
              handle={handle}
              color={color}
              title={s.platforms[id].title}
              desc={s.platforms[id].desc}
              cta={s.platforms[id].cta}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10" data-aos="fade-up">
          {s.proofPoints.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-2xl font-bold text-gold-400">{value}</div>
              <div className="text-white/60 text-xs mt-1 uppercase tracking-wider">{label}</div>
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
    <div className="max-w-2xl mx-auto mt-14" data-aos="fade-up">
      <div className="bg-navy-950 rounded-3xl p-8 md:p-10 text-center">
        <p className="text-gold-400 text-xs font-semibold tracking-[0.15em] uppercase mb-3">{s.sectionLabel}</p>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
          {s.title}
          <span className="text-gold-400"> {s.titleAccent}</span>
        </h3>
        <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-md mx-auto">{s.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {FEATURED_SOCIALS.map(({ id, href, handle, color }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.social.platforms[id].title} — ${handle}`}
              className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 transition-all duration-200 ${color}`}
            >
              <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center text-gold-400 flex-shrink-0">
                <SocialIcon name={id} size={20} />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">{t.social.platforms[id].title}</div>
                <div className="text-gold-400 text-xs">{handle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
