import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { 
  Sparkles, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Compass,
  ArrowRight
} from 'lucide-react';

interface LanguageStep {
  name: string;
  duration: string;
  flag: string;
  code: string;
}

interface BannerColumn {
  id: number;
  title: string;
  steps: LanguageStep[];
}

export const BannerCombinationsBoard: React.FC = () => {
  const { openModal } = useModal();
  const [selectedCombo, setSelectedCombo] = useState<number | null>(null);

  const combinations: BannerColumn[] = [
    {
      id: 1,
      title: "KOMBINATSIYA 1",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧", code: "en" },
        { name: "FORS TILI", duration: "7 OY", flag: "🇮🇷", code: "fa" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪", code: "de" },
        { name: "XITOY TILI", duration: "7 OY", flag: "🇨🇳", code: "zh" }
      ]
    },
    {
      id: 2,
      title: "KOMBINATSIYA 2",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧", code: "en" },
        { name: "KOREYS TILI", duration: "7 OY", flag: "🇰🇷", code: "ko" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪", code: "de" },
        { name: "YAPON TILI", duration: "7 OY", flag: "🇯🇵", code: "ja" }
      ]
    },
    {
      id: 3,
      title: "KOMBINATSIYA 3",
      steps: [
        { name: "RUS TILI", duration: "7 OY", flag: "🇷🇺", code: "ru" },
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧", code: "en" },
        { name: "XITOY TILI", duration: "7 OY", flag: "🇨🇳", code: "zh" },
        { name: "YAPON TILI", duration: "7 OY", flag: "🇯🇵", code: "ja" }
      ]
    },
    {
      id: 4,
      title: "KOMBINATSIYA 4",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧", code: "en" },
        { name: "RUS TILI", duration: "7 OY", flag: "🇷🇺", code: "ru" },
        { name: "FORS TILI", duration: "7 OY", flag: "🇮🇷", code: "fa" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪", code: "de" }
      ]
    }
  ];

  return (
    <div className="w-full relative bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 rounded-3xl p-4 sm:p-6 lg:p-10 border-2 border-sky-200 shadow-2xl shadow-sky-500/10 overflow-hidden">
      
      {/* Decorative background Islamic Arch/Oriental Vector Pattern */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sky-100/50 to-transparent pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-sky-200/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-200/40 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header of the Board */}
      <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-wider font-heading uppercase">
          AT-TERMEZIY O'QUV MARKAZI
        </h2>

        {/* Ribbon Motto */}
        <div className="inline-block">
          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-md shadow-sky-950/20 border border-sky-600/30 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>INTIZOMNI SEVUVCHILAR UCHUN</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
        </div>
      </div>

      {/* 4 Columns (Combinations) Board */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {combinations.map((combo) => {
          const isSelected = selectedCombo === combo.id;

          return (
            <div
              key={combo.id}
              onClick={() => setSelectedCombo(isSelected ? null : combo.id)}
              className={`bg-white rounded-3xl p-5 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-sky-500 ring-4 ring-sky-200 shadow-xl scale-[1.02]'
                  : 'border-slate-200/90 shadow-md hover:border-sky-300 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="text-center mb-5 pb-3 border-b border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-sky-900 text-white text-xs font-black tracking-wider uppercase shadow-xs mb-2">
                    <Compass className="w-3.5 h-3.5 text-amber-300" />
                    <span>{combo.title}</span>
                  </div>
                </div>

                {/* 4 Language Pills with Connecting Indicators */}
                <div className="space-y-2">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/80 border border-slate-200 hover:border-sky-300 transition-all flex items-center justify-between gap-3 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-lg shrink-0">
                            {step.flag}
                          </span>
                          <span className="text-xs font-black text-slate-800 tracking-wide uppercase font-heading">
                            {step.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-lg bg-sky-100 text-sky-800 shrink-0">
                          ({step.duration})
                        </span>
                      </div>

                      {/* Direction Flow Arrows between stages */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5 text-sky-400">
                          <div className="flex items-center gap-1 text-[10px] font-bold text-sky-500/70">
                            <span>↕️</span>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Select CTA */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal({ combinationId: combo.id });
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Qabulga Yozilish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Banner Strip (Matching the lower bar on the physical banner) */}
      <div className="relative rounded-2xl bg-white border border-sky-200 p-4 sm:p-6 shadow-md flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
        
        {/* Left: Phone */}
        <a
          href="tel:+998919517335"
          className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200 font-mono font-black text-sm md:text-base transition-colors shrink-0 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>+998 91 951 73 35</span>
        </a>

        {/* Center: Guarantee & 28-Month Badge */}
        <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-sky-950 uppercase tracking-wider text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-sky-700">
              <Calendar className="w-3.5 h-3.5" />
              28 Oylik Ta'lim Kombinatsiyalariga Mos
            </span>
            <span className="text-slate-300">•</span>
            <span>4 Ta Tilga Muvofiq Tafakkurga Ega Bo'ladi</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-extrabold text-[11px] sm:text-xs uppercase">
            <GraduationCap className="w-4 h-4 text-emerald-600" />
            <span>Kursni Muvaffaqiyatli Tugatgan Talabalar Ish Bilan Ta'minlanadi</span>
          </div>
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-50 text-sky-900 border border-sky-200 text-xs font-black uppercase tracking-wider shrink-0">
          <MapPin className="w-4 h-4 text-sky-600" />
          <span>Qarshi Shahar</span>
        </div>

      </div>

    </div>
  );
};
