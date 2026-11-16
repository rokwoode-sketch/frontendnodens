import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import ProcedureMarquee from '../components/ProcedureMarquee';
import ClinicalMedia from '../components/ClinicalMedia';
import InstitutionalCta from '../components/InstitutionalCta';
import { SOCIAL_URLS } from '../data/socialLinks';
import { siteImages } from '../data/siteImages';

const procedureImages = {
  rhinoplasty: siteImages.rhinoplastyProc,
  liposuction: siteImages.liposuction,
  bbl: siteImages.bblProc,
  'breast-aug': siteImages.breastAug,
  facelift: siteImages.facelift,
  blepharoplasty: siteImages.blepharoplasty,
  abdominoplasty: siteImages.abdominoplasty,
  'mommy-makeover': siteImages.mommyMakeover,
};

export default function PlasticSurgeryPage() {
  const { t } = useLanguage();
  const p = t.pages.plastic;
  const ps = t.procedureCards.plastic;
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <ProcedurePageHero pageKey="plastic" image={siteImages.plastic}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/doctors" className="btn-outline">{p.cta2}</Link>
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

      <ProcedureMarquee items={ps.procedures} />

      <section className="inst-section-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20 md:space-y-24">
          {ps.procedures.map((proc, i) => (
            <div key={proc.id} id={proc.id} className="scroll-mt-28" data-aos="fade-up">
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="chip mb-4">{proc.tag}</div>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy-950 mb-2 tracking-tight">{proc.title}</h2>
                  <p className="text-teal-medical text-sm font-semibold mb-4">{proc.subtitle}</p>
                  <p className="text-navy-600 leading-[1.7] mb-6">{proc.desc}</p>
                  <div className="inst-price-band mb-5">
                    <div className="text-gold-400 text-[11px] font-semibold uppercase tracking-[0.18em] mb-2">{ps.priceLabel}</div>
                    <div className="font-serif text-2xl md:text-3xl font-medium text-white tracking-tight">{proc.price}</div>
                  </div>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {ps.requestQuote} <ArrowRight size={15} />
                  </a>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <ClinicalMedia src={procedureImages[proc.id]} alt={proc.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-950 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-10 h-px bg-gold-400 mx-auto mb-6" aria-hidden="true" />
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">{ps.safetyTitle}</h2>
          <p className="text-white/65 text-base md:text-lg leading-[1.7] mb-10 max-w-3xl mx-auto">{ps.safetyDesc}</p>
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-3xl mx-auto">
            {ps.safetyPhases.map(({ title, desc }) => (
              <div key={title} className="bg-navy-950 px-5 py-6 text-center">
                <div className="text-gold-400 font-semibold text-sm mb-2 tracking-wide">{title}</div>
                <div className="text-white/60 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InstitutionalCta
        title={p.ctaBottom}
        subtitle={ps.ctaBottomDesc}
        primaryLabel={ps.sendPhotos}
        secondaryLabel={ps.contactForm}
      />
    </>
  );
}
