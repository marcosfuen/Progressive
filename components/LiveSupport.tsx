
import React from 'react';
import { TranslationStrings } from '../types';

interface LiveSupportProps {
  t: TranslationStrings;
}

const LiveSupport: React.FC<LiveSupportProps> = ({ t }) => {
  const whatsappNumber = '18322746482';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-stretch bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl">
          
          {/* Visual Side: Recruiter Image */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=85&w=1200" 
              alt="Recruitment Team" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="inline-flex items-center gap-3 bg-green-500/20 px-4 py-2 rounded-full mb-4">
                {/* Removed the animated ping dot as requested */}
                <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Online & Ready</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-10 sm:p-16 flex flex-col justify-center bg-slate-900 border-l border-white/5">
            <h2 className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6">Human Connection</h2>
            <h3 className="text-4xl sm:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
              {t.liveSupportTitle}
            </h3>
            <p className="text-lg text-slate-400 font-medium leading-relaxed mb-10 max-w-md">
              {t.liveSupportDesc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-2xl shadow-[0_20px_40px_rgba(37,211,102,0.2)] transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-black uppercase tracking-widest text-sm">{t.liveSupportCta}</span>
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-white text-xl font-black tracking-tight leading-none">832-274-6482</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;