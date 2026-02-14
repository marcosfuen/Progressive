
import React from 'react';
import { TranslationStrings } from '../types';

interface FleetProps {
  t: TranslationStrings;
}

const Fleet: React.FC<FleetProps> = ({ t }) => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=90&w=2400" 
            alt="Modern 18-Wheeler Truck Fleet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-8 md:p-16">
            <div className="max-w-xl">
              <p className="text-blue-100 mt-4 text-lg font-medium opacity-90">
                {t.benefit2Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
