import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const langLabels = {
  en: 'EN',
  fr: 'FR',
  ar: 'AR',
  es: 'ES',
};

export default function Navbar() {
  const { lang, t, changeLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [scrolled, setScrolled] = useState(!isHomePage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) { setScrolled(true); return; }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: t.nav.plasticSurgery,
      href: '/plastic-surgery',
      children: [
        { label: 'Rhinoplasty', href: '/plastic-surgery#rhinoplasty' },
        { label: 'Liposuction 360', href: '/plastic-surgery#liposuction' },
        { label: 'Brazilian Butt Lift (BBL)', href: '/plastic-surgery#bbl' },
        { label: 'Breast Augmentation', href: '/plastic-surgery#breast-aug' },
        { label: 'Facelift', href: '/plastic-surgery#facelift' },
        { label: 'Blepharoplasty', href: '/plastic-surgery#blepharoplasty' },
        { label: 'Abdominoplasty', href: '/plastic-surgery#abdominoplasty' },
        { label: 'Mommy Makeover', href: '/plastic-surgery#mommy-makeover' },
        { label: 'Neck Lift', href: '/plastic-surgery#neck-lift' },
        { label: 'Breast Lift', href: '/plastic-surgery#breast-lift' },
        { label: 'Gynecomastia', href: '/plastic-surgery#gynecomastia' },
        { label: 'Arm Lift', href: '/plastic-surgery#arm-lift' },
      ],
    },
    {
      label: t.nav.dental,
      href: '/dental',
      children: [
        { label: 'Hollywood Smile', href: '/dental#hollywood-smile' },
        { label: 'Dental Implants', href: '/dental#implants' },
        { label: 'Zirconium Crowns', href: '/dental#zirconium' },
        { label: 'All-on-4', href: '/dental#all-on-4' },
        { label: 'All-on-6', href: '/dental#all-on-6' },
        { label: 'Bone Graft & Sinus Lift', href: '/dental#bone-graft' },
      ],
    },
    {
      label: t.nav.hairTransplant,
      href: '/hair-transplant',
      children: [
        { label: 'FUE Sapphire', href: '/hair-transplant#fue' },
        { label: 'DHI / Choi Pen', href: '/hair-transplant#dhi' },
        { label: 'PRP & Mesotherapy', href: '/hair-transplant#prp' },
        { label: 'Exosome Therapy', href: '/hair-transplant#exosome' },
      ],
    },
    { label: 'Complex Treatments', href: '/complex-treatments' },
    { label: 'Packages', href: '/packages' },
    { label: 'Guides', href: '/blog' },
    { label: t.nav.ourDoctors, href: '/doctors' },
    { label: t.nav.beforeAfter, href: '/results' },
    { label: t.nav.faq, href: '/faq' },
  ];

  const isRTL = t.dir === 'rtl';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-navy-950 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/65 via-black/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 z-10 flex-shrink-0">
          <img
            src="https://nodenscare.com/wp-content/uploads/2024/09/nodens-png.png"
            alt="NodensCare"
            className="h-10 w-auto object-contain brightness-0 invert"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden font-serif text-xl font-bold text-white">NodensCare</span>
        </Link>

        <div className={`hidden xl:flex items-center gap-0.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1 text-white/90 hover:text-gold-400 font-medium text-sm px-2.5 py-2 rounded-lg transition-colors duration-200"
              >
                {link.label}
                {link.children && (
                  <ChevronDown size={13} className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                )}
              </Link>

              {link.children && openDropdown === link.label && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[220px] z-50`}>
                  <div className="px-3 pb-2 pt-1 border-b border-gray-100 mb-1">
                    <Link to={link.href} className="text-xs font-bold text-gold-600 uppercase tracking-wider hover:text-gold-700">
                      View All {link.label}
                    </Link>
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-navy-800 hover:bg-gold-50 hover:text-gold-700 transition-colors duration-150"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
            <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-3 py-2 rounded-full transition-all">
              <span>{langLabels[lang]}</span>
              <ChevronDown size={11} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 py-1.5 min-w-[100px] z-50`}>
                {Object.entries(langLabels).map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => { changeLanguage(code); setLangOpen(false); }}
                    className={`flex items-center w-full px-4 py-2.5 text-sm transition-colors ${
                      code === lang ? 'bg-gold-50 text-gold-700 font-bold' : 'text-navy-800 hover:bg-gray-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="hidden sm:flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
          >
            <Phone size={13} />
            {t.nav.cta}
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`xl:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-950 border-t border-white/10 px-4 pb-6 pt-4 max-h-[70vh] overflow-y-auto">
          <div className="flex gap-2 mb-5 flex-wrap">
            {Object.entries(langLabels).map(([code, label]) => (
              <button key={code} onClick={() => changeLanguage(code)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  code === lang ? 'bg-gold-500 border-gold-500 text-white' : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}>
                {label}
              </button>
            ))}
          </div>

          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="block w-full text-left text-white/90 hover:text-gold-400 font-semibold py-3 text-sm border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}

          <Link to="/contact" className="mt-4 btn-primary w-full justify-center">
            <Phone size={14} />
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
