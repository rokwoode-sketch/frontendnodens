import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import ProcedureMarquee from '../components/ProcedureMarquee';
import ClinicalMedia from '../components/ClinicalMedia';
import ClinicalFaq from '../components/ClinicalFaq';
import InstitutionalCta from '../components/InstitutionalCta';
import { SOCIAL_URLS } from '../data/socialLinks';
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
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <ProcedurePageHero pageKey="hair" image={siteImages.hairHero}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/contact" className="btn-outline">{p.cta2}</Link>
        </div>
        <div className="grid grid-cols-3 gap-px bg-white/15 border border-white/15 max-w-lg">
          {p.stats.map((label, i) => (
            <div key={label} className="inst-stat-cell">
              <div className="font-serif text-2xl font-medium text-gold-300">{p.statNums[i]}</div>
              <div className="text-white/65 text-[11px] tracking-wide mt-1.5">{label}</div>
            </div>
          ))}
        </div>
      </ProcedurePageHero>

      <ProcedureMarquee items={h.techniques} />

      <section className="inst-section-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14 md:mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-4">{p.sectionMethods}</p>
            <h2 className="section-title mb-4">{p.sectionTechniques}</h2>
            <p className="text-navy-500 text-base leading-[1.7]">{h.sectionIntro}</p>
          </div>

          <div className="space-y-20 md:space-y-24">
            {h.techniques.map((tech, i) => (
              <div key={tech.id} id={tech.id} className="scroll-mt-28">
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} data-aos="fade-up">
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="chip mb-4">{tech.tag}</div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-navy-950 mb-2 tracking-tight">{tech.title}</h3>
                    <p className="text-teal-medical text-sm font-semibold mb-5">{tech.subtitle}</p>
                    <p className="text-navy-600 leading-[1.7] mb-6">{tech.description}</p>

                    {tech.phases && (
                      <div className="border border-clinical-line bg-white mb-6">
                        {tech.phases.map((phase, pi) => (
                          <div key={phase.label} className={`flex gap-4 px-5 py-4 ${pi > 0 ? 'border-t border-clinical-line' : ''}`}>
                            <span className="font-serif text-gold-500 text-lg leading-none pt-0.5">{String(pi + 1).padStart(2, '0')}</span>
                            <div>
                              <div className="font-semibold text-navy-900 text-sm">{phase.label}</div>
                              <div className="text-navy-500 text-sm mt-1 leading-relaxed">{phase.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="inst-price-band mb-5">
                      <div className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-2">{h.priceLabel}</div>
                      <div className="font-serif text-3xl font-medium text-white tracking-tight">{tech.price}</div>
                    </div>

                    <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {h.requestQuote} <ArrowRight size={15} />
                    </a>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <ClinicalMedia src={techniqueImages[tech.id]} alt={tech.title}>
                      {tech.includes && (
                        <div className="inst-includes mt-5">
                          <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-4">{h.packageIncludes}</h4>
                          <ul className="space-y-2.5">
                            {tech.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                                <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </ClinicalMedia>
                  </div>
                </div>

                {tech.timeline && (
                  <div className="mt-10 bg-navy-950 border border-white/10 px-6 py-8 md:px-8" data-aos="fade-up">
                    <h4 className="font-serif text-xl font-medium text-white mb-6 tracking-tight">{p.sectionTimeline}</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                      {tech.timeline.map(({ period, event }) => (
                        <div key={period} className="bg-navy-950 px-4 py-5">
                          <div className="text-gold-400 font-semibold text-sm mb-2">{period}</div>
                          <div className="text-white/65 text-xs leading-relaxed">{event}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tech.faqs?.length > 0 && (
                  <div className="mt-8 border border-clinical-line bg-white" data-aos="fade-up">
                    {tech.faqs.map((faq, fi) => (
                      <details key={faq.q} className={fi > 0 ? 'border-t border-clinical-line group' : 'group'}>
                        <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                          {faq.q}
                          <ArrowRight size={14} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-5 pb-4 text-navy-500 text-sm leading-relaxed border-t border-clinical-line pt-3">{faq.a}</div>
                      </details>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClinicalFaq items={h.faqsGlobal} title={p.sectionFaq} />

      <InstitutionalCta
        title={p.ctaBottom}
        subtitle={h.ctaBottomDesc}
        primaryLabel={h.getQuote}
        secondaryLabel={h.sendMessage}
      />
    </>
  );
}
