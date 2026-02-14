
import React from 'react';
import { TranslationStrings } from '../types';

interface BrandShowcaseProps {
  t: TranslationStrings;
}

const BrandShowcase: React.FC<BrandShowcaseProps> = ({ t }) => {
  return (
    <div className="bg-white py-16 px-4 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
            <h3 className="text-3xl sm:text-4xl font-black text-blue-950 uppercase tracking-tighter leading-none">
              {t.brandShowcaseQuote}
            </h3>
            <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
              {t.brandShowcaseDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-bold uppercase tracking-tight text-blue-950 text-sm">
                  {t.brandShowcaseFeature1}
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.491V6.509a2 2 0 011.127-1.785L9 2m0 18l5-2.5m-5 2.5V4m5 13.5l5.447 2.724A2 2 0 0021 18.491V9.509a2 2 0 00-1.127-1.785L15 5m0 12.5V5m0 0L9 2" />
                  </svg>
                </div>
                <p className="font-bold uppercase tracking-tight text-blue-950 text-sm">
                  {t.brandShowcaseFeature2}
                </p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-3xl group-hover:bg-blue-600/10 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-slate-100 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1591768793355-74d7c3963428?q=80&w=2000&auto=format&fit=crop" 
                alt="Modern Freight Truck" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
