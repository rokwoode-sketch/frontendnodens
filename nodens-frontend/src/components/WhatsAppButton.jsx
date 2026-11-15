import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SOCIAL_URLS } from '../data/socialLinks';

/** Site-wide institutional consult launcher — compact trigger + clinical popover. */
export default function WhatsAppButton() {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const isRTL = t.dir === 'rtl';

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 500);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (pathname === '/contact') return null;

  const label = t.nav?.ctaShort || 'Consult';
  const whatsappHref = `${SOCIAL_URLS.whatsapp}?text=${encodeURIComponent("Hello, I'd like a clinical assessment with NodensCare.")}`;

  return (
    <div
      ref={rootRef}
      className={`consult-dock ${ready ? 'is-ready' : ''} ${open ? 'is-open' : ''} ${isRTL ? 'is-rtl' : ''}`}
    >
      {open && (
        <div className="consult-popover" role="dialog" aria-label={label}>
          <div className="consult-popover-head">
            <span>{t.nav?.cta || 'Free Consultation'}</span>
            <button
              type="button"
              className="consult-popover-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X size={14} strokeWidth={2} />
            </button>
          </div>
          <p className="consult-popover-copy">
            {t.contact?.whatsappHint || 'Message us for the fastest response.'}
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="consult-popover-action"
            onClick={() => setOpen(false)}
          >
            <MessageCircle size={15} strokeWidth={1.75} aria-hidden="true" />
            <span>{t.contact?.whatsapp || 'Chat on WhatsApp'}</span>
          </a>
          <Link
            to="/contact"
            className="consult-popover-action is-secondary"
            onClick={() => setOpen(false)}
          >
            <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
            <span>{t.contact?.formCta || t.patientJourney?.ctaContact || 'Contact Form'}</span>
          </Link>
        </div>
      )}

      <button
        type="button"
        className="consult-trigger"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={18} strokeWidth={1.75} aria-hidden="true" /> : <MessageCircle size={18} strokeWidth={1.75} aria-hidden="true" />}
        <span className="consult-trigger-label">{label}</span>
      </button>
    </div>
  );
}
