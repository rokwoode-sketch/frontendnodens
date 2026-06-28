import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const numbers = [5000, 15, 100, 50];
const suffixes = ['+', '+', '%', '+'];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {t.stats.map(({ label, desc }, i) => (
            <div key={label} className="bg-navy-950 px-8 py-10 text-center hover:bg-navy-800 transition-colors duration-300 group">
              <div className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp target={numbers[i]} suffix={suffixes[i]} active={active} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{label}</div>
              <div className="text-white/40 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
