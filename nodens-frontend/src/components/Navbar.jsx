import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ShieldCheck, GraduationCap, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteImages } from '../data/siteImages';

const langOptions = {
  en: { code: 'EN', name: 'English' },
  fr: { code: 'FR', name: 'Français' },
  ar: { code: 'AR', name: 'العربية' },
  es: { code: 'ES', name: 'Español' },
};

export default function Navbar() {
  const { lang, t, changeLanguage } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const p = t.nav.procedures;
  const trust = t.nav.trustBar;
  const isRTL = t.dir === 'rtl';

  const [scrolled, setScrolled] = useState(!isHomePage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const langRef = useRef(null);

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
    setLangOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!langOpen) return undefined;
    const onPointer = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setLangOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

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
  const solidNav = scrolled || !isHomePage || mobileOpen;
  const onLight = solidNav;

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
            <div className="bg-navy-950 px-4 py-3">
              <Link
                to={link.href}
                className="text-[11px] font-semibold text-gold-400 uppercase tracking-[0.14em] hover:text-gold-300 transition-colors"
              >
                {p.viewAll} {link.label} →
              </Link>
            </div>
            <div className={`p-2 ${link.children.length > 6 ? 'grid grid-cols-2 gap-0.5' : ''}`}>
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm text-navy-800 hover:bg-navy-50 hover:text-teal-medical transition-colors duration-150 group/item"
                >
                  <span className="w-1 h-1 bg-teal-medical opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const trustItems = [
    { icon: ShieldCheck, text: trust.jci },
    { icon: GraduationCap, text: trust.professors },
    { icon: MapPin, text: trust.location },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`hidden lg:block transition-colors duration-300 ${onLight ? 'nav-inst-trust-solid' : 'nav-inst-trust'}`}>
        <div className={`max-w-7xl mx-auto px-5 sm:px-8 py-1.5 flex items-center justify-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {trustItems.map(({ icon: Icon, text }) => (
            <div key={text} className={`flex items-center gap-1.5 text-[10px] font-medium tracking-[0.16em] uppercase ${onLight ? 'text-navy-500' : 'text-white/55'} ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Icon size={11} className={`flex-shrink-0 ${onLight ? 'text-teal-medical' : 'text-gold-500/70'}`} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <nav className={`transition-all duration-300 overflow-visible ${onLight ? 'nav-inst-solid nav-on-light py-3' : 'nav-inst-hero nav-on-dark py-4'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-2 xl:gap-x-3 overflow-visible">
          <Link to="/" className={`flex items-center gap-2.5 z-10 flex-shrink-0 group col-start-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <img
              src={siteImages.logo}
              alt=""
              width={44}
              height={44}
              fetchPriority="high"
              decoding="async"
              aria-hidden="true"
              className={`h-9 w-9 object-contain flex-shrink-0 transition-all duration-300 ${onLight ? 'brightness-0' : 'brightness-0 invert'}`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <span className={`block font-serif text-[1.15rem] md:text-xl font-semibold tracking-tight leading-none ${onLight ? 'text-navy-950' : 'text-white'}`}>
                NodensCare
              </span>
              <span className={`hidden sm:block text-[9px] font-semibold tracking-[0.16em] uppercase mt-1 leading-none ${onLight ? 'text-teal-medical' : 'text-gold-400/90'}`}>
                {t.nav.tagline}
              </span>
            </div>
          </Link>

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
                          isActive(link.href) ? 'bg-teal-50 text-teal-medical font-semibold' : 'text-navy-800 hover:bg-navy-50'
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

          <div className={`flex items-center gap-2 flex-shrink-0 min-w-fit col-start-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Institutional language chooser — desktop / tablet bar */}
            <div ref={langRef} className={`relative ${mobileOpen ? 'hidden' : ''}`}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className={`lang-trigger ${onLight ? 'lang-trigger-light' : 'lang-trigger-dark'}`}
                aria-label={`Language: ${langOptions[lang].name}`}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <Globe size={14} strokeWidth={1.75} aria-hidden="true" />
                <span>{langOptions[lang].code}</span>
                <ChevronDown size={11} className={`opacity-60 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className={`absolute top-full ${isRTL ? 'left-0' : 'right-0'} pt-2 z-[60]`}>
                  <div className="nav-dropdown lang-menu" role="listbox" aria-label="Language">
                    <div className="lang-menu-head">
                      <Globe size={12} strokeWidth={1.75} aria-hidden="true" />
                      <span>Language</span>
                    </div>
                    {Object.entries(langOptions).map(([code, opt]) => (
                      <button
                        key={code}
                        type="button"
                        role="option"
                        aria-selected={code === lang}
                        onClick={() => { changeLanguage(code); setLangOpen(false); }}
                        className={`lang-option ${code === lang ? 'is-active' : ''}`}
                      >
                        <span className="lang-option-code">{opt.code}</span>
                        <span className="lang-option-name">{opt.name}</span>
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
              onClick={() => { setLangOpen(false); setMobileOpen(!mobileOpen); }}
              className={`xl:hidden lang-trigger ${onLight ? 'lang-trigger-light' : 'lang-trigger-dark'} !px-2.5`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`h-px pointer-events-none ${onLight ? 'bg-clinical-line' : 'bg-gradient-to-r from-transparent via-gold-500/35 to-transparent'}`} />

      {/* Institutional mobile menu — clinical white panel */}
      <div className={`xl:hidden nav-mobile-shell ${mobileOpen ? 'is-open' : ''}`}>
        <div className="nav-mobile-panel">
          <div className="nav-mobile-trust">
            {trustItems.map(({ icon: Icon, text }) => (
              <span key={text} className="nav-mobile-badge">
                <Icon size={11} className="text-teal-medical" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          <div className="nav-mobile-langs" role="listbox" aria-label="Language">
            {Object.entries(langOptions).map(([code, opt]) => (
              <button
                key={code}
                type="button"
                role="option"
                aria-selected={code === lang}
                onClick={() => changeLanguage(code)}
                className={`nav-mobile-lang ${code === lang ? 'is-active' : ''}`}
              >
                <span className="font-semibold tracking-[0.08em]">{opt.code}</span>
                <span className="text-navy-500 font-normal normal-case tracking-normal text-[12px]">{opt.name}</span>
              </button>
            ))}
          </div>

          <nav className="nav-mobile-links" aria-label="Primary">
            {navLinks.map((link) => (
              <div key={link.href} className="border-b border-clinical-line">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className={`nav-mobile-row ${isActive(link.href) ? 'is-active' : ''}`}
                    >
                      {link.label}
                      <ChevronDown size={16} className={`text-navy-400 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="bg-navy-50/80 px-5 py-2 space-y-0.5">
                        <Link to={link.href} className="block py-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-teal-medical">
                          {p.viewAll} →
                        </Link>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2 text-sm text-navy-600 hover:text-teal-medical transition-colors"
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
                    className={`nav-mobile-row ${isActive(link.href) ? 'is-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="p-5">
            <Link to="/contact" className="nav-cta-premium w-full justify-center">
              <Phone size={14} />
              {t.nav.cta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
