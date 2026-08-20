import React from 'react';
import { motion } from 'framer-motion';
import type { CourseDetail } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { TELEGRAM_URL } from '../../data/siteConfig';
import { Award, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface Props {
  course: CourseDetail;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { language, t } = useLanguage();

  const title = course.name[language] || course.name.uz;
  const tagline = course.tagline[language] || course.tagline.uz;
  const duration = course.duration[language] || course.duration.uz;
  const features = course.features[language] || course.features.uz;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="rounded-3xl p-6 md:p-8 border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700 transition-all flex flex-col justify-between group h-full">
      <div>
        {/* Flag and certificate header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-100 dark:border-sky-800 flex items-center justify-center text-2xl shadow-2xs group-hover:scale-105 transition-transform">
              {course.flag}
            </span>
            <div>
              <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                {course.nativeName}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                {title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {tagline}
        </p>

        {/* Badges */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">{t.coursesPage.duration}</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block">{duration}</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">{t.coursesPage.certificate}</span>
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block">{course.certificate}</span>
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="space-y-1.5 mb-6">
          {features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        asChild
        variant="secondary"
        className="w-full font-bold text-xs hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600"
      >
        <a 
          href={TELEGRAM_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <span>{t.coursesPage.enrollCourse}</span>
          <Send className="w-3.5 h-3.5" />
        </a>
      </Button>
    </Card>
  </motion.div>
  );
};
