import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowRight, Shield, GraduationCap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import ClinicalMedia from '../components/ClinicalMedia';
import InstitutionalCta from '../components/InstitutionalCta';
import { SOCIAL_URLS } from '../data/socialLinks';
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
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <ProcedurePageHero pageKey="complex" image={siteImages.complex}>
        <div className="flex flex-wrap gap-4">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {p.cta1} <ArrowRight size={16} />
          </a>
          <Link to="/doctors" className="btn-outline">{p.cta2}</Link>
        </div>
      </ProcedurePageHero>

      <div className="bg-navy-50 border-y border-clinical-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-teal-medical flex-shrink-0 mt-0.5" />
          <p className="text-navy-700 text-sm leading-relaxed">
            <strong className="text-navy-950">{c.medicalNotice}</strong> {c.medicalDisclaimer}
          </p>
        </div>
      </div>

      <section className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {c.credentials.map(({ title, desc }, i) => {
              const Icon = credentialIcons[i];
              return (
                <div key={title} className="bg-navy-950 px-6 py-8 text-center">
                  <Icon size={22} className="text-gold-400 mx-auto mb-4" aria-hidden="true" />
                  <div className="text-white font-semibold text-sm mb-1.5">{title}</div>
                  <div className="text-white/55 text-xs leading-relaxed">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {c.treatments.map((treatment, i) => (
        <section
          key={treatment.id}
          id={treatment.id}
          className={`inst-section scroll-mt-20 ${i % 2 === 0 ? 'bg-navy-50 border-y border-clinical-line' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start" data-aos="fade-up">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="chip mb-4">{treatment.tag}</div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy-950 mb-4 tracking-tight">{treatment.title}</h2>

                <div className="flex items-center gap-4 border border-clinical-line bg-white px-4 py-4 mb-6">
                  <div className="w-10 h-10 bg-navy-950 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-navy-950 font-semibold text-sm">{c.leadSpecialist}</div>
                    <div className="text-teal-medical text-xs font-medium mt-0.5">{treatment.leadDoctor}</div>
                  </div>
                </div>

                <p className="text-navy-600 leading-[1.7] mb-6">{treatment.overview}</p>

                <h3 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-4">{c.treatmentOptions}</h3>
                <div className="border border-clinical-line bg-white mb-8">
                  {treatment.options.map((opt, oi) => (
                    <div key={opt.name} className={`px-5 py-4 ${oi > 0 ? 'border-t border-clinical-line' : ''}`}>
                      <div className="font-semibold text-navy-900 text-sm mb-1">{opt.name}</div>
                      <div className="text-navy-500 text-sm leading-relaxed">{opt.desc}</div>
                    </div>
                  ))}
                </div>

                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {c.requestAssessment} <ArrowRight size={15} />
                </a>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <ClinicalMedia src={treatmentImages[treatment.id]} alt={treatment.title} aspectClass="aspect-[5/4]">
                  <div className="inst-includes mt-5">
                    <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-4">
                      {c.whyIstanbul} {treatment.tag}
                    </h4>
                    <ul className="space-y-2.5">
                      {treatment.whyTurkey.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-navy-600 text-sm leading-relaxed">
                          <CheckCircle size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ClinicalMedia>

                {treatment.faqs?.length > 0 && (
                  <div className="mt-5 border border-clinical-line bg-white">
                    {treatment.faqs.map((faq, fi) => (
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
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-10 bg-navy-50 border-t border-clinical-line">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-navy-500 text-xs leading-relaxed">
            <strong className="text-navy-700">{c.medicalNotice}</strong> {c.closingDisclaimer}
          </p>
        </div>
      </section>

      <InstitutionalCta
        title={c.ctaTitle}
        subtitle={c.ctaDesc}
        primaryLabel={c.contactCoordinator}
      />
    </>
  );
}
