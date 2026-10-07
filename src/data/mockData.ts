import type { FAQItem } from '../types';

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
      uz: "Barcha darslar Qarshi shahridagi zamonaviy, barcha qulayliklar va audio-vizual texnologiyalar bilan jihozlangan bosh binomizda o'tiladi. Telefonimiz: +998 90 123 45 67.",
      ru: "Все занятия проходят в нашем главном современном корпусе в городе Карши, оснащенном аудиотехникой и смарт-панелями. Телефон: +998 90 123 45 67.",
      en: "All classes take place in our premier flagship campus in Qarshi City, equipped with cutting-edge audio-visual and multimedia learning pods. Phone: +998 90 123 45 67."
    }
  }
];
