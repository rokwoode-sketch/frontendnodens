import { useLanguage } from '../i18n/LanguageContext';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import WhyNodens from '../components/WhyNodens';
import Treatments from '../components/Treatments';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

// All schema.org markup
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Services />
      <WhyNodens />
      <Treatments />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
