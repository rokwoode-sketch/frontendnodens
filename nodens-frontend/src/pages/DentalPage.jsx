import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import ProcedureMarquee from '../components/ProcedureMarquee';
import ClinicalMedia from '../components/ClinicalMedia';
import InstitutionalCta from '../components/InstitutionalCta';
import { SOCIAL_URLS } from '../data/socialLinks';
import { siteImages } from '../data/siteImages';

const procedureImages = {
  'hollywood-smile': siteImages.hollywoodSmile,
  implants: siteImages.dentalImplants,
  zirconium: siteImages.zirconium,
  'all-on-6': siteImages.allOn6,
};

export default function DentalPage() {
  const { t } = useLanguage();
  const p = t.pages.dental;
  const d = t.procedureCards.dental;
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <ProcedurePageHero pageKey="dental" image={siteImages.dental}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/contact" className="btn-outline">{p.cta2}</Link>
        </div>
        <div className="grid grid-cols-3 gap-px bg-white/15 border border-white/15 max-w-lg">
          {p.stats.map((label, i) => (
            <div key={label} className="inst-stat-cell">
              <div className="font-serif text-xl md:text-2xl font-medium text-gold-300">{p.statNums[i]}</div>
              <div className="text-white/65 text-[11px] tracking-wide mt-1.5">{label}</div>
            </div>
          ))}
        </div>
      </ProcedurePageHero>

      <ProcedureMarquee items={d.procedures} />

      <section className="inst-section-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14 md:mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-4">{d.sectionLabel}</p>
            <h2 className="section-title">
              {d.sectionH2} <span className="text-teal-medical">{d.sectionH2Accent}</span>
            </h2>
          </div>

          <div className="space-y-20 md:space-y-24">
            {d.procedures.map((proc, i) => (
              <div key={proc.id} id={proc.id} className="scroll-mt-28" data-aos="fade-up">
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="chip mb-4">{proc.tag}</div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-navy-950 mb-2 tracking-tight">{proc.title}</h3>
                    <p className="text-teal-medical text-sm font-semibold mb-4">{proc.subtitle}</p>
                    <p className="text-navy-600 leading-[1.7] mb-6">{proc.description}</p>

                    <div className="inst-price-band mb-5">
                      <div className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-2">{d.priceLabel}</div>
                      <div className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight">{proc.price}</div>
                    </div>

                    {proc.faqs?.length > 0 && (
                      <div className="border border-clinical-line bg-white mb-5">
                        {proc.faqs.map((faq, fi) => (
                          <details key={faq.q} className={fi > 0 ? 'border-t border-clinical-line group' : 'group'}>
                            <summary className="flex items-center justify-between gap-4 px-4 py-4 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                              {faq.q}
                              <ArrowRight size={14} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                            </summary>
                            <div className="px-4 pb-4 text-navy-500 text-sm leading-relaxed border-t border-clinical-line pt-3">{faq.a}</div>
                          </details>
                        ))}
                      </div>
                    )}

                    <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {d.requestQuote} <ArrowRight size={15} />
                    </a>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <ClinicalMedia src={procedureImages[proc.id]} alt={proc.title}>
                      <div className="inst-includes mt-5">
                        <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-4">{d.packageIncludes}</h4>
                        <ul className="space-y-2.5">
                          {proc.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                              <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ClinicalMedia>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionalCta
        title={p.ctaBottom}
        subtitle={d.ctaBottomDesc}
        primaryLabel={d.sendPhotos}
        secondaryLabel={d.contactUs}
      />
    </>
  );
}
