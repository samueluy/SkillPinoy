import React, { useEffect } from 'react';
import { trackPageView } from './lib/analytics'; // Ensure this points to your analytics utility
import { Header } from './components/Header';
import { ContactBanner } from './components/ContactBanner';
import { DomainStats } from './components/DomainStats';
import { Opportunities } from './components/Opportunities';
import { BrandingGuide } from './components/BrandingGuide';
import { MainCTA } from './components/MainCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

export default function App() {
  useEffect(() => {
    // Track the initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Trackable Contact Banner */}
      <ContactBanner />

      {/* Header */}
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Trackable Main Call-to-Action Section */}
        <MainCTA />

        {/* Branding Guide Section */}
        <BrandingGuide />

        {/* Domain Stats Section */}
        <DomainStats />

        {/* Opportunities Section */}
        <Opportunities />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
