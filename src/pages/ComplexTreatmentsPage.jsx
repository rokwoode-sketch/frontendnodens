import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowRight, Shield, GraduationCap } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import { siteImages } from '../data/siteImages';

const MEDICAL_DISCLAIMER = 'The information on this page is provided for educational purposes only and is not intended as medical advice. Treatment options, procedures, and outcomes vary based on individual patient circumstances. All clinical decisions are made by qualified medical specialists following thorough patient assessment. NodensCare acts as a medical consultancy and does not practice medicine.';

const treatments = [
  {
    id: 'cancer',
    tag: 'Oncology',
    title: 'Advanced Cancer Treatment in Turkey',
    leadDoctor: 'Prof. Dr. Senem Karabulut — Medical Oncology',
    image: siteImages.complex,
    overview: 'Our partner oncology centers in Istanbul offer multi-disciplinary cancer care coordinated by a Tumor Board — a panel of specialists including medical oncologists, radiation oncologists, surgeons, and radiologists who collectively review and plan each patient\'s treatment. Every case is unique; therefore, genetic and molecular analysis is conducted before treatment begins.',
    options: [
      { name: 'Immunotherapy & Targeted Smart Drugs', desc: 'Immunotherapy stimulates your immune system to recognize and destroy cancer cells. Targeted therapy focuses on specific molecular structures of tumors, resulting in fewer side effects and higher success rates than traditional chemotherapy in qualifying cases.' },
      { name: 'Precision Radiotherapy', desc: 'Using CyberKnife and TrueBeam STx technology, we deliver sub-millimeter radiation precision — destroying cancer DNA while protecting healthy surrounding tissue. Led by Prof. Dr. Esra Kaytan Sağlam, former Faculty Dean and internationally recognized radiotherapy expert.' },
      { name: 'Surgical Oncology', desc: 'When surgery is indicated, our surgeons prioritize robotic-assisted and laparoscopic techniques for greater precision and faster recovery. Specialties include colorectal, gynecological, urological, and pediatric oncology.' },
      { name: 'Nuclear Medicine & Advanced Diagnostics', desc: 'PET-CT and SPECT-CT for accurate staging. Lutetium-177 therapy for advanced prostate cancers. Bone scans for early metastasis detection.' },
    ],
    whyTurkey: [
      'Board-certified professors managing your treatment plan',
      'No waiting lists — immediate access to PET-CT and diagnostics',
      '50–70% cost savings versus US or UK oncology centers',
      'Same FDA/EMA-approved smart drugs and immunotherapy agents',
      'JCI-accredited hospitals with the same international safety standards',
    ],
    faqs: [
      { q: 'How quickly can treatment begin after arriving in Istanbul?', a: 'For most patients, a full diagnostic workup (PET-CT, molecular profiling, Tumor Board review) can be completed within 48–72 hours of arrival. Treatment typically begins within the first week.' },
      { q: 'What is a Multidisciplinary Tumor Board?', a: 'A Tumor Board is a weekly meeting of specialists — oncologists, surgeons, radiologists, and pathologists — who collectively review each patient\'s case and agree on a unified treatment plan. This approach is the gold standard in oncology and is practiced at our partner universities.' },
      { q: 'Do you offer second opinions for international cancer patients?', a: 'Yes. We facilitate remote second opinions from our professor panel. Patients can submit their pathology reports, imaging, and treatment history for review without traveling to Istanbul.' },
      { q: 'Can I continue treatment at home after surgery in Turkey?', a: 'Yes. Our oncology coordinators prepare a detailed continuity-of-care document for your home physician, including drug protocols, follow-up imaging schedules, and emergency contact information.' },
    ],
  },
  {
    id: 'transplant',
    tag: 'Organ Transplantation',
    title: 'Organ Transplant Center Istanbul',
    leadDoctor: 'Prof. Dr. Halil ERBIS — 2,400+ Successful Transplants',
    image: siteImages.complex,
    overview: 'Prof. Dr. Halil Erbiş leads one of Turkey\'s most experienced transplant centers, specializing in live-donor kidney and liver transplantation. With over 2,400 successful procedures and 20+ years of academic surgical experience, his team implements a 48-hour evaluation protocol that is among the fastest in Europe.',
    options: [
      { name: 'Kidney Transplantation', desc: 'Live-donor and cadaveric kidney transplantation with laparoscopic donor nephrectomy. Average hospital stay: 5 days. Prof. Erbiş\'s center achieves graft success rates aligned with the highest international standards.' },
      { name: 'Liver Transplantation', desc: 'Living-donor and split liver transplantation. Our hepatobiliary team handles complex cases including re-transplantation and pediatric liver transplants. Average hospital stay: 7–10 days.' },
      { name: 'Hepatobiliary Surgery', desc: 'Complex surgery for the liver, pancreas, and gallbladder — including Whipple procedures, liver resections, and bile duct reconstructions.' },
      { name: 'Pre-Transplant Evaluation Protocol', desc: 'Our 48-hour evaluation includes blood typing, tissue matching, MRI/CT imaging, cardiac assessment, and Multidisciplinary Council review (Gastroenterology, Anesthesia, Nephrology) before any commitment is made.' },
    ],
    whyTurkey: [
      'Prof. Dr. Halil Erbiş — 2,400+ successful transplants, 1,200+ academic citations',
      'JCI-accredited university hospital infrastructure',
      'Significantly shorter waiting times than European public health systems',
      'Living-donor programs with comprehensive pre-op evaluation',
      'Full post-operative care and international follow-up coordination',
    ],
    faqs: [
      { q: 'What is the evaluation process for organ transplant candidates?', a: 'The process begins with a remote review of all existing medical records. Upon arrival, our 48-hour evaluation protocol includes comprehensive blood work, advanced imaging (MRI and CT), cardiac assessment, and a Multidisciplinary Council review before a transplant is approved.' },
      { q: 'Can a family member serve as a living donor?', a: 'Yes. Living-donor transplantation requires thorough medical and psychological evaluation of the donor as well as the recipient. Our team assesses compatibility and donor safety before proceeding. The donor evaluation is conducted simultaneously with the recipient workup.' },
      { q: 'What are the post-transplant follow-up arrangements?', a: 'Our coordinators prepare a full post-transplant protocol document for your home transplant team, including immunosuppression regimen, laboratory monitoring schedule, and emergency escalation pathways. We maintain direct communication with your local physicians.' },
    ],
  },
  {
    id: 'ivf',
    tag: 'Reproductive Medicine',
    title: 'IVF Treatment & Genetic Screening in Istanbul',
    leadDoctor: 'Specialist Reproductive Endocrinology Team',
    image: siteImages.complex,
    overview: 'Our partner IVF centers in Istanbul combine the latest reproductive technology with academically trained embryologists and reproductive endocrinologists. Programs include standard IVF, ICSI, egg donation, embryo donation, and advanced genetic screening (PGD/PGS) for couples seeking the highest possible success rates.',
    options: [
      { name: 'IVF & ICSI', desc: 'Conventional IVF and Intracytoplasmic Sperm Injection (ICSI) using time-lapse incubator technology (EmbryoScope), which allows continuous monitoring of embryo development without removing embryos from the incubator.' },
      { name: 'PGD/PGS — Genetic Screening', desc: 'Preimplantation Genetic Diagnosis (PGD) and Preimplantation Genetic Screening (PGS) identify chromosomally normal embryos before transfer, significantly improving success rates and reducing miscarriage risk. Uses Next Generation Sequencing (NGS) technology.' },
      { name: 'Egg & Embryo Donation', desc: 'For patients requiring donor eggs or embryos, our centers maintain regulated donor programs with full genetic profiling of donors. All donations comply with Turkish medical law and international ethical guidelines.' },
      { name: 'Fertility Preservation', desc: 'Egg freezing (oocyte cryopreservation) and sperm banking for medical or elective fertility preservation.' },
    ],
    whyTurkey: [
      'PGS/PGD legal in Turkey — not available in all European countries',
      'Time-lapse EmbryoScope technology for superior embryo selection',
      'Same-cycle stimulation and egg retrieval within 10–14 days',
      '40–60% cost savings versus UK or German IVF clinics',
      'English-speaking reproductive endocrinology team',
    ],
    faqs: [
      { q: 'What is the success rate for IVF with PGS?', a: 'For patients under 38 using PGS-tested embryos, clinical pregnancy rates per transfer exceed 60–65% at our partner centers. Success rates vary significantly based on age, diagnosis, and embryo quality. Your personal prognosis will be discussed during your initial remote consultation.' },
      { q: 'How long do I need to stay in Istanbul for IVF?', a: 'A full IVF cycle with fresh embryo transfer requires approximately 12–14 days in Istanbul. For frozen embryo transfer (FET) cycles, the stay is shorter: 3–5 days. Remote monitoring with your local clinic can minimize travel time.' },
      { q: 'Is egg donation legal in Turkey?', a: 'Yes. Egg donation is legal and regulated in Turkey under the Turkish Ministry of Health guidelines. All donor matching, genetic profiling, and legal procedures are managed by our partner IVF center\'s dedicated legal team.' },
    ],
  },
];

export default function ComplexTreatmentsPage() {
  const { t } = useLanguage();
  const p = t.pages.complex;

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

      {/* YMYL Disclaimer — prominent */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 text-sm leading-relaxed">
            <strong>Medical Notice:</strong> {MEDICAL_DISCLAIMER}
          </p>
        </div>
      </div>

      {/* MDT / Credentials Bar */}
      <section className="bg-navy-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: GraduationCap, title: 'Professor-Led Care', desc: 'All treatment plans approved by university-affiliated full professors' },
              { icon: Shield, title: 'JCI-Accredited Hospitals', desc: 'Same international standards as US and UK leading medical centers' },
              { icon: CheckCircle, title: 'Multidisciplinary Tumor Board', desc: 'Panel of specialists reviews every complex case before treatment begins' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{title}</div>
                  <div className="text-white/50 text-xs mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      {treatments.map((treatment, i) => (
        <section key={treatment.id} id={treatment.id} className={`py-24 scroll-mt-20 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start" data-aos="fade-up">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{treatment.tag}</div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-950 mb-3">{treatment.title}</h2>

                {/* Lead Doctor */}
                <div className="flex items-center gap-3 bg-navy-50 rounded-xl p-4 mb-6 border border-navy-100">
                  <div className="w-10 h-10 bg-navy-950 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-navy-950 font-bold text-sm">Lead Specialist</div>
                    <div className="text-gold-600 text-xs font-medium">{treatment.leadDoctor}</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{treatment.overview}</p>

                <h3 className="font-bold text-navy-950 mb-4">Treatment Options:</h3>
                <div className="space-y-4 mb-8">
                  {treatment.options.map((opt) => (
                    <div key={opt.name} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                      <div className="font-semibold text-navy-900 text-sm mb-1">{opt.name}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{opt.desc}</div>
                    </div>
                  ))}
                </div>

                <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Request Medical Assessment <ArrowRight size={15} />
                </a>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <img src={treatment.image} alt={treatment.title} className="rounded-2xl shadow-xl w-full h-64 lg:h-80 object-cover" />

                {/* Why Turkey */}
                <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h4 className="font-bold text-navy-950 mb-4 text-sm">Why Choose Istanbul for {treatment.tag}:</h4>
                  <ul className="space-y-2.5">
                    {treatment.whyTurkey.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <CheckCircle size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQs */}
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

      {/* YMYL closing disclaimer */}
      <section className="py-10 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            <strong className="text-gray-700">Important Medical Disclaimer:</strong> {MEDICAL_DISCLAIMER} Always seek the advice of a qualified physician or other qualified health provider with any questions you may have regarding a medical condition. In case of emergency, call your local emergency number immediately.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">A Complex Journey Requires Expert Coordination</h2>
          <p className="text-white/70 text-lg mb-8">Speak with our medical coordinator to understand your options, timeline, and costs — with no obligation.</p>
          <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            Contact a Medical Coordinator <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
