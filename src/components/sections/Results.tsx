import React from 'react';
import { CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const Results: React.FC = () => {
  const resultCards = [
    {
      title: "IELTS Imtihon Natijalari",
      tag: "Xorijiy Tillar",
      stats: "8.5 Eng yuqori ball",
      description: "Oxirgi 6 oyda 120+ o'quvchimiz IELTS 7.0 va undan yuqori natija qayd etib, xorijiy va mahalliy nufuzli OTMlarga qabul qilindi.",
      highlight: "O'rtacha natija: 7.5 Band",
      items: ["Madina A. — IELTS 8.5", "Javohir T. — IELTS 8.0", "Sarvar K. — IELTS 7.5", "Malika O. — IELTS 7.5"]
    },
    {
      title: "IT Bitiruvchilari Bandligi",
      tag: "Dasturlash",
      stats: "92% Ishga Joylashish",
      description: "Frontend va Python kurslari bitiruvchilari mahalliy IT kompaniyalar, banklar va masofaviy xorijiy loyihalarda ish boshladi.",
      highlight: "O'rtacha maosh: $600 - $1200",
      items: ["Akmal Z. — Middle Frontend ($900)", "Bobur M. — Junior Python ($650)", "Shahnoza R. — React Dev ($800)", "Eldor B. — Fullstack ($1100)"]
    },
    {
      title: "Prezident Maktabiga Qabul",
      tag: "Maktab & Aniq Fanlar",
      stats: "85% Grant Natijasi",
      description: "Tanqidiy fikrlash va matematika bo'yicha maxsus tayyorlov dasturimiz o'quvchilari Prezident va Al-Xorazmiy maktablari imtihonlaridan o'tdi.",
      highlight: "60+ o'quvchi 100% grant yutdi",
      items: ["Temur S. — Prezident maktabi", "Diyora X. — Al-Xorazmiy maktabi", "Bilolbek N. — Prezident maktabi", "Aziza M. — Fiz-mat litseyi"]
    }
  ];

  return (
    <section id="results" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Haqiqiy Natijalar"
          title="O‘quvchilarimizning Erishgan Yutuqlari"
          subtitle="Bizning asosiy ko‘rsatkichimiz — bu o‘quvchilarimizning IELTS ballari, ishga joylashishi va maktab imtihonlaridagi g‘alabalari."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resultCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant={idx === 0 ? 'amber' : idx === 1 ? 'emerald' : 'blue'}>
                    {card.tag}
                  </Badge>
                  <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    {card.stats}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Highlight banner */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 mb-6 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900">{card.highlight}</span>
                </div>

                {/* Result Items */}
                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    So‘nggi natijalardan namunalar:
                  </p>
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 text-center">
                <a
                  href="#contact"
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 group"
                >
                  <span>Siz ham shu natijaga erishing</span>
                  <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};