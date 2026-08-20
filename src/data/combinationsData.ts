import type { Combination } from '../types';

export const combinationsData: Combination[] = [
  {
    id: 1,
    titleKey: 'Kombinatsiya 1',
    subtitleKey: 'Ingliz ? Nemis ? Turk ? Xitoy (28 Oylik Tizim)',
    totalMonths: 28,
    isPopular: true,
    badgeKey: 'Eng Ko\'p Tanlangan',
    recommendedForKey: 'Yevropa, Turkiya va Xitoy bilan xalqaro savdo, diplomatiya va logistika',
    careerProspectsKey: [
      'Xalqaro korporatsiyalar va konsulliklarda tarjimonlik',
      'Yevropa va Turkiya bilan savdo-iqtisodiy aloqalar bo\'yicha mutaxassis',
      'Xitoy va Germaniya yirik ishlab chiqarish kompaniyalarida rasmiy vakil'
    ],
    modules: [
      {
        id: 'c1-m1',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / CEFR C1',
        descriptionKey: 'Xalqaro muloqot va global biznes muzokaralari asosi',
        skills: ['Academic Writing', 'Public Speaking', 'Business Negotiation']
      },
      {
        id: 'c1-m2',
        nameKey: 'Nemis Tili',
        durationMonths: 7,
        flag: '????',
        color: '#d97706',
        bgGradient: 'from-amber-500 to-orange-600',
        targetLevel: 'Goethe B2 / TestDaF',
        descriptionKey: 'Yevropa Ittifoqining yetakchi iqtisodiyoti bilan integratsiya',
        skills: ['Grammatika', 'Muhandislik va biznes nemis tili', 'Ausbildung tayyorgarlik']
      },
      {
        id: 'c1-m3',
        nameKey: 'Turk Tili',
        durationMonths: 7,
        flag: '????',
        color: '#e11d48',
        bgGradient: 'from-red-500 to-rose-600',
        targetLevel: 'T�MER C1 / Yunus Emre',
        descriptionKey: 'Turk dunyosi savdo-sanoat aloqalari va investitsiya dasturlari',
        skills: ['T�MER C1', 'Ishbilarmonlik turk tili', 'Turkiya oliygohlariga grantlar']
      },
      {
        id: 'c1-m4',
        nameKey: 'Xitoy Tili',
        durationMonths: 7,
        flag: '????',
        color: '#dc2626',
        bgGradient: 'from-rose-500 to-red-700',
        targetLevel: 'HSK 4-5 / HSKK',
        descriptionKey: 'Jahon ishlab chiqarish giganti bilan to\'g\'ridan-to\'g\'ri tijorat',
        skills: ['Iyeroglifika', 'Biznes xitoy tili', 'Tijorat aloqalari']
      }
    ]
  },
  {
    id: 2,
    titleKey: 'Kombinatsiya 2',
    subtitleKey: 'Nemis ? Rus ? Ingliz ? Yapon (28 Oylik Tizim)',
    totalMonths: 28,
    isPopular: false,
    badgeKey: 'IT & Innovatsiya',
    recommendedForKey: 'Germaniya, Rossiya, Buyuk Britaniya va Yaponiya texnologik transferi va savdosi',
    careerProspectsKey: [
      'Germaniya va Yaponiya texnologik korporatsiyalarida koordinatsiya',
      'Yevropa va Yevroosiyo bozorlarida xalqaro loyihalar boshqaruvi',
      'Grant asosida xorijiy magistratura va ilmiy tadqiqotlar'
    ],
    modules: [
      {
        id: 'c2-m1',
        nameKey: 'Nemis Tili',
        durationMonths: 7,
        flag: '????',
        color: '#d97706',
        bgGradient: 'from-amber-500 to-orange-600',
        targetLevel: 'Goethe B2 / TestDaF',
        descriptionKey: 'Germaniya oliygohlari va Yevropa sanoati bilan hamkorlik',
        skills: ['Texnik nemis tili', 'Oliy ta\'limga tayyorgarlik', 'Debatlar']
      },
      {
        id: 'c2-m2',
        nameKey: 'Rus Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'C1 / TORFL',
        descriptionKey: 'Mintaqaviy rasmiy muloqot, yurisprudensiya va ilmiy adabiyot',
        skills: ['Akademik savodxonlik', 'Ish yuritish', 'Nutq madaniyati']
      },
      {
        id: 'c2-m3',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Global aloqalar va xalqaro tadqiqotlar vositasi',
        skills: ['Global Communication', 'Research & Writing', 'Fluency']
      },
      {
        id: 'c2-m4',
        nameKey: 'Yapon Tili',
        durationMonths: 7,
        flag: '????',
        color: '#e11d48',
        bgGradient: 'from-rose-500 to-red-600',
        targetLevel: 'JLPT N3-N2',
        descriptionKey: 'Kunchiqar yurt madaniyati, robototexnika va aniq intizom',
        skills: ['Kanji yozuvi', 'Ishbilarmonlik etikasi', 'Sinxron muloqot']
      }
    ]
  },
  {
    id: 3,
    titleKey: 'Kombinatsiya 3',
    subtitleKey: 'Turk ? Ingliz ? Yapon ? Koreys (28 Oylik Tizim)',
    totalMonths: 28,
    isPopular: false,
    badgeKey: 'Sharqiy Osiyo & Turk Dunyosi',
    recommendedForKey: 'Turkiya, Anglosakson davlatlari, Yaponiya va Janubiy Koreya investitsion hamkorligi',
    careerProspectsKey: [
      'Turkiya va Sharqiy Osiyo gigantlarida xalqaro departament rahbari',
      'Yaponiya va Janubiy Koreya grantlari asosida ta\'lim va amaliyot',
      'Xalqaro investitsion forumlarda sinxron tarjimonlik'
    ],
    modules: [
      {
        id: 'c3-m1',
        nameKey: 'Turk Tili',
        durationMonths: 7,
        flag: '????',
        color: '#e11d48',
        bgGradient: 'from-red-500 to-rose-600',
        targetLevel: 'T�MER C1',
        descriptionKey: 'Turk dunyosi, investitsiyalar va xalqaro turizm tili',
        skills: ['Suhbatlashuv', 'Turkiya ishbilarmonlik etikasi', 'T�MER Sertifikat']
      },
      {
        id: 'c3-m2',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Xalqaro shartnomalar va global operatsiyalar tili',
        skills: ['Contract Negotiation', 'Cross-border Trade', 'Fluency']
      },
      {
        id: 'c3-m3',
        nameKey: 'Yapon Tili',
        durationMonths: 7,
        flag: '????',
        color: '#e11d48',
        bgGradient: 'from-rose-500 to-red-600',
        targetLevel: 'JLPT N3-N2',
        descriptionKey: 'Yaponiya korporatsiyalari va texnologik grant dasturlari',
        skills: ['Biznes yapon tili', 'Yaponiya bozoriga kirish', 'Nutq']
      },
      {
        id: 'c3-m4',
        nameKey: 'Koreys Tili',
        durationMonths: 7,
        flag: '????',
        color: '#2563eb',
        bgGradient: 'from-blue-500 to-indigo-600',
        targetLevel: 'TOPIK 4-5',
        descriptionKey: 'Janubiy Koreya grantlari, GKS dasturlari va korporatsiyalari',
        skills: ['Hangul chuqurlashtirilgan', 'Suhbat amaliyoti', 'Biznes muloqot']
      }
    ]
  },
  {
    id: 4,
    titleKey: 'Kombinatsiya 4',
    subtitleKey: 'Koreys ? Yapon ? Rus ? Ingliz (28 Oylik Tizim)',
    totalMonths: 28,
    isPopular: true,
    badgeKey: 'Global Diplomatiya & Osiyo',
    recommendedForKey: 'Janubiy Koreya, Yaponiya, MDH va Anglosakson dunyosi bilan global muloqot',
    careerProspectsKey: [
      'Osiyo-Tinch okeani mintaqasi va Yevroosiyo xalqaro tashkilotlarida faoliyat',
      'Yirik multimodal savdo-iqtisodiy tarmoqlarda boshqaruvchi',
      'Diplomatik vakolatxonalar va xalqaro moliya institutlari'
    ],
    modules: [
      {
        id: 'c4-m1',
        nameKey: 'Koreys Tili',
        durationMonths: 7,
        flag: '????',
        color: '#2563eb',
        bgGradient: 'from-blue-500 to-indigo-600',
        targetLevel: 'TOPIK 4-5',
        descriptionKey: 'Janubiy Koreya ta\'lim grantlari va texnologiya gigantlari bilan aloqa',
        skills: ['TOPIK 4-5', 'Akademik Hangul', 'Biznes muzokaralar']
      },
      {
        id: 'c4-m2',
        nameKey: 'Yapon Tili',
        durationMonths: 7,
        flag: '????',
        color: '#e11d48',
        bgGradient: 'from-rose-500 to-red-600',
        targetLevel: 'JLPT N3-N2',
        descriptionKey: 'Kunchiqar yurt madaniyati, robototexnika va aniq intizom',
        skills: ['Kanji yozuvi', 'Ishbilarmonlik etikasi', 'Sinxron muloqot']
      },
      {
        id: 'c4-m3',
        nameKey: 'Rus Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'C1 / TORFL',
        descriptionKey: 'Mintaqaviy rasmiy muloqot va tashqi iqtisodiy faoliyat',
        skills: ['Biznes rus tili', 'Shartnoma tili', 'Erkin suhbat']
      },
      {
        id: 'c4-m4',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '????',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Global boshqaruv va xalqaro moliya standarti',
        skills: ['Executive English', 'Diplomatic English', 'Presentation']
      }
    ]
  }
];
