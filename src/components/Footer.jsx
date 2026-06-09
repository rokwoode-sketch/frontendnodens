import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const navLinks = [
  {
    category: 'Plastic Surgery',
    items: [
      { label: 'Rhinoplasty', to: '/plastic-surgery#rhinoplasty' },
      { label: 'Liposuction 360', to: '/plastic-surgery#liposuction' },
      { label: 'Brazilian Butt Lift', to: '/plastic-surgery#bbl' },
      { label: 'Breast Augmentation', to: '/plastic-surgery#breast-aug' },
      { label: 'Facelift', to: '/plastic-surgery#facelift' },
      { label: 'Abdominoplasty', to: '/plastic-surgery#abdominoplasty' },
      { label: 'Mommy Makeover', to: '/plastic-surgery#mommy-makeover' },
    ],
  },
  {
    category: 'Dental',
    items: [
      { label: 'Hollywood Smile', to: '/dental#hollywood-smile' },
      { label: 'Dental Implants', to: '/dental#implants' },
      { label: 'Zirconium Crowns', to: '/dental#zirconium' },
      { label: 'All-on-4', to: '/dental#all-on-4' },
      { label: 'All-on-6', to: '/dental#all-on-6' },
    ],
  },
  {
    category: 'Hair Transplant',
    items: [
      { label: 'FUE Sapphire', to: '/hair-transplant#fue' },
      { label: 'DHI / Choi Pen', to: '/hair-transplant#dhi' },
      { label: 'PRP & Mesotherapy', to: '/hair-transplant#prp' },
      { label: 'Exosome Therapy', to: '/hair-transplant#exosome' },
    ],
  },
  {
    category: 'Company',
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Doctors', to: '/doctors' },
      { label: 'Treatment Packages', to: '/packages' },
      { label: 'Patient Guides', to: '/blog' },
      { label: 'Complex Treatments', to: '/complex-treatments' },
      { label: 'Before & After', to: '/results' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

const socials = [
  { icon: FaWhatsapp, href: 'https://wa.me/905546745516', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: FaInstagram, href: 'https://www.instagram.com/nodenscare', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: FaFacebook, href: 'https://www.facebook.com/nodenscare', label: 'Facebook', color: 'hover:text-blue-400' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/nodenscare', label: 'LinkedIn', color: 'hover:text-blue-300' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@nodenscare', label: 'YouTube', color: 'hover:text-red-400' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@nodenscare', label: 'TikTok', color: 'hover:text-white' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <img
              src="https://nodenscare.com/wp-content/uploads/2024/09/nodens-png.png"
              alt="NodensCare"
              className="h-10 mb-5 object-contain brightness-0 invert"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">{t.footer.tagline}</p>
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/60 ${color} transition-all duration-200`}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {navLinks.map(({ category, items }) => (
            <div key={category}>
              <h4 className="text-gold-400 font-semibold text-xs tracking-[0.15em] uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <MapPin size={14} className="text-gold-400 flex-shrink-0" />
            Karat 34, Yenibosna Merkez, Kat 11, 34100 Bahcelievler/Istanbul
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Phone size={14} className="text-gold-400 flex-shrink-0" />
            +90 554 674 5516
          </div>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Mail size={14} className="text-gold-400 flex-shrink-0" />
            info@nodenscare.com
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{t.footer.terms}</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{t.footer.cookies}</a>
          </div>
          <p className="text-white/20 text-xs">{t.footer.medical}</p>
        </div>
      </div>
    </footer>
  );
}
