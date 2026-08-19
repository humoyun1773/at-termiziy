import React, { useState } from 'react';
import { 
  Code, Terminal, Laptop, Globe, BookOpen, BookMarked, 
  Calculator, GraduationCap, Clock, Calendar, Check, ArrowRight, Sparkles 
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import type { CourseCategory, Course } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { formatPrice } from '../../utils/formatters';

interface CoursesProps {
  onSelectCourse: (courseTitle: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('all');

  const categories = [
    { key: 'all', label: 'Barcha Kurslar' },
    { key: 'it', label: 'IT & Dasturlash' },
    { key: 'languages', label: 'Xorijiy Tillar' },
    { key: 'science', label: 'Aniq Fanlar & Maktab' },
    { key: 'kids', label: 'Bolalar uchun' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

  const getCourseIcon = (name: string) => {
    const iconClass = "w-6 h-6";
    switch (name) {
      case 'Code': return <Code className={iconClass} />;
      case 'Terminal': return <Terminal className={iconClass} />;
      case 'Laptop': return <Laptop className={iconClass} />;
      case 'Globe': return <Globe className={iconClass} />;
      case 'BookOpen': return <BookOpen className={iconClass} />;
      case 'BookMarked': return <BookMarked className={iconClass} />;
      case 'Calculator': return <Calculator className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      default: return <BookOpen className={iconClass} />;
    }
  };

  return (
    <section id="courses" className="py-20 bg-slate-50/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="O‘quv Dasturlari"
          title="Talab Yuqori Bo‘lgan Kurslarimiz"
          subtitle="Har bir kurs zamonaviy bozor talablariga mos amaliy dastur, tajribali mentorlar va real portfolio loyihalariga ega."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as CourseCategory)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.id}
              className={`group bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 relative ${
                course.popular
                  ? 'border-emerald-500/80 shadow-md shadow-emerald-500/10'
                  : 'border-slate-200/80 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>ENG MASHHUR</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {getCourseIcon(course.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                      {course.level}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {course.description}
                </p>

                {/* Quick details */}
                <div className="flex flex-wrap items-center gap-3 py-3 border-y border-slate-100 text-xs text-slate-600 font-medium mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Haftada {course.lessonsPerWeek} kun ({course.lessonDuration})</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <ul className="space-y-2.5 mb-6">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                {course.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-slate-400 block">Oylik to'lov:</span>
                    {course.discountPrice ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900">
                          {formatPrice(course.discountPrice)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {formatPrice(course.price)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-black text-slate-900">
                        {formatPrice(course.price)}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    1-dars bepul
                  </span>
                </div>

                <Button
                  onClick={() => onSelectCourse(course.title)}
                  variant={course.popular ? 'primary' : 'outline'}
                  size="md"
                  className="w-full text-sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Kursga yozilish
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};