import PageMeta from '../components/PageMeta';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, GraduationCap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import PageHeader from '../components/PageHeader';
import { getDoctor } from '../data/doctors';
import { siteImages } from '../data/siteImages';
import { SOCIAL_URLS } from '../data/socialLinks';

export default function DoctorProfilePage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const doctor = getDoctor(slug);

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-36 gap-4 px-5">
        <PageMeta title="Doctor Not Found | NodensCare" description="This doctor profile does not exist." noindex />
        <p className="text-navy-500">{t.common.doctorNotFound}</p>
        <Link to="/doctors" className="text-teal-medical hover:underline text-sm font-semibold">{t.common.doctorBack}</Link>
      </div>
    );
  }

  const d = doctor.translations[lang] || doctor.translations.en;
  const p = t.pages.doctorProfile;
  const wa = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(`${t.contact.whatsappPrefill} — ${d.name}`)}`;

  return (
    <>
      <PageMeta title={`${d.name} | ${d.title} — NodensCare Istanbul`} description={d.intro} />

      <PageHeader
        title={d.name}
        titleAccent=""
        subtitle={d.title}
        breadcrumbs={[
          { label: t.nav.ourDoctors, to: '/doctors' },
          { label: d.name.split(' ').slice(-1)[0] },
        ]}
      />

      <section className="inst-section bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-1" data-aos="fade-up">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[3/4] overflow-hidden border border-clinical-line bg-navy-100">
                  <img
                    src={doctor.image}
                    alt={d.name}
                    width={480}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => {
                      const raw = siteImages[`${doctor.imageKey}Raw`];
                      if (raw && e.currentTarget.src !== raw) e.currentTarget.src = raw;
                    }}
                  />
                </div>

                <div className="mt-5 border border-clinical-line bg-navy-50 p-6">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-2">{p.affiliation}</p>
                  <p className="text-navy-800 text-sm leading-relaxed">{d.affiliation}</p>
                  <div className="grid grid-cols-3 gap-px bg-clinical-line border border-clinical-line mt-6">
                    {d.stats.map(({ num, label }) => (
                      <div key={label} className="bg-white py-3 text-center">
                        <div className="font-semibold text-navy-950 text-sm tabular-nums">{num}</div>
                        <div className="text-navy-400 text-xs mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {d.expertise.map((e) => (
                      <span key={e} className="bg-white text-navy-700 text-xs px-2.5 py-1 border border-clinical-line font-medium">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8" data-aos="fade-up">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={20} className="text-gold-500" />
                  <h2 className="font-serif text-2xl font-medium text-navy-950 tracking-tight">{p.overview}</h2>
                </div>
                <p className="text-navy-600 leading-[1.7] text-lg">{d.intro}</p>
              </div>

              {d.sections.map((section) => (
                <div key={section.heading} className="border border-clinical-line bg-navy-50/60 p-6 md:p-8">
                  <h3 className="font-serif text-xl font-medium text-navy-950 mb-4 tracking-tight">{section.heading}</h3>
                  {section.body && <p className="text-navy-600 leading-[1.7] mb-4">{section.body}</p>}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-navy-600 text-sm leading-relaxed">
                          <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="flex flex-wrap gap-4 pt-2">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  {p.consultBtn} <ArrowRight size={15} />
                </a>
                <Link to="/doctors" className="btn-secondary">{p.allDoctors}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
