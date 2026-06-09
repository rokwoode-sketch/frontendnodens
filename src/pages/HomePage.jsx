import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import HomeExplore from '../components/HomeExplore';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Services />
      <Gallery mode="home" />
      <HomeExplore />
    </>
  );
}
