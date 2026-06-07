import { Link } from 'react-router-dom';
import { Scissors, Smile, Leaf, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Leaf, Smile, Scissors, Heart];
const images = [
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=320&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffedba28bc4?w=500&h=320&fit=crop',
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=320&fit=crop',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=320&fit=crop',
];
const badgeColors = ['bg-gold-500', 'bg-teal-600', 'bg-navy-700', 'bg-red-700'];
const pageLinks = ['/hair-transplant', '/dental', '/plastic-surgery', '/complex-treatments'];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.services.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.services.h2a}
            <br />
            <span className="text-gold-600">{t.services.h2b}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover shadow-sm"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={images[i]} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent" />
                  <div className={`absolute top-4 left-4 ${badgeColors[i]} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {service.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-1">{service.title}</h3>
                  <p className="text-gold-600 text-xs font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.procedures.map((p) => (
                      <span key={p} className="bg-navy-50 text-navy-700 text-xs px-2.5 py-1 rounded-full font-medium">{p}</span>
                    ))}
                  </div>
                  <Link
                    to={pageLinks[i]}
                    className="flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors group/btn"
                  >
                    {t.services.explore}
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
