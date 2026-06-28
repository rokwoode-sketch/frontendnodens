import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const WHATSAPP_URL = 'https://wa.me/905546745516?text=Hello%2C%20I%27m%20interested%20in%20learning%20more%20about%20NodensCare%20treatments.';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.contact.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.contact.h2a}
            <br />
            <span className="text-gold-600">{t.contact.h2b}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="max-w-xl mx-auto mb-14" data-aos="fade-up">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-[#25D366] text-white rounded-3xl px-8 py-10 hover:bg-[#1ebe5b] transition-colors shadow-lg hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <MessageCircle size={32} />
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl font-bold mb-1">{t.contact.whatsapp}</div>
              <div className="text-white/90 text-base">{t.contact.whatsappHint}</div>
              <div className="text-white/70 text-sm mt-2">{t.contact.whatsappSub}</div>
            </div>
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10" data-aos="fade-up">
          {[
            { icon: Mail, title: t.contact.email, value: 'info@nodenscare.com', href: 'mailto:info@nodenscare.com' },
            { icon: Phone, title: t.contact.phone, value: '+90 554 674 5516', href: 'tel:+905546745516' },
            { icon: MapPin, title: t.contact.address, value: 'Karat 34, Yenibosna Merkez, Kat 11, 34100 Bahçelievler/İstanbul', href: 'https://maps.google.com/?q=Karat+34+Yenibosna+Istanbul' },
          ].map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 bg-navy-50 rounded-2xl p-5 hover:bg-navy-100 transition-colors"
            >
              <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center">
                <Icon size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="text-navy-700 text-xs font-semibold uppercase tracking-wider mb-1">{title}</div>
                <div className="text-navy-950 text-sm font-medium leading-snug">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-md mx-auto bg-gold-50 border border-gold-200 rounded-2xl p-5" data-aos="fade-up">
          <h4 className="text-gold-700 font-semibold text-sm mb-3 text-center">{t.contact.responseTitle}</h4>
          <div className="space-y-2 text-sm">
            {t.contact.responseTimes.map(({ label, value }) => (
              <div key={label} className="flex justify-between">
                <span className="text-gray-500">{label}</span>
                <span className="text-navy-950 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
