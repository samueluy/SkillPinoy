import React from 'react';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0077B6] text-white py-6 mt-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Mail className="h-5 w-5" />
          <a href="mailto:hello@samueluy.com" className="hover:text-gray-200">
            hello@samueluy.com
          </a>
        </div>
        <p>{new Date().getFullYear()} SkillPinoy.com - All rights reserved</p>
      </div>
    </footer>
  );
}