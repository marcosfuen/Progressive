
import React, { useState } from 'react';
import { Language, TranslationStrings } from '../types';

interface ApplicationFormProps {
  t: TranslationStrings;
  lang: Language;
}

interface FormErrors {
  email?: string;
  phone?: string;
  experience?: string;
  name?: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ t, lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [phoneValue, setPhoneValue] = useState('');
  const [experienceValue, setExperienceValue] = useState('');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => phone.replace(/\D/g, '').length === 10;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    let formatted = digits;
    if (digits.length > 0) {
      if (digits.length <= 3) formatted = `(${digits}`;
      else if (digits.length <= 6) formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      else formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
    setPhoneValue(formatted.slice(0, 14));
    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setExperienceValue('');
      return;
    }
    
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      if (num > 60) setExperienceValue('60');
      else if (num < 0) setExperienceValue('0');
      else setExperienceValue(num.toString());
    }
    if (errors.experience) setErrors(prev => ({ ...prev, experience: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const experienceNum = Number(experienceValue);

    const newErrors: FormErrors = {};
    if (name.trim().length < 3) newErrors.name = lang === 'en' ? 'Full name required' : 'Nombre requerido';
    if (!validateEmail(email)) newErrors.email = lang === 'en' ? 'Invalid email' : 'Correo inválido';
    if (!validatePhone(phoneValue)) newErrors.phone = lang === 'en' ? '10-digit number required' : '10 dígitos requeridos';
    
    if (experienceValue === '') {
      newErrors.experience = lang === 'en' ? 'Required' : 'Requerido';
    } else if (experienceNum > 60) {
      newErrors.experience = lang === 'en' ? 'Max 60 years' : 'Máximo 60 años';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const recipient = "Pflogistics@live.com";
    const subject = encodeURIComponent(`${lang === 'en' ? 'New Driver Application' : 'Nueva Aplicación de Conductor'} - ${name}`);
    
    const bodyText = lang === 'en' 
      ? `Hello Progressive Freight Recruitment Team,\n\nI am interested in joining your fleet. Here are my details:\n\n- Full Name: ${name}\n- Email: ${email}\n- Phone Number: ${phoneValue}\n- Years of Experience: ${experienceValue} years\n\nPlease contact me at your earliest convenience.\n\nBest regards,\n${name}`
      : `Hola equipo de reclutamiento de Progressive Freight,\n\nEstoy interesado en unirme a su flota. Aquí están mis datos:\n\n- Nombre Completo: ${name}\n- Email: ${email}\n- Número de Teléfono: ${phoneValue}\n- Años de Experiencia: ${experienceValue} años\n\nPor favor, contáctenme a la brevedad posible.\n\nSaludos cordiales,\n${name}`;

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setPhoneValue('');
    setExperienceValue('');
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-16 lg:p-20 rounded-3xl shadow-xl text-center max-w-2xl mx-auto border border-slate-100">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4">{t.formSuccess}</h3>
        <p className="text-slate-600 mb-8 text-sm sm:text-lg">
          {lang === 'en' 
            ? 'Your application has been prepared. Please send the email to finish.' 
            : 'Tu aplicación ha sido preparada. Por favor envía el correo para finalizar.'}
        </p>
        <button 
          onClick={handleReset}
          className="bg-blue-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold hover:bg-blue-800 transition-all w-full"
        >
          {lang === 'en' ? 'New Application' : 'Nueva Aplicación'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row w-full max-w-6xl mx-auto">
      {/* Sidebar Info */}
      <div className="lg:w-2/5 bg-blue-950 p-6 sm:p-10 lg:p-12 text-white flex flex-col">
        <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full"></div>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight tracking-tight">{t.formTitle}</h2>
        <p className="text-blue-200 mb-8 text-sm sm:text-lg opacity-80">{t.formSubtitle}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
          {[
            { 
              label: lang === 'en' ? 'Class A Required' : 'Requiere CDL Clase A', 
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            { 
              label: lang === 'en' ? 'Competitive Pay' : 'Pago Competitivo', 
              icon: (
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-3 sm:gap-4 items-center bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
              <div className="shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                {item.icon}
              </div>
              <span className="text-xs sm:text-base font-semibold text-blue-50 leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="lg:w-3/5 p-6 sm:p-10 lg:p-16 bg-white">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                {t.formName}
              </label>
              <input 
                name="name" required type="text" placeholder="John Doe"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-2 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 font-medium ${errors.name ? 'border-red-400' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
              />
              {errors.name && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
                {t.formPhone}
              </label>
              <input 
                name="phone" required type="tel" value={phoneValue} onChange={handlePhoneChange} placeholder="(000) 000-0000"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-2 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 font-medium ${errors.phone ? 'border-red-400' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
              />
              {errors.phone && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
              {t.formEmail}
            </label>
            <input 
              name="email" required type="email" placeholder="email@example.com"
              className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-2 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 font-medium ${errors.email ? 'border-red-400' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
            />
            {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">
              {t.formExperience}
            </label>
            <input 
              name="experience" required type="number" min="0" max="60" value={experienceValue} onChange={handleExperienceChange} placeholder="e.g. 5"
              className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border-2 rounded-xl outline-none transition-all text-sm sm:text-base text-slate-900 font-medium ${errors.experience ? 'border-red-400' : 'border-slate-100 focus:border-blue-600 focus:bg-white'}`}
            />
            {errors.experience && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.experience}</p>}
          </div>

          <div className="pt-4">
            <button 
              disabled={loading} type="submit" 
              className="w-full bg-blue-950 text-white h-12 sm:h-16 rounded-xl font-black uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-blue-900 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : t.formSubmit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
