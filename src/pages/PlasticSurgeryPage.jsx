import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronRight } from 'lucide-react';

const procedures = [
  { id: 'rhinoplasty', tag: 'Most Requested', title: 'Rhinoplasty', subtitle: 'Structural · Ethnic · Revision · Functional', price: '€3,500 / $4,000', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=450&fit=crop&crop=top', desc: 'Our rhinoplasty surgeons are specialists in ethnic preservation, closed techniques, and revision cases. Every procedure begins with 3D digital planning — you approve the projected outcome before surgery. Techniques include open and closed rhinoplasty, tip refinement, dorsal hump reduction, and functional correction of septal deviation.' },
  { id: 'liposuction', tag: 'Body Contouring', title: 'Liposuction 360°', subtitle: 'Full Midsection · Vaser · High-Definition', price: '€2,800 / $3,300', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=450&fit=crop', desc: 'Liposuction 360° targets the entire midsection — abdomen, flanks, waist, and back — in a single session. Using Vaser (ultrasound-assisted) technology, we selectively break down fat cells while preserving surrounding tissue, resulting in smoother contours and faster recovery than traditional liposuction.' },
  { id: 'bbl', tag: 'Body Sculpting', title: 'Brazilian Butt Lift (BBL)', subtitle: 'Fat Transfer · Natural Volume · Hourglass Figure', price: 'From €4,500 / $5,300 (with Lipo 360)', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&h=450&fit=crop', desc: 'BBL uses fat harvested from liposuction to enhance the buttocks — no implants, only your own purified fat. The result is natural projection and curves that feel and look like natural tissue. Our surgeons follow strict safety protocols: fat is only transferred to the subcutaneous layer, never into the muscle.' },
  { id: 'breast-aug', tag: 'Most Natural Result', title: 'Breast Augmentation', subtitle: 'Motiva · Mentor · Custom Sizing', price: '€3,800 / $4,500', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&h=450&fit=crop', desc: 'Our plastic surgeons use premium Motiva and Mentor implants — the same brands used by top surgeons in the USA and Europe. Size, projection, and profile are selected based on your body proportions during a comprehensive pre-operative consultation. Dual-plane placement technique delivers the most natural appearance.' },
  { id: 'facelift', tag: 'Deep Plane Technique', title: 'Facelift (Rhytidectomy)', subtitle: 'SMAS Lifting · Natural · Long-Lasting', price: '€4,200 / $5,000', image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=700&h=450&fit=crop', desc: 'Our facelift surgeons specialize in the deep plane SMAS technique — repositioning the deeper facial structures rather than just pulling skin. This prevents the "operated" look and delivers results that last 10–15 years. The procedure is often combined with a neck lift and fat transfer for full facial rejuvenation.' },
  { id: 'blepharoplasty', tag: 'Eye Rejuvenation', title: 'Blepharoplasty', subtitle: 'Upper · Lower · Combined', price: '€1,800 / $2,100', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=700&h=450&fit=crop', desc: 'Blepharoplasty removes excess skin and fat from the eyelids to restore a rested, youthful appearance. Upper blepharoplasty can also improve vision obstructed by drooping upper lids. Incisions are placed within natural eyelid creases and become virtually invisible within weeks.' },
  { id: 'abdominoplasty', tag: 'Post-Weight Loss / Post-Pregnancy', title: 'Abdominoplasty (Tummy Tuck)', subtitle: 'Full · Mini · Extended', price: '€3,200 / $3,800', image: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=700&h=450&fit=crop', desc: 'Abdominoplasty removes excess abdominal skin, repairs separated abdominal muscles (diastasis recti), and creates a smooth, firm midsection. It is most commonly performed after pregnancy or significant weight loss. The scar is placed low within the bikini line and fades significantly over 12–18 months.' },
  { id: 'mommy-makeover', tag: 'Most Comprehensive', title: 'Mommy Makeover', subtitle: 'Tummy Tuck + Breast + Liposuction', price: 'From €7,500 / $8,800', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=700&h=450&fit=crop', desc: 'A Mommy Makeover combines a tummy tuck, breast surgery (lift, augmentation, or reduction), and liposuction in a single operation under one anesthesia. Our multidisciplinary team performs combined procedures only when safe anesthesia time parameters are met.' },
];

export default function PlasticSurgeryPage() {
  return (
    <>
      <Helmet>
        <title>Plastic Surgery Istanbul | Rhinoplasty, BBL, Facelift — NodensCare</title>
        <meta name="description" content="Precision plastic surgery in Istanbul performed by university-affiliated professors. Rhinoplasty, BBL, facelift, breast augmentation, tummy tuck. JCI-accredited. Free remote consultation." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Plastic Surgery</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Plastic Surgery <span className="text-gold-400">Istanbul</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Precision aesthetic surgery performed by university-affiliated professors in JCI-accredited hospitals. 3D digital planning. Zero compromise on safety. Results that last.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Request Free Consultation <ArrowRight size={16} />
              </a>
              <Link to="/doctors" className="btn-outline">Meet Our Surgeons</Link>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              {[{ num: '12+', label: 'Procedures' }, { num: '98%', label: 'Satisfaction Rate' }, { num: '10-day', label: 'Safety Protocol' }].map(({ num, label }) => (
                <div key={label} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                  <div className="font-serif text-2xl font-bold text-gold-400">{num}</div>
                  <div className="text-white/70 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Jump Links */}
      <section className="bg-white border-b border-gray-100 sticky top-[60px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0.5 overflow-x-auto py-3 scrollbar-none">
            {procedures.map((p) => (
              <a key={p.id} href={`#${p.id}`}
                className="flex-shrink-0 text-xs font-semibold text-gray-600 hover:text-gold-600 px-3 py-1.5 rounded-full hover:bg-gold-50 transition-colors whitespace-nowrap">
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
          {procedures.map((proc, i) => (
            <div key={proc.id} id={proc.id} className="scroll-mt-28" data-aos="fade-up">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-3 py-1 text-xs font-bold mb-4">{proc.tag}</div>
                  <h2 className="font-serif text-3xl font-bold text-navy-950 mb-2">{proc.title}</h2>
                  <p className="text-gold-600 text-sm font-semibold mb-4">{proc.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{proc.desc}</p>
                  <div className="bg-navy-950 rounded-2xl p-5 mb-5">
                    <div className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">All-Inclusive Price</div>
                    <div className="font-serif text-2xl font-bold text-white">{proc.price}</div>
                  </div>
                  <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Get a Personalized Quote <ArrowRight size={15} />
                  </a>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img src={proc.image} alt={`${proc.title} Istanbul`} className="rounded-2xl shadow-xl w-full h-72 lg:h-80 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety banner */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Our 10-Day International Safety Protocol</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            For all major plastic surgery procedures, NodensCare enforces a mandatory 10-day clinical observation window in Istanbul. This includes daily physiological monitoring, hemodynamic stabilization, and specialized wound-integrity checks — ensuring you are medically cleared for air travel before departure.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[{ title: 'Days 1–3', desc: 'Post-op monitoring, compression garments, pain management' }, { title: 'Days 4–7', desc: 'Daily wound checks, swelling assessment, mobility protocol' }, { title: 'Days 8–10', desc: 'Surgeon clearance, Fit-to-Fly certification, departure briefing' }].map(({ title, desc }) => (
              <div key={title} className="bg-white/10 rounded-xl p-4 border border-white/10 text-center">
                <div className="text-gold-400 font-bold text-sm mb-2">{title}</div>
                <div className="text-white/60 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-navy-950 mb-4">Begin Your Free Remote Consultation</h2>
          <p className="text-gray-500 text-lg mb-8">Send your photos for a remote assessment. Our surgeon will review your case and provide a personalized recommendation — before you commit to anything.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Send Photos on WhatsApp <ArrowRight size={16} />
            </a>
            <Link to="/contact" className="btn-dark text-base px-8 py-4">Use Contact Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
