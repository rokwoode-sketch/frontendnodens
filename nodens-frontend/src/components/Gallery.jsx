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
      <section id="gallery" className="py-24 md:py-32 bg-navy-50 border-y border-clinical-line">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {showSectionHeader && (
            <div className="max-w-2xl mb-12" data-aos="fade-up">
              <p className="section-subtitle mb-5">{t.gallery.sectionLabel}</p>
              <h2 className="section-title">
                {t.gallery.h2a}{' '}
                <span className="text-teal-medical">{t.gallery.h2b}</span>
              </h2>
            </div>
          )}
          <div className="max-w-xl border border-clinical-line bg-white px-8 py-10 md:px-12 md:py-12" data-aos="fade-up">
            <p className="institutional-label mb-4">{t.gallery.noticeTitle}</p>
            <p className="text-navy-500 text-[15px] leading-[1.7] mb-8">{t.gallery.disclaimer}</p>
            <button type="button" onClick={() => setAgreed(true)} className="btn-primary">
              {t.gallery.agreeBtn}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className={mode === 'page' ? 'py-16 bg-white' : 'py-24 md:py-32 bg-navy-50 border-y border-clinical-line'}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {showSectionHeader && (
          <div className="max-w-2xl mb-14 md:mb-16" data-aos="fade-up">
            <p className="section-subtitle mb-5">{t.gallery.sectionLabel}</p>
            <h2 className="section-title mb-5">
              {t.gallery.h2a}{' '}
              <span className="text-teal-medical">{t.gallery.h2b}</span>
            </h2>
            <p className="text-navy-500 text-[15px] leading-[1.7]">{t.gallery.disclaimer}</p>
          </div>
        )}

        {mode === 'page' && (
          <p className="text-navy-500 text-sm mb-10 max-w-2xl">{t.gallery.disclaimer}</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {(mode === 'page' ? galleryCases : galleryFeatured).map((c, i) => {
            const meta = t.gallery.cases[c.procedureKey] || {};
            return (
              <article
                key={c.id}
                className="group bg-white border border-clinical-line"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-navy-100">
                  <img
                    src={c.image}
                    alt={meta.procedure || 'Patient result'}
                    width={688}
                    height={860}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    type="button"
                    onClick={() => setLightbox({ ...c, meta })}
                    aria-label={`View larger image: ${meta.procedure || 'Patient result'}`}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/95 border border-clinical-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <ZoomIn size={14} className="text-navy-950" />
                  </button>
                </div>
                <div className="px-5 py-5 border-t border-clinical-line">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-1.5">
                    {meta.procedure}
                  </p>
                  <p className="text-navy-700 text-[14px] leading-snug">{meta.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-3 mt-12" data-aos="fade-up">
          <a
            href={SOCIAL_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more patient results on Instagram"
            className="btn-dark inline-flex items-center gap-2"
          >
            <SocialIcon name="instagram" size={16} />
            {t.gallery.requestBtn}
          </a>
          <a
            href={SOCIAL_URLS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow patient stories on Facebook"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <SocialIcon name="facebook" size={16} />
            {t.gallery.facebookBtn}
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-navy-950/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 text-white border border-white/20 p-2 hover:bg-white/10 transition"
          >
            <X size={22} />
          </button>
          <div className="w-full max-w-4xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()} role="presentation">
            <img
              src={lightbox.image}
              alt={lightbox.meta?.procedure || 'Patient result'}
              width={688}
              height={688}
              className="w-full h-full object-contain bg-navy-950"
            />
          </div>
        </div>
      )}
    </section>
  );
}
