import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SocialFollowContact } from './SocialFollow';
import { SOCIAL_URLS } from '../data/socialLinks';

export default function Contact() {
  const { t } = useLanguage();
  const whatsappUrl = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent(t.contact.whatsappPrefill)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12 md:mb-14" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.contact.sectionLabel}</p>
          <h2 className="section-title mb-5">
            {t.contact.h2a}{' '}
            <span className="text-teal-medical">{t.contact.h2b}</span>
          </h2>
          <p className="text-navy-500 text-base md:text-lg leading-[1.7]">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 mb-12" data-aos="fade-up">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-clinical-line bg-navy-950 text-white px-8 py-10 md:px-10 md:py-12 hover:border-gold-400/40 transition-colors"
          >
            <div className="w-10 h-px bg-gold-400 mb-6" aria-hidden="true" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-400 mb-4">
              {t.nav?.ctaShort || 'Consult'}
            </p>
            <div className="flex items-start gap-4 mb-4">
              <MessageCircle size={22} className="text-gold-300 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-serif text-2xl font-medium tracking-tight mb-2">{t.contact.whatsapp}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed">{t.contact.whatsappHint}</p>
                <p className="text-white/50 text-sm mt-3">{t.contact.whatsappSub}</p>
              </div>
            </div>
          </a>

          <div className="border border-clinical-line bg-navy-50 px-6 py-8 md:px-8">
            <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-teal-medical mb-5">
              {t.contact.responseTitle}
            </h4>
            <div className="space-y-3 text-sm mb-8">
              {t.contact.responseTimes.map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4 border-b border-clinical-line pb-3 last:border-0 last:pb-0">
                  <span className="text-navy-500">{label}</span>
                  <span className="text-navy-950 font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                { icon: Mail, title: t.contact.email, value: 'info@nodenscare.com', href: 'mailto:info@nodenscare.com' },
                { icon: Phone, title: t.contact.phone, value: '+90 554 674 5516', href: 'tel:+905546745516' },
                { icon: MapPin, title: t.contact.address, value: 'Karat 34, Yenibosna Merkez, Kat 11, Bahçelievler/İstanbul', href: 'https://maps.google.com/?q=Karat+34+Yenibosna+Istanbul' },
              ].map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Icon size={16} className="text-teal-medical flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-navy-400 mb-0.5">{title}</div>
                    <div className="text-navy-900 text-sm group-hover:text-teal-medical transition-colors leading-snug">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <SocialFollowContact />
      </div>
    </section>
  );
}
