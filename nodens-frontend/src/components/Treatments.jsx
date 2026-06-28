import { useState } from 'react';

import { Link } from 'react-router-dom';

import { MessageCircle, ChevronRight } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

import { siteImages } from '../data/siteImages';



const FILTER_KEYS = [null, 'plastic', 'dental', 'hair', 'complex'];



export default function Treatments() {

  const { t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState(0);

  const pc = t.procedureCards;



  const filtered = FILTER_KEYS[activeCategory]

    ? pc.packages.filter((item) => item.categoryKey === FILTER_KEYS[activeCategory])

    : pc.packages;



  const whatsappMessage = (name) =>

    `https://wa.me/905546745516?text=${encodeURIComponent(`Hello, I'm interested in ${name} at NodensCare.`)}`;



  return (

    <section id="treatments" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12" data-aos="fade-up">

          <p className="section-subtitle mb-4">{t.treatments.sectionLabel}</p>

          <h2 className="section-title mb-6">

            {t.treatments.h2a}<br /><span className="text-gold-600">{t.treatments.h2b}</span>

          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">{t.treatments.subtitle}</p>

        </div>



        <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up">

          {t.treatments.filter.map((cat, i) => (

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

                <img src={siteImages[item.imageKey]} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />

                {item.popular && (

                  <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{pc.popular}</div>

                )}

                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">

                  {item.category}

                </div>

              </div>



              <div className="p-6">

                <h3 className="font-serif text-xl font-bold text-navy-950 mb-0.5">{item.name}</h3>

                <p className="text-gold-600 text-xs font-semibold mb-4">{item.subtitle}</p>

                <ul className="space-y-1.5 mb-5">

                  {item.highlights.map((h) => (

                    <li key={h} className="flex items-center gap-2 text-gray-600 text-sm">

                      <ChevronRight size={13} className="text-gold-500 flex-shrink-0" />{h}

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

                        {pc.learnMore}

                      </Link>

                    )}

                    <a href={whatsappMessage(item.name)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-navy-950 hover:bg-navy-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5">

                      <MessageCircle size={13} />{t.treatments.chatNow}

                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>



        <p className="text-center text-gray-400 text-sm mt-10" data-aos="fade-up">

          {t.treatments.priceNote}{' '}

          <a href="https://wa.me/905546745516" className="text-gold-600 hover:underline">{t.treatments.priceLinkText}</a>.

        </p>

      </div>

    </section>

  );

}

