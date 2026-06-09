import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHeader from '../components/PageHeader';
import { getDoctor } from '../data/doctors';
import { siteImages } from '../data/siteImages';

export default function DoctorProfilePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const doctor = getDoctor(slug);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 gap-4">
        <p className="text-gray-500">Doctor not found.</p>
        <Link to="/doctors" className="text-gold-600 hover:underline text-sm">Back to Our Doctors</Link>
      </div>
    );
  }

  const d = doctor.translations[lang] || doctor.translations.en;
  const p = t.pages.doctorProfile;

  return (
    <>
      <Helmet>
        <title>{d.name} | {d.title} — NodensCare Istanbul</title>
        <meta name="description" content={d.intro} />
      </Helmet>

      <PageHeader
        title={d.name}
        titleAccent=""
        subtitle={d.title}
        breadcrumbs={[
          { label: t.nav.ourDoctors, to: '/doctors' },
          { label: d.name.split(' ').slice(-1)[0] },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1" data-aos="fade-up">
              <div className="sticky top-28">
                <img
                  src={doctor.image}
                  alt={d.name}
                  referrerPolicy="no-referrer"
                  className="w-full rounded-2xl shadow-xl object-cover object-top aspect-[3/4]"
                  onError={(e) => {
                    const raw = siteImages[`${doctor.imageKey}Raw`];
                    if (raw && e.currentTarget.src !== raw) e.currentTarget.src = raw;
                  }}
                />
                <div className="mt-6 bg-navy-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-gold-600 text-sm font-semibold mb-2">{p.affiliation}</p>
                  <p className="text-navy-800 text-sm leading-relaxed">{d.affiliation}</p>
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-200">
                    {d.stats.map(({ num, label }) => (
                      <div key={label} className="text-center">
                        <div className="font-bold text-navy-950 text-sm">{num}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {d.expertise.map((e) => (
                      <span key={e} className="bg-white text-navy-700 text-xs px-2.5 py-1 rounded-full border border-gray-200 font-medium">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-10" data-aos="fade-up">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={22} className="text-gold-500" />
                  <h2 className="font-serif text-2xl font-bold text-navy-950">{p.overview}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{d.intro}</p>
              </div>

              {d.sections.map((section) => (
                <div key={section.heading} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-4">{section.heading}</h3>
                  {section.body && <p className="text-gray-600 leading-relaxed mb-4">{section.body}</p>}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                          <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`https://wa.me/905546745516?text=${encodeURIComponent(`I'd like to consult with ${d.name} at NodensCare.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {p.consultBtn} <ArrowRight size={15} />
                </a>
                <Link to="/doctors" className="btn-outline">{p.allDoctors}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
