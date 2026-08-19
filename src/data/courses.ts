import type { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'frontend',
    title: 'Frontend Dasturlash (React & Next.js)',
    category: 'it',
    description: 'Zamonaviy veb-saytlar va murakkab veb-ilovalarni noldan yaratishni amaliy loyihalar orqali o‘rganing.',
    duration: '6 oy',
    lessonsPerWeek: 3,
    lessonDuration: '2 soat',
    level: 'Noldan professionalgacha',
    price: 850000,
    discountPrice: 690000,
    popular: true,
    features: [
      'HTML5, CSS3, Tailwind CSS, JavaScript ES6+',
      'React 19, TypeScript, Redux Toolkit, Next.js',
      'Git & GitHub, Rest API integratsiyasi',
      'Real 5+ ta portfolio loyihalari',
      'Rezyume tayyorlash va intervyuga tayyorgarlik'
    ],
    iconName: 'Code',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux']
  },
  {
    id: 'backend-python',
    title: 'Python Backend & Django / FastAPI',
    category: 'it',
    description: 'Katta hajmdagi ma’lumotlar bilan ishlash, server arxitekturasi, API yaratish va sun’iy intellekt asoslari.',
    duration: '6 oy',
    lessonsPerWeek: 3,
    lessonDuration: '2 soat',
    level: 'Boshlang‘ichdan o‘rta darajagacha',
    price: 850000,
    discountPrice: 720000,
    popular: true,
    features: [
      'Python asoslari va OOP tamoyillari',
      'PostgreSQL, SQLite va Redis bilan ishlash',
      'Django Rest Framework va FastAPI',
      'Telegram Botlar va AI integratsiyalari',
      'Docker va Linux serverlarga deploy qilish'
    ],
    iconName: 'Terminal',
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Docker']
  },
  {
    id: 'foundation-it',
    title: 'IT Foundation & Kompyuter Savodxonligi',
    category: 'it',
    description: 'IT sohasiga ilk qadam: kompyuter arxitekturasi, algoritmik fikrlash va dasturlashga tayyorgarlik.',
    duration: '2 oy',
    lessonsPerWeek: 3,
    lessonDuration: '1.5 soat',
    level: 'Noldan boshlovchilar uchun',
    price: 550000,
    discountPrice: 450000,
    features: [
      'Kompyuter tizimlari va Windows / Linux asoslari',
      'Algoritmlar va mantiqiy fikrlash',
      'HTML va CSS ga dastlabki kirish',
      'Internet va xavfsizlik madaniyati'
    ],
    iconName: 'Laptop',
    technologies: ['Algorithms', 'Logic', 'Office', 'Basics']
  },
  {
    id: 'ielts-rocket',
    title: 'IELTS Intensive (Band 7.0+)',
    category: 'languages',
    description: 'Xalqaro imtihonga chuqurlashtirilgan tayyorgarlik. 8.0+ ballga ega instruktorlar va haftalik Mock imtihonlar.',
    duration: '3 oy',
    lessonsPerWeek: 3,
    lessonDuration: '2 soat',
    level: 'Intermediate va undan yuqori',
    price: 750000,
    discountPrice: 590000,
    popular: true,
    features: [
      'Listening, Reading, Writing, Speaking bo‘yicha 20+ strategiyalar',
      'Haftalik bepul Mock Exam va tahlil',
      'Speaking Club (Native speakerlar bilan)',
      'Writing insho tekshiruvlari va shaxsiy feedback'
    ],
    iconName: 'Globe',
    technologies: ['IELTS 7.5+', 'Speaking Club', 'Mock Exam']
  },
  {
    id: 'general-english',
    title: 'General English (Boshlang‘ichdan Advanced)',
    category: 'languages',
    description: 'Ingliz tilida erkin so‘zlashish, grammatikani tushunish va so‘z boyligini kengaytirish kursi.',
    duration: '4-6 oy',
    lessonsPerWeek: 3,
    lessonDuration: '1.5 soat',
    level: 'Barcha darajalar (A1-C1)',
    price: 600000,
    discountPrice: 490000,
    features: [
      'Interaktiv metodika va erkin muloqot muhiti',
      'Har darsda audio va video mashg‘ulotlar',
      'Vocabulary booster va kundalik iboralar',
      'Daraja oxirida rasmiy sertifikat'
    ],
    iconName: 'BookOpen',
    technologies: ['Grammar', 'Speaking', 'Vocabulary']
  },
  {
    id: 'arabic-language',
    title: 'Arab Tili & Sarf-Nahv',
    category: 'languages',
    description: 'Arab alifbosi, fonetika, o‘qish, yozish va grammatika (sarf-nahv) asoslari tizimli tarzda o‘rgatiladi.',
    duration: '5 oy',
    lessonsPerWeek: 3,
    lessonDuration: '1.5 soat',
    level: 'Noldan boshlovchilar uchun',
    price: 600000,
    discountPrice: 490000,
    features: [
      'Mukammal maxraj va tajvid qoidalari',
      'Sarf va nahv qoidalari sodda tilda',
      'Arabcha matnlarni erkin o‘qish va tarjima qilish',
      'Diniy va adabiy manbalarni tushunish ko‘nikmasi'
    ],
    iconName: 'BookMarked',
    technologies: ['Tajweed', 'Sarf', 'Nahv', 'Reading']
  },
  {
    id: 'mental-math',
    title: 'Mental Arifmetika & Mantiqiy Fikrlash',
    category: 'kids',
    description: '6-14 yoshli bolalar uchun: tezkor hisob-kitob, xotira rivoji, diqqatni jamlash va kreativ fikrlash.',
    duration: '4 oy',
    lessonsPerWeek: 2,
    lessonDuration: '1.5 soat',
    level: '6 - 14 yosh',
    price: 500000,
    discountPrice: 390000,
    features: [
      'Abakus bilan ishlash va tasavvurda hisoblash',
      'O‘ng va chap miya yarimsharlarini muvozanatli rivojlantirish',
      'Xotira, e’tibor va reaksiya tezligini oshirish',
      'Respublika olimpiadalariga tayyorgarlik'
    ],
    iconName: 'Calculator',
    technologies: ['Abacus', 'Logic', 'Memory', 'Brain Training']
  },
  {
    id: 'president-school',
    title: 'Prezident va Al-Xorazmiy Maktablariga Tayyorlov',
    category: 'science',
    description: 'Tanqidiy fikrlash (Critical Thinking), mantiqiy matematika va ingliz tili bo‘yicha ixtisoslashtirilgan tayyorgarlik.',
    duration: '6-9 oy',
    lessonsPerWeek: 4,
    lessonDuration: '2 soat',
    level: '3 - 8 sinf o‘quvchilari',
    price: 800000,
    discountPrice: 650000,
    popular: true,
    features: [
      'Cambridge standartidagi testlar va savollar',
      'Problem solving va tanqidiy fikrlash metodlari',
      'Haftalik test sinovlari va reyting tizimi',
      'Ota-onalar bilan muntazam monitoring'
    ],
    iconName: 'GraduationCap',
    technologies: ['Critical Thinking', 'Cambridge Maths', 'Mock Tests']
  }
];