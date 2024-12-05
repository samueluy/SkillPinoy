import React from 'react';
import { Mail } from 'lucide-react';

export function ContactBanner() {
  return (
    <div className="bg-[#0077B6] text-white">
      <div className="max-w-5xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span>Have a different offer in mind?</span>
          <Mail className="h-4 w-4" />
          <a 
            href="mailto:hello@samueluy.com" 
            className="font-medium hover:text-gray-200 underline"
          >
            Contact me at hello@samueluy.com
          </a>
        </div>
      </div>
    </div>
  );
}