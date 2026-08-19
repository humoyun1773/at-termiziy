export type CourseCategory = 'all' | 'it' | 'languages' | 'science' | 'kids';

export interface Course {
  id: string;
  title: string;
  category: 'it' | 'languages' | 'science' | 'kids';
  description: string;
  duration: string;
  lessonsPerWeek: number;
  lessonDuration: string;
  level: string;
  price: number;
  discountPrice?: number;
  popular?: boolean;
  features: string[];
  iconName: string;
  technologies?: string[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
  specialties: string[];
  achievements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  result: string;
  feedback: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  course: string;
  timePreference: 'morning' | 'afternoon' | 'evening';
  message?: string;
}

export interface StatItem {
  number: string;
  label: string;
  description: string;
  icon: string;
}