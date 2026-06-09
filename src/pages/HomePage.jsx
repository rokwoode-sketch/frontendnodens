import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import HomeExplore from '../components/HomeExplore';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Services />
      <HomeExplore />
    </>
  );
}
