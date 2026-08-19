import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50/70 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="O‘quvchilar Fikri"
          title="Biz Haqimizda Nima Deyishadi?"
          subtitle="O‘quvchilarimiz va ularning ota-onalarining samimiy fikrlari va taassurotlari."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{item.feedback}”
                </p>
              </div>

              {/* Author & Result */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.course} bitiruvchisi
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    🎯 {item.result}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};