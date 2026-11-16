import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const HERO_VIDEO = siteImages.homeHallwaySeamlessVideo;
const HERO_POSTER = siteImages.seoRegionalHub;
const FADE_MS = 900;

export default function Hero() {
  const { t } = useLanguage();
  const aRef = useRef(null);
  const bRef = useRef(null);
  const activeRef = useRef('a');
  const fadingRef = useRef(false);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      a.pause();
      b.pause();
      return undefined;
    }

    const show = (el) => {
      el.classList.add('is-live');
    };
    const hide = (el) => {
      el.classList.remove('is-live');
    };

    show(a);
    hide(b);
    a.playbackRate = 1;
    b.playbackRate = 1;

    const playSafe = (el) => {
      const p = el.play();
      if (p?.catch) p.catch(() => {});
    };

    playSafe(a);

    const crossfade = () => {
      if (fadingRef.current) return;
      fadingRef.current = true;

      const from = activeRef.current === 'a' ? a : b;
      const to = activeRef.current === 'a' ? b : a;

      to.currentTime = 0;
      playSafe(to);
      show(to);
      hide(from);

      window.setTimeout(() => {
        from.pause();
        activeRef.current = activeRef.current === 'a' ? 'b' : 'a';
        fadingRef.current = false;
      }, FADE_MS);
    };

    const onTimeUpdate = (el) => {
      if (!el.duration || Number.isNaN(el.duration)) return;
      // Start fade before hard cut
      if (el.duration - el.currentTime <= FADE_MS / 1000 + 0.05) {
        crossfade();
      }
    };

    const onA = () => {
      if (activeRef.current === 'a') onTimeUpdate(a);
    };
    const onB = () => {
      if (activeRef.current === 'b') onTimeUpdate(b);
    };

    a.addEventListener('timeupdate', onA);
    b.addEventListener('timeupdate', onB);

    return () => {
      a.removeEventListener('timeupdate', onA);
      b.removeEventListener('timeupdate', onB);
    };
  }, []);

  return (
    <section id="hero" className="hero-institutional">
      <div className="hero-institutional-media">
        <video
          ref={aRef}
          className="hero-loop-layer is-live"
          muted
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <video
          ref={bRef}
          className="hero-loop-layer"
          muted
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <img
          src={HERO_POSTER}
          alt="NodensCare partner hospital corridor — Istanbul"
          width={1600}
          height={1000}
          decoding="async"
          className="hero-loop-fallback"
        />
        <div className="hero-institutional-veil" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-xl md:max-w-2xl animate-slide-up hero-copy">
          <p className="font-serif text-[2.5rem] sm:text-5xl md:text-[3.5rem] text-white tracking-tight leading-none mb-5">
            NodensCare
          </p>
          <div className="hero-brand-rule" aria-hidden="true" />
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-gold-300 mb-6">
            {t.hero.badge}
          </p>
          <h1 className="font-serif text-[2.35rem] sm:text-5xl md:text-[3.5rem] font-medium text-white leading-[1.08] tracking-[-0.02em] mb-6">
            {t.hero.h1a}{' '}
            <em className="not-italic text-gold-300 font-medium">{t.hero.h1b}</em>{' '}
            {t.hero.h1c}
          </h1>
          <p className="text-white text-[1.05rem] md:text-lg leading-[1.7] mb-10 max-w-lg font-normal opacity-95">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={15} strokeWidth={2.25} />
            </Link>
            <Link to="/results" className="btn-outline border-white bg-black/20 backdrop-blur-[2px]">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
