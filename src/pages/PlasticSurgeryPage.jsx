import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import { siteImages } from '../data/siteImages';

const procedureImages = {
  rhinoplasty: siteImages.rhinoplasty,
  liposuction: siteImages.bbl,
  bbl: siteImages.bbl,
  'breast-aug': siteImages.breastAug,
  facelift: siteImages.facelift,
  blepharoplasty: siteImages.facelift,
  abdominoplasty: siteImages.abdominoplasty,
  'mommy-makeover': siteImages.breastAug,
};

export default function PlasticSurgeryPage() {
  const { t } = useLanguage();
  const p = t.pages.plastic;
  const ps = t.procedureCards.plastic;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <ProcedurePageHero pageKey="plastic" image={siteImages.plastic}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/doctors" className="btn-outline">{p.cta2}</Link>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          {p.stats.map((label, i) => (
            <div key={label} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
              <div className="font-serif text-2xl font-bold text-gold-400">{p.statNums[i]}</div>
              <div className="text-white/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </ProcedurePageHero>

      <section className="bg-white border-b border-gray-100 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0.5 overflow-x-auto py-3 scrollbar-none">
            {ps.procedures.map((proc) => (
              <a key={proc.id} href={`#${proc.id}`} className="flex-shrink-0 text-xs font-semibold text-gray-600 hover:text-gold-600 px-3 py-1.5 rounded-full hover:bg-gold-50 transition-colors whitespace-nowrap">
                {proc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {ps.procedures.map((proc, i) => (
            <div key={proc.id} id={proc.id} className="scroll-mt-28" data-aos="fade-up">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{proc.tag}</div>
                  <h2 className="font-serif text-3xl font-bold text-navy-950 mb-2">{proc.title}</h2>
                  <p className="text-gold-600 text-sm font-semibold mb-4">{proc.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{proc.desc}</p>
                  <div className="bg-navy-950 rounded-2xl p-5 mb-5">
                    <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">{ps.priceLabel}</div>
                    <div className="font-serif text-2xl font-bold text-white">{proc.price}</div>
                  </div>
                  <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {ps.requestQuote} <ArrowRight size={15} />
                  </a>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img src={procedureImages[proc.id]} alt={proc.title} className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">{ps.safetyTitle}</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">{ps.safetyDesc}</p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {ps.safetyPhases.map(({ title, desc }) => (
              <div key={title} className="bg-white/10 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-gold-400 font-bold text-sm mb-2">{title}</div>
                <div className="text-white/60 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy-950 mb-4">{p.ctaBottom}</h2>
          <p className="text-gray-500 text-lg mb-8">{ps.ctaBottomDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              {ps.sendPhotos} <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-dark text-base px-8 py-4">{ps.contactForm}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
