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
import DoctorProfilePage from './pages/DoctorProfilePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogIndexPage from './pages/BlogIndexPage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import FAQPage from './pages/FAQPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      setTimeout(scrollToHash, 100);
      setTimeout(scrollToHash, 400);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hair-transplant" element={<HairTransplantPage />} />
          <Route path="/dental" element={<DentalPage />} />
          <Route path="/plastic-surgery" element={<PlasticSurgeryPage />} />
          <Route path="/complex-treatments" element={<ComplexTreatmentsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:slug" element={<DoctorProfilePage />} />
          <Route path="/results" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
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
