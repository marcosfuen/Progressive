
import React from 'react';
import { TranslationStrings } from '../types';

interface BenefitsProps {
  t: TranslationStrings;
}

const Benefits: React.FC<BenefitsProps> = ({ t }) => {
  const benefits = [
    {
      title: t.benefit1Title, // Pago Competitivo
      description: t.benefit1Desc,
      imageUrl: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.benefit2Title, // Flota Moderna
      description: t.benefit2Desc,
      imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: t.benefit3Title, // Valor y Tiempo
      description: t.benefit3Desc,
      imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <div className="py-16 sm:py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-blue-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4">
            {t.benefitsSubtitle}
          </h2>
          <h3 className="text-3xl sm:text-6xl font-black text-slate-950 tracking-tighter uppercase leading-none">
            {t.benefitsTitle}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={benefit.imageUrl} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <h4 className="text-xl sm:text-2xl font-black text-slate-950 mb-4 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium opacity-80">
                  {benefit.description}
                </p>
              </div>
              
              {/* Subtle accent bar */}
              <div className="h-1.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
