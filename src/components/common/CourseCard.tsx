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

const courseImages: Record<string, string> = {
  english: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600',
  german: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600',
  chinese: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=600',
  korean: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=600',
  japanese: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600',
  turkish: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600',
  russian: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=600',
  arabic: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
  persian: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600',
};

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { language, t } = useLanguage();

  const title = course.name[language] || course.name.uz;
  const tagline = course.tagline[language] || course.tagline.uz;
  const duration = course.duration[language] || course.duration.uz;
  const features = course.features[language] || course.features.uz;
  const courseImage = courseImages[course.id] || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="relative rounded-3xl border-sky-100 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all flex flex-col justify-between group h-full bg-white overflow-hidden p-0">
        <div>
          {/* Rich Course Photo Banner */}
          <div className="relative h-44 w-full overflow-hidden">
            <img 
              src={courseImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-xl shadow-md">
                {course.flag}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                {course.nativeName}
              </span>
            </div>
            <div className="absolute bottom-3 left-4 right-4">
              <h3 className="text-lg font-bold text-white font-heading drop-shadow-md">
                {title}
              </h3>
            </div>
          </div>

          <div className="p-6 md:p-7 space-y-4">
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
              {tagline}
            </p>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#101e3b] border border-slate-100 dark:border-[#1d2f54] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">{t.coursesPage.duration}</span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate block">{duration}</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#101e3b] border border-slate-100 dark:border-[#1d2f54] flex items-center gap-2">
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
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
