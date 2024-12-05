import React from 'react';

export function BrandingGuide() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
      <h2 className="text-2xl font-bold text-[#0077B6] mb-6">Brand Identity</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Brand Colors</h3>
            <div className="flex flex-wrap gap-4">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#0077B6]"></div>
                <p className="text-sm text-gray-600">Primary Blue</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#FF6B6B]"></div>
                <p className="text-sm text-gray-600">Accent Red</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-lg bg-[#FFF8E7]"></div>
                <p className="text-sm text-gray-600">Background</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Brand Message</h3>
            <p className="text-gray-700">
              "Kayang Kaya Mo Rin!" embodies the spirit of empowerment and possibility,
              encouraging Filipino professionals to achieve their full potential.
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/branding_guide.jpeg"
            alt="Brand Identity Visual"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
}