import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#0077B6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SP</span>
          </div>
          <span className="text-xl font-bold text-[#0077B6]">SkillPinoy.com</span>
        </div>
      </div>
    </header>
  );
}