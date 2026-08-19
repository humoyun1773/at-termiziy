import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/coursesData';
import { CourseCard } from '../components/common/CourseCard';
import { BookOpen } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'western' | 'eastern' | 'regional'>('all');

  const filteredCourses = coursesData.filter((c) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'western') return ['english', 'german'].includes(c.id);
    if (activeFilter === 'eastern') return ['chinese', 'korean', 'japanese'].includes(c.id);
    if (activeFilter === 'regional') return ['russian', 'persian'].includes(c.id);
    return true;
  });

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-sky-600" />
          {t.coursesPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-4">
          {t.coursesPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.coursesPage.desc}
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Barcha Tillar (7 ta til)' },
            { id: 'western', label: 'G\'arbiy Tillar (Ingliz, Nemis)' },
            { id: 'eastern', label: 'Sharqiy Osiyo (Xitoy, Koreys, Yapon)' },
            { id: 'regional', label: 'Mintaqaviy & Sharqiy (Rus, Fors)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Course Methodology Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 font-heading mb-6 text-center">
            Har Bir Til Kursida Qanday Yondashuv Qo'llaniladi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "To'liq Sho'ng'ish (Immersion)",
                desc: "Dars xonasiga kirishingiz bilan faqat o'rganilayotgan tilda muloqot boshlanadi. Bu miyadagi til to'sig'ini tezda yengishga yordam beradi."
              },
              {
                title: "Haftalik Mock & Sinovlar",
                desc: "Har shanba kuni xalqaro standartdagi (IELTS, Goethe, HSK, TOPIK) sinov imtihonlari o'tkazilib, natijalar ochiq e'lon qilinadi."
              },
              {
                title: "Real Karyera Amaliyoti",
                desc: "Talabalar faqat nazariya emas, balki jonli muzokaralar, chet ellik mehmonlar bilan suhbat va sinxron tarjima amaliyotini o'tashadi."
              }
            ].map((box, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-xs mb-3">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900 font-heading mb-2">
                  {box.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
