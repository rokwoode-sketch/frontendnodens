import { useState } from 'react';

import { X, ZoomIn } from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

import { galleryCases, galleryFeatured } from '../data/galleryCases';
import { SOCIAL_URLS } from '../data/socialLinks';
import SocialIcon from './SocialIcon';



export default function Gallery({ mode = 'home' }) {

  const { t } = useLanguage();

  const [lightbox, setLightbox] = useState(null);

  const [agreed, setAgreed] = useState(mode === 'page');



  const showSectionHeader = mode === 'home';



  if (!agreed) {

    return (

      <section id="gallery" className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {showSectionHeader && (

            <div className="text-center mb-10" data-aos="fade-up">

              <p className="section-subtitle mb-4">{t.gallery.sectionLabel}</p>

              <h2 className="section-title mb-6">{t.gallery.h2a}<br /><span className="text-gold-600">{t.gallery.h2b}</span></h2>

            </div>

          )}

          <div className="max-w-lg mx-auto bg-navy-50 border border-navy-200 rounded-2xl p-8 text-center" data-aos="fade-up">

            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-5">

              <ZoomIn size={28} className="text-gold-600" />

            </div>

            <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">{t.gallery.noticeTitle}</h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.gallery.disclaimer}</p>

            <button type="button" onClick={() => setAgreed(true)} className="btn-primary">{t.gallery.agreeBtn}</button>

          </div>

        </div>

      </section>

    );

  }



  return (

    <section id="gallery" className={mode === 'page' ? 'py-16 bg-white' : 'py-24 bg-white'}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {showSectionHeader && (

          <div className="text-center mb-14" data-aos="fade-up">

            <p className="section-subtitle mb-4">{t.gallery.sectionLabel}</p>

            <h2 className="section-title mb-6">{t.gallery.h2a}<br /><span className="text-gold-600">{t.gallery.h2b}</span></h2>

            <p className="text-gray-400 text-sm">{t.gallery.disclaimer}</p>

            <p className="text-gray-500 text-sm mt-2">{t.gallery.dragHint}</p>

          </div>

        )}



        {mode === 'page' && (

          <p className="text-gray-500 text-sm text-center mb-10 max-w-2xl mx-auto">{t.gallery.disclaimer}</p>

        )}



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {(mode === 'page' ? galleryCases : galleryFeatured).map((c, i) => {

            const meta = t.gallery.cases[c.procedureKey] || {};

            return (

              <div key={c.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover" data-aos="fade-up" data-aos-delay={i * 80}>

                <div className="relative aspect-square">

                  <img src={c.image} alt={meta.procedure || 'Patient result'} width={688} height={688} className="w-full h-full object-cover" loading="lazy" decoding="async" />

                  <button type="button" onClick={() => setLightbox({ ...c, meta })} aria-label={`View larger image: ${meta.procedure || 'Patient result'}`} className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity z-20">

                    <ZoomIn size={14} className="text-navy-950" />

                  </button>

                </div>

                <div className="p-5">

                  <span className="text-gold-600 text-xs font-bold uppercase tracking-wider">{meta.procedure}</span>

                  <p className="text-navy-800 text-sm font-medium mt-1">{meta.description}</p>

                </div>

              </div>

            );

          })}

        </div>



        <div className="flex flex-wrap justify-center gap-4 mt-12" data-aos="fade-up">
          <a
            href={SOCIAL_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more patient results on Instagram"
            className="btn-dark inline-flex items-center gap-2"
          >
            <SocialIcon name="instagram" size={18} />
            {t.gallery.requestBtn}
          </a>
          <a
            href={SOCIAL_URLS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow patient stories on Facebook"
            className="inline-flex items-center gap-2 border-2 border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide"
          >
            <SocialIcon name="facebook" size={18} />
            {t.gallery.facebookBtn}
          </a>
        </div>

      </div>



      {lightbox && (

        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)} role="presentation">

          <button type="button" onClick={() => setLightbox(null)} aria-label="Close image viewer" className="absolute top-5 right-5 text-white bg-white/20 rounded-full p-2 hover:bg-white/30 transition"><X size={22} /></button>

          <div className="w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()} role="presentation">

            <img src={lightbox.image} alt={lightbox.meta?.procedure || 'Patient result'} width={688} height={688} className="w-full h-full object-contain bg-black" />

          </div>

        </div>

      )}

    </section>

  );

}

