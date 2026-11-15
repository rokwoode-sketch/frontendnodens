import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GraduationCap, Award, ArrowRight } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

import { siteImages } from '../data/siteImages';

const doctorFallback = {
  doctorHalil: 'doctorHalilRaw',
  doctorSenem: 'doctorSenemRaw',
  doctorEsra: 'doctorEsraRaw',
};



const specialistAreas = {

  en: ['Plastic & Aesthetic Surgery', 'Hair Restoration', 'Dental & Oral Surgery', 'Reproductive Medicine (IVF)', 'Cardiology', 'Orthopedics'],

  fr: ['Chirurgie Plastique', 'Restauration Capillaire', 'Chirurgie Dentaire', 'Médecine de la Reproduction', 'Cardiologie', 'Orthopédie'],

  ar: ['جراحة التجميل', 'استعادة الشعر', 'جراحة الأسنان', 'طب الإنجاب', 'أمراض القلب', 'جراحة العظام'],

  es: ['Cirugía Plástica', 'Restauración Capilar', 'Cirugía Dental', 'Medicina Reproductiva (FIV)', 'Cardiología', 'Ortopedia'],

};



const colors = ['from-navy-800 to-navy-950', 'from-teal-700 to-teal-900', 'from-gold-700 to-amber-900'];



function DoctorPhoto({ imageKey, name }) {
  const [src, setSrc] = useState(siteImages[imageKey]);
  return (
    <img
      src={src}
      alt={name}
      width={480}
      height={600}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-500"
      onError={() => {
        const fallbackKey = doctorFallback[imageKey];
        if (fallbackKey && src !== siteImages[fallbackKey]) setSrc(siteImages[fallbackKey]);
      }}
    />
  );
}

export default function Doctors() {

  const { t, lang } = useLanguage();

  const areas = specialistAreas[lang] || specialistAreas.en;

  const dc = t.procedureCards.doctors;



  return (

    <section id="doctors" className="py-24 bg-navy-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16" data-aos="fade-up">

          <p className="section-subtitle mb-4">{t.doctors.sectionLabel}</p>

          <h2 className="section-title mb-6">

            {t.doctors.h2a}<br /><span className="text-gold-600">{t.doctors.h2b}</span>

          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">{t.doctors.subtitle}</p>

        </div>



        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {dc.list.map((doc, i) => (

            <div key={doc.name} className="group bg-white border border-clinical-line flex flex-col" data-aos="fade-up" data-aos-delay={i * 80}>

              <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${colors[i]}`}>

                <DoctorPhoto imageKey={doc.imageKey} name={doc.name} />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="font-serif text-lg font-medium text-white leading-snug mb-1 tracking-tight">{doc.name}</h3>

                  <p className="text-white/70 text-xs">{doc.affiliation}</p>

                </div>

              </div>



              <div className="grid grid-cols-3 divide-x divide-clinical-line border-b border-clinical-line">

                {doc.stats.map(({ num, label }) => (

                  <div key={label} className="py-4 text-center">

                    <div className="font-semibold text-navy-950 text-sm tabular-nums">{num}</div>

                    <div className="text-navy-400 text-xs mt-0.5">{label}</div>

                  </div>

                ))}

              </div>



              <div className="p-6 flex-1 flex flex-col">

                <p className="text-teal-medical text-sm font-semibold mb-3">{doc.specialty}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">

                  {doc.expertise.map((e) => (

                    <span key={e} className="text-navy-700 text-xs px-2.5 py-0.5 font-medium border border-clinical-line">{e}</span>

                  ))}

                </div>

                <Link
                  to={`/doctors/${doc.slug}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 px-4 border border-navy-200 text-navy-800 hover:border-teal-medical hover:text-teal-medical font-semibold text-sm transition-colors group/btn"
                >
                  <GraduationCap size={15} className="text-teal-medical" />
                  {dc.viewProfile}
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                </Link>

              </div>

            </div>

          ))}

        </div>



        <div className="bg-white border border-clinical-line p-8 md:p-10 flex flex-col lg:flex-row gap-8 items-start" data-aos="fade-up">

          <div className="flex-1">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-10 h-10 border border-clinical-line bg-navy-50 flex items-center justify-center">

                <Award size={20} className="text-teal-medical" />

              </div>

              <h3 className="font-serif text-2xl font-medium text-navy-950 tracking-tight">{t.doctors.networkTitle}</h3>

            </div>

            <p className="text-navy-500 leading-relaxed mb-6">{t.doctors.networkDesc}</p>

            <div className="flex flex-wrap gap-3">

              <a href="https://wa.me/905546745516?text=I%27d%20like%20to%20be%20matched%20with%20a%20specialist" target="_blank" rel="noopener noreferrer" className="btn-primary">

                {t.doctors.matchBtn} <ArrowRight size={14} />

              </a>

              <Link to="/doctors" className="btn-secondary">{dc.meetAll}</Link>

            </div>

          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-xs">

            {areas.map((area) => (

              <span key={area} className="bg-navy-950 text-white text-sm px-3.5 py-2 font-medium">{area}</span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

