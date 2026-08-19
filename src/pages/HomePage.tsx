import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useModal } from '../context/ModalContext';
import { combinationsData } from '../data/combinationsData';
import { coursesData } from '../data/coursesData';
import { teachersData, testimonialsData, faqData } from '../data/mockData';
import { BannerCombinationsBoard } from '../components/common/BannerCombinationsBoard';
import { CombinationCard } from '../components/common/CombinationCard';
import { CourseCard } from '../components/common/CourseCard';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronDown,
  Layers,
  UserCheck,
  Building2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = React.useState<string | null>(faqData[0].id);

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-8 md:pt-12 md:pb-16 overflow-hidden bg-hero-glow">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-pattern-grid pointer-events-none" />

        {/* Ambient light blue circles */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-5 mb-10 md:mb-14">
            
            {/* Top Motto Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-md shadow-sky-500/10 border border-sky-200 text-sky-800 text-xs md:text-sm font-bold animate-float">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping" />
              <span>{t.brand.motto}</span>
              <span className="text-slate-300">•</span>
              <span className="text-sky-600 font-extrabold">{t.brand.city}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-heading">
              {t.hero.titleStart}{' '}
              <span className="shimmer-text block sm:inline">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {t.hero.subheading}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm md:text-base shadow-xl shadow-sky-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>{t.hero.freeConsultation}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/combinations"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-900 font-bold text-sm md:text-base border border-sky-200 shadow-xs transition-all hover:border-sky-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>{t.hero.exploreCombinations}</span>
              </Link>
            </div>
          </div>

          {/* 2. THE CENTRAL 4-COMBINATIONS BOARD (Exact interactive replicate of the 3rd Banner) */}
          <div className="mt-4 max-w-6xl mx-auto">
            <BannerCombinationsBoard />
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { num: "28 OY", label: t.hero.statMonths, icon: Clock, color: "text-sky-600", bg: "bg-sky-50" },
              { num: "4 TA", label: t.hero.statLanguages, icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
              { num: "100%", label: t.hero.statJobGuarantee, icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
              { num: "500+", label: t.hero.statStudents, icon: Users, color: "text-amber-600", bg: "bg-amber-50" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl font-extrabold text-slate-900 font-heading block">
                    {stat.num}
                  </span>
                  <span className="text-xs text-slate-500 font-medium leading-tight block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. MOTTO & DISCIPLINE PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {t.mottoSection.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {t.mottoSection.title}
              </h2>
              <p className="text-sm md:text-base text-sky-100/90 leading-relaxed">
                {t.mottoSection.description}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-sky-950 font-bold text-xs md:text-sm hover:bg-sky-50 transition-all shadow-md active:scale-95"
                >
                  <span>Markaz Nizomi & Qoidalari Bilan Tanishish</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              {t.mottoSection.points.map((pt, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-sky-400/20 text-sky-200 font-bold flex items-center justify-center shrink-0 text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-sky-100/80 mt-1 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 4. 28-MONTH COMBINATIONS (DETAILED CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            {t.combinationsSection.tag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            {t.combinationsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.combinationsSection.subtitle}
          </p>
        </div>

        {/* Combinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {combinationsData.map((combo) => (
            <CombinationCard key={combo.id} combination={combo} />
          ))}
        </div>

        {/* Guaranteed Job Placement Announcement Bar */}
        <div className="mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold font-heading">
                {t.combinationsSection.guaranteeBanner}
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5">
                {t.combinationsSection.guaranteeSub}
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-xs md:text-sm whitespace-nowrap shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
          >
            Hozir Ro'yxatdan O'tish →
          </button>
        </div>
      </section>


      {/* 5. INDIVIDUAL LANGUAGES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              {t.coursesPage.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {t.coursesPage.title}
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs md:text-sm font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 shrink-0"
          >
            <span>Barcha kurslarni batafsil ko'rish</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>


      {/* 6. CAMPUS & ENVIRONMENT IN QARSHI (Pure UI Card Design without external photo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              Qarshi Shahar Bosh Binomiz
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
              Zamonaviy Sharoitlar va Haqiqiy Poliglot Muhiti
            </h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              Markazimiz Qarshi shahrining eng qulay joyida joylashgan bo'lib, har bir xona interaktiv texnologiyalar, audio tizimlar va speaking zonalar bilan jihozlangan. Darslarda har bir talabaning 100% faol ishtiroki ta'minlanadi.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                "Interaktiv aqlli doskalar va multimedia xonalari",
                "Maxsus Language Lab va xalqaro speaking klublar",
                "Katta kutubxona: 7 tildagi nodir adabiyotlar va qo'llanmalar",
                "Individual mentorlik va kunlik monitoring xonasi"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="tel:+998919517335"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Markazga Tashrif Buyurish: +998 91 951 73 35</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-900 to-blue-900 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sky-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">Qarshi Shahri Bosh Filiali</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-bold">Ochiq</span>
              </div>
              <h3 className="text-xl font-bold font-heading">
                At-Termeziy O'quv Markazi
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                Manzil: Qashqadaryo viloyati, Qarshi shahri, Mustaqillik shoh ko'chasi. Dushanba - Shanba kunlari soat 08:00 dan 20:00 gacha xizmatingizdamiz.
              </p>
              <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-sky-200">Qabul bo'limi:</span>
                <span className="font-mono font-bold text-white">+998 91 951 73 35</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 7. EXPERT TEACHERS & POLYGLOTS (Clean Card Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Bizning Ustozlarimiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Xalqaro Sertifikatlarga Ega Poliglot Mentorlar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Darslarni o'z sohasining eng yuqori darajadagi (C1/C2, IELTS 8.0+, HSK 6, TOPIK 6) mutaxassislari olib boradilar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachersData.map((teacher) => {
            const role = teacher.role[language] || teacher.role.uz;
            const exp = teacher.experience[language] || teacher.experience.uz;
            const bio = teacher.bio[language] || teacher.bio.uz;

            return (
              <div key={teacher.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-black text-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                  <UserCheck className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">
                  {teacher.name}
                </h3>
                <span className="text-xs text-sky-600 font-semibold block mt-0.5">
                  {role}
                </span>
                <div className="flex items-center justify-center gap-1.5 my-2">
                  <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[10px] font-bold">
                    {teacher.certificate}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium">
                    {exp}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {bio}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 8. TESTIMONIALS & SUCCESS STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Muvaffaqiyat Tarixlari
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            28 Oylik Kurs Bitiruvchilarining Fikrlari
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => {
            const role = item.currentRole[language] || item.currentRole.uz;
            const quote = item.quote[language] || item.quote.uz;

            return (
              <div key={item.id} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-xs">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <span className="text-[11px] text-sky-600 font-medium block">{role}</span>
                    <span className="text-[10px] text-slate-400 block">{item.company}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 9. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Ko'p Beriladigan Savollar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Barcha Savollaringizga Aniq Javoblar
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq) => {
            const question = faq.question[language] || faq.question.uz;
            const answer = faq.answer[language] || faq.answer.uz;
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                >
                  <span>{question}</span>
                  <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 10. BOTTOM REGISTRATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 rounded-3xl p-8 md:p-14 text-white shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-block">
            Qabulga Yozilish Ochiq
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
            Kelajagingizni 4 Ta Til Bilan Boshlang!
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-sky-100 max-w-xl mx-auto leading-relaxed">
            Qarshi shahridagi eng intizomli va natijador o'quv markazimizda joylar soni cheklangan. Bepul konsultatsiyaga yoziling!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-sky-900 font-bold text-sm shadow-lg hover:bg-sky-50 transition-all active:scale-95 cursor-pointer"
            >
              Ariza Qoldirish (Bepul)
            </button>
            <a
              href="tel:+998919517335"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-sky-700/80 hover:bg-sky-700 text-white font-bold text-sm border border-sky-400/40 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+998 91 951 73 35</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
