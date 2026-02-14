
export type Language = 'en' | 'es';

export interface TranslationStrings {
  navApply: string;
  navBenefits: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefit1Title: string;
  benefit1Desc: string;
  benefit2Title: string;
  benefit2Desc: string;
  benefit3Title: string;
  benefit3Desc: string;
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formExperience: string;
  formExperiencePlaceholder: string;
  formSubmit: string;
  formSuccess: string;
  footerRights: string;
  footerDesc: string;
  footerNavTitle: string;
  footerContactTitle: string;
  footerFollowTitle: string;
  // Added missing translation keys
  aiGreeting: string;
  aiPlaceholder: string;
  brandShowcaseQuote: string;
  brandShowcaseDesc: string;
  brandShowcaseFeature1: string;
  brandShowcaseFeature2: string;
  liveSupportTitle: string;
  liveSupportDesc: string;
  liveSupportCta: string;
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    navApply: 'Apply Now',
    navBenefits: 'Benefits',
    navContact: 'Contact',
    heroTitle: 'DRIVE WITH THE BEST',
    heroSubtitle: 'Join Progressive Freight Logistics LLC. We value your miles and your time.',
    heroCta: 'Start Your Application',
    benefitsTitle: 'Why Drive for Progressive?',
    benefitsSubtitle: 'Unrivaled Support',
    benefit1Title: 'Competitive Pay',
    benefit1Desc: 'Industry-leading mileage rates and bonuses for safety and efficiency.',
    benefit2Title: 'Modern Fleet',
    benefit2Desc: 'Drive top-tier 18-wheelers equipped with the latest technology.',
    benefit3Title: 'Value & Time',
    benefit3Desc: 'Higher pay per mile and optimized routing to respect your schedule.',
    formTitle: 'Driver Application',
    formSubtitle: 'Join Our Professional Fleet',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formExperience: 'Years of Experience',
    formExperiencePlaceholder: 'e.g. 5 years',
    formSubmit: 'Submit Application',
    formSuccess: 'Thank you! Our recruiting team will contact you shortly.',
    footerRights: 'All rights reserved.',
    footerDesc: "America's most trusted partner for professional drivers.",
    footerNavTitle: 'Links',
    footerContactTitle: 'Contact',
    footerFollowTitle: 'Social',
    aiGreeting: "Hi! I'm your Progressive Freight assistant. How can I help you join our fleet today?",
    aiPlaceholder: "Ask about routes, pay, or CDL requirements...",
    brandShowcaseQuote: "Leading the way in professional freight logistics.",
    brandShowcaseDesc: "We operate a state-of-the-art fleet of 18-wheelers, ensuring our drivers have the best tools for the job. Our commitment to safety and modern technology sets us apart.",
    brandShowcaseFeature1: "Advanced Safety Tech",
    brandShowcaseFeature2: "Optimized Routing",
    liveSupportTitle: "Ready to Chat?",
    liveSupportDesc: "Connect with our recruiting specialists directly for personalized guidance and fast-track application processing.",
    liveSupportCta: "Chat on WhatsApp",
  },
  es: {
    navApply: 'Aplicar Ahora',
    navBenefits: 'Beneficios',
    navContact: 'Contacto',
    heroTitle: 'CONDUCE CON LOS MEJORES',
    heroSubtitle: 'Únete a Progressive Freight Logistics LLC. Valoramos tus millas y tu tiempo.',
    heroCta: 'Comenzar Aplicación',
    benefitsTitle: '¿Por qué conducir para Progressive?',
    benefitsSubtitle: 'Soporte Inigualable',
    benefit1Title: 'Pago Competitivo',
    benefit1Desc: 'Compensación líder en la industria y bonificaciones por eficiencia.',
    benefit2Title: 'Flota Moderna',
    benefit2Desc: 'Conduce camiones de 18 ruedas con la última tecnología.',
    benefit3Title: 'Valor y Tiempo',
    benefit3Desc: 'Mayor pago por milla y rutas optimizadas para respetar tu tiempo.',
    formTitle: 'Solicitud de Conductor',
    formSubtitle: 'Únete a Nuestra Flota Profesional',
    formName: 'Nombre Completo',
    formEmail: 'Correo Electrónico',
    formPhone: 'Número de Teléfono',
    formExperience: 'Años de Experiencia',
    formExperiencePlaceholder: 'ej. 5 años',
    formSubmit: 'Enviar Solicitud',
    formSuccess: '¡Gracias! Nuestro equipo de reclutamiento te contactará pronto.',
    footerRights: 'Todos los derechos reservados.',
    footerDesc: "El socio más confiable de Estados Unidos para conductores profesionales.",
    footerNavTitle: 'Enlaces',
    footerContactTitle: 'Contacto',
    footerFollowTitle: 'Redes',
    aiGreeting: "¡Hola! Soy tu asistente de Progressive Freight. ¿Cómo puedo ayudarte a unirte a nuestra flota hoy?",
    aiPlaceholder: "Pregunta sobre rutas, pago o requisitos de CDL...",
    brandShowcaseQuote: "Liderando el camino en logística de carga profesional.",
    brandShowcaseDesc: "Operamos una flota de camiones de 18 ruedas de última generación, asegurando que nuestros conductores tengan las mejores herramientas. Nuestro compromiso con la seguridad y la tecnología nos distingue.",
    brandShowcaseFeature1: "Tecnología de Seguridad Avanzada",
    brandShowcaseFeature2: "Rutas Optimizadas",
    liveSupportTitle: "¿Listo para Hablar?",
    liveSupportDesc: "Conéctate directamente con nuestros especialistas en reclutamiento para obtener orientación personalizada y procesamiento rápido de tu solicitud.",
    liveSupportCta: "Chat en WhatsApp",
  }
};
