import type { Teacher } from '../types';

export const teachersData: Teacher[] = [
  {
    id: '1',
    name: 'Sardorbek Rahimov',
    role: 'Senior Fullstack Dasturchi & IT Mentor',
    experience: '6+ yil tajriba',
    bio: 'Yirik xalqaro kompaniyalarda React, Node.js va bulutli tizimlar bo‘yicha ishlagan. 300+ dan ortiq shogirdlari hozirda IT kompaniyalarda faoliyat yuritadi.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    specialties: ['React', 'Next.js', 'Node.js', 'System Architecture'],
    achievements: ['Ex-EPAM dasturchi', '50+ muvaffaqiyatli loyiha']
  },
  {
    id: '2',
    name: 'Madina Umarova',
    role: 'IELTS Head Instructor (Band 8.5)',
    experience: '5+ yil tajriba',
    bio: 'Xalqaro CELTA sertifikatiga ega. 400+ o‘quvchisi 7.0 va undan yuqori ball to‘plagan.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialties: ['IELTS Writing', 'Speaking Strategies', 'CELTA Certified'],
    achievements: ['IELTS 8.5 egasi', 'CELTA Cambridge']
  },
  {
    id: '3',
    name: 'Jasurbek Aliyev',
    role: 'Senior Python & AI Engineer',
    experience: '5+ yil tajriba',
    bio: 'Data Science, Machine Learning va murakkab backend tizimlar mutaxassisi. Algoritmlar bo‘yicha respublika g‘olibi.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialties: ['Python', 'FastAPI', 'Machine Learning', 'PostgreSQL'],
    achievements: ['Respublika olimpiadasi sovrindori', 'AI loyihalar muallifi']
  },
  {
    id: '4',
    name: 'Nigora Karimova',
    role: 'Oliy toifali Matematika fani o‘qituvchisi',
    experience: '8+ yil tajriba',
    bio: 'Prezident va Al-Xorazmiy maktablariga tayyorlov bo‘yicha 8 yillik samarali tajriba. O‘quvchilarining 80% dan ortig‘i grantga qabul qilingan.',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    specialties: ['Critical Thinking', 'Cambridge Maths', 'Olimpiada'],
    achievements: ['150+ Prezident maktabi o‘quvchilari', 'Oliy toifa']
  }
];