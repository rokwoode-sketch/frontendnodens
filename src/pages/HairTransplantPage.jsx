import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import { siteImages } from '../data/siteImages';

const techniqueImages = {
  fue: siteImages.hairFue,
  dhi: siteImages.hairDhi,
  prp: siteImages.hairPrp,
  exosome: siteImages.hairExosome,
};

export default function HairTransplantPage() {
  const { t } = useLanguage();
  const p = t.pages.hair;
  const h = t.procedureCards.hair;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <ProcedurePageHero pageKey="hair" image={siteImages.hairHero}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="https://wa.me/905546745516?text=I%27d%20like%20a%20free%20hair%20analysis" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/contact" className="btn-outline">{p.cta2}</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {p.stats.map((label, i) => (
            <div key={label} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <div className="font-serif text-2xl font-bold text-gold-400">{p.statNums[i]}</div>
              <div className="text-white/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </ProcedurePageHero>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
          {h.trustBar.map((item) => (
            <span key={item} className="font-medium text-navy-800">{item}</span>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-3">{p.sectionMethods}</p>
            <h2 className="section-title mb-4">{p.sectionTechniques}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{h.sectionIntro}</p>
          </div>

          <div className="space-y-20">
            {h.techniques.map((tech, i) => (
              <div key={tech.id} id={tech.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} data-aos="fade-up">
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{tech.tag}</div>
                    <h3 className="font-serif text-3xl font-bold text-navy-950 mb-2">{tech.title}</h3>
                    <p className="text-gold-600 text-sm font-semibold mb-5">{tech.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{tech.description}</p>

                    {tech.phases && (
                      <div className="space-y-4 mb-6">
                        {tech.phases.map((phase) => (
                          <div key={phase.label} className="flex gap-3">
                            <div className="w-5 h-5 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle size={12} className="text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-navy-900 text-sm">{phase.label}</div>
                              <div className="text-gray-500 text-sm mt-0.5">{phase.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bg-navy-950 rounded-2xl p-5 mb-5">
                      <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">{h.priceLabel}</div>
                      <div className="font-serif text-3xl font-bold text-white">{tech.price}</div>
                    </div>

                    <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {h.requestQuote} <ArrowRight size={15} />
                    </a>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img src={techniqueImages[tech.id]} alt={tech.title} className="rounded-2xl shadow-xl w-full h-72 lg:h-auto lg:aspect-[4/3] object-cover" />
                    {tech.includes && (
                      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <h4 className="font-bold text-navy-950 mb-4 text-sm">{h.packageIncludes}</h4>
                        <ul className="space-y-2">
                          {tech.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {tech.timeline && (
                  <div className="mt-10 bg-navy-950 rounded-2xl p-8" data-aos="fade-up">
                    <h4 className="font-serif text-xl font-bold text-white mb-6">{p.sectionTimeline}</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tech.timeline.map(({ period, event }, j) => (
                        <div key={period} className="relative">
                          {j < tech.timeline.length - 1 && <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gold-500/30 z-0" />}
                          <div className="bg-white/10 rounded-xl p-4 border border-white/10 relative z-10">
                            <div className="text-gold-400 font-bold text-sm mb-1">{period}</div>
                            <div className="text-white/70 text-xs leading-relaxed">{event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tech.faqs?.length > 0 && (
                  <div className="mt-8 space-y-3" data-aos="fade-up">
                    {tech.faqs.map(({ q, a }) => (
                      <details key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                          {q}<ChevronRight size={16} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-navy-950 mb-10 text-center">{p.sectionFaq}</h2>
          <div className="space-y-3">
            {h.faqsGlobal.map(({ q, a }) => (
              <details key={q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                  {q}<ChevronRight size={16} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{p.ctaBottom}</h2>
          <p className="text-white/70 text-lg mb-8">{h.ctaBottomDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516?text=Free%20Hair%20Analysis" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              {h.getQuote} <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">{h.sendMessage}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
