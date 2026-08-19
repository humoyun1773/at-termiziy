import type { Combination } from '../types';

export const combinationsData: Combination[] = [
  {
    id: 1,
    titleKey: 'Kombinatsiya 1',
    subtitleKey: 'G\'arb & Sharq Diplomatik va Savdo Yo\'nalishi',
    totalMonths: 28,
    isPopular: true,
    badgeKey: 'Eng Ko\'p Tanlangan',
    recommendedForKey: 'Diplomatiya, Xalqaro munosabatlar, Yevropa va Sharq bozorlari bilan savdo logistikasi',
    careerProspectsKey: [
      'Xalqaro elchixona va konsulliklarda tarjimonlik',
      'Yevropa va Yaqin Sharq bilan savdo-iqtisodiy aloqalar bo\'yicha mutaxassis',
      'Xitoy va Germaniya yirik ishlab chiqarish kompaniyalarida vakillik'
    ],
    modules: [
      {
        id: 'c1-m1',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '🇬🇧',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / CEFR C1',
        descriptionKey: 'Xalqaro muloqot va biznes muzokaralar asosi',
        skills: ['Academic Writing', 'Public Speaking', 'Business Negotiation']
      },
      {
        id: 'c1-m2',
        nameKey: 'Fors Tili',
        durationMonths: 7,
        flag: '🇮🇷',
        color: '#059669',
        bgGradient: 'from-emerald-500 to-teal-600',
        targetLevel: 'B2 / Klassik & Zamonaviy',
        descriptionKey: 'Sharq madaniyati, adabiyoti va mintaqaviy iqtisodiy aloqalar',
        skills: ['Suhbat va Nutq', 'Sharqshunoslik', 'Hujjat aylanishi']
      },
      {
        id: 'c1-m3',
        nameKey: 'Nemis Tili',
        durationMonths: 7,
        flag: '🇩🇪',
        color: '#d97706',
        bgGradient: 'from-amber-500 to-orange-600',
        targetLevel: 'Goethe B2 / TestDaF',
        descriptionKey: 'Yevropa Ittifoqining eng kuchli iqtisodiyoti bilan integratsiya',
        skills: ['Grammatika', 'Muhandislik va biznes nemis tili', 'Sertifikat']
      },
      {
        id: 'c1-m4',
        nameKey: 'Xitoy Tili',
        durationMonths: 7,
        flag: '🇨🇳',
        color: '#dc2626',
        bgGradient: 'from-red-500 to-rose-600',
        targetLevel: 'HSK 4-5 / HSKK',
        descriptionKey: 'Jahon ishlab chiqarish giganti bilan to\'g\'ridan-to\'g\'ri muloqot',
        skills: ['Iyeroglifika', 'Biznes xitoy tili', 'Tijorat aloqalari']
      }
    ]
  },
  {
    id: 2,
    titleKey: 'Kombinatsiya 2',
    subtitleKey: 'Yuqori Texnologiyalar & Osiyo-Yevropa Innovatsiya Yo\'nalishi',
    totalMonths: 28,
    isPopular: false,
    badgeKey: 'IT & Innovatsiya',
    recommendedForKey: 'Koreya, Yaponiya va Germaniyada ta\'lim, IT industriyasi va texnologik transfer',
    careerProspectsKey: [
      'Janubiy Koreya va Yaponiya IT/avtomobil korporatsiyalarida koordinatsiya',
      'Germaniya va Yevropa davlatlarida grant asosida magistratura',
      'Xalqaro texnologik loyihalarda boshqaruvchi'
    ],
    modules: [
      {
        id: 'c2-m1',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '🇬🇧',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Global aloqalar va xalqaro tadqiqotlar vositasi',
        skills: ['Global Communication', 'Research & Writing', 'Tech Terminology']
      },
      {
        id: 'c2-m2',
        nameKey: 'Koreys Tili',
        durationMonths: 7,
        flag: '🇰🇷',
        color: '#2563eb',
        bgGradient: 'from-blue-500 to-indigo-600',
        targetLevel: 'TOPIK 4-5',
        descriptionKey: 'Janubiy Koreya grantlari, madaniyati va IT gigantlari bilan aloqa',
        skills: ['Hangul chuqurlashtirilgan', 'Suhbat amaliyoti', 'Biznes muloqot']
      },
      {
        id: 'c2-m3',
        nameKey: 'Nemis Tili',
        durationMonths: 7,
        flag: '🇩🇪',
        color: '#d97706',
        bgGradient: 'from-amber-500 to-orange-600',
        targetLevel: 'Goethe B2',
        descriptionKey: 'Germaniya nufuzli oliygohlari va sanoati bilan hamkorlik',
        skills: ['Texnik nemis tili', 'Oliy ta\'limga tayyorgarlik', 'Debatlar']
      },
      {
        id: 'c2-m4',
        nameKey: 'Yapon Tili',
        durationMonths: 7,
        flag: '🇯🇵',
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
    subtitleKey: 'Yevroosiyo & Sharqiy Osiyo Strategik Bog\'lanish Yo\'nalishi',
    totalMonths: 28,
    isPopular: false,
    badgeKey: 'Global Savdo & Logistika',
    recommendedForKey: 'MDH, Buyuk Britaniya, Xitoy va Yaponiya o\'rtasidagi logistika, transport va eksport',
    careerProspectsKey: [
      'Xalqaro logistika va multimodal yuk tashuvlari boshqaruvchisi',
      'Sharqiy Osiyo va Yevroosiyo savdo palatalarida ekspert',
      'Yirik investitsion loyihalarda rasmiy vakil va sinxron tarjimon'
    ],
    modules: [
      {
        id: 'c3-m1',
        nameKey: 'Rus Tili',
        durationMonths: 7,
        flag: '🇷🇺',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'C1 / TORFL',
        descriptionKey: 'Mintaqaviy rasmiy muloqot, yurisprudensiya va ilmiy adabiyot',
        skills: ['Akademik savodxonlik', 'Ish yuritish', 'Nutq madaniyati']
      },
      {
        id: 'c3-m2',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '🇬🇧',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Xalqaro shartnomalar va global operatsiyalar tili',
        skills: ['Contract Negotiation', 'Cross-border Trade', 'Fluency']
      },
      {
        id: 'c3-m3',
        nameKey: 'Xitoy Tili',
        durationMonths: 7,
        flag: '🇨🇳',
        color: '#dc2626',
        bgGradient: 'from-red-500 to-rose-600',
        targetLevel: 'HSK 4-5',
        descriptionKey: 'Xitoy bozorlari, fabrikalari va texnologiya markazlari bilan hamkorlik',
        skills: ['Xitoy savdo tizimi', 'Muzokaralar olib borish', 'HSKK']
      },
      {
        id: 'c3-m4',
        nameKey: 'Yapon Tili',
        durationMonths: 7,
        flag: '🇯🇵',
        color: '#e11d48',
        bgGradient: 'from-rose-500 to-red-600',
        targetLevel: 'JLPT N3-N2',
        descriptionKey: 'Yaponiya xalqaro korporatsiyalari va investitsiya dasturlari',
        skills: ['Biznes yapon tili', 'Yaponiya bozoriga kirish', 'Nutq']
      }
    ]
  },
  {
    id: 4,
    titleKey: 'Kombinatsiya 4',
    subtitleKey: 'Klassik Ko\'p Tilli & Xalqaro Boshqaruv',
    totalMonths: 28,
    isPopular: true,
    badgeKey: 'Eng Keng Qamrovli',
    recommendedForKey: 'Xalqaro moliya, bank tizimi, madaniy meros tadqiqotlari va Yevroosiyo biznesi',
    careerProspectsKey: [
      'Xalqaro banklar va moliyaviy institutlarda xorijiy departament rahbari',
      'Yevropa va Sharq mamlakatlari bilan hamkorlikda yirik loyihalar koordinatori',
      'Professional tarjimonlik agentliklari va davlat boshqaruv organlari'
    ],
    modules: [
      {
        id: 'c4-m1',
        nameKey: 'Ingliz Tili',
        durationMonths: 7,
        flag: '🇬🇧',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'IELTS 7.0+ / C1',
        descriptionKey: 'Global boshqaruv va xalqaro moliya standarti',
        skills: ['Executive English', 'Diplomatic English', 'Presentation']
      },
      {
        id: 'c4-m2',
        nameKey: 'Rus Tili',
        durationMonths: 7,
        flag: '🇷🇺',
        color: '#0284c7',
        bgGradient: 'from-sky-500 to-blue-600',
        targetLevel: 'C1 / Professional',
        descriptionKey: 'Mintaqaviy yirik korxonalar va tashqi iqtisodiy faoliyat',
        skills: ['Biznes rus tili', 'Shartnoma tili', 'Erkin suhbat']
      },
      {
        id: 'c4-m3',
        nameKey: 'Fors Tili',
        durationMonths: 7,
        flag: '🇮🇷',
        color: '#059669',
        bgGradient: 'from-emerald-500 to-teal-600',
        targetLevel: 'B2 / Klassik & Zamonaviy',
        descriptionKey: 'Tarixiy meros, sharq qo\'lyozmalari va savdo aloqalari',
        skills: ['Adabiy fors tili', 'Suhbatlashuv', 'Tarjimonlik']
      },
      {
        id: 'c4-m4',
        nameKey: 'Nemis Tili',
        durationMonths: 7,
        flag: '🇩🇪',
        color: '#d97706',
        bgGradient: 'from-amber-500 to-orange-600',
        targetLevel: 'Goethe B2 / TestDaF',
        descriptionKey: 'Germaniya, Avstriya va Shveytsariya bozorlari bilan aloqa',
        skills: ['B2 Zertifikat', 'Sanoat muloqoti', 'Debatlar']
      }
    ]
  }
];
