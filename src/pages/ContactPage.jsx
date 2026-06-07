import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact NodensCare | Free Medical Consultation Istanbul</title>
        <meta name="description" content="Contact NodensCare for a free medical consultation. WhatsApp: +90 554 674 5516. Email: info@nodenscare.com. Based in Istanbul, Turkey. Multilingual coordinators available 7 days a week." />
      </Helmet>

      <div className="pt-24 pb-10 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Contact</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-gold-400">Touch</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Our coordinators speak English, French, Arabic, and Spanish. We respond within 30 minutes on WhatsApp, 2 hours by email — 7 days a week.
          </p>
        </div>
      </div>

      <Contact />
    </>
  );
}
