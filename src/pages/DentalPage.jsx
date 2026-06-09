import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProcedurePageHero from '../components/ProcedurePageHero';
import { siteImages } from '../data/siteImages';

const procedures = [
  {
    id: 'hollywood-smile',
    tag: 'Most Requested',
    title: 'Hollywood Smile',
    subtitle: 'E-max Veneers · Zirconia · Full Smile Design',
    price: '€3,200 / $3,800',
    image: siteImages.hollywoodSmile,
    description: 'A Hollywood Smile is a full aesthetic smile transformation — typically 16–20 ultra-thin porcelain veneers designed specifically for your face shape, skin tone, and lip position. Our prosthodontists use Digital Smile Design (DSD) technology, allowing you to preview your new smile digitally before any work begins.',
    includes: ['Digital Smile Design preview', '16–20 E-max porcelain or zirconia veneers', 'Gum contouring if required', '5-day Istanbul stay', 'All transfers and accommodation', 'Lifetime warranty on materials'],
    faqs: [
      { q: 'Are Hollywood Smile veneers permanent?', a: 'Porcelain veneers are a long-term commitment. They typically last 10–20 years with proper care. The process involves removing a thin layer of enamel, which is irreversible — so the decision should be made carefully with full information from our prosthodontist.' },
      { q: 'Will the veneers look natural?', a: 'Our prosthodontists use Digital Smile Design to customize every aspect: shade, shape, size, and surface texture. E-max ceramic mimics the translucency of natural enamel. The result is a brighter smile that still looks entirely natural.' },
    ],
  },
  {
    id: 'implants',
    tag: 'Permanent Solution',
    title: 'Dental Implants',
    subtitle: 'Single · Multiple · Full Arch',
    price: 'From €800 / $950 per implant',
    image: siteImages.zirconium,
    description: 'Dental implants are the gold standard for replacing missing teeth — titanium posts surgically placed into the jawbone that fuse with bone over time to create a permanent, stable foundation for crowns, bridges, or full-arch restorations. Our implantologists use Nobel Biocare and Straumann systems.',
    includes: ['Premium implant system (Nobel Biocare / Straumann)', 'Digital implant planning with 3D CT scan', 'Surgical placement and healing abutment', 'Zirconia or E-max crown', 'All transfers and coordinator support'],
    faqs: [
      { q: 'How long does the implant process take?', a: 'Standard implant treatment requires two visits. In visit 1 (Day 1–2), the implant is placed and a temporary crown fitted. You return in 3–6 months for the final crown. For qualified patients, immediate loading (same-day crown) is available.' },
      { q: 'What is the success rate of dental implants?', a: 'With healthy bone and good oral hygiene, dental implant success rates exceed 95% at 10 years. Our implantologists use 3D CT scan planning to optimize implant position and maximize long-term success.' },
    ],
  },
  {
    id: 'zirconium',
    tag: 'Strength & Aesthetics',
    title: 'Zirconium Crowns',
    subtitle: 'Metal-Free · Natural Appearance · Durable',
    price: '€200–350 / $240–420 per crown',
    image: siteImages.zirconium,
    description: 'Zirconium dioxide crowns offer the ideal combination of strength and aesthetics. Unlike PFM (porcelain-fused-to-metal) crowns, zirconia is 100% metal-free, eliminating the grey gum line that appears as traditional crowns age. Our labs produce monolithic zirconia crowns with custom shading in 2–3 working days.',
    includes: ['Full mouth X-ray and evaluation', 'Digital shade matching', 'Monolithic or layered zirconia crown', '3–5 day turnaround', 'Temporary crowns during fabrication'],
    faqs: [
      { q: 'How long do zirconia crowns last?', a: 'High-quality zirconia crowns can last 15–25 years with proper care. They are significantly more durable than traditional porcelain and resistant to chipping and cracking.' },
    ],
  },
  {
    id: 'all-on-6',
    tag: 'Full Arch Restoration',
    title: 'All-on-6 Dental Implants',
    subtitle: 'Full Arch · Fixed Bridge · Permanent Teeth',
    price: '€6,200 / $7,400 per arch',
    image: siteImages.allOn6,
    description: 'All-on-6 is a full-arch restoration using 6 strategically placed implants supporting a fixed porcelain bridge — replacing a full set of upper or lower teeth permanently. Unlike dentures, All-on-6 is fixed, never removed, and preserves jawbone. Many patients receive their final bridge within 3–5 days.',
    includes: ['3D CT scan and full treatment planning', '6 premium titanium implants per arch', 'Immediate fixed temporary bridge', 'Final zirconia or E-max fixed bridge', '7-day Istanbul stay', 'All transfers and accommodation'],
    faqs: [
      { q: 'What is the difference between All-on-4 and All-on-6?', a: 'All-on-4 uses 4 implants and relies on angulated posterior implants to avoid bone grafting. All-on-6 uses 6 implants for superior load distribution, greater stability, and longer-term outcomes — particularly for patients with good bone density.' },
      { q: 'Will I have teeth on the day of surgery?', a: 'Yes. In most cases, a fixed temporary bridge is placed immediately after implant surgery, so you leave the clinic with a full set of functioning teeth on Day 1. The final permanent bridge is fitted at your follow-up appointment (usually 4–6 months later).' },
    ],
  },
];

export default function DentalPage() {
  const { t } = useLanguage();
  const p = t.pages.dental;

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

      {/* Procedures */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-3">Our Dental Treatments</p>
            <h2 className="section-title mb-4">Comprehensive <span className="text-gold-600">Dental Care</span></h2>
          </div>

          <div className="space-y-20">
            {procedures.map((proc, i) => (
              <div key={proc.id} id={proc.id} className="scroll-mt-24" data-aos="fade-up">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{proc.tag}</div>
                    <h3 className="font-serif text-3xl font-bold text-navy-950 mb-2">{proc.title}</h3>
                    <p className="text-gold-600 text-sm font-semibold mb-4">{proc.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{proc.description}</p>
                    <div className="bg-navy-950 rounded-2xl p-5 mb-5">
                      <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">All-Inclusive Price</div>
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
                      Request Quote <ArrowRight size={15} />
                    </a>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img src={proc.image} alt={proc.title} className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
                    {proc.includes && (
                      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <h4 className="font-bold text-navy-950 mb-4 text-sm">Package Includes:</h4>
                        <ul className="space-y-2">
                          {proc.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />{item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-white/70 text-lg mb-8">Send your dental photos or X-rays for a free remote assessment. Our prosthodontist will review your case within 24 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516?text=Dental%20treatment%20inquiry" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Send Dental Photos <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
