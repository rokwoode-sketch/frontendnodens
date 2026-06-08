import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, BookOpen, Users, ChevronRight, ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Prof. Dr. Halil Erbiş',
    initials: 'HE',
    title: 'Lead Surgeon — Organ Transplant & Hepatobiliary Surgery',
    affiliation: 'Istanbul University Faculty of Medicine',
    color: 'from-navy-800 to-navy-950',
    stats: [
      { num: '20+', label: 'Years of Clinical Excellence' },
      { num: '2,400+', label: 'Successful Transplant Procedures' },
      { num: '1,200+', label: 'Academic Citations' },
    ],
    specialties: ['Live-Donor Kidney Transplantation', 'Live-Donor Liver Transplantation', 'Laparoscopic Hepatobiliary Surgery', 'Pancreatic Surgery', 'Re-Transplantation (Complex Cases)'],
    credentials: [
      'Full Professor — Istanbul University Faculty of Medicine',
      'Board-Certified General Surgeon & Transplant Specialist',
      'Academic Head — University Transplant Center',
      '48-Hour Evaluation Protocol Pioneer',
    ],
    about: 'Prof. Dr. Halil Erbiş leads one of Turkey\'s foremost transplant centers, specializing in live-donor liver and kidney transplantation. With over two decades of academic surgical practice and 2,400+ successful procedures, he integrates the university\'s high-tech surgical suites with rigorous pre- and post-operative academic protocols. His team is available for international patient consultations within 48 hours of referral.',
    link: '/complex-treatments#transplant',
    linkLabel: 'Learn about Organ Transplant',
  },
  {
    name: 'Prof. Dr. Senem Karabulut',
    initials: 'SK',
    title: 'Medical Oncology Specialist & Academic Professor',
    affiliation: 'Istanbul University — Cerrahpaşa Faculty of Medicine',
    color: 'from-teal-700 to-teal-900',
    stats: [
      { num: '15+', label: 'Years in Medical Oncology' },
      { num: 'ESMO', label: 'Member — European Society' },
      { num: 'MDT', label: 'Tumor Board Lead' },
    ],
    specialties: ['Chemotherapy Protocol Design', 'Targeted Therapy & Smart Drugs', 'Immunotherapy (Checkpoint Inhibitors)', 'Post-Surgical Oncological Follow-up', 'Cancer Staging & Molecular Profiling'],
    credentials: [
      'Full Professor — Istanbul University Cerrahpaşa',
      'European Society for Medical Oncology (ESMO) Member',
      'Multidisciplinary Tumor Board Lead',
      'Specialist in Smart Drug & Immunotherapy Protocols',
    ],
    about: 'Prof. Dr. Senem Karabulut leads the medical oncology division at our partner university hospital. Her expertise spans the design of individualized chemotherapy, targeted therapy, and immunotherapy protocols. She manages post-operative oncological follow-up for all surgical oncology patients and chairs the weekly Multidisciplinary Tumor Board.',
    link: '/complex-treatments#cancer',
    linkLabel: 'Learn about Cancer Treatment',
  },
  {
    name: 'Prof. Dr. Esra Kaytan Sağlam',
    initials: 'EK',
    title: 'Radiation Oncology Expert & Former Faculty Dean',
    affiliation: 'Istanbul University — İstanbul Faculty of Medicine',
    color: 'from-gold-700 to-gold-900',
    stats: [
      { num: 'Former', label: 'Faculty Dean' },
      { num: 'TrueBeam', label: 'STx Technology Expert' },
      { num: 'Sub-mm', label: 'Radiation Precision' },
    ],
    specialties: ['Stereotactic Radiosurgery (CyberKnife)', 'High-Precision Radiotherapy (TrueBeam STx)', 'Non-Invasive Tumor Targeting', 'Breast Cancer Radiotherapy', 'CNS & Spinal Cord Tumors'],
    credentials: [
      'Full Professor — Istanbul University Faculty of Medicine',
      'Former Dean — Istanbul Faculty of Medicine',
      'International Radiation Oncology Expert',
      'Clinical Trials Coordinator — Radiotherapy Research',
    ],
    about: 'As former Dean of the Istanbul University Faculty of Medicine and an internationally recognized radiation oncologist, Prof. Dr. Esra Kaytan Sağlam utilizes the hospital\'s advanced TrueBeam STx technology for non-invasive tumor targeting. She is renowned for combining academic leadership with compassionate clinical excellence, particularly in complex CNS and breast cancer radiotherapy cases.',
    link: '/complex-treatments#cancer',
    linkLabel: 'Learn about Radiotherapy',
  },
];

const specialistNetwork = [
  { area: 'Plastic & Aesthetic Surgery', count: '8+ surgeons', icon: '✂️' },
  { area: 'Hair Restoration', count: '6+ specialists', icon: '💆' },
  { area: 'Prosthodontics & Dental Implantology', count: '10+ specialists', icon: '🦷' },
  { area: 'Reproductive Medicine & IVF', count: '4+ specialists', icon: '🔬' },
  { area: 'Cardiology & Cardiac Surgery', count: '5+ specialists', icon: '❤️' },
  { area: 'Bariatric & Metabolic Surgery', count: '3+ specialists', icon: '⚕️' },
  { area: 'Orthopedics & Sports Medicine', count: '4+ specialists', icon: '🦴' },
  { area: 'Nephrology', count: '4+ specialists', icon: '🏥' },
];

export default function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Our Doctors | Professor-Led Medical Team — NodensCare Istanbul</title>
        <meta name="description" content="Meet NodensCare's professor-led medical team in Istanbul. Prof. Dr. Halil ERBIS (2,400+ transplants), Prof. Dr. Senem Karabulut (Oncology), Prof. Dr. Esra Kaytan Sağlam (Radiotherapy). JCI-accredited." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Our Doctors</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Medical <span className="text-gold-400">Team</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              At NodensCare, we do not partner with generalists. Your care is coordinated exclusively by university-affiliated full professors — specialists with decades of academic surgical experience and thousands of documented successful outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Principle statement */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-10 text-sm font-semibold text-navy-800">
            {['University-Affiliated Professors Only', 'Board-Certified in Their Specialty', 'Active Academic Practice', 'JCI-Accredited Hospital Privileges', 'International Patient Experience'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead professors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-3">Medical Leadership</p>
            <h2 className="section-title mb-4">Lead Professors & <span className="text-gold-600">Department Heads</span></h2>
          </div>

          <div className="space-y-12">
            {doctors.map((doc, i) => (
              <div
                key={doc.name}
                className={`grid lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100 ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
              >
                {/* Profile panel */}
                <div className={`bg-gradient-to-br ${doc.color} p-8 flex flex-col justify-between ${i % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  {/* Avatar with initials */}
                  <div>
                    <div className="w-24 h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center mb-5">
                      <span className="font-serif text-3xl font-bold text-white">{doc.initials}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white leading-snug mb-2">{doc.name}</h3>
                    <p className="text-white/80 text-sm font-medium mb-1">{doc.title}</p>
                    <p className="text-white/50 text-xs">{doc.affiliation}</p>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 space-y-3">
                    {doc.stats.map(({ num, label }) => (
                      <div key={label} className="flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-white/60 text-xs">{label}</span>
                        <span className="text-gold-300 font-bold text-sm">{num}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={doc.link} className="mt-6 inline-flex items-center gap-2 text-gold-300 hover:text-white text-sm font-semibold transition-colors">
                    {doc.linkLabel} <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Content panel */}
                <div className={`lg:col-span-2 bg-white p-8 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <p className="text-gray-600 leading-relaxed mb-7">{doc.about}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="flex items-center gap-2 font-bold text-navy-950 text-sm mb-3">
                        <GraduationCap size={15} className="text-gold-600" />
                        Credentials
                      </h4>
                      <ul className="space-y-2">
                        {doc.credentials.map((c) => (
                          <li key={c} className="text-gray-500 text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0 mt-1.5" />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-bold text-navy-950 text-sm mb-3">
                        <Award size={15} className="text-gold-600" />
                        Clinical Specialties
                      </h4>
                      <ul className="space-y-2">
                        {doc.specialties.map((s) => (
                          <li key={s} className="text-gray-500 text-sm flex items-start gap-2">
                            <ChevronRight size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />{s}
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

      {/* Specialist network */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="section-subtitle text-gold-400 mb-3">Extended Network</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Plus 50+ Vetted <span className="text-gold-400">Specialist Surgeons</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Beyond our lead professors, NodensCare has pre-vetted a network of board-certified specialists across every major medical discipline — all affiliated with university hospitals and reviewed by our clinical team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
            {specialistNetwork.map(({ area, count, icon }) => (
              <div key={area} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 text-center transition-all duration-300">
                <div className="text-3xl mb-3">{icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{area}</div>
                <div className="text-gold-400 text-xs font-bold">{count}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="text-white/50 text-sm mb-4">
              Need to be matched with a specific specialist? Our coordinators will pair you with the right expert for your case.
            </p>
            <a href="https://wa.me/905546745516?text=I%27d%20like%20to%20be%20matched%20with%20a%20specialist" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Matched with a Specialist <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
