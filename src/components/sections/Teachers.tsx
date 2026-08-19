import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { teachersData } from '../../data/teachers';
import { SectionHeading } from '../common/SectionHeading';

export const Teachers: React.FC = () => {
  return (
    <section id="teachers" className="py-20 bg-slate-50/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Bizning Jamoa"
          title="Tajribali va Xalqaro Sertifikatli Ustozlar"
          subtitle="O‘z sohasining yetuk mutaxassislari, xalqaro tajribaga ega amaliyotchi dasturchilar va 8.0+ balli til instruktorlari."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative aspect-[4/4] overflow-hidden bg-slate-100">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{teacher.experience}</span>
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-3">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {teacher.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {teacher.specialties.map((spec, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                {teacher.achievements.map((ach, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{ach}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};