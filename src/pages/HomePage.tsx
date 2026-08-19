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
  ArrowRight, 
  CheckCircle2, 
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
  Building2, 
  ShieldCheck 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = React.useState<string | null>(faqData[0].id);

  return (
    <div className="space-y-16 md:space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-4 md:pt-10 md:pb-8 bg-mesh-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 md:mb-12">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight font-heading">
              {t.hero.titleStart}{' '}
              <span className="text-sky-600 inline">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              {t.hero.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => openModal()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.hero.freeConsultation}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/combinations"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold text-xs sm:text-sm border border-sky-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-sky-600" />
                <span>{t.hero.exploreCombinations}</span>
              </Link>
            </div>
          </div>

          {/* 2. THE CENTRAL 4-COMBINATIONS BOARD */}
          <div className="mt-2 max-w-5xl mx-auto">
            <BannerCombinationsBoard />
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { num: "28 OY", label: t.hero.statMonths, icon: Clock, color: "text-sky-600", bg: "bg-sky-50" },
              { num: "4 TA", label: t.hero.statLanguages, icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
              { num: "100%", label: t.hero.statJobGuarantee, icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-50" },
              { num: "500+", label: t.hero.statStudents, icon: Users, color: "text-amber-600", bg: "bg-amber-50" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-slate-900 font-heading block leading-none mb-1">
                    {stat.num}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium leading-tight block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. TA'LIM METODIKASI & TAMOYILLAR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-3">
              <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
                {t.mottoSection.tag}
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                {t.mottoSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.mottoSection.description}
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-sky-800 border border-slate-200 hover:border-sky-300 font-bold text-xs shadow-2xs transition-colors"
                >
                  <span>Markaz Nizomi & Qoidalari</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {t.mottoSection.points.map((pt, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-heading">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            {t.combinationsSection.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            {t.combinationsSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.combinationsSection.subtitle}
          </p>
        </div>

        {/* Combinations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {combinationsData.map((combo) => (
            <CombinationCard key={combo.id} combination={combo} />
          ))}
        </div>

        {/* Guaranteed Job Placement Announcement Bar */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-sky-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold font-heading">
                {t.combinationsSection.guaranteeBanner}
              </h3>
              <p className="text-xs text-sky-200 mt-0.5">
                {t.combinationsSection.guaranteeSub}
              </p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs whitespace-nowrap transition-colors cursor-pointer shrink-0"
          >
            Hozir Ro'yxatdan O'tish →
          </button>
        </div>
      </section>


      {/* 5. INDIVIDUAL LANGUAGES OVERVIEW */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block mb-1.5">
              {t.coursesPage.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {t.coursesPage.title}
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 shrink-0"
          >
            <span>Barcha kurslarni ko'rish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {coursesData.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>


      {/* 6. CAMPUS & ENVIRONMENT IN QARSHI */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              Qarshi Shahar Bosh Binomiz
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading leading-tight">
              Zamonaviy Sharoitlar va Haqiqiy Ko'p Tilli Muhit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Markazimiz Qarshi shahrining eng qulay joyida joylashgan bo'lib, har bir xona interaktiv texnologiyalar va speaking zonalar bilan jihozlangan.
            </p>

            <div className="space-y-2 pt-1">
              {[
                "Interaktiv aqlli doskalar va multimedia xonalari",
                "Maxsus Language Lab va xalqaro speaking klublar",
                "Katta kutubxona: 7 tildagi nodir adabiyotlar va qo'llanmalar",
                "Individual mentorlik va kunlik monitoring xonasi"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="tel:+998919517335"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Markazga Tashrif: +998 91 951 73 35</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-2xl bg-slate-900 text-white shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">Qarshi Filiali</span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold">Ochiq</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                At-Termeziy O'quv Markazi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manzil: Qashqadaryo viloyati, Qarshi shahri, Mustaqillik shoh ko'chasi. Dushanba - Shanba kunlari soat 08:00 dan 20:00 gacha xizmatingizdamiz.
              </p>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">Qabul bo'limi:</span>
                <span className="font-mono font-bold text-white">+998 91 951 73 35</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 6. EXPERT TEACHERS & MULTILINGUAL SPECIALISTS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Bizning Ustozlarimiz
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Xalqaro Sertifikatlarga Ega Ko'p Tilli Mentorlar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Darslarni o'z sohasining eng yuqori darajadagi mutaxassislari olib boradilar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachersData.map((teacher) => {
            const role = teacher.role[language] || teacher.role.uz;
            const exp = teacher.experience[language] || teacher.experience.uz;
            const bio = teacher.bio[language] || teacher.bio.uz;

            return (
              <div key={teacher.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:border-sky-300 transition-all text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading">
                  {teacher.name}
                </h3>
                <span className="text-[11px] text-sky-700 font-medium block mt-0.5">
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


      {/* 8. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
            Muvaffaqiyat Tarixlari
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            28 Oylik Kurs Bitiruvchilarining Natijalari
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonialsData.map((item) => {
            const role = item.currentRole[language] || item.currentRole.uz;
            const quote = item.quote[language] || item.quote.uz;

            return (
              <div key={item.id} className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed mb-5">
                    "{quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 font-bold flex items-center justify-center text-[11px]">
                    {item.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <span className="text-[10px] text-sky-600 font-medium block">{role}</span>
                    <span className="text-[10px] text-slate-400 block">{item.company}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* 9. FAQ ACCORDION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 space-y-1.5">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-block">
            Savollar & Javoblar
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
            Ko'p Beriladigan Savollar
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqData.map((faq) => {
            const question = faq.question[language] || faq.question.uz;
            const answer = faq.answer[language] || faq.answer.uz;
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{question}</span>
                  <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 10. BOTTOM REGISTRATION CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-sky-900 rounded-3xl p-6 sm:p-10 text-white text-center max-w-3xl mx-auto space-y-4 shadow-lg">
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white">
            Kelajagingizni 4 Ta Til Bilan Boshlang!
          </h2>
          <p className="text-xs sm:text-sm text-sky-200 max-w-lg mx-auto leading-relaxed">
            Qarshi shahridagi eng intizomli va natijador o'quv markazimizda bepul konsultatsiyaga yoziling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-sky-900 font-bold text-xs sm:text-sm hover:bg-sky-50 transition-colors cursor-pointer"
            >
              Ariza Qoldirish (Bepul)
            </button>
            <a
              href="tel:+998919517335"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-800 text-white font-bold text-xs sm:text-sm border border-sky-700 hover:bg-sky-750 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+998 91 951 73 35</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
