
import React, { useState } from 'react';
import { Language, translations } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en'); 
  
  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'es' : 'en'));
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">
      <Header lang={lang} toggleLanguage={toggleLanguage} t={t} />
      
      <main className="flex-grow">
        {/* Impact Visual Hero Section  */}
        <section id="hero">
          <Hero t={t} lang={lang} />
        </section>
        
        {/* Benefits Cards Section */}
        <section id="benefits" className="bg-white border-b border-slate-100 scroll-mt-20">
          <Benefits t={t} />
        </section>

        {/* Driver Application Form Section */}
        <section id="apply" className="py-12 md:py-24 px-4 bg-slate-50 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <ApplicationForm t={t} lang={lang} />
          </div>
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;
