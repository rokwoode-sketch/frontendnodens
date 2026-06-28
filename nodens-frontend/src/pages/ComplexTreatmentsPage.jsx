import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowRight, Shield, GraduationCap, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import { siteImages } from '../data/siteImages';

const treatmentImages = {
  cancer: siteImages.cancerTreatment,
  transplant: siteImages.transplantTreatment,
  ivf: siteImages.ivfTreatment,
};

const credentialIcons = [GraduationCap, Shield, CheckCircle];

export default function ComplexTreatmentsPage() {
  const { t } = useLanguage();
  const p = t.pages.complex;
  const c = t.procedureCards.complex;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <ProcedurePageHero pageKey="complex" image={siteImages.complex}>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/905546745516?text=Complex%20treatment%20inquiry" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/doctors" className="btn-outline">{p.cta2}</Link>
        </div>
      </ProcedurePageHero>

      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>{c.medicalNotice}</strong> {c.medicalDisclaimer}
          </p>
        </div>
      </div>

      <section className="bg-navy-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {c.credentials.map(({ title, desc }, i) => {
              const Icon = credentialIcons[i];
              return (
                <div key={title} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                    <Icon size={22} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{title}</div>
                    <div className="text-white/50 text-xs mt-1">{desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {c.treatments.map((treatment, i) => (
        <section key={treatment.id} id={treatment.id} className={`py-24 scroll-mt-20 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start" data-aos="fade-up">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{treatment.tag}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-950 mb-3">{treatment.title}</h2>

                <div className="flex items-center gap-3 bg-navy-50 rounded-xl p-4 mb-6 border border-navy-100">
                  <div className="w-10 h-10 bg-navy-950 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-navy-950 font-bold text-sm">{c.leadSpecialist}</div>
                    <div className="text-gold-600 text-xs font-medium">{treatment.leadDoctor}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{treatment.overview}</p>

                <h3 className="font-bold text-navy-950 mb-4">{c.treatmentOptions}</h3>
                <div className="space-y-4 mb-8">
                  {treatment.options.map((opt) => (
                    <div key={opt.name} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <div className="font-semibold text-navy-900 text-sm mb-1">{opt.name}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{opt.desc}</div>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {c.requestAssessment} <ArrowRight size={15} />
                </a>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <img src={treatmentImages[treatment.id]} alt={treatment.title} width={700} height={500} loading="lazy" decoding="async" className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover object-top" />

                <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="font-bold text-navy-950 mb-4 text-sm">{c.whyIstanbul} {treatment.tag}:</h4>
                  <ul className="space-y-2.5">
                    {treatment.whyTurkey.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <CheckCircle size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 space-y-2">
                  {treatment.faqs.map(({ q, a }) => (
                    <details key={q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                        {q}<ChevronRight size={14} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <div className="px-4 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-10 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-700">{c.medicalNotice}</strong> {c.closingDisclaimer}
          </p>
        </div>
      </section>

      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">{c.ctaTitle}</h2>
          <p className="text-white/70 text-lg mb-8">{c.ctaDesc}</p>
          <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            {c.contactCoordinator} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
