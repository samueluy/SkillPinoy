import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export function MainCTA() {
  return (
    <div className="relative bg-gradient-to-br from-[#0077B6] to-[#005f92] rounded-xl p-12 shadow-xl mb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
      
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white mb-2">
            Interested in this domain?
          </h2>
          <p className="text-2xl text-white/90 font-medium">
            Send me your best offer!
          </p>
          <div className="w-24 h-1 bg-[#FF6B6B] mx-auto my-6" />
          <p className="text-xl text-white/80">
            Alternatively, hire me, and I'll include the domain for free as part of our collaboration.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <a
            href="mailto:hello@samueluy.com"
            className="group inline-flex items-center px-8 py-4 bg-white text-[#0077B6] rounded-lg text-xl font-semibold hover:bg-[#FF6B6B] hover:text-white transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
          >
            <Mail className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            Contact Me
          </a>
          <a
            href="mailto:hello@samueluy.com?subject=SkillPinoy.com%20Collaboration%20Opportunity"
            className="group inline-flex items-center px-8 py-4 bg-[#FF6B6B] text-white rounded-lg text-xl font-semibold hover:bg-white hover:text-[#FF6B6B] transition-all duration-300 w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
          >
            Discuss Collaboration
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}