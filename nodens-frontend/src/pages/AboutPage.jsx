import PageMeta from '../components/PageMeta';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import WhyNodens from '../components/WhyNodens';
import ClinicalMedia from '../components/ClinicalMedia';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const exploreRoutes = ['/hair-transplant', '/dental', '/plastic-surgery', '/complex-treatments', '/packages', '/blog'];

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.pages.about;
  const stats = [
    { label: p.stats[0], value: '100%' },
    { label: p.stats[1], value: '5,000+' },
    { label: p.stats[2], value: '50+' },
    { label: p.stats[3], value: '40+' },
  ];

  return (
    <>
      <PageMeta title={p.metaTitle} description={p.metaDescription} />

      <PageHeader
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={p.subtitle}
        breadcrumbs={[{ label: p.breadcrumb }]}
      />

      <section className="inst-section bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div data-aos="fade-up">
              <p className="section-subtitle mb-4">{p.whoWeAre}</p>
              <h2 className="section-title mb-6">{p.h2}</h2>
              <p className="text-navy-600 leading-[1.7] mb-5">{p.p1}</p>
              <p className="text-navy-600 leading-[1.7] mb-5">{p.p2}</p>
              <p className="text-navy-600 leading-[1.7] mb-8">{p.p3}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {p.cta1} <ArrowRight size={16} />
                </Link>
                <Link to="/doctors" className="btn-secondary">{p.cta2}</Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="60">
              <ClinicalMedia
                src={siteImages.aboutHero}
                alt="NodensCare Istanbul medical facility"
                width={800}
                height={560}
                aspectClass="aspect-[4/3]"
              />
              <div className="mt-5 grid grid-cols-2 gap-px bg-clinical-line border border-clinical-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white px-4 py-5 text-center">
                    <div className="font-serif text-2xl font-medium text-navy-950">{stat.value}</div>
                    <div className="text-navy-500 text-xs mt-1.5 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyNodens />

      <section className="inst-section-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-10 h-px bg-gold-400 mx-auto mb-6" aria-hidden="true" />
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-navy-950 mb-4 tracking-tight">{p.exploreTitle}</h2>
          <p className="text-navy-500 mb-8 max-w-xl mx-auto leading-[1.7]">{p.exploreSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {p.links.map((label, i) => (
              <Link
                key={exploreRoutes[i]}
                to={exploreRoutes[i]}
                className="px-5 py-2.5 bg-white border border-clinical-line text-sm font-semibold text-navy-800 hover:border-teal-medical hover:text-teal-medical transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
