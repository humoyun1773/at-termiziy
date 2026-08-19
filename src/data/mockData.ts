import type { Teacher, Testimonial, FAQItem } from '../types';

export const teachersData: Teacher[] = [
  {
    id: 't1',
    name: "Dr. Muzaffar Rahimov",
    role: {
      uz: "Bosh Metodist & Ko'p Tilli Mutaxassis (5 ta til)",
      ru: "Главный методист & Полиглот (5 языков)",
      en: "Chief Methodologist & Polyglot (5 languages)"
    },
    languages: ["Ingliz", "Nemis", "Xitoy", "Rus", "Fors"],
    experience: {
      uz: "14 yillik xalqaro tajriba",
      ru: "14 лет международного опыта",
      en: "14+ years global experience"
    },
    certificate: "IELTS 8.5 / Goethe C2 / HSK 6",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Oksford va Shanxay universitetlarida malaka oshirgan, 28 oylik ko'p tilli ta'lim metodikasi muallifi.",
      ru: "Стажировался в Оксфорде и Шанхае, автор 28-месячной методики полиглотного обучения.",
      en: "Trained at Oxford & Shanghai Universities, architect of the 28-month polyglot pedagogy."
    }
  },
  {
    id: 't2',
    name: "Feruza Aliyeva",
    role: {
      uz: "Nemis & Ingliz Tili Katta O'qituvchisi",
      ru: "Старший преподаватель немецкого и английского языков",
      en: "Senior German & English Specialist"
    },
    languages: ["Nemis", "Ingliz"],
    experience: {
      uz: "9 yillik tajriba",
      ru: "9 лет опыта",
      en: "9+ years experience"
    },
    certificate: "Goethe C1 / IELTS 8.0 / DAAD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "DAAD granti sohibasi, Myunxen texnika universitetida ilmiy izlanish olib borgan.",
      ru: "Стипендиат программы DAAD, вела исследования в Мюнхенском техническом университете.",
      en: "DAAD scholarship awardee, research fellow at Technical University of Munich."
    }
  },
  {
    id: 't3',
    name: "Lee Jin-Woo & Jasur Qodirov",
    role: {
      uz: "Koreys & Yapon Tili Eksperti",
      ru: "Эксперт по корейскому и японскому языкам",
      en: "East Asian Languages Director"
    },
    languages: ["Koreys", "Yapon", "Ingliz"],
    experience: {
      uz: "8 yillik tajriba",
      ru: "8 лет опыта",
      en: "8+ years experience"
    },
    certificate: "TOPIK 6 / JLPT N1",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Seul milliy universitetida tahsil olgan, GKS granti va MEXT dasturlari koordinatori.",
      ru: "Выпускник Сеульского национального университета, координатор программ GKS и MEXT.",
      en: "Seoul National University alumnus, official mentor for GKS and MEXT fellowships."
    }
  },
  {
    id: 't4',
    name: "Hamidulloh Termiziy",
    role: {
      uz: "Fors Tili & Sharqshunoslik Kafedrasi Mudiri",
      ru: "Заведующий кафедрой персидского языка и востоковедения",
      en: "Head of Persian Studies & Oriental Manuscripts"
    },
    languages: ["Fors", "Arab", "Rus"],
    experience: {
      uz: "16 yillik ilmiy tajriba",
      ru: "16 лет научного опыта",
      en: "16+ years academic experience"
    },
    certificate: "Sharqshunoslik fanlari nomzodi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: {
      uz: "Tehron universitetida malaka oshirgan, qadimiy qo'lyozmalar bo'yicha yetakchi tadqiqotchi.",
      ru: "Стажировался в Тегеранском университете, ведущий исследователь древних рукописей.",
      en: "University of Tehran scholar, distinguished authority on classical oriental manuscripts."
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: "Shaxzod Xolmurodov",
    combinationId: 1,
    currentRole: {
      uz: "Xalqaro Savdo Koordinatori",
      ru: "Координатор международной торговли",
      en: "International Trade Operations Coordinator"
    },
    company: "Silk Road Logistics GmbH (Germaniya & O'zbekiston)",
    languagesLearned: ["Ingliz", "Fors", "Nemis", "Xitoy"],
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
    quote: {
      uz: "28 oylik dastur hayotimni butunlay o'zgartirdi. Ingliz, Fors, Nemis va Xitoy tillarini o'zlashtirganim uchun to'g'ridan-to'g'ri Germaniya kompaniyasiga ishga qabul qilindim!",
      ru: "28-месячная программа полностью изменила мою жизнь. Благодаря знанию английского, фарси, немецкого и китайского меня сразу взяли в немецкую логистическую компанию!",
      en: "The 28-month program completely transformed my career. Mastering English, Persian, German, and Chinese opened direct doors to a top German logistics corporation!"
    }
  },
  {
    id: 'test-2',
    name: "Madina Ergasheva",
    combinationId: 2,
    currentRole: {
      uz: "GKS Grant Sohibasi & IT Tahlilchi",
      ru: "Стипендиат GKS & IT-аналитик",
      en: "GKS Scholar & Tech Analyst"
    },
    company: "KAIST (Janubiy Koreya)",
    languagesLearned: ["Ingliz", "Koreys", "Nemis", "Yapon"],
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200",
    quote: {
      uz: "Markazdagi qat'iy intizom va 7 oylik tizim orqali Koreys tili TOPIK 5 va Nemis tili B2 darajani oldim. Hozirda Koreyada 100% to'liq grantda o'qiyapman.",
      ru: "Строгая дисциплина центра и 7-месячные блоки помогли мне получить TOPIK 5 и Goethe B2. Сейчас учусь в Корее на 100% правительственном гранте.",
      en: "Strict discipline and modular 7-month milestones enabled me to secure TOPIK 5 and Goethe B2. I am now pursuing my degree in South Korea on a 100% government scholarship."
    }
  },
  {
    id: 'test-3',
    name: "Farrux Yusupov",
    combinationId: 3,
    currentRole: {
      uz: "Sinxron Tarjimon & Diplomatik Protokol Xodimi",
      ru: "Синхронный переводчик & Сотрудник диппротокола",
      en: "Simultaneous Interpreter & Protocol Officer"
    },
    company: "Xalqaro Savdo Forumi",
    languagesLearned: ["Rus", "Ingliz", "Xitoy", "Yapon"],
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    quote: {
      uz: "Al-Hakim At-Termeziy markazida intizom haqiqatan ham birinchi o'rinda. Dars qoldirish yo'q, natija esa 100% kafolatlangan. Hozirda 4 tilda erkin tarjima qila olaman.",
      ru: "В центре Аль-Хаким Ат-Термезий дисциплина действительно на первом месте. Пропусков нет, результат на 100% гарантирован. Сейчас свободно перевожу на 4 языках.",
      en: "Discipline is truly paramount at Al-Hakim At-Termeziy. Zero missed classes, rigorous accountability, and 100% results. I now interpret effortlessly across 4 global languages."
    }
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'combination',
    question: {
      uz: "28 oylik dasturda 4 ta tilni qanday qilib 7 oydan o'rganish mumkin?",
      ru: "Как за 28 месяцев можно освоить 4 языка по 7 месяцев каждый?",
      en: "How is it possible to learn 4 languages in 28 months (7 months each)?"
    },
    answer: {
      uz: "Bizning metodika qat'iy intensiv immersion (to'liq sho'ng'ish) tizimiga asoslangan. Har bir 7 oylik modulda talaba kuniga 3-4 soat amaliyot, kundalik so'z yodlash va grammatika algoritmlari asosida noldan B2/C1 darajaga olib chiqiladi.",
      ru: "Наша методика основана на строгом погружении (immersion). В каждом 7-месячном модуле студент занимается по 3-4 часа в день, осваивая язык до уровня B2/C1 по четким алгоритмам.",
      en: "Our methodology utilizes rigorous total-immersion training. In each 7-month block, intensive structured drills and memory algorithms advance students from zero to B2/C1 fluency."
    }
  },
  {
    id: 'faq-2',
    category: 'career',
    question: {
      uz: "Kursni tugatgandan so'ng qanday qilib ish bilan ta'minlanadi?",
      ru: "Как происходит трудоустройство после окончания курса?",
      en: "How does the guaranteed job placement program work?"
    },
    answer: {
      uz: "Markazimiz O'zbekistondagi va xorijdagi 30 dan ortiq yirik kompaniyalar, tarjima agentliklari, logistika va xalqaro korxonalar bilan rasmiy memorandumga ega. 28 oylik dasturni muvaffaqiyatli tamomlagan talabalarga to'g'ridan-to'g'ri ish takliflari taqdim etiladi.",
      ru: "У нашего центра заключены официальные соглашения с более чем 30 местными и международными компаниями, логистическими операторами и переводческими агентствами.",
      en: "We hold formal partnership agreements with over 30 international enterprises, translation bureaus, logistics conglomerates, and tech companies, ensuring direct job offers for our graduates."
    }
  },
  {
    id: 'faq-3',
    category: 'discipline',
    question: {
      uz: "\"Intizomni sevuvchilar uchun\" shiori nimani anglatadi?",
      ru: "Что означает девиз «Для тех, кто ценит дисциплину»?",
      en: "What does the motto 'For Those Who Love Discipline' signify?"
    },
    answer: {
      uz: "Bizda darsga sababsiz kechikish yoki vazifalarni bajarmaslik qat'iyan man etiladi. O'quvchilar kunlik rejim, maxsus lug'at daftari va haftalik nazorat tizimiga rioya qilishadi. Natija faqat temir intizom orqali kafolatlanadi.",
      ru: "У нас строго запрещены опоздания и невыполнение заданий. Студенты соблюдают строгий распорядок дня, ведут словари и сдают еженедельный контроль.",
      en: "Unexcused absences and uncompleted homework are strictly not tolerated. Students maintain daily vocabulary logs, schedule discipline, and pass weekly assessments."
    }
  },
  {
    id: 'faq-4',
    category: 'general',
    question: {
      uz: "Darslar qayerda bo'lib o'tadi va manzil qayerda?",
      ru: "Где проходят занятия и каков точный адрес?",
      en: "Where are classes held and what is the campus location?"
    },
    answer: {
      uz: "Barcha darslar Qarshi shahridagi zamonaviy, barcha qulayliklar va audio-vizual texnologiyalar bilan jihozlangan bosh binomizda o'tiladi. Telefonimiz: +998 91 951 73 35.",
      ru: "Все занятия проходят в нашем главном современном корпусе в городе Карши, оснащенном аудиотехникой и смарт-панелями. Телефон: +998 91 951 73 35.",
      en: "All classes take place in our premier flagship campus in Qarshi City, equipped with cutting-edge audio-visual and multimedia learning pods. Phone: +998 91 951 73 35."
    }
  }
];
