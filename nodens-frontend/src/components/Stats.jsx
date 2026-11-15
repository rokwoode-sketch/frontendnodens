import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const metrics = [
  { target: 5000, suffix: '+' },
  { target: 15, suffix: '+' },
  { target: 100, suffix: '%' },
  { target: 50, suffix: '+' },
];

function CountUp({ target, suffix, active, duration = 1800 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let frame;
    const tick = (ts) => {
      if (start == null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);
  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.35 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-50 border-b border-clinical-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {t.stats.map(({ label, desc }, i) => (
            <div
              key={label}
              className={`px-5 py-10 md:px-8 md:py-12 ${
                i > 0 ? 'lg:border-l lg:border-clinical-line' : ''
              } ${i % 2 === 1 ? 'border-l border-clinical-line' : ''} ${
                i > 1 ? 'border-t border-clinical-line lg:border-t-0' : ''
              }`}
            >
              <div className="font-serif text-[2rem] md:text-[2.5rem] font-medium text-navy-950 mb-2.5 tabular-nums tracking-tight leading-none">
                <CountUp
                  target={metrics[i].target}
                  suffix={metrics[i].suffix}
                  active={active}
                  duration={1600 + i * 150}
                />
              </div>
              <div className="w-6 h-px bg-teal-medical/70 mb-3" aria-hidden="true" />
              <div className="text-navy-900 text-[13px] font-semibold tracking-[0.02em] mb-1">
                {label}
              </div>
              <div className="text-navy-500 text-[13px] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
