import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { ContactBanner } from './components/ContactBanner';
import { DomainStats } from './components/DomainStats';
import { Opportunities } from './components/Opportunities';
import { BrandingGuide } from './components/BrandingGuide';
import { MainCTA } from './components/MainCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { trackPageView } from './lib/analytics';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <ContactBanner />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <Hero />
        <MainCTA />
        <BrandingGuide />
        <DomainStats />
        <Opportunities />
      </main>

      <Footer />
    </div>
  );
}
