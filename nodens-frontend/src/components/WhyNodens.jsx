import { GraduationCap, ShieldCheck, GitMerge, Star, Clock, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [GraduationCap, Clock, GitMerge, Star, ShieldCheck, Globe];

export default function WhyNodens() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-medical/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div data-aos="fade-right">
            <p className="text-gold-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">{t.why.sectionLabel}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.why.h2a}
              <br />
              <span className="text-gold-400">{t.why.h2b}</span> {t.why.h2c}
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className="text-white/70 text-lg leading-relaxed">
              {t.why.intro}{' '}
              <strong className="text-white">{t.why.introHighlight}</strong>
              {t.why.introRest}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={item.title}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/30 rounded-2xl p-7 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="w-12 h-12 bg-gold-500/20 group-hover:bg-gold-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl gradient-gold p-8 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-1">{t.why.ctaText}</h3>
            <p className="text-white/80 text-sm">{t.why.ctaSub}</p>
          </div>
          <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 btn-dark">
            {t.why.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
