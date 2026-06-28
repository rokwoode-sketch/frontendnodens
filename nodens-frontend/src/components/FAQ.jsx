import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.faq.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.faq.h2a}
            <br />
            <span className="text-gold-600">{t.faq.h2b}</span>
          </h2>
          <p className="text-gray-500">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 40}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
              >
                <span className="font-semibold text-navy-950 text-sm leading-snug pr-2">{faq.q}</span>
                <span className="flex-shrink-0 w-7 h-7 bg-navy-50 rounded-full flex items-center justify-center mt-0.5" aria-hidden="true">
                  {open === i ? <Minus size={14} className="text-gold-600" /> : <Plus size={14} className="text-navy-600" />}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-500 text-sm mb-4">{t.faq.bottomText}</p>
          <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.faq.askBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
