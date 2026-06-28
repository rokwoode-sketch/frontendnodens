import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ShieldCheck, GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const langOptions = {
  en: { label: 'EN', flag: '🇬🇧' },
  fr: { label: 'FR', flag: '🇫🇷' },
  ar: { label: 'AR', flag: '🇸🇦' },
  es: { label: 'ES', flag: '🇪🇸' },
};

export default function Navbar() {
  const { lang, t, changeLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const p = t.nav.procedures;
  const trust = t.nav.trustBar;

  const [scrolled, setScrolled] = useState(!isHomePage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const langCloseTimer = useRef(null);

  const openLangMenu = () => {
    if (langCloseTimer.current) clearTimeout(langCloseTimer.current);
    setLangOpen(true);
  };
  const closeLangMenu = () => {
    langCloseTimer.current = setTimeout(() => setLangOpen(false), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(isHomePage ? window.scrollY > 40 : true);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    const base = href.split('#')[0];
    return location.pathname === base;
  };

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    {
      label: t.nav.plasticSurgery,
      href: '/plastic-surgery',
      children: [
        { label: p.rhinoplasty, href: '/plastic-surgery#rhinoplasty' },
        { label: p.liposuction, href: '/plastic-surgery#liposuction' },
        { label: p.bbl, href: '/plastic-surgery#bbl' },
        { label: p.breastAug, href: '/plastic-surgery#breast-aug' },
        { label: p.facelift, href: '/plastic-surgery#facelift' },
        { label: p.blepharoplasty, href: '/plastic-surgery#blepharoplasty' },
        { label: p.abdominoplasty, href: '/plastic-surgery#abdominoplasty' },
        { label: p.mommyMakeover, href: '/plastic-surgery#mommy-makeover' },
        { label: p.neckLift, href: '/plastic-surgery#neck-lift' },
        { label: p.breastLift, href: '/plastic-surgery#breast-lift' },
        { label: p.gynecomastia, href: '/plastic-surgery#gynecomastia' },
        { label: p.armLift, href: '/plastic-surgery#arm-lift' },
      ],
    },
    {
      label: t.nav.dental,
      href: '/dental',
      children: [
        { label: p.hollywoodSmile, href: '/dental#hollywood-smile' },
        { label: p.implants, href: '/dental#implants' },
        { label: p.zirconium, href: '/dental#zirconium' },
        { label: p.allOn4, href: '/dental#all-on-4' },
        { label: p.allOn6, href: '/dental#all-on-6' },
        { label: p.boneGraft, href: '/dental#bone-graft' },
      ],
    },
    {
      label: t.nav.hairTransplant,
      href: '/hair-transplant',
      children: [
        { label: p.fue, href: '/hair-transplant#fue' },
        { label: p.dhi, href: '/hair-transplant#dhi' },
        { label: p.prp, href: '/hair-transplant#prp' },
        { label: p.exosome, href: '/hair-transplant#exosome' },
      ],
    },
    { label: t.nav.complex, href: '/complex-treatments', secondary: true },
    { label: t.nav.packages, href: '/packages', secondary: true },
    { label: t.nav.ourDoctors, href: '/doctors', secondary: true },
    { label: t.nav.beforeAfter, href: '/results', secondary: true },
    { label: t.nav.guides, href: '/blog', secondary: true },
    { label: t.nav.faq, href: '/faq', secondary: true },
  ];

  const coreLinks = navLinks.filter((link) => !link.secondary);
  const secondaryLinks = navLinks.filter((link) => link.secondary);

  const renderNavLink = (link) => (
    <div
      key={link.label}
      className="relative flex-shrink-0"
      onMouseEnter={() => link.children && setOpenDropdown(link.label)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        to={link.href}
        className={`nav-link-premium ${isActive(link.href) ? 'active' : ''}`}
      >
        {link.label}
        {link.children && (
          <ChevronDown size={12} className={`opacity-60 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
        )}
      </Link>

      {link.children && openDropdown === link.label && (
        <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 z-50`}>
          <div className={`nav-dropdown ${link.children.length > 6 ? 'min-w-[420px]' : 'min-w-[240px]'}`}>
            <div className="bg-gradient-to-r from-navy-950 to-navy-900 px-4 py-3 flex items-center justify-between">
              <Link
                to={link.href}
                className="text-xs font-bold text-gold-400 uppercase tracking-wider hover:text-gold-300 transition-colors"
              >
                {p.viewAll} {link.label} →
              </Link>
            </div>
            <div className={`p-2 ${link.children.length > 6 ? 'grid grid-cols-2 gap-0.5' : ''}`}>
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-navy-800 hover:bg-gold-50 hover:text-gold-700 rounded-xl transition-colors duration-150 group/item"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-400 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const isRTL = t.dir === 'rtl';
  const solidNav = scrolled || !isHomePage;

  const trustItems = [
    { icon: ShieldCheck, text: trust.jci },
    { icon: GraduationCap, text: trust.professors },
    { icon: MapPin, text: trust.location },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Authority trust strip */}
      <div className={`hidden lg:block transition-all duration-500 ${solidNav ? 'nav-glass-top' : 'bg-navy-950/50 backdrop-blur-sm border-b border-white/[0.04]'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className={`flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-white/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Icon size={12} className="text-gold-500/80 flex-shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`transition-all duration-500 overflow-visible ${solidNav ? 'nav-glass-solid py-3' : 'nav-glass-hero py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 xl:gap-x-3 overflow-visible">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 z-10 flex-shrink-0 group col-start-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative">
              <img
                src={siteImages.logo}
                alt="NodensCare"
                width={130}
                height={40}
                fetchPriority="high"
                decoding="async"
                className="h-10 w-auto max-w-[100px] 2xl:max-w-[130px] object-contain object-left brightness-0 invert transition-transform duration-300 group-hover:scale-[1.02]"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <span className="hidden font-serif text-xl font-bold text-white">NodensCare</span>
            </div>
            <div className={`hidden 2xl:block border-white/15 ${isRTL ? 'border-r pr-3' : 'border-l pl-3'}`}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gold-400/90 leading-tight whitespace-nowrap">
                {t.nav.tagline}
              </p>
            </div>
          </Link>

          {/* Core nav links + More (secondary always in dropdown on desktop) */}
          <div className={`hidden xl:flex col-start-2 items-center justify-end min-w-0 overflow-visible flex-nowrap gap-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {coreLinks.map(renderNavLink)}

            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => setOpenDropdown('__more__')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`nav-link-premium ${secondaryLinks.some((l) => isActive(l.href)) ? 'active' : ''}`}
                aria-expanded={openDropdown === '__more__'}
                aria-haspopup="true"
                aria-label={t.nav.more}
              >
                {t.nav.more}
                <ChevronDown size={12} className={`opacity-60 transition-transform duration-200 ${openDropdown === '__more__' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === '__more__' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 z-50`}>
                  <div className="nav-dropdown py-1.5 min-w-[200px]">
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(link.href) ? 'bg-gold-50 text-gold-700 font-bold' : 'text-navy-800 hover:bg-navy-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions: lang + CTA + mobile — never shrink */}
          <div className={`flex items-center gap-2 flex-shrink-0 min-w-fit col-start-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative" onMouseEnter={openLangMenu} onMouseLeave={closeLangMenu}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-gold-500/30 text-white text-[11px] 2xl:text-xs font-semibold px-2.5 py-1.5 2xl:px-3.5 2xl:py-2 rounded-full transition-all backdrop-blur-sm flex-shrink-0 whitespace-nowrap"
                aria-label={`Language: ${langOptions[lang].label}`}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <span className="text-base leading-none" aria-hidden="true">{langOptions[lang].flag}</span>
                <span className="tracking-wide">{langOptions[lang].label}</span>
                <ChevronDown size={11} className={`opacity-70 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} pt-2 z-50`}>
                  <div className="nav-dropdown py-1.5 min-w-[148px]">
                    {Object.entries(langOptions).map(([code, opt]) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => { changeLanguage(code); setLangOpen(false); }}
                        className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm transition-colors ${
                          code === lang ? 'bg-gold-50 text-gold-700 font-bold' : 'text-navy-800 hover:bg-navy-50'
                        }`}
                      >
                        <span className="text-base leading-none" aria-hidden="true">{opt.flag}</span>
                        <span>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="hidden sm:flex nav-cta-premium"
              title={t.nav.cta}
              aria-label={t.nav.cta}
            >
              <Phone size={14} className="flex-shrink-0" />
              <span className="hidden 2xl:inline">{t.nav.cta}</span>
              <span className="2xl:hidden">{t.nav.ctaShort ?? t.nav.cta}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2.5 rounded-xl bg-white/[0.08] border border-white/15 hover:bg-white/[0.14] transition-colors flex-shrink-0"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent pointer-events-none" />

      {/* Mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-h-[80vh] overflow-y-auto nav-mobile-panel">
          {/* Mobile trust badges */}
          <div className="px-4 pt-4 pb-3 flex flex-wrap gap-2 justify-center border-b nav-mobile-divider">
            {trustItems.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="nav-mobile-badge inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border"
              >
                <Icon size={10} className="text-gold-400" />
                {text}
              </span>
            ))}
          </div>

          <div className="px-4 py-4 flex gap-2 flex-wrap">
            {Object.entries(langOptions).map(([code, opt]) => (
              <button
                key={code}
                type="button"
                onClick={() => changeLanguage(code)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  code === lang ? 'nav-mobile-lang-active' : 'nav-mobile-lang'
                }`}
              >
                <span className="text-sm leading-none" aria-hidden="true">{opt.flag}</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="px-4 pb-6 space-y-0.5">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className={`flex items-center justify-between w-full py-3.5 text-sm border-b nav-mobile-divider transition-colors ${
                        isActive(link.href) ? 'nav-mobile-link-active' : 'nav-mobile-link hover:text-gold-300'
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="pl-3 py-2 space-y-0.5 border-b nav-mobile-divider">
                        <Link to={link.href} className="nav-mobile-link-active block py-2 text-xs font-bold uppercase tracking-wider">
                          {p.viewAll} →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="nav-mobile-link-muted block py-2 text-sm transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`block py-3.5 text-sm border-b nav-mobile-divider transition-colors ${
                      isActive(link.href) ? 'nav-mobile-link-active' : 'nav-mobile-link hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="nav-cta-premium w-full justify-center mt-5">
              <Phone size={14} />
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
