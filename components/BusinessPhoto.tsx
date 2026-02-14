
import React from 'react';

const BusinessPhoto: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative group rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-slate-900">
          {/* Main Image (Static) */}
          <div className="relative h-[400px] md:h-[600px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=95&w=2400" 
              alt="Progressive Freight Professional Logistics" 
              className="w-full h-full object-cover"
            />
            
            {/* Simple Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPhoto;
