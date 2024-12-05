import React from 'react';

export function PricingCards() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#FF6B6B] mb-2">Buy It Now Price</h2>
        <p className="text-4xl font-bold text-[#0077B6]">$6,000</p>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-[#FF6B6B] mb-2">Minimum Offer</h2>
        <p className="text-4xl font-bold text-[#0077B6]">$3,000</p>
      </div>
    </div>
  );
}