import React from 'react';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Stats: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-teal-600" />;
      case 'Award':
        return <Award className="w-8 h-8 text-blue-600" />;
      case 'Users':
        return <Users className="w-8 h-8 text-indigo-600" />;
      default:
        return <Award className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}>
              <div className="mb-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                {getIcon(stat.icon)}
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.number}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <p className="text-xs text-slate-500 mt-1 max-w-[180px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};