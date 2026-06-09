import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const treatmentData = [
  { id: 1, category: 'Hair Transplant', nameKey: 'Hair Transplant', subtitle: 'FUE Sapphire · DHI Method', priceEur: '1,500', priceUsd: '1,800', image: siteImages.hair, link: '/blog/hair-transplant', highlightKeys: ['Permanent results', '3,000–5,000 grafts', 'Natural hairline design', '3-night stay included'], popular: true },
  { id: 2, category: 'Dental', nameKey: 'Hollywood Smile', subtitle: 'E-max Veneers · Zirconia', priceEur: '3,200', priceUsd: '3,800', image: siteImages.hollywoodSmile, link: '/blog/dental', highlightKeys: ['20 porcelain veneers', 'Digital Smile Design preview', 'Metal-free, natural look', '5-night stay included'], popular: false },
  { id: 3, category: 'Plastic Surgery', nameKey: 'Liposuction 360 + BBL', subtitle: 'Full Midsection & Glute Sculpting', priceEur: '5,300', priceUsd: '6,200', image: siteImages.bbl, link: '/blog/plastic-surgery', highlightKeys: ['360° midsection contouring', 'Own fat transfer to glutes', 'Hourglass silhouette', '10-night stay included'], popular: true },
  { id: 4, category: 'Plastic Surgery', nameKey: 'Rhinoplasty', subtitle: 'Open · Closed · Ethnic · Revision', priceEur: '3,500', priceUsd: '4,000', image: siteImages.rhinoplasty, link: '/blog/plastic-surgery', highlightKeys: ['3D digital planning', 'Ethnic preservation', 'Functional correction', '7-night stay included'], popular: false },
  { id: 5, category: 'Dental', nameKey: 'All-on-6 Implants', subtitle: 'Full Arch · Fixed · Permanent', priceEur: '6,200', priceUsd: '7,400', image: siteImages.allOn6, link: '/blog/dental', highlightKeys: ['Fixed porcelain bridge', 'Day-1 immediate loading', 'Premium implant systems', '7-night stay included'], popular: true },
  { id: 6, category: 'Plastic Surgery', nameKey: 'Facelift', subtitle: 'Deep Plane SMAS Technique', priceEur: '4,200', priceUsd: '5,000', image: siteImages.facelift, link: '/blog/plastic-surgery', highlightKeys: ['Deep plane SMAS technique', 'Natural, non-operated look', 'Jawline & neck sculpting', '10-night stay included'], popular: false },
  { id: 7, category: 'Plastic Surgery', nameKey: 'Breast Augmentation', subtitle: 'Motiva · Mentor Premium Implants', priceEur: '3,800', priceUsd: '4,500', image: siteImages.bbl, link: '/blog/plastic-surgery', highlightKeys: ['Premium Motiva / Mentor', 'Dual-plane placement', 'Custom size selection', '7-night stay included'], popular: false },
  { id: 8, category: 'Hair Transplant', nameKey: 'PRP & Exosome Therapy', subtitle: 'Non-Surgical Hair Revitalization', priceEur: '800', priceUsd: '950', image: siteImages.hair, link: '/blog/hair-transplant', highlightKeys: ['Activates dormant follicles', 'Zero downtime', 'Scalp health protocol', 'Same-day treatment'], popular: false },
  { id: 9, category: 'Complex', nameKey: 'IVF & Genetic Screening', subtitle: 'PGD / PGS · EmbryoScope Technology', priceEur: 'Custom', priceUsd: 'Custom', image: siteImages.complex, link: '/blog/complex-treatments', highlightKeys: ['EmbryoScope time-lapse', 'PGD/PGS genetic testing', 'Egg & embryo donation', 'Full cycle coordination'], popular: false },
];

export default function Treatments() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);

  const filterCategories = t.treatments.filter;
  const categoryMap = { 0: null, 1: 'Plastic Surgery', 2: 'Dental', 3: 'Hair Transplant', 4: 'Complex' };

  const filtered = categoryMap[activeCategory]
    ? treatmentData.filter((item) => item.category === categoryMap[activeCategory])
    : treatmentData;

  const whatsappMessage = (name) =>
    `https://wa.me/905546745516?text=${encodeURIComponent(`Hello, I'm interested in ${name} at NodensCare.`)}`;

  return (
    <section id="treatments" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.treatments.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.treatments.h2a}
            <br />
            <span className="text-gold-600">{t.treatments.h2b}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.treatments.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">
          {filterCategories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === i ? 'bg-navy-950 text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm" data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="relative h-52 overflow-hidden">
                <img src={item.image} alt={`${item.nameKey} Istanbul Turkey`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">Popular</div>
                )}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-0.5">{item.nameKey}</h3>
                <p className="text-gold-600 text-xs font-semibold mb-4">{item.subtitle}</p>
                <ul className="space-y-1.5 mb-5">
                  {item.highlightKeys.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-gray-600 text-sm">
                      <ChevronRight size={13} className="text-gold-500 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    {item.priceEur === 'Custom' ? (
                      <span className="text-navy-950 font-bold text-lg">{t.treatments.customQuote}</span>
                    ) : (
                      <>
                        <span className="text-navy-950 font-bold text-2xl font-serif">€{item.priceEur}</span>
                        <span className="text-gray-400 text-sm ml-2">/ ${item.priceUsd}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.link && (
                      <Link to={item.link} className="text-gold-600 hover:text-gold-700 text-xs font-semibold underline underline-offset-2 whitespace-nowrap">
                        Learn more
                      </Link>
                    )}
                    <a
                      href={whatsappMessage(item.nameKey)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-navy-950 hover:bg-navy-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={13} />
                      {t.treatments.chatNow}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10" data-aos="fade-up">
          {t.treatments.priceNote}{' '}
          <a href="https://wa.me/905546745516" className="text-gold-600 hover:underline">
            {t.treatments.priceLinkText}
          </a>.
        </p>
      </div>
    </section>
  );
}
