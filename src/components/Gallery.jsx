import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { galleryCases } from '../data/galleryCases';

function BeforeAfterSlider({ beforeSrc, afterSrc, alt, beforeLabel, afterLabel }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (e) => {
    if (!dragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    setSliderPos(Math.min(Math.max((x / rect.width) * 100, 5), 95));
  };

  return (
    <div
      className="relative w-full h-full select-none cursor-col-resize overflow-hidden"
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setDragging(true)}
      onTouchEnd={() => setDragging(false)}
      onTouchMove={handleMove}
    >
      <img src={afterSrc} alt={`${alt} after`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img src={beforeSrc} alt={`${alt} before`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / sliderPos}%`, maxWidth: 'none' }} />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-10" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-0.5"><div className="w-0.5 h-3 bg-gray-400 rounded" /><div className="w-0.5 h-3 bg-gray-400 rounded" /></div>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-full pointer-events-none">{beforeLabel}</div>
      <div className="absolute bottom-3 right-3 bg-gold-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full pointer-events-none">{afterLabel}</div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const [agreed, setAgreed] = useState(false);

  if (!agreed) {
    return (
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <p className="section-subtitle mb-4">{t.gallery.sectionLabel}</p>
            <h2 className="section-title mb-6">{t.gallery.h2a}<br /><span className="text-gold-600">{t.gallery.h2b}</span></h2>
          </div>
          <div className="max-w-lg mx-auto bg-navy-50 border border-navy-200 rounded-2xl p-8 text-center" data-aos="fade-up">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <ZoomIn size={28} className="text-gold-600" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">{t.gallery.noticeTitle}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.gallery.disclaimer}</p>
            <button onClick={() => setAgreed(true)} className="btn-primary">{t.gallery.agreeBtn}</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.gallery.sectionLabel}</p>
          <h2 className="section-title mb-6">{t.gallery.h2a}<br /><span className="text-gold-600">{t.gallery.h2b}</span></h2>
          <p className="text-gray-400 text-sm">{t.gallery.disclaimer}</p>
          <p className="text-gray-500 text-sm mt-2">{t.gallery.dragHint}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryCases.map((c, i) => {
            const meta = t.gallery.cases[i] || {};
            return (
              <div key={c.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="relative h-64">
                  {c.type === 'slider' ? (
                    <BeforeAfterSlider
                      beforeSrc={c.before}
                      afterSrc={c.after}
                      alt={meta.procedure || 'Patient'}
                      beforeLabel={t.gallery.before}
                      afterLabel={t.gallery.after}
                    />
                  ) : (
                    <img src={c.image} alt={meta.procedure || 'Patient result'} className="w-full h-full object-cover" />
                  )}
                  <button onClick={() => setLightbox({ ...c, meta })} className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow opacity-0 group-hover:opacity-100 transition-opacity z-20">
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

        <div className="text-center mt-12" data-aos="fade-up">
          <a href="https://wa.me/905546745516?text=I%27d%20like%20to%20see%20more%20before%20and%20after%20results" target="_blank" rel="noopener noreferrer" className="btn-dark">
            {t.gallery.requestBtn}
          </a>
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 text-white bg-white/20 rounded-full p-2 hover:bg-white/30 transition"><X size={22} /></button>
          <div className="w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {lightbox.type === 'slider' ? (
              <BeforeAfterSlider beforeSrc={lightbox.before} afterSrc={lightbox.after} alt={lightbox.meta?.procedure} beforeLabel={t.gallery.before} afterLabel={t.gallery.after} />
            ) : (
              <img src={lightbox.image} alt={lightbox.meta?.procedure} className="w-full h-full object-contain bg-black" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
