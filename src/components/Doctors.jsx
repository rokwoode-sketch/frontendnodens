import { Link } from 'react-router-dom';
import { GraduationCap, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const doctors = [
  {
    name: 'Prof. Dr. Halil Erbiş',
    initials: 'HE',
    specialty: 'Organ Transplant & Hepatobiliary Surgery',
    affiliation: 'Istanbul University Faculty of Medicine',
    stats: [{ num: '20+', label: 'Years Experience' }, { num: '2,400+', label: 'Transplants' }, { num: '1,200+', label: 'Citations' }],
    expertise: ['Kidney Transplant', 'Liver Transplant', 'Hepatobiliary Surgery'],
    color: 'from-navy-800 to-navy-950',
  },
  {
    name: 'Prof. Dr. Senem Karabulut',
    initials: 'SK',
    specialty: 'Medical Oncology Specialist',
    affiliation: 'Istanbul University — Cerrahpaşa',
    stats: [{ num: '15+', label: 'Years in Oncology' }, { num: 'ESMO', label: 'Member' }, { num: 'MDT', label: 'Tumor Board Lead' }],
    expertise: ['Immunotherapy', 'Targeted Smart Drugs', 'Cancer Follow-up'],
    color: 'from-teal-700 to-teal-900',
  },
  {
    name: 'Prof. Dr. Esra Kaytan Sağlam',
    initials: 'EK',
    specialty: 'Radiation Oncology — Former Faculty Dean',
    affiliation: 'Istanbul University — İstanbul Faculty',
    stats: [{ num: 'CyberKnife', label: 'Expert' }, { num: 'TrueBeam', label: 'STx' }, { num: 'Former', label: 'Dean' }],
    expertise: ['CyberKnife Radiosurgery', 'TrueBeam STx', 'Precision Radiotherapy'],
    color: 'from-gold-700 to-amber-900',
  },
];

const specialistAreas = {
  en: ['Plastic & Aesthetic Surgery', 'Hair Restoration', 'Dental & Oral Surgery', 'Reproductive Medicine (IVF)', 'Cardiology', 'Orthopedics'],
  fr: ['Chirurgie Plastique', 'Restauration Capillaire', 'Chirurgie Dentaire', 'Médecine de la Reproduction', 'Cardiologie', 'Orthopédie'],
  ar: ['جراحة التجميل', 'استعادة الشعر', 'جراحة الأسنان', 'طب الإنجاب', 'أمراض القلب', 'جراحة العظام'],
  es: ['Cirugía Plástica', 'Restauración Capilar', 'Cirugía Dental', 'Medicina Reproductiva (FIV)', 'Cardiología', 'Ortopedia'],
};

export default function Doctors() {
  const { t, lang } = useLanguage();
  const areas = specialistAreas[lang] || specialistAreas.en;

  return (
    <section id="doctors" className="py-24 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.doctors.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.doctors.h2a}
            <br />
            <span className="text-gold-600">{t.doctors.h2b}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t.doctors.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {doctors.map((doc, i) => (
            <div key={doc.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm flex flex-col" data-aos="fade-up" data-aos-delay={i * 120}>
              {/* Profile Header */}
              <div className={`bg-gradient-to-br ${doc.color} p-7 flex flex-col items-center text-center`}>
                <div className="w-20 h-20 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center mb-4">
                  <span className="font-serif text-2xl font-bold text-white">{doc.initials}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white leading-snug mb-1">{doc.name}</h3>
                <p className="text-white/70 text-xs">{doc.affiliation}</p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
                  {doc.expertise.map((e) => (
                    <span key={e} className="bg-white/20 text-white text-xs px-2.5 py-0.5 rounded-full font-medium border border-white/20">{e}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                {doc.stats.map(({ num, label }) => (
                  <div key={label} className="py-4 text-center">
                    <div className="font-bold text-navy-950 text-sm">{num}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gold-600 text-sm font-semibold mb-3">{doc.specialty}</p>
                <Link to="/doctors" className="mt-auto flex items-center gap-1.5 text-navy-700 hover:text-gold-600 font-semibold text-sm transition-colors group/btn">
                  <GraduationCap size={14} className="text-gold-500" />
                  View Full Profile
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start" data-aos="fade-up">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <Award size={20} className="text-gold-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-950">{t.doctors.networkTitle}</h3>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6">{t.doctors.networkDesc}</p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/905546745516?text=I%27d%20like%20to%20be%20matched%20with%20a%20specialist"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.doctors.matchBtn} <ArrowRight size={14} />
              </a>
              <Link to="/doctors" className="btn-dark">
                Meet All Doctors
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 lg:max-w-xs">
            {areas.map((area) => (
              <span key={area} className="bg-navy-950 text-white text-sm px-4 py-2 rounded-full font-medium">{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
