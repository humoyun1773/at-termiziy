import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface LanguageStep {
  name: string;
  duration: string;
  flag: string;
}

interface BannerColumn {
  id: number;
  title: string;
  steps: LanguageStep[];
}

export const BannerCombinationsBoard: React.FC = () => {
  const { openModal } = useModal();
  const [activeCombo, setActiveCombo] = useState<number>(1);

  const combinations: BannerColumn[] = [
    {
      id: 1,
      title: "KOMBINATSIYA 1",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧" },
        { name: "FORS TILI", duration: "7 OY", flag: "🇮🇷" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪" },
        { name: "XITOY TILI", duration: "7 OY", flag: "🇨🇳" }
      ]
    },
    {
      id: 2,
      title: "KOMBINATSIYA 2",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧" },
        { name: "KOREYS TILI", duration: "7 OY", flag: "🇰🇷" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪" },
        { name: "YAPON TILI", duration: "7 OY", flag: "🇯🇵" }
      ]
    },
    {
      id: 3,
      title: "KOMBINATSIYA 3",
      steps: [
        { name: "RUS TILI", duration: "7 OY", flag: "🇷🇺" },
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧" },
        { name: "XITOY TILI", duration: "7 OY", flag: "🇨🇳" },
        { name: "YAPON TILI", duration: "7 OY", flag: "🇯🇵" }
      ]
    },
    {
      id: 4,
      title: "KOMBINATSIYA 4",
      steps: [
        { name: "INGLIZ TILI", duration: "7 OY", flag: "🇬🇧" },
        { name: "RUS TILI", duration: "7 OY", flag: "🇷🇺" },
        { name: "FORS TILI", duration: "7 OY", flag: "🇮🇷" },
        { name: "NEMIS TILI", duration: "7 OY", flag: "🇩🇪" }
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-lg shadow-slate-100">
      
      {/* Board Top Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading uppercase">
          AT-TERMEZIY O'QUV MARKAZI
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
          28 Oylik Ta'lim Kombinatsiyalariga Mos 4 Ta Til Dasturi
        </p>
      </div>

      {/* 4 Columns Combinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {combinations.map((combo) => {
          const isActive = activeCombo === combo.id;

          return (
            <div
              key={combo.id}
              onClick={() => setActiveCombo(combo.id)}
              className={`rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-sky-50/70 border-2 border-sky-500 shadow-md ring-2 ring-sky-200/50'
                  : 'bg-slate-50/60 hover:bg-slate-50 border border-slate-200 hover:border-sky-300'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/70">
                  <span className={`text-xs font-extrabold tracking-wider uppercase font-heading ${
                    isActive ? 'text-sky-700' : 'text-slate-700'
                  }`}>
                    {combo.title}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                {/* 4 Language Steps */}
                <div className="space-y-2">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base shrink-0 leading-none">
                            {step.flag}
                          </span>
                          <span className="text-xs font-bold text-slate-800 tracking-tight font-heading truncate">
                            {step.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 shrink-0">
                          {step.duration}
                        </span>
                      </div>

                      {/* Direction flow connector */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5 text-slate-300">
                          <ChevronDown className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Bottom Action */}
              <div className="mt-5 pt-3 border-t border-slate-200/70">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal({ combinationId: combo.id });
                  }}
                  className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                      : 'bg-white hover:bg-sky-50 text-sky-800 border border-slate-200 hover:border-sky-300'
                  }`}
                >
                  <span>Qabulga Yozilish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Ribbon Bar */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Phone */}
        <a
          href="tel:+998919517335"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 text-slate-900 border border-slate-200 font-mono font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-2xs"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>+998 91 951 73 35</span>
        </a>

        {/* Center: Guarantee & Details */}
        <div className="space-y-1 text-xs text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-slate-800 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-sky-700">
              <Calendar className="w-3.5 h-3.5" />
              28 Oylik Kompleks Dastur
            </span>
            <span className="text-slate-300">•</span>
            <span>4 Ta Tilga Muvofiq Tafakkur</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-700 font-bold text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kursni Muvaffaqiyatli Tugatgan Talabalar Ish Bilan Ta'minlanadi</span>
          </div>
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-slate-800 border border-slate-200 text-xs font-bold shrink-0 shadow-2xs">
          <MapPin className="w-4 h-4 text-sky-600" />
          <span>Qarshi Shahar</span>
        </div>

      </div>

    </div>
  );
};
