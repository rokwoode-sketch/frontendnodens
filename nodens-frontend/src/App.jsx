import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HairTransplantPage = lazy(() => import('./pages/HairTransplantPage'));
const DentalPage = lazy(() => import('./pages/DentalPage'));
const PlasticSurgeryPage = lazy(() => import('./pages/PlasticSurgeryPage'));
const ComplexTreatmentsPage = lazy(() => import('./pages/ComplexTreatmentsPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));
const DoctorProfilePage = lazy(() => import('./pages/DoctorProfilePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

function PageFallback() {
  return <div className="min-h-[50vh] bg-white" aria-hidden="true" />;
}

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
    let cancelled = false;
    Promise.all([import('aos'), import('aos/dist/aos.css')]).then(([aosMod]) => {
      if (!cancelled) {
        aosMod.default.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
      }
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-navy-950 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageFallback />}>
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
        </Suspense>
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
