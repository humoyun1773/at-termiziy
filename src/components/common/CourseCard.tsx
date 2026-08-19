import React from 'react';
import type { CourseDetail } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

interface Props {
  course: CourseDetail;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const { language, t } = useLanguage();
  const { openModal } = useModal();

  const title = course.name[language] || course.name.uz;
  const tagline = course.tagline[language] || course.tagline.uz;
  const duration = course.duration[language] || course.duration.uz;
  const features = course.features[language] || course.features.uz;

  return (
    <Card className="rounded-3xl p-6 md:p-8 border-slate-200 shadow-2xs hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group">
      <div>
        {/* Flag and certificate header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-2xl shadow-2xs group-hover:scale-105 transition-transform">
              {course.flag}
            </span>
            <div>
              <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider block">
                {course.nativeName}
              </span>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {tagline}
        </p>

        {/* Badges */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Davomiyligi</span>
              <span className="text-xs font-semibold text-slate-800 truncate block">{duration}</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Sertifikat</span>
              <span className="text-xs font-semibold text-slate-800 truncate block">{course.certificate}</span>
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="space-y-1.5 mb-6">
          {features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="secondary"
        onClick={() => openModal({ languageName: title })}
        className="w-full font-bold text-xs hover:bg-sky-600 hover:text-white"
      >
        <span>{t.coursesPage.enrollCourse}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Button>
    </Card>
  );
};
