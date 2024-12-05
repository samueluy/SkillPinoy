import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Header } from './components/Header';
import { ContactBanner } from './components/ContactBanner';
import { PricingCards } from './components/PricingCards';
import { DomainStats } from './components/DomainStats';
import { Opportunities } from './components/Opportunities';
import { BrandingGuide } from './components/BrandingGuide';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <ContactBanner />
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0077B6] mb-4">SkillPinoy.com</h1>
          <p className="text-2xl text-gray-600 mb-8">Premium Domain For Sale</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            A highly valuable domain attracting 1,110 unique visitors over the past 30 days without any active content or marketing efforts. Perfect for businesses targeting the Filipino market in skills development, freelancing, or e-learning.
          </p>
          <PricingCards />
        </div>

        <div className="text-center mb-16">
          <a
            href="https://dan.com/buy/skillpinoy.com/b206fe7f-46dd-477f-8288-dd22a3585a20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#FF6B6B] text-white rounded-full text-xl font-semibold hover:bg-[#ff5252] transition-colors"
          >
            Purchase Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>

        <BrandingGuide />
        <DomainStats />
        <Opportunities />
      </main>

      <Footer />
    </div>
  );
}

export default App;