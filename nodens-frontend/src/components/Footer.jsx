import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';
import { ALL_SOCIALS, SOCIAL_URLS } from '../data/socialLinks';
import SocialIcon from './SocialIcon';

const lucideIcons = { MessageCircle };

export default function Footer() {
  const { t } = useLanguage();
  const l = t.footer.links;
  const c = t.footer.categories;

  const navLinks = [
    {
      category: c.plasticSurgery,
      items: [
        { label: l.rhinoplasty, to: '/plastic-surgery#rhinoplasty' },
        { label: l.liposuction, to: '/plastic-surgery#liposuction' },
        { label: l.bbl, to: '/plastic-surgery#bbl' },
        { label: l.breastAug, to: '/plastic-surgery#breast-aug' },
        { label: l.facelift, to: '/plastic-surgery#facelift' },
        { label: l.abdominoplasty, to: '/plastic-surgery#abdominoplasty' },
        { label: l.mommyMakeover, to: '/plastic-surgery#mommy-makeover' },
      ],
    },
    {
      category: c.dental,
      items: [
        { label: l.hollywoodSmile, to: '/dental#hollywood-smile' },
        { label: l.implants, to: '/dental#implants' },
        { label: l.zirconium, to: '/dental#zirconium' },
        { label: l.allOn4, to: '/dental#all-on-4' },
        { label: l.allOn6, to: '/dental#all-on-6' },
      ],
    },
    {
      category: c.hair,
      items: [
        { label: l.fue, to: '/hair-transplant#fue' },
        { label: l.dhi, to: '/hair-transplant#dhi' },
        { label: l.prp, to: '/hair-transplant#prp' },
        { label: l.exosome, to: '/hair-transplant#exosome' },
      ],
    },
    {
      category: c.company,
      items: [
        { label: l.about, to: '/about' },
        { label: l.doctors, to: '/doctors' },
        { label: l.packages, to: '/packages' },
        { label: l.guides, to: '/blog' },
        { label: l.complex, to: '/complex-treatments' },
        { label: l.results, to: '/results' },
        { label: l.faq, to: '/faq' },
        { label: l.contact, to: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] tracking-[0.14em] uppercase text-white/50 font-medium">
            {t.nav.trustBar.jci} · {t.nav.trustBar.professors} · {t.nav.trustBar.location}
          </p>
          <a
            href={SOCIAL_URLS.whatsapp || 'https://wa.me/905546745516'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.04em] text-white bg-teal-medical hover:bg-teal-700 px-4 py-2 transition-colors"
          >
            <MessageCircle size={14} />
            {t.nav?.ctaShort || t.contact?.whatsapp || 'Consult'}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src={siteImages.logo}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                decoding="async"
                aria-hidden="true"
                className="h-9 w-9 object-contain brightness-0 invert"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-serif text-xl font-semibold text-white tracking-tight">NodensCare</span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-xs">{t.footer.tagline}</p>
            <p className="text-white/55 text-[10px] font-semibold tracking-[0.16em] uppercase mb-3">{t.footer.followUs}</p>
            <div className="flex gap-2 flex-wrap">
              {ALL_SOCIALS.map(({ id, href, label, lucide }) => {
                const LucideIcon = lucide ? lucideIcons[lucide] : null;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`NodensCare on ${label}`}
                    className="w-8 h-8 border border-white/25 hover:border-white/50 flex items-center justify-center text-white/75 hover:text-white transition-colors"
                  >
                    {LucideIcon ? <LucideIcon size={14} /> : <SocialIcon name={id} size={14} />}
                  </a>
                );
              })}
            </div>
          </div>

          {navLinks.map(({ category, items }) => (
            <div key={category}>
              <h4 className="text-gold-300 font-semibold text-[11px] tracking-[0.16em] uppercase mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-white/70 hover:text-white text-sm transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin size={14} className="text-teal-medical flex-shrink-0" aria-hidden="true" />
            Karat 34, Yenibosna Merkez, Kat 11, 34100 Bahcelievler/Istanbul
          </div>
          <a href="tel:+905546745516" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <Phone size={14} className="text-teal-medical flex-shrink-0" aria-hidden="true" />
            +90 554 674 5516
          </a>
          <a href="mailto:info@nodenscare.com" className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
            <Mail size={14} className="text-teal-medical flex-shrink-0" aria-hidden="true" />
            info@nodenscare.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/55 text-xs">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-white/55 hover:text-white text-xs transition-colors">{t.footer.terms}</Link>
            <Link to="/contact" className="text-white/55 hover:text-white text-xs transition-colors">{t.footer.privacy}</Link>
            <Link to="/contact" className="text-white/55 hover:text-white text-xs transition-colors">{t.footer.cookies}</Link>
          </div>
          <p className="text-white/50 text-xs">{t.footer.medical}</p>
        </div>
      </div>
    </footer>
  );
}
