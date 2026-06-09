import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import WhyNodens from '../components/WhyNodens';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const exploreRoutes = ['/hair-transplant', '/dental', '/plastic-surgery', '/complex-treatments', '/packages', '/blog'];

export default function AboutPage() {
  const { t } = useLanguage();
  const p = t.pages.about;

  return (
    <>
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
      </Helmet>

      <PageHeader
        title={p.title}
        titleAccent={p.titleAccent}
        subtitle={p.subtitle}
        breadcrumbs={[{ label: p.breadcrumb }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="section-subtitle mb-4">{p.whoWeAre}</p>
              <h2 className="section-title mb-6">{p.h2}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{p.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-5">{p.p2}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{p.p3}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  {p.cta1} <ArrowRight size={16} />
                </Link>
                <Link to="/doctors" className="btn-secondary">{p.cta2}</Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src={siteImages.logo} alt="NodensCare Istanbul" className="w-full max-w-md mx-auto opacity-90" />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: p.stats[0], value: '100%' },
                  { label: p.stats[1], value: '5,000+' },
                  { label: p.stats[2], value: '50+' },
                  { label: p.stats[3], value: '40+' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                    <div className="text-gold-600 font-serif text-2xl font-bold">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyNodens />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-950 mb-4">{p.exploreTitle}</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">{p.exploreSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {p.links.map((label, i) => (
              <Link key={exploreRoutes[i]} to={exploreRoutes[i]} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-navy-800 hover:border-gold-400 hover:text-gold-700 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
