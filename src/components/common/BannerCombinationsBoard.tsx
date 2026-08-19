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
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

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
    <Card className="w-full bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border-slate-200 dark:border-slate-800 shadow-lg">
      
      {/* Board Top Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading uppercase">
          AL-HAKIM AT-TERMIZIY O'QUV MARKAZI
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
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
                  ? 'bg-sky-50/70 dark:bg-sky-950/40 border-2 border-sky-500 shadow-md ring-2 ring-sky-200/50 dark:ring-sky-800/40'
                  : 'bg-slate-50/60 dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-sky-300'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/70 dark:border-slate-800">
                  <span className={`text-xs font-extrabold tracking-wider uppercase font-heading ${
                    isActive ? 'text-sky-700 dark:text-sky-300' : 'text-slate-700 dark:text-slate-200'
                  }`}>
                    {combo.title}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                {/* 4 Language Steps */}
                <div className="space-y-2">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="text-base shrink-0 leading-none">
                            {step.flag}
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight font-heading truncate">
                            {step.name}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 rounded-md font-extrabold">
                          {step.duration}
                        </Badge>
                      </div>

                      {/* Direction flow connector */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5 text-slate-300 dark:text-slate-600">
                          <ChevronDown className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Bottom Action */}
              <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800">
                <Button
                  type="button"
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal({ combinationId: combo.id });
                  }}
                  className="w-full font-bold text-xs"
                >
                  <span>Qabulga Yozilish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Ribbon Bar */}
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Phone */}
        <Button variant="outline" size="sm" asChild className="rounded-xl font-mono font-bold text-xs sm:text-sm">
          <a href="tel:+998919517335" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>+998 91 951 73 35</span>
          </a>
        </Button>

        {/* Center: Guarantee & Details */}
        <div className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400">
              <Calendar className="w-3.5 h-3.5" />
              28 Oylik Kompleks Dastur
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>4 Ta Tilga Muvofiq Tafakkur</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Kursni Muvaffaqiyatli Tugatgan Talabalar Ish Bilan Ta'minlanadi</span>
          </div>
        </div>

        {/* Right: Location */}
        <Badge variant="outline" className="px-3 py-1.5 gap-1.5 font-bold text-slate-800 dark:text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-sky-600" />
          <span>Qarshi Shahar</span>
        </Badge>

      </div>

    </Card>
  );
};
