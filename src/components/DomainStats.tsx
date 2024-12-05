import React from 'react';

export function DomainStats() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
      <h2 className="text-2xl font-bold text-[#0077B6] mb-6">Domain Statistics</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Traffic Insights</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 1,110 unique monthly visitors</li>
            <li>• 14,630 total requests in last 30 days</li>
            <li>• 46 MB of data served monthly</li>
            <li>• Consistent organic traffic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Domain Value</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Premium keyword combination</li>
            <li>• Strong organic demand</li>
            <li>• No active content (untapped potential)</li>
            <li>• Highly brandable name</li>
          </ul>
        </div>
      </div>
    </div>
  );
}