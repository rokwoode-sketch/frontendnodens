import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-institutional">
      <div className="hero-institutional-media">
        <img
          src={siteImages.facilityHero}
          srcSet={siteImages.facilityHeroSrcSet}
          sizes="100vw"
          alt="NodensCare partner facility — JCI-accredited care in Istanbul"
          width={1600}
          height={1000}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-institutional-veil" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-xl md:max-w-2xl animate-slide-up">
          <p className="font-serif text-[2.5rem] sm:text-5xl md:text-[3.5rem] text-white tracking-tight leading-none mb-5">
            NodensCare
          </p>
          <div className="hero-brand-rule" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-300/95 mb-6">
            {t.hero.badge}
          </p>
          <h1 className="font-serif text-[2.35rem] sm:text-5xl md:text-[3.5rem] font-medium text-white leading-[1.08] tracking-[-0.02em] mb-6">
            {t.hero.h1a}{' '}
            <em className="not-italic text-gold-300 font-medium">{t.hero.h1b}</em>{' '}
            {t.hero.h1c}
          </h1>
          <p className="text-white/80 text-[1.05rem] md:text-lg leading-[1.7] mb-10 max-w-lg font-normal">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={15} strokeWidth={2.25} />
            </Link>
            <Link to="/results" className="btn-outline">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
