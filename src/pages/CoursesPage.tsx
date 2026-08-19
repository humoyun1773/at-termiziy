import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';
import { CourseCard } from '../components/common/CourseCard';
import { BookOpen } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

export const CoursesPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'western' | 'eastern' | 'regional'>('all');

  const filteredCourses = coursesData.filter(course => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'western') return ['c-en', 'c-de'].includes(course.id);
    if (activeFilter === 'eastern') return ['c-zh', 'c-ko', 'c-ja'].includes(course.id);
    if (activeFilter === 'regional') return ['c-ru', 'c-fa'].includes(course.id);
    return true;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <Badge variant="secondary" className="px-3.5 py-1 gap-1.5 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          {t.coursesPage.tag}
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mb-4">
          {t.coursesPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.coursesPage.desc}
        </p>
      </section>

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
                Barcha Tillar
              </TabsTrigger>
              <TabsTrigger value="western" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                G'arbiy Tillar
              </TabsTrigger>
              <TabsTrigger value="eastern" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                Sharqiy Osiyo
              </TabsTrigger>
              <TabsTrigger value="regional" className="rounded-xl py-2 text-xs font-bold text-slate-700 dark:text-slate-300 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-white">
                Rus & Fors
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Course Methodology Features */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-6 text-center">
            Har Bir Til Kursida Qanday Yondashuv Qo'llaniladi?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2 font-heading">01</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">To'liq Sho'ng'ish (Immersion)</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Darslarda 100% o'rganilayotgan tildan foydalaniladi, bu esa nutq to'sig'ini tezda yengishga yordam beradi.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
              <span className="text-2xl font-black text-sky-600 dark:text-sky-400 block mb-2 font-heading">02</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Kunlik Lug'at & Monitoring</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Har kuni yangi so'zlar maxsus algoritmlar asosida takrorlanadi va qat'iy nazorat qilinadi.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
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
