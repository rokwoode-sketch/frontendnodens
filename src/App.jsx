import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import HairTransplantPage from './pages/HairTransplantPage';
import DentalPage from './pages/DentalPage';
import PlasticSurgeryPage from './pages/PlasticSurgeryPage';
import ComplexTreatmentsPage from './pages/ComplexTreatmentsPage';
import DoctorsPage from './pages/DoctorsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hair-transplant" element={<HairTransplantPage />} />
          <Route path="/dental" element={<DentalPage />} />
          <Route path="/plastic-surgery" element={<PlasticSurgeryPage />} />
          <Route path="/complex-treatments" element={<ComplexTreatmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/results" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppInner />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
