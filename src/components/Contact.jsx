import { useState } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const procedures = {
  en: ['Hair Transplant', 'Hollywood Smile', 'Dental Implants', 'Rhinoplasty', '360 Liposuction + BBL', 'Facelift', 'Breast Augmentation', 'Abdominoplasty', 'Organ Transplant', 'Cancer Treatment', 'IVF Treatment', 'Other / Multiple'],
  fr: ['Greffe de Cheveux', 'Hollywood Smile', 'Implants Dentaires', 'Rhinoplastie', 'Liposuccion 360 + BBL', 'Lifting', 'Augmentation Mammaire', 'Abdominoplastie', 'Transplantation d\'Organes', 'Traitement du Cancer', 'FIV', 'Autre / Multiple'],
  ar: ['زراعة الشعر', 'ابتسامة هوليوود', 'زراعة الأسنان', 'تجميل الأنف', 'شفط الدهون 360 + BBL', 'شد الوجه', 'تكبير الثدي', 'شد البطن', 'زراعة الأعضاء', 'علاج السرطان', 'أطفال الأنابيب', 'أخرى / متعددة'],
  es: ['Trasplante Capilar', 'Hollywood Smile', 'Implantes Dentales', 'Rinoplastia', 'Liposucción 360 + BBL', 'Lifting Facial', 'Aumento de Senos', 'Abdominoplastia', 'Trasplante de Órganos', 'Tratamiento del Cáncer', 'FIV', 'Otro / Múltiple'],
};

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', procedure: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: `NodensCare Inquiry — ${form.procedure || 'General'} [${lang.toUpperCase()}]`,
          from_name: `${form.firstName} ${form.lastName}`,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ firstName: '', lastName: '', email: '', phone: '', procedure: '', message: '' });
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="section-subtitle mb-4">{t.contact.sectionLabel}</p>
          <h2 className="section-title mb-6">
            {t.contact.h2a}
            <br />
            <span className="text-gold-600">{t.contact.h2b}</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            <a
              href="https://wa.me/905546745516"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 hover:bg-[#1ebe5b] transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="font-bold text-base">{t.contact.whatsapp}</div>
                <div className="text-white/80 text-sm">{t.contact.whatsappSub}</div>
              </div>
            </a>

            {[
              { icon: Mail, title: t.contact.email, value: 'info@nodenscare.com', href: 'mailto:info@nodenscare.com' },
              { icon: Phone, title: t.contact.phone, value: '+90 554 674 5516', href: 'tel:+905546745516' },
              { icon: MapPin, title: t.contact.address, value: 'Karat 34, Yenibosna Merkez, Kat 11, 34100 Bahçelievler/İstanbul', href: 'https://maps.google.com/?q=Karat+34+Yenibosna+Istanbul' },
            ].map(({ icon: Icon, title, value, href }) => (
              <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-start gap-4 bg-navy-50 rounded-2xl p-5 hover:bg-navy-100 transition-colors">
                <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-navy-700 text-xs font-semibold uppercase tracking-wider mb-0.5">{title}</div>
                  <div className="text-navy-950 text-sm font-medium leading-snug">{value}</div>
                </div>
              </a>
            ))}

            <div className="bg-gold-50 border border-gold-200 rounded-2xl p-5">
              <h4 className="text-gold-700 font-semibold text-sm mb-3">{t.contact.responseTitle}</h4>
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

          <div className="lg:col-span-3" data-aos="fade-left">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-green-50 rounded-2xl border border-green-200">
                <CheckCircle size={56} className="text-green-500 mb-5" />
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-2">{t.contact.successTitle}</h3>
                <p className="text-gray-500 max-w-sm">{t.contact.successText}</p>
                <a href="https://wa.me/905546745516" target="_blank" rel="noopener noreferrer" className="mt-6 btn-primary">
                  <MessageCircle size={14} />
                  {t.contact.successBtn}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.firstName} <span className="text-red-400">*</span></label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.lastName}</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.emailLabel}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.phoneLabel} <span className="text-red-400">*</span></label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+44 7700 000000"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.procedureLabel}</label>
                  <select name="procedure" value={form.procedure} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition appearance-none">
                    <option value="">{t.contact.procedurePlaceholder}</option>
                    {(procedures[lang] || procedures.en).map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-1.5">{t.contact.messageLabel}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition resize-none" />
                </div>

                <button type="submit" disabled={status === 'loading'}
                  className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.contact.sending}</>
                  ) : (
                    <><Send size={16} />{t.contact.submitBtn}</>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    {t.contact.errorText}
                  </p>
                )}
                <p className="text-gray-400 text-xs text-center">{t.contact.privacy}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
