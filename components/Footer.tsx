
import React from 'react';
import { TranslationStrings } from '../types';

interface FooterProps {
  t: TranslationStrings;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const whatsappUrl = "https://wa.me/18322746482";

  return (
    <footer className="relative bg-blue-950 text-white py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 lg:mb-16">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            {/* Logo Section - Geometry corrected to match image exactly */}
            <div className="flex flex-col items-center md:items-start mb-8">
              <div className="text-white mb-8">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-20 h-20 sm:w-24 sm:h-24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Solid Chevron Right - Tip of the arrow */}
                <path d="M 62 18 L 77 18 L 96 49 L 78 82 L 62 82 L 81 51 Z" />
                
                {/* Bar 1 (Top) - Independent parallelogram */}
                <path d="M10 24 H42 L48 34 H16 Z" />
                
                {/* Bar 2 (Middle) - Horizontal + 45° Diagonal Tail. Same thickness as others. */}
                {/* Mathematical offset for 45 deg thickness consistency */}
                <path d="M 54 65 H 49 H 45 L 55 47 H 20 L 15 38 H 54 L 63 47 Z" />
                
                {/* Bar 3 (Bottom) - Ends BEFORE the tail to maintain requested gap */}
                <path d="M 24 56 H 40 L 37 65 H 19 L 24 56 Z" />
                </svg>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="font-black text-4xl sm:text-5xl tracking-tighter leading-none uppercase">PROGRESSIVE</span>
                <span className="font-black text-3xl sm:text-4xl tracking-tighter leading-none uppercase mt-1">FREIGHT</span>
                <span className="text-[12px] sm:text-[16px] font-black text-blue-400 uppercase tracking-[0.4em] leading-none mt-4">LOGISTICS LLC</span>
              </div>
            </div>
            <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs md:max-w-md">
              {t.footerDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-blue-400 mb-6">{t.footerNavTitle}</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#benefits" className="text-blue-100/70 hover:text-white transition-colors">{t.navBenefits}</a></li>
                <li><a href="#apply" className="text-blue-100/70 hover:text-white transition-colors">{t.navApply}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-blue-400 mb-6">{t.footerContactTitle}</h4>
              <ul className="space-y-4 text-sm text-blue-100/70 font-medium">
                <li className="font-black text-white text-base">832-274-6482</li>
                <li className="break-all">Pflogistics@live.com</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-blue-400 mb-6">{t.footerFollowTitle}</h4>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all hover:-translate-y-1 shadow-lg" 
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg" aria-label="Facebook">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-blue-100/30 text-center md:text-left">
          <p>© {new Date().getFullYear()} Progressive Freight Logistics LLC. {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
