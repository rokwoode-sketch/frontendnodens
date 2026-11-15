import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import HomeTeam from '../components/HomeTeam';
import PatientJourney from '../components/PatientJourney';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <Stats />
      <Services />
      <Gallery mode="home" />
      <HomeTeam />
      <PatientJourney />
    </>
  );
}
