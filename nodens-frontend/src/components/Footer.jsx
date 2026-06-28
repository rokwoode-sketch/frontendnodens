import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

function SocialIcon({ name, size = 16 }) {
  const icons = {
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  };
  return icons[name] || null;
}

const socials = [
  { icon: 'whatsapp', lucide: MessageCircle, href: 'https://wa.me/905546745516', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: 'instagram', href: 'https://www.instagram.com/nodenscare', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: 'facebook', href: 'https://www.facebook.com/nodenscare', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: 'linkedin', href: 'https://www.linkedin.com/company/nodenscare', label: 'LinkedIn', color: 'hover:text-blue-300' },
  { icon: 'youtube', href: 'https://www.youtube.com/@nodenscare', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: 'tiktok', href: 'https://www.tiktok.com/@nodenscare', label: 'TikTok', color: 'hover:text-white' },
];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <img
              src={siteImages.logo}
              alt="NodensCare"
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-11 mb-5 w-auto max-w-[160px] object-contain object-left brightness-0 invert"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-xs">{t.footer.tagline}</p>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon, lucide: LucideIcon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NodensCare on ${label}`}
                  className={`w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/70 ${color} transition-all duration-200`}
                >
                  {LucideIcon ? <LucideIcon size={16} /> : <SocialIcon name={icon} />}
                </a>
              ))}
            </div>
          </div>

          {navLinks.map(({ category, items }) => (
            <div key={category}>
              <h4 className="text-gold-400 font-semibold text-xs tracking-[0.15em] uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-white/65 hover:text-white text-sm transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2 text-white/65 text-sm">
            <MapPin size={14} className="text-gold-400 flex-shrink-0" aria-hidden="true" />
            Karat 34, Yenibosna Merkez, Kat 11, 34100 Bahcelievler/Istanbul
          </div>
          <a href="tel:+905546745516" className="flex items-center gap-2 text-white/65 hover:text-white text-sm transition-colors">
            <Phone size={14} className="text-gold-400 flex-shrink-0" aria-hidden="true" />
            +90 554 674 5516
          </a>
          <a href="mailto:info@nodenscare.com" className="flex items-center gap-2 text-white/65 hover:text-white text-sm transition-colors">
            <Mail size={14} className="text-gold-400 flex-shrink-0" aria-hidden="true" />
            info@nodenscare.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/65 text-xs">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-white/65 hover:text-white text-xs transition-colors">{t.footer.terms}</Link>
            <Link to="/contact" className="text-white/65 hover:text-white text-xs transition-colors">{t.footer.privacy}</Link>
            <Link to="/contact" className="text-white/65 hover:text-white text-xs transition-colors">{t.footer.cookies}</Link>
          </div>
          <p className="text-white/65 text-xs">{t.footer.medical}</p>
        </div>
      </div>
    </footer>
  );
}
