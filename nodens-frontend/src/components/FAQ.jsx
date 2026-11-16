import { useLanguage } from '../i18n/LanguageContext';
import ClinicalFaq from './ClinicalFaq';
import InstitutionalCta from './InstitutionalCta';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <>
      <section id="faq" className="inst-section-muted">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <ClinicalFaq items={t.faq.items} mode="controlled" id="faq-list" embedded />
        </div>
      </section>

      <InstitutionalCta
        title={t.faq.bottomText}
        subtitle={t.contact.whatsappHint}
        primaryLabel={t.faq.askBtn}
        secondaryLabel={t.patientJourney.ctaContact}
      />
    </>
  );
}
