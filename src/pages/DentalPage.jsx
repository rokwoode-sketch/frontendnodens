import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
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

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <ProcedurePageHero pageKey="dental" image={siteImages.dental}>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="https://wa.me/905546745516?text=Dental%20consultation%20inquiry" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/contact" className="btn-outline">{p.cta2}</Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {p.stats.map((label, i) => (
            <div key={label} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
              <div className="font-serif text-xl font-bold text-gold-400">{p.statNums[i]}</div>
              <div className="text-white/70 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </ProcedurePageHero>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap justify-center gap-8 text-sm font-medium text-navy-800">
          {p.trustBar.map((i) => <span key={i}>✓ {i}</span>)}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-3">{d.sectionLabel}</p>
            <h2 className="section-title mb-4">{d.sectionH2} <span className="text-gold-600">{d.sectionH2Accent}</span></h2>
          </div>

          <div className="space-y-20">
            {d.procedures.map((proc, i) => (
              <div key={proc.id} id={proc.id} className="scroll-mt-24" data-aos="fade-up">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{proc.tag}</div>
                    <h3 className="font-serif text-3xl font-bold text-navy-950 mb-2">{proc.title}</h3>
                    <p className="text-gold-600 text-sm font-semibold mb-4">{proc.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{proc.description}</p>
                    <div className="bg-navy-950 rounded-2xl p-5 mb-5">
                      <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">{d.priceLabel}</div>
                      <div className="font-serif text-2xl font-bold text-white">{proc.price}</div>
                    </div>
                    {proc.faqs.map(({ q, a }) => (
                      <details key={q} className="bg-gray-50 rounded-xl border border-gray-200 mb-2 group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                          {q}<ChevronRight size={15} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="px-4 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
                      </details>
                    ))}
                    <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">
                      {d.requestQuote} <ArrowRight size={15} />
                    </a>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img src={procedureImages[proc.id]} alt={proc.title} className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
                    <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                      <h4 className="font-bold text-navy-950 mb-4 text-sm">{d.packageIncludes}</h4>
                      <ul className="space-y-2">
                        {proc.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{p.ctaBottom}</h2>
          <p className="text-white/70 text-lg mb-8">{d.ctaBottomDesc}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516?text=Dental%20treatment%20inquiry" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              {d.sendPhotos} <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">{d.contactUs}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
