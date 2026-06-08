import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Star, Shield, Phone, ChevronRight } from 'lucide-react';

const techniques = [
  {
    id: 'fue',
    tag: 'FUE Sapphire',
    title: 'FUE Sapphire: The Precision Gold Standard',
    subtitle: 'Most Advanced · Highest Density · Natural Results',
    price: '€1,500 / $1,800',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=450&fit=crop',
    description: 'Our Sapphire FUE protocol uses blades crafted from genuine sapphire gemstone, creating V-shaped micro-channels rather than U-shaped. This single innovation allows for 40% less scalp trauma, higher graft density per cm², and dramatically faster healing.',
    phases: [
      { label: 'Phase 1 — Academic Consultation & Design', desc: 'Your journey begins at our university facility with a professional hair analysis. Our doctors design your hairline based on facial symmetry, donor capacity, and how your hair will look as you age.' },
      { label: 'Phase 2 — Pain-Free Extraction', desc: 'Under local anesthesia, individual follicular units are extracted from your donor area using micro-punches. No linear scars, no stitches.' },
      { label: 'Phase 3 — Sapphire Channel Creation', desc: 'Sapphire blades create precise micro-channels at the exact angle and direction of your natural hair growth for undetectable, natural results.' },
      { label: 'Phase 4 — Implantation & PRP', desc: 'Grafts are implanted into channels, followed immediately by PRP therapy to stimulate faster healing and maximize graft survival rates.' },
    ],
    includes: [
      'University-Level Care in JCI-Accredited Hospital',
      'Maximum Grafts (3,000–5,000) based on donor area',
      'PRP Therapy included at no extra cost',
      '3 days / 2 nights in 5-star hotel',
      'All private airport and clinic transfers',
      'Specialized aftercare wash kit',
      '12 months of online medical follow-up',
    ],
    timeline: [
      { period: 'Days 1–14', event: 'Initial healing. Redness subsides. Grafts anchoring.' },
      { period: 'Month 1–3', event: '"Shock loss" phase — normal and expected. Follicles resting.' },
      { period: 'Month 3–6', event: 'New growth begins. Visible density increasing rapidly.' },
      { period: 'Month 6–12', event: 'Final, permanent results matured. Full density achieved.' },
    ],
    faqs: [
      { q: 'What is the difference between Sapphire FUE and traditional FUE?', a: 'Standard FUE uses steel punches which create micro-tears. Sapphire blades create V-shaped, ultra-smooth channels that result in 40% less scalp vibration, lower risk of follicle damage, and faster healing with no visible scarring.' },
      { q: 'How many grafts will I need?', a: 'The number depends on your degree of hair loss (Norwood Scale) and your donor density. Most patients require between 2,000–5,000 grafts. Your exact count is determined during your free virtual hair analysis before you travel.' },
      { q: 'What is the success rate?', a: 'At our JCI-accredited facilities, the graft survival rate is 95–98% when proper post-operative care protocols are followed. Our 12-month follow-up program ensures any concerns are addressed immediately.' },
    ],
  },
  {
    id: 'dhi',
    tag: 'DHI / Choi Pen',
    title: 'DHI Choi Pen: Direct Implantation for Maximum Density',
    subtitle: 'Zero Channel Creation · Superior Angle Control · High Density',
    price: '€1,800 / $2,100',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=450&fit=crop',
    description: 'DHI (Direct Hair Implantation) uses a patented Choi implanter pen to extract and implant follicles simultaneously — without pre-creating channels. This direct method achieves superior angle precision, better graft survival, and higher density in the implanted area.',
    phases: [
      { label: 'Extraction', desc: 'Follicles extracted individually using micro-punches under local anesthesia.' },
      { label: 'Loading', desc: 'Each follicle is loaded into the Choi implanter pen immediately after extraction to minimize time outside the body.' },
      { label: 'Direct Implantation', desc: 'The pen punctures the scalp and implants the graft simultaneously — no open channels, maximum precision.' },
    ],
    includes: [
      'DHI Choi Pen technique in JCI-Accredited Hospital',
      'Up to 4,500 grafts depending on donor area',
      'PRP therapy included',
      '3 days / 2 nights in 5-star accommodation',
      'Private transfers and coordinator support',
      '12-month follow-up program',
    ],
    faqs: [
      { q: 'Who is DHI best suited for?', a: 'DHI is ideal for patients who want to add density to existing hair without shaving — because the technique does not require pre-made channels, existing hair is undisturbed during implantation. It is also preferred for hairline precision work.' },
      { q: 'Is DHI more painful than FUE?', a: 'No. Both procedures are performed under local anesthesia. Most patients experience minimal discomfort and describe the experience as pressure rather than pain. The Choi pen approach often results in less post-operative swelling than standard FUE.' },
    ],
  },
  {
    id: 'prp',
    tag: 'PRP & Mesotherapy',
    title: 'PRP & Mesotherapy: Non-Surgical Follicle Revitalization',
    subtitle: 'No Surgery · No Downtime · Strengthens Existing Hair',
    price: '€400 / $480 per session',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=450&fit=crop',
    description: 'Platelet-Rich Plasma therapy uses your own blood\'s growth factors to awaken dormant follicles, slow hair shedding, and improve scalp health. Mesotherapy delivers vitamins, minerals, and amino acids directly to the scalp. Both are used as standalone treatments or in combination with transplants to maximize results.',
    includes: [
      'Medical-grade PRP centrifuge processing',
      'Customized vitamin cocktail mesotherapy',
      'Scalp health assessment',
      'Treatment plan for 3–6 sessions',
      'Home care protocol',
    ],
    faqs: [
      { q: 'How many PRP sessions are needed?', a: 'For maintenance and prevention: 3–4 sessions per year. Following a hair transplant: 3 sessions in the first 6 months. Results are cumulative and most patients see reduced shedding within 4–6 weeks of the first session.' },
      { q: 'Can PRP replace a hair transplant?', a: 'PRP strengthens and revitalizes existing follicles, but it cannot create new follicles or restore hair in completely bald areas. It is most effective as a preventative treatment or post-transplant support.' },
    ],
  },
  {
    id: 'exosome',
    tag: 'Exosome Therapy',
    title: 'Exosome Therapy: Next-Generation Regenerative Medicine',
    subtitle: 'Cutting-Edge · Activates Dormant Follicles · Clinically Studied',
    price: '€900 / $1,050 per session',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=700&h=450&fit=crop',
    description: 'Exosomes are extracellular vesicles containing powerful growth signals. Applied to the scalp, they activate dormant hair follicles, improve hair shaft thickness, and repair scalp tissue at the cellular level — representing the frontier of non-surgical hair restoration.',
    includes: [
      'Laboratory-grade exosome concentrate',
      'Scalp micro-needling preparation',
      'Combined with PRP for enhanced results',
      'Treatment protocol designed by medical team',
    ],
    faqs: [
      { q: 'Is exosome therapy clinically proven?', a: 'Exosome therapy for hair loss is supported by a growing body of clinical research showing significant improvements in hair density and follicle activation. Our protocols use exosomes from certified, regulated laboratory sources.' },
    ],
  },
];

const faqsGlobal = [
  { q: 'Am I a candidate for a hair transplant?', a: 'Ideal candidates have a stable donor area with sufficient follicle density, are in good general health, and have realistic expectations. Candidacy is assessed during your free virtual hair analysis — before you commit to traveling.' },
  { q: 'Will I need to shave my head?', a: 'For standard FUE Sapphire, the donor area is shaved. For DHI, unshaven or partial-shave options are available. Your coordinator will advise based on your specific case.' },
  { q: 'What is the required stay in Istanbul?', a: 'For hair transplant: 3 nights (3 days total). Day 1 arrival and consultation, Day 2 procedure, Day 3 follow-up wash and clearance. You can fly home on Day 4.' },
  { q: 'Is hair transplant painful?', a: 'The procedure is performed under local anesthesia. Most patients feel only initial injection pressure. Post-procedure discomfort is manageable with standard over-the-counter pain relief.' },
];

export default function HairTransplantPage() {
  return (
    <>
      <Helmet>
        <title>Hair Transplant Istanbul | FUE Sapphire & DHI — NodensCare</title>
        <meta name="description" content="Hair transplant in Istanbul from €1,500. FUE Sapphire & DHI Choi Pen techniques. JCI-accredited hospitals. Professor-led care. 98% graft survival rate. Free virtual hair analysis." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Hair Transplant</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">Advanced Hair Restoration Istanbul</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Hair Transplant <span className="text-gold-400">Istanbul</span>
                <br />FUE Sapphire & DHI
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Permanent hair restoration performed by university-affiliated professors in JCI-accredited hospitals. From €1,500 all-inclusive. Over 5,000 successful procedures.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="https://wa.me/905546745516?text=I%27d%20like%20a%20free%20hair%20analysis" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Get Free Hair Analysis
                  <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn-outline">Contact a Coordinator</Link>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: '5,000+', label: 'Procedures Performed' },
                  { num: '98%', label: 'Graft Survival Rate' },
                  { num: '12 mo', label: 'Follow-Up Included' },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center border border-white/10">
                    <div className="font-serif text-2xl font-bold text-gold-400">{num}</div>
                    <div className="text-white/70 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=500&fit=crop"
                alt="Hair transplant consultation Istanbul"
                className="rounded-2xl shadow-2xl w-full h-[420px] object-cover border border-white/10"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-navy-950 text-sm">JCI Accredited</div>
                  <div className="text-gray-500 text-xs">International Safety Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
          {[
            '✓ JCI-Accredited Hospitals Only',
            '✓ University-Affiliated Professor Surgeons',
            '✓ 95–98% Graft Survival Rate',
            '✓ All-Inclusive Package — No Hidden Costs',
            '✓ 12-Month Online Follow-Up',
          ].map((item) => (
            <span key={item} className="font-medium text-navy-800">{item}</span>
          ))}
        </div>
      </section>

      {/* Techniques */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-3">Our Methods</p>
            <h2 className="section-title mb-4">Hair Transplant <span className="text-gold-600">Techniques</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer four hair restoration methods. During your free consultation, our specialists recommend the optimal approach based on your degree of hair loss, donor density, and personal goals.
            </p>
          </div>

          <div className="space-y-20">
            {techniques.map((tech, i) => (
              <div key={tech.id} id={tech.id === 'fue' ? 'fue' : tech.id === 'dhi' ? 'dhi' : tech.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`} data-aos="fade-up">
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">
                      {tech.tag}
                    </div>
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
                      <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">All-Inclusive Price</div>
                      <div className="font-serif text-3xl font-bold text-white">{tech.price}</div>
                    </div>

                    <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Get a Personalized Quote
                      <ArrowRight size={15} />
                    </a>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="rounded-2xl shadow-xl w-full h-72 lg:h-auto lg:aspect-[4/3] object-cover"
                    />

                    {tech.includes && (
                      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                        <h4 className="font-bold text-navy-950 mb-4 text-sm">Package Includes:</h4>
                        <ul className="space-y-2">
                          {tech.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                              <CheckCircle size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {tech.timeline && (
                  <div className="mt-10 bg-navy-950 rounded-2xl p-8" data-aos="fade-up">
                    <h4 className="font-serif text-xl font-bold text-white mb-6">Your Transformation Timeline</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tech.timeline.map(({ period, event }, j) => (
                        <div key={period} className="relative">
                          {j < tech.timeline.length - 1 && (
                            <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-gold-500/30 z-0" />
                          )}
                          <div className="bg-white/10 rounded-xl p-4 border border-white/10 relative z-10">
                            <div className="text-gold-400 font-bold text-sm mb-1">{period}</div>
                            <div className="text-white/70 text-xs leading-relaxed">{event}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tech.faqs && tech.faqs.length > 0 && (
                  <div className="mt-8 space-y-3" data-aos="fade-up">
                    {tech.faqs.map(({ q, a }) => (
                      <details key={q} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                          {q}
                          <ChevronRight size={16} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
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

      {/* Global FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-navy-950 mb-10 text-center">General Hair Transplant <span className="text-gold-600">Questions</span></h2>
          <div className="space-y-3">
            {faqsGlobal.map(({ q, a }) => (
              <details key={q} className="bg-gray-50 rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-navy-950 text-sm list-none">
                  {q}
                  <ChevronRight size={16} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-3">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Restore Your Confidence?</h2>
          <p className="text-white/70 text-lg mb-8">Get your free virtual hair analysis — no commitment, just expert guidance from our medical team.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516?text=Free%20Hair%20Analysis" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Get Free Hair Analysis <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">Send Us a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
