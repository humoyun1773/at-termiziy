import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';
import { CourseCard } from '../components/common/CourseCard';
import { Sparkles } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  IslamicGirihPattern, 
  ArabesqueDivider, 
  TermiziyEmblem,
  TermiziyMandalaRing 
} from '../components/common/OrientalPatterns';

export const CoursesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'western' | 'eastern' | 'regional'>('all');

  const tabLabels = {
    all: t.coursesPage.filterAll,
    western: language === 'ru' ? 'Западные Языки' : language === 'en' ? 'Western' : "G'arbiy Tillar",
    eastern: language === 'ru' ? 'Восточная Азия' : language === 'en' ? 'East Asia' : 'Sharqiy Osiyo',
    regional: language === 'ru' ? 'Турецкий & Региональные' : language === 'en' ? 'Turkish & Regional' : 'Turk & Mintaqaviy'
  };

  const filteredCourses = coursesData.filter(course => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'western') return ['english', 'german', 'c-en', 'c-de'].includes(course.id);
    if (activeFilter === 'eastern') return ['chinese', 'korean', 'japanese', 'c-zh', 'c-ko', 'c-ja'].includes(course.id);
    if (activeFilter === 'regional') return ['turkish', 'russian', 'persian', 'c-ru', 'c-fa'].includes(course.id);
    return true;
  });

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Header with Termiziy Emblem & Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <IslamicGirihPattern opacity={0.12} color="#0284c7" />
        <div className="absolute -top-12 -left-12 pointer-events-none opacity-30">
          <TermiziyMandalaRing size={280} opacity={0.3} />
        </div>
        <div className="absolute -bottom-12 -right-12 pointer-events-none opacity-30">
          <TermiziyMandalaRing size={280} opacity={0.3} />
        </div>

        <div className="flex justify-center mb-3 relative z-10">
          <TermiziyEmblem size={68} className="drop-shadow-md hover:scale-105 transition-transform" />
        </div>
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-2xs relative z-10">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
          {t.coursesPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-4 relative z-10">
          {t.coursesPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto relative z-10">
          {t.coursesPage.desc}
        </p>
        <ArabesqueDivider className="relative z-10" />
      </motion.section>

      {/* Filter Tabs using shadcn Tabs */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-10">
          <Tabs 
            value={activeFilter} 
            onValueChange={(val) => setActiveFilter(val as any)}
            className="w-full max-w-2xl"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 h-auto p-1.5 gap-1 bg-slate-100/80 dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700">
              <TabsTrigger value="all" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                {tabLabels.all}
              </TabsTrigger>
              <TabsTrigger value="western" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                {tabLabels.western}
              </TabsTrigger>
              <TabsTrigger value="eastern" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                {tabLabels.eastern}
              </TabsTrigger>
              <TabsTrigger value="regional" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                {tabLabels.regional}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Courses Grid with smooth transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Course Methodology Features */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-6 text-center">
            Har Bir Til Kursida Qanday Yondashuv Qo'llaniladi?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2 font-heading">01</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">To'liq Sho'ng'ish (Immersion)</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Darslarda 100% o'rganilayotgan tildan foydalaniladi, bu esa nutq to'sig'ini tezda yengishga yordam beradi.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2 font-heading">02</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Kunlik Lug'at & Monitoring</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Har kuni yangi so'zlar maxsus algoritmlar asosida takrorlanadi va qat'iy nazorat qilinadi.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2 font-heading">03</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Xalqaro Standartlar</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Dasturlar IELTS, CEFR, Goethe, HSK, TOPIK va JLPT xalqaro imtihonlari talablariga to'liq mos keladi.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
