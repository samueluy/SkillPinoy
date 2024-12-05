import React from 'react';
import { Mail } from 'lucide-react';
import { trackEvent } from '../lib/analytics'; // Import the tracking utility

export function ContactButton() {
  const handleContactClick = () => {
    trackEvent('click', 'ContactButton', 'Contact Me Button');
  };

  return (
    <a
      href="mailto:hello@samueluy.com"
      className="inline-flex items-center px-6 py-3 bg-[#0077B6] text-white rounded-lg text-lg font-semibold hover:bg-[#005f92] transition-colors"
      onClick={handleContactClick}
    >
      <Mail className="mr-2 h-5 w-5" />
      Contact Me
    </a>
  );
}
