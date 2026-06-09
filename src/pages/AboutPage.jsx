import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import WhyNodens from '../components/WhyNodens';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>About NodensCare | Medical Consultancy Istanbul Turkey</title>
        <meta name="description" content="NodensCare is an independent medical consultancy in Istanbul connecting international patients with university-affiliated professors and JCI-accredited hospitals for hair transplant, dental, plastic surgery, and complex treatments." />
      </Helmet>

      <PageHeader
        title="About"
        titleAccent="NodensCare"
        subtitle="NodensCare provides elite medical consultancy in Istanbul, connecting international patients with Turkey's most distinguished professors and advanced surgical centers."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="section-subtitle mb-4">Who We Are</p>
              <h2 className="section-title mb-6">Your Clinical Advocate in Istanbul</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Unlike high-volume clinics, NodensCare acts as your independent clinical advocate. We navigate the Turkish medical landscape to match you with the highest-rated surgical talent and specialized hospitals — never generalists.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Your care is managed exclusively by university-affiliated professors and board-certified specialists. Treatment plans are based on the latest surgical innovations and evidence-based protocols used in leading European and American medical centers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From hair restoration and smile design to rhinoplasty, organ transplant coordination, and IVF — we provide cross-departmental oversight so every step of your clinical journey is unified, safe, and transparent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Begin Clinical Assessment <ArrowRight size={16} />
                </Link>
                <Link to="/doctors" className="btn-secondary">Meet Our Doctors</Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src="https://nodenscare.com/wp-content/uploads/2024/09/nodens-png.png"
                alt="NodensCare Istanbul"
                className="w-full max-w-md mx-auto opacity-90"
              />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'JCI-Accredited Hospitals', value: '100%' },
                  { label: 'International Patients', value: '5,000+' },
                  { label: 'Specialist Doctors', value: '50+' },
                  { label: 'Countries Served', value: '40+' },
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
          <h2 className="font-serif text-3xl font-bold text-navy-950 mb-4">Explore Our Services</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">Each specialty has its own dedicated page with procedures, pricing, and patient guides.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Hair Transplant', to: '/hair-transplant' },
              { label: 'Dental Treatments', to: '/dental' },
              { label: 'Plastic Surgery', to: '/plastic-surgery' },
              { label: 'Complex Treatments', to: '/complex-treatments' },
              { label: 'Treatment Packages', to: '/packages' },
              { label: 'Patient Guides', to: '/blog' },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-navy-800 hover:border-gold-400 hover:text-gold-700 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
