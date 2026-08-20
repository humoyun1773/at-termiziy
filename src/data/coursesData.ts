import type { CourseDetail } from '../types';

export const coursesData: CourseDetail[] = [
  {
    id: 'turkish',
    name: {
      uz: 'Turk Tili (T�MER & Yunus Emre Enstit�s�)',
      ru: '???????? ???? (T�MER & ???????? ????? ????)',
      en: 'Turkish (T�MER & Yunus Emre Enstit�s�)'
    },
    nativeName: 'T�rk�e',
    flag: '????',
    duration: {
      uz: '7 oy intensiv (A1 dan C1 gacha)',
      ru: '7 ??????? ???????? (? A1 ?? C1)',
      en: '7 months intensive (from A1 to C1)'
    },
    intensity: {
      uz: 'Haftada 3-4 kun, 2 soatdan',
      ru: '3-4 ??? ? ??????, ?? 2 ????',
      en: '3-4 days/week, 2 hours/day'
    },
    levels: ['Temel (A1-A2)', 'Orta (B1-B2)', 'Y�ksek (C1)'],
    certificate: 'T�MER C1 / Yunus Emre T�rk�e Yeterlik Belgesi',
    color: '#e11d48',
    tagline: {
      uz: "Turkiya oliygohlarida grant ta'limi va turk dunyosi bilan xalqaro biznes",
      ru: '????????? ??????????? ? ?????? ? ????????????? ?????? ? ???????? ?????',
      en: 'Full scholarship admissions in Turkey and strategic business across the Turkic world'
    },
    description: {
      uz: "Turkiya Burslari grantlari, turk sanoat korxonalari va xalqaro turizm sohalarida yuqori daromadli karyera qurish uchun maxsus intensiv dastur.",
      ru: '??????????? ??????????? ????????? ??? ????????? ??????? T�rkiye Burslari ? ??????? ? ???????? ???????????? ?????????.',
      en: 'Intensive program tailored for T�rkiye Burslari scholarship admission and high-impact careers in Turkish industrial conglomerates.'
    },
    features: {
      uz: [
        'T�MER va TYS (T�rk�e Yeterlik Sinavi) imtihonlariga to\'liq tayyorgarlik',
        'T�rkiye Burslari grantiga ariza topshirishda bepul mentorlik',
        'Ishbilarmonlik turk tili va savdo muzokaralari amaliyoti',
        'Turkiya yetakchi universitetlari bilan to\'g\'ridan-to\'g\'ri aloqa'
      ],
      ru: [
        '?????? ?????????? ? ???????????????? ????????? T�MER ? TYS',
        '?????????? ?????????? ?? ?????? ?? ????????????????? ????? T�rkiye Burslari',
        '???????? ???????? ????????? ????? ? ???????? ???????????',
        '?????? ???????? ? ???????? ?????????????? ??????'
      ],
      en: [
        'Comprehensive prep for T�MER and TYS (Turkish Proficiency Exam)',
        'Full guidance and mentorship for T�rkiye Burslari government scholarships',
        'Executive business Turkish and cross-border commercial negotiation skills',
        'Direct admission linkages with top-ranked Turkish universities'
      ]
    },
    careerOpportunities: {
      uz: ['Turkiya va Yevropa xalqaro kompaniyalarida menejer', 'Diplomatik vakolatxonalarda tarjimon', 'Turkiya oliygohlarida grant asosida magistratura', 'Xalqaro to\'qimachilik va sanoat logistikasi'],
      ru: ['???????? ? ????????????? ????????? ?????? ? ??????', '?????????? ? ??????????????? ??????????????????', '???????????? ? ?????? ?? ??????? ??????', '??????????? ? ???????????? ?????????'],
      en: ['Corporate Manager in Turkish & EU Enterprises', 'Diplomatic Mission Interpreter', 'T�rkiye Burslari Master/PhD Fellow', 'International Industrial & Freight Trade']
    }
  },

  {
    id: 'english',
    name: {
      uz: 'Ingliz Tili (General & Academic IELTS)',
      ru: 'Английский Язык (General & Academic IELTS)',
      en: 'English (General & Academic IELTS)'
    },
    nativeName: 'English Language',
    flag: '🇬🇧',
    duration: {
      uz: '7 oy intensiv / 3-12 oy modul',
      ru: '7 месяцев интенсив / 3-12 мес. модуль',
      en: '7 months intensive / 3-12 mo. modular'
    },
    intensity: {
      uz: 'Haftada 3-5 kun, 2 soatdan',
      ru: '3-5 дней в неделю, по 2 часа',
      en: '3-5 days/week, 2 hours/day'
    },
    levels: ['Beginner (A1)', 'Elementary (A2)', 'Intermediate (B1)', 'Upper-Intermediate (B2)', 'Advanced (C1)'],
    certificate: 'IELTS 7.0+ / CEFR C1 / TOEFL',
    color: '#0284c7',
    tagline: {
      uz: 'Dunyo miqyosida erkin muloqot va cheksiz global imkoniyatlar kaliti',
      ru: 'Ключ к свободному мировому общению и безграничным глобальным возможностям',
      en: 'The global gateway to international communication and boundless opportunities'
    },
    description: {
      uz: 'Noldan boshlab akademik darajagacha o\'rgatiladi. Darslar interaktiv speaking club, debat va xalqaro imtihonlarga tayyorlov tizimida olib boriladi.',
      ru: 'Обучение от нуля до академического уровня. Занятия включают разговорный клуб, дебаты и подготовку к международным экзаменам.',
      en: 'From zero to advanced academic proficiency. Interactive speaking clubs, debating societies, and official exam preparation.'
    },
    features: {
      uz: [
        'Har haftalik mock IELTS va CEFR imtihonlari',
        'Native speakerlar bilan doimiy suhbat mashg\'ulotlari',
        'Biznes va akademik yozish (Writing Task 1 & 2) bo\'yicha maxsus metodika',
        'Xorijiy universitetlarga grant yutish bo\'yicha bepul mentorlik'
      ],
      ru: [
        'Еженедельные пробные тесты Mock IELTS и CEFR',
        'Регулярные разговорные клубы с носителями языка',
        'Методика академического и делового письма (Writing)',
        'Бесплатное менторство по получению зарубежных грантов'
      ],
      en: [
        'Weekly Mock IELTS & CEFR simulation exams',
        'Regular speaking clubs with native instructors',
        'Advanced academic & business writing strategies',
        'Free scholarship & admission mentorship for top universities'
      ]
    },
    careerOpportunities: {
      uz: ['Xalqaro kompaniyalarda menejer', 'Sinxron va yozma tarjimon', 'Xorijda magistratura va PhD', 'IT va xalqaro savdo'],
      ru: ['Менеджер в международных компаниях', 'Синхронный и письменный переводчик', 'Магистратура и PhD за рубежом', 'IT и ВЭД'],
      en: ['International Corporate Manager', 'Simultaneous & Technical Interpreter', 'Global Master/PhD Scholarships', 'IT & International Trade']
    }
  },
  {
    id: 'german',
    name: {
      uz: 'Nemis Tili (Goethe-Zertifikat & TestDaF)',
      ru: 'Немецкий Язык (Goethe-Zertifikat & TestDaF)',
      en: 'German (Goethe-Zertifikat & TestDaF)'
    },
    nativeName: 'Deutsche Sprache',
    flag: '🇩🇪',
    duration: {
      uz: '7 oy intensiv (A1 dan B2 gacha)',
      ru: '7 месяцев интенсив (с A1 до B2)',
      en: '7 months intensive (from A1 to B2)'
    },
    intensity: {
      uz: 'Haftada 3-4 kun, 2 soatdan',
      ru: '3-4 дня в неделю, по 2 часа',
      en: '3-4 days/week, 2 hours/day'
    },
    levels: ['A1 (Start Deutsch 1)', 'A2 (Start Deutsch 2)', 'B1 (Zertifikat Deutsch)', 'B2 (Goethe B2 / TestDaF)'],
    certificate: 'Goethe-Zertifikat A1-B2 / TestDaF / ECL',
    color: '#d97706',
    tagline: {
      uz: 'Germaniyada bepul oliy ta\'lim va nufuzli Ausbildung dasturlari',
      ru: 'Бесплатное высшее образование в Германии и программы Ausbildung',
      en: 'Tuition-free higher education in Germany and prestigious Ausbildung tracks'
    },
    description: {
      uz: 'Germaniya, Avstriya va Shveytsariya oliygohlariga kirish va tibbiyot/muhandislik sohalarida faoliyat yuritish uchun maxsus tayyorlov kursi.',
      ru: 'Специальный курс для поступления в вузы Германии, Австрии и Швейцарии, а также работы в сфере медицины и инженерии.',
      en: 'Specialized training for university admissions in Germany, Austria, Switzerland, and direct career paths in healthcare and engineering.'
    },
    features: {
      uz: [
        'Goethe instituti standartlariga mos o\'quv dasturi',
        'Ausbildung va Studienkolleg hujjatlarini tayyorlashda amaliy yordam',
        'Grammatika va fonetikaning chuqurlashtirilgan tahlili',
        'Germaniyada yashash va ishlash madaniyati bo\'yicha amaliy darslar'
      ],
      ru: [
        'Программа по стандартам Гёте-Института',
        'Помощь в подготовке документов для Ausbildung и Studienkolleg',
        'Углубленная грамматика и постановка немецкого произношения',
        'Практические семинары о жизни и работе в Германии'
      ],
      en: [
        'Curriculum fully compliant with Goethe-Institut standards',
        'Direct assistance for Ausbildung and Studienkolleg applications',
        'In-depth phonetics and German grammar drills',
        'Practical socio-cultural immersion seminars'
      ]
    },
    careerOpportunities: {
      uz: ['Germaniyada bepul bakalavr va magistratura', 'Tibbiy xodimlar uchun Germaniyada ish', 'Ausbildung stipendiya dasturlari', 'Nemis korxonalarida muhandis'],
      ru: ['Бесплатный бакалавриат и магистратура в ФРГ', 'Работа медиком в клиниках Германии', 'Стипендии Ausbildung', 'Инженер в немецких корпорациях'],
      en: ['Tuition-free University Degrees in Germany', 'Healthcare Placement in German Clinics', 'Ausbildung Vocational Stipends', 'Engineering at German Firms']
    }
  },
  {
    id: 'chinese',
    name: {
      uz: 'Xitoy Tili (HSK & HSKK)',
      ru: 'Китайский Язык (HSK & HSKK)',
      en: 'Chinese (HSK & HSKK)'
    },
    nativeName: '汉语 / 中文',
    flag: '🇨🇳',
    duration: {
      uz: '7 oy intensiv (HSK 1 dan HSK 4-5 gacha)',
      ru: '7 месяцев интенсив (с HSK 1 до HSK 4-5)',
      en: '7 months intensive (from HSK 1 to HSK 4-5)'
    },
    intensity: {
      uz: 'Haftada 3-4 kun, 2 soatdan',
      ru: '3-4 дня в неделю, по 2 часа',
      en: '3-4 days/week, 2 hours/day'
    },
    levels: ['HSK 1 (150 so\'z)', 'HSK 2 (300 so\'z)', 'HSK 3 (600 so\'z)', 'HSK 4 (1200 so\'z)', 'HSK 5 (2500+ so\'z)'],
    certificate: 'HSK 3-5 & HSKK (Og\'zaki)',
    color: '#dc2626',
    tagline: {
      uz: 'Dunyoning eng yirik ishlab chiqarish va savdo giganti tili',
      ru: 'Язык мирового гиганта производства, технологий и торговли',
      en: 'The language of the world\'s manufacturing, tech, and economic superpower'
    },
    description: {
      uz: 'Iyerogliflar yozilishi, tonlar talaffuzi va biznes muzokaralar olib borishga ixtisoslashgan innovatsion xitoy tili kursi.',
      ru: 'Курс китайского языка, ориентированный на правильное произношение тонов, написание иероглифов и деловые переговоры.',
      en: 'Dynamic Chinese program focusing on accurate tonal mastery, character composition, and high-level trade negotiations.'
    },
    features: {
      uz: [
        'Xitoy davlat grantlari (CSC & Confucius Institute) ga to\'liq tayyorgarlik',
        'Biznes xitoy tili: fabrikalar bilan to\'g\'ridan-to\'g\'ri shartnoma tuzish',
        'Zamonaviy audio-vizual metodika va tonlar bilan ishlash',
        'Xitoylik ustozlar bilan amaliy jonli muloqot'
      ],
      ru: [
        'Подготовка к правительственным грантам Китая (CSC, Институт Конфуция)',
        'Деловой китайский: заключение прямых контрактов с фабриками',
        'Современная аудио-визуальная методика отработки 4 тонов',
        'Живая языковая практика с преподавателями-носителями'
      ],
      en: [
        'Complete preparation for Chinese Government Scholarships (CSC / CIS)',
        'Business Chinese for direct factory negotiations and sourcing',
        'Audio-visual phonetic training for four tones',
        'Live speaking practice with native Chinese tutors'
      ]
    },
    careerOpportunities: {
      uz: ['Xitoydan import/eksport menejeri', 'Xitoy universitetlarida 100% grantli ta\'lim', 'Sinxron tarjimon', 'O\'zbekiston-Xitoy qo\'shma korxonalarida rahbar'],
      ru: ['Менеджер по импорту/экспорту с Китаем', '100% гранты в топ-вузах Китая', 'Синхронный переводчик', 'Руководитель в совместных предприятиях'],
      en: ['China Import/Export Director', 'Full Scholarships at Top Chinese Universities', 'Simultaneous Translator', 'Joint-Venture Operations Executive']
    }
  },
  {
    id: 'korean',
    name: {
      uz: 'Koreys Tili (TOPIK & EPS)',
      ru: 'Корейский Язык (TOPIK & EPS)',
      en: 'Korean (TOPIK & EPS)'
    },
    nativeName: '한국어',
    flag: '🇰🇷',
    duration: {
      uz: '7 oy intensiv (TOPIK 1 dan TOPIK 4-5 gacha)',
      ru: '7 месяцев интенсив (с TOPIK 1 до TOPIK 4-5)',
      en: '7 months intensive (from TOPIK 1 to TOPIK 4-5)'
    },
    intensity: {
      uz: 'Haftada 3-4 kun, 2 soatdan',
      ru: '3-4 дня в неделю, по 2 часа',
      en: '3-4 days/week, 2 hours/day'
    },
    levels: ['TOPIK I (1-2 daraja)', 'TOPIK II (3-4 daraja)', 'TOPIK II (5-6 daraja)'],
    certificate: 'Official TOPIK I & II / GKS Grant Certificate',
    color: '#2563eb',
    tagline: {
      uz: 'Janubiy Koreya grantlari, nufuzli IT kompaniyalari va oliygohlari',
      ru: 'Гранты Южной Кореи (GKS), топовые университеты и IT-корпорации',
      en: 'South Korean Government Scholarships (GKS), top universities & IT giants'
    },
    description: {
      uz: 'Hangul alifbosi, boy suhbat amaliyoti va Janubiy Koreyaning nufuzli GKS (Global Korea Scholarship) grantiga qaratilgan tizimli kurs.',
      ru: 'Алфавит Хангыль, богатая разговорная практика и системная подготовка к престижному гранту GKS (Global Korea Scholarship).',
      en: 'Hangul mastery, intensive conversational immersion, and systemic preparation for full GKS (Global Korea Scholarship) awards.'
    },
    features: {
      uz: [
        'GKS va xususiy universitetlar grantlariga hujjat topshirish',
        'TOPIK testining barcha qismlari (Listening, Reading, Writing) bo\'yicha chuqur tahlil',
        'Koreys biznes odobi va kundalik jonli muloqot',
        'Koreyada o\'qiyotgan bitiruvchilarimiz bilan master-klasslar'
      ],
      ru: [
        'Подача на правительственные стипендии GKS и гранты университетов',
        'Разбор всех частей экзамена TOPIK (Аудирование, Чтение, Сочинение)',
        'Корейский деловой этикет и живая разговорная речь',
        'Мастер-классы от наших выпускников, обучающихся в Корее'
      ],
      en: [
        'Application assistance for GKS and university merit scholarships',
        'Comprehensive breakdown of TOPIK listening, reading, and essay writing',
        'Korean business etiquette and authentic conversational fluency',
        'Exclusive masterclasses with alumni studying in Seoul'
      ]
    },
    careerOpportunities: {
      uz: ['Koreyada 100% grant asosida bakalavr/magistratura', 'Samsung, Hyundai, LG kabi brendlarda koordinatsiya', 'Koreys tili tarjimoni', 'Janubiy Koreya IT kompaniyalarida masofaviy ish'],
      ru: ['Бесплатное обучение в Корее по гранту', 'Работа с брендами Samsung, Hyundai, LG', 'Переводчик корейского языка', 'Удаленная работа в IT-компаниях Кореи'],
      en: ['100% Funded Higher Education in Korea', 'Coordination at Global Korean Conglomerates', 'Professional Korean Interpreter', 'Remote Career in South Korean Tech']
    }
  },
  {
    id: 'japanese',
    name: {
      uz: 'Yapon Tili (JLPT & Tokutei Ginou)',
      ru: 'Японский Язык (JLPT & Tokutei Ginou)',
      en: 'Japanese (JLPT & Tokutei Ginou)'
    },
    nativeName: '日本語',
    flag: '🇯🇵',
    duration: {
      uz: '7 oy intensiv (N5 dan N2-N3 gacha)',
      ru: '7 месяцев интенсив (с N5 до N2-N3)',
      en: '7 months intensive (from N5 to N2-N3)'
    },
    intensity: {
      uz: 'Haftada 3-4 kun, 2 soatdan',
      ru: '3-4 дня в неделю, по 2 часа',
      en: '3-4 days/week, 2 hours/day'
    },
    levels: ['JLPT N5 (Boshlang\'ich)', 'JLPT N4 (O\'rta-quyi)', 'JLPT N3 (O\'rta)', 'JLPT N2 (Yuqori-o\'rta)', 'JLPT N1 (Mukammal)'],
    certificate: 'JLPT N5-N2 / MEXT Scholarship Credentials',
    color: '#e11d48',
    tagline: {
      uz: 'Kunchiqar yurt madaniyati, robototexnika va MEXT davlat grantlari',
      ru: 'Культура Страны восходящего солнца, робототехника и гранты MEXT',
      en: 'The culture of the Rising Sun, high-tech robotics, and official MEXT grants'
    },
    description: {
      uz: 'Hiragana, Katakana va Kanji yozuvlarini qiziqarli o\'rganish. MEXT davlat granti va Yaponiyada nufuzli kasbiy faoliyatga to\'g\'ridan-to\'g\'ri yo\'l.',
      ru: 'Увлекательное освоение хираганы, катаканы и кандзи. Прямой путь к правительственному гранту MEXT и карьере в Японии.',
      en: 'Mastery of Hiragana, Katakana, and Kanji. Direct pathway to MEXT government scholarships and engineering careers in Tokyo.'
    },
    features: {
      uz: [
        'MEXT va Yaponiya universitetlari grantlariga tayyorgarlik',
        'Kanji iyerogliflarini yodlashning tezkor assotsiativ metodikasi',
        'Yapon biznes madaniyati (Keigo) va muloqot etikasi',
        'Tokutei Ginou va muhandislik vizalari bo\'yicha konsultatsiya'
      ],
      ru: [
        'Подготовка к государственным грантам MEXT и стипендиям',
        'Ассоциативная методика быстрого запоминания кандзи',
        'Деловой японский язык (Кейго) и правила бизнес-этикета',
        'Консультации по инженерным и рабочим визам Tokutei Ginou'
      ],
      en: [
        'Preparation for Japanese MEXT government scholarships',
        'Associative mnemonic methods for rapid Kanji retention',
        'Honorific business Japanese (Keigo) & boardroom etiquette',
        'Guidance on Tokutei Ginou and engineering career visas'
      ]
    },
    careerOpportunities: {
      uz: ['Yaponiyada MEXT granti bilan bepul ta\'lim', 'Toyota, Sony, Panasonic kabi gigantlarda faoliyat', 'Yapon tili eksperti va tarjimon', 'Robototexnika va muhandislik'],
      ru: ['Бесплатное образование в Японии по гранту MEXT', 'Карьера в Toyota, Sony, Panasonic', 'Эксперт японского языка и переводчик', 'Робототехника и инженерия'],
      en: ['Tuition-free Education via MEXT Grants', 'Careers at Toyota, Sony, Panasonic ecosystems', 'Certified Japanese Interpreter', 'Robotics & Engineering Roles in Japan']
    }
  },
  {
    id: 'russian',
    name: {
      uz: 'Rus Tili (Akademik & So\'zlashuv & TORFL)',
      ru: 'Русский Язык (Академический & Разговорный & ТРКИ)',
      en: 'Russian (Academic, Conversational & TORFL)'
    },
    nativeName: 'Русский Язык',
    flag: '🇷🇺',
    duration: {
      uz: '7 oy intensiv / 3-6 oy modul',
      ru: '7 месяцев интенсив / 3-6 мес. модуль',
      en: '7 months intensive / 3-6 mo. modular'
    },
    intensity: {
      uz: 'Haftada 3 kun, 2 soatdan',
      ru: '3 дня в неделю, по 2 часа',
      en: '3 days/week, 2 hours/day'
    },
    levels: ['A1 (Базовый)', 'A2 (Элементарный)', 'B1 (Первый)', 'B2 (Второй)', 'C1 (Профессиональный)'],
    certificate: 'ТРКИ (TORFL) B2-C1 / Sertifikat',
    color: '#0284c7',
    tagline: {
      uz: 'Mintaqaviy rasmiy muloqot, yurisprudensiya va ish yuritish standarti',
      ru: 'Стандарт регионального официального общения, юриспруденции и бизнеса',
      en: 'The standard for regional business, jurisprudence, and official documentation'
    },
    description: {
      uz: 'Rus tilida toza va ravon so\'zlashish, to\'g\'ri grammatika, rasmiy xatlar yozish va ilmiy adabiyotlar bilan mustaqil ishlash malakasi.',
      ru: 'Чистая и грамотная речь, безупречная грамматика, деловая переписка и уверенная работа с научной литературой.',
      en: 'Flawless speech, nuanced grammar, professional business correspondence, and scholarly comprehension.'
    },
    features: {
      uz: [
        'Aktsentsiz toza talaffuz va boy so\'z boyligi',
        'Biznes hujjatlari va shartnomalar tuzish amaliyoti',
        'Oliy ta\'lim va litseylarga kirish imtihonlariga tayyorlov',
        'Adabiy nutq va notiqlik mahorati'
      ],
      ru: [
        'Постановка правильного произношения без акцента',
        'Практика составления деловых документов и контрактов',
        'Подготовка к поступлению в вузы и лицеи',
        'Культура речи и ораторское мастерство'
      ],
      en: [
        'Accent reduction and rich vocabulary acquisition',
        'Legal and corporate contract drafting drills',
        'Comprehensive entrance exam preparation',
        'Public speaking and debate eloquence'
      ]
    },
    careerOpportunities: {
      uz: ['Yirik korxonalarda tashqi aloqalar boshlig\'i', 'Yuridik va rasmiy tarjimon', 'Davlat va jamoat tashkilotlarida mas\'ul', 'MDH bozorlari bilan savdo'],
      ru: ['Руководитель отдела внешних связей', 'Юридический и официальный переводчик', 'Специалист в госструктурах и организациях', 'Торговля со странами СНГ'],
      en: ['Head of Foreign Relations in Enterprises', 'Legal & Sworn Translator', 'Public Administration Specialist', 'CIS Trade & Commerce Executive']
    }
  },
  {
    id: 'persian',
    name: {
      uz: 'Fors Tili (Farsi - Klassik & Zamonaviy)',
      ru: 'Персидский Язык (Фарси - Классический & Современный)',
      en: 'Persian (Farsi - Classical & Modern)'
    },
    nativeName: 'فارسی',
    flag: '🇮🇷',
    duration: {
      uz: '7 oy intensiv (Klassik va zamonaviy forsiy)',
      ru: '7 месяцев интенсив (Классический и современный фарси)',
      en: '7 months intensive (Classical and modern Farsi)'
    },
    intensity: {
      uz: 'Haftada 3 kun, 2 soatdan',
      ru: '3 дня в неделю, по 2 часа',
      en: '3 days/week, 2 hours/day'
    },
    levels: ['Boshlang\'ich (Alefba & Nutq)', 'O\'rta (Grammatika & Matn)', 'Yuqori (Sharqshunoslik & Qo\'lyozmalar)'],
    certificate: 'Diplomatik & Madaniy Sertifikat',
    color: '#059669',
    tagline: {
      uz: 'Sharq madaniyati, buyuk tariximiz manbalari va Yaqin Sharq savdo tili',
      ru: 'Язык восточной культуры, исторических рукописей и торговли Ближнего Востока',
      en: 'The language of Eastern culture, historical manuscripts, and Middle-Eastern trade'
    },
    description: {
      uz: 'At-Termeziy, Mirzo Ulug\'bek va Ibn Sino davri manbalarini tushunish, zamonaviy Eron, Afg\'oniston va Tojikiston bilan savdo aloqalari tili.',
      ru: 'Понимание исторических источников времен Ат-Термезий, Ибн Сино, а также современный деловой язык Ирана и региона.',
      en: 'Access to classical manuscripts of At-Termeziy and Avicenna, alongside modern diplomatic and commercial Persian.'
    },
    features: {
      uz: [
        'Fors alifbosi, xattotlik va zamonaviy matnlar tahlili',
        'Tarixiy qo\'lyozmalar bilan to\'g\'ridan-to\'g\'ri ishlash ko\'nikmasi',
        'Eron va mintaqa davlatlari bilan savdo muzokaralari amaliyoti',
        'Sharq falsafasi va adabiyoti bo\'yicha chuqur bilim'
      ],
      ru: [
        'Персидская вязь, каллиграфия и анализ современных текстов',
        'Навыки работы с редкими историческими рукописями',
        'Практика деловых переговоров с компаниями Ирана и региона',
        'Глубокое изучение восточной философии и классической поэзии'
      ],
      en: [
        'Persian script, calligraphy, and contemporary socio-political texts',
        'Direct research on historical manuscripts and archival documents',
        'Cross-border commercial negotiations with Iranian enterprises',
        'Deep immersion into Oriental philosophy and classical poetry'
      ]
    },
    careerOpportunities: {
      uz: ['Sharqshunoslik institutlarida ilmiy xodim', 'Xalqaro savdo va transport logistikasi', 'Diplomatik vakolatxonalarda ekspert', 'Tarixiy manbalar va arxiv tadqiqotchisi'],
      ru: ['Научный сотрудник институтов востоковедения', 'Международная торговля и транспортная логистика', 'Эксперт в дипломатических миссиях', 'Исследователь исторических архивов'],
      en: ['Oriental Studies Researcher & Academic', 'Middle-East Trade & Freight Logistics', 'Diplomatic Mission Advisor', 'Archival & Manuscript Specialist']
    }
  }
];
