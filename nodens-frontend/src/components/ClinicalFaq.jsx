import { useState } from 'react';
import { ChevronRight, Minus, Plus } from 'lucide-react';

function FaqList({ items, id, mode, open, setOpen }) {
  if (mode === 'controlled') {
    return (
      <div className="border border-clinical-line" data-aos="fade-up">
        {items.map((faq, i) => (
          <div key={faq.q} className={i > 0 ? 'border-t border-clinical-line' : ''}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 px-5 py-5 text-left hover:bg-navy-50/60 transition-colors"
              aria-expanded={open === i}
              aria-controls={`${id}-panel-${i}`}
              id={`${id}-button-${i}`}
            >
              <span className="font-semibold text-navy-950 text-sm leading-snug pr-2">{faq.q}</span>
              <span className="flex-shrink-0 w-7 h-7 border border-clinical-line bg-navy-50 flex items-center justify-center mt-0.5" aria-hidden="true">
                {open === i ? <Minus size={14} className="text-teal-medical" /> : <Plus size={14} className="text-navy-600" />}
              </span>
            </button>
            <div
              id={`${id}-panel-${i}`}
              role="region"
              aria-labelledby={`${id}-button-${i}`}
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-5 pb-5">
                <div className="h-px bg-clinical-line mb-4" />
                <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border border-clinical-line" data-aos="fade-up">
      {items.map((faq, i) => (
        <details key={faq.q} className={i > 0 ? 'border-t border-clinical-line group' : 'group'}>
          <summary className="flex items-center justify-between gap-4 px-5 py-5 cursor-pointer font-semibold text-navy-950 text-sm list-none hover:bg-navy-50/60 transition-colors">
            {faq.q}
            <ChevronRight size={15} className="text-gold-500 flex-shrink-0 transition-transform group-open:rotate-90" />
          </summary>
          <div className="px-5 pb-5 text-navy-500 text-sm leading-relaxed border-t border-clinical-line pt-4">
            {faq.a}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ClinicalFaq({
  items = [],
  title,
  sectionLabel,
  id = 'faq',
  mode = 'details',
  embedded = false,
}) {
  const [open, setOpen] = useState(null);

  if (!items.length) return null;

  const body = (
    <>
      {(sectionLabel || title) && (
        <div className={embedded ? 'mb-8' : 'mb-10'} data-aos="fade-up">
          {sectionLabel && <p className="section-subtitle mb-4">{sectionLabel}</p>}
          {title && <h2 className="section-title">{title}</h2>}
        </div>
      )}
      <FaqList items={items} id={id} mode={mode} open={open} setOpen={setOpen} />
    </>
  );

  if (embedded) return body;

  return (
    <section id={id} className="inst-section bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">{body}</div>
    </section>
  );
}
