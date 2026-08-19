export type Language = 'uz' | 'ru' | 'en';

export interface LanguageModule {
  id: string;
  nameKey: string;
  durationMonths: number;
  flag: string;
  color: string;
  bgGradient: string;
  targetLevel: string;
  descriptionKey: string;
  skills: string[];
}

export interface Combination {
  id: number;
  titleKey: string;
  subtitleKey: string;
  totalMonths: number;
  modules: LanguageModule[];
  careerProspectsKey: string[];
  recommendedForKey: string;
  badgeKey?: string;
  isPopular?: boolean;
}

export interface CourseDetail {
  id: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  nativeName: string;
  flag: string;
  duration: {
    uz: string;
    ru: string;
    en: string;
  };
  intensity: {
    uz: string;
    ru: string;
    en: string;
  };
  levels: string[];
  certificate: string;
  color: string;
  tagline: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  careerOpportunities: {
    uz: string[];
    ru: string[];
    en: string[];
  };
}

export interface Teacher {
  id: string;
  name: string;
  role: {
    uz: string;
    ru: string;
    en: string;
  };
  languages: string[];
  experience: {
    uz: string;
    ru: string;
    en: string;
  };
  certificate: string;
  image: string;
  bio: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  combinationId: number;
  currentRole: {
    uz: string;
    ru: string;
    en: string;
  };
  company: string;
  quote: {
    uz: string;
    ru: string;
    en: string;
  };
  languagesLearned: string[];
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: {
    uz: string;
    ru: string;
    en: string;
  };
  answer: {
    uz: string;
    ru: string;
    en: string;
  };
  category: 'general' | 'combination' | 'career' | 'discipline';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  selectedCombination?: number | string;
  selectedLanguage?: string;
  studyTime?: string;
  notes?: string;
}