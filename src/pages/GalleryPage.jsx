import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Before & After Results | Patient Gallery — NodensCare Istanbul</title>
        <meta name="description" content="View real before and after results from NodensCare patients. Hair transplant, rhinoplasty, Hollywood smile, facelift, and more — all performed in Istanbul by professor surgeons." />
      </Helmet>

      <div className="pt-24 pb-6 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-gold-400 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Before & After</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Patient <span className="text-gold-400">Results</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Real results from real patients. Drag the slider on each card to compare before and after.
          </p>
        </div>
      </div>

      <div className="pt-0">
        <Gallery />
      </div>
      <Testimonials />
    </>
  );
}
