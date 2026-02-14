
import React from 'react';
import { Language, TranslationStrings } from '../types';

interface HeroProps {
  t: TranslationStrings;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  // Nueva imagen seleccionada: Vista de flota profesional en terminal, estética limpia y moderna.
  const heroImage = "https://images.unsplash.com/photo-1586191552066-d52dd1e3af86?auto=format&fit=crop&q=100&w=2800";

  return (
    <div className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-black">
      {/* 1. Imagen de Portada - Nueva opción con enfoque en logística y profesionalismo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elite Logistics Truck Fleet" 
          className="w-full h-full object-cover object-center lg:object-right scale-105 animate-slow-zoom"
          loading="eager"
        />
        
        {/* Degradado de protección para el texto - Mejorado para legibilidad máxima */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 via-45% to-transparent z-10"></div>
        
        {/* Overlay para dispositivos móviles */}
        <div className="lg:hidden absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* 2. Contenido de Texto */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full py-20">
        <div className="max-w-4xl">
          {/* Badge de Estatus Elite */}
          <div className="inline-flex items-center gap-3 bg-blue-600/90 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-white/20 shadow-lg animate-fade-in">
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-[0.3em]">
              {lang === 'en' ? 'Class A CDL Elite' : 'Elite CDL Clase A'}
            </span>
          </div>
          
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tight drop-shadow-xl">
            {t.heroTitle}
          </h1>
          
          {/* Subtítulo */}
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-50/90 font-medium mb-12 max-w-2xl leading-relaxed drop-shadow-md">
            {t.heroSubtitle}
          </p>

          {/* Botón de Llamado a la Acción (CTA) */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#apply" 
              className="group relative w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-base sm:text-lg transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-xl border border-white/10 text-center"
            >
              <span className="relative z-10">{t.heroCta}</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-2xl"></div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 50s infinite alternate ease-in-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
