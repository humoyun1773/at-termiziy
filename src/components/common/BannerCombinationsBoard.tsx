import React, { useState } from 'react';
import { TELEGRAM_URL } from '../../data/siteConfig';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ChevronDown, 
  Send, 
  Sparkles 
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

interface LanguageStep {
  name: string;
  duration: string;
  code: string;
}

interface BannerColumn {
  id: number;
  title: string;
  badge?: string;
  steps: LanguageStep[];
}

export const BannerCombinationsBoard: React.FC = () => {
  const [activeCombo, setActiveCombo] = useState<number>(1);

  const combinations: BannerColumn[] = [
    {
      id: 1,
      title: "KOMBINATSIYA 1",
      badge: "Mashhur",
      steps: [
        { name: "Ingliz Tili", duration: "7 Oy", code: "EN" },
        { name: "Fors Tili", duration: "7 Oy", code: "FA" },
        { name: "Nemis Tili", duration: "7 Oy", code: "DE" },
        { name: "Xitoy Tili", duration: "7 Oy", code: "ZH" }
      ]
    },
    {
      id: 2,
      title: "KOMBINATSIYA 2",
      badge: "Sharq & G'arb",
      steps: [
        { name: "Ingliz Tili", duration: "7 Oy", code: "EN" },
        { name: "Koreys Tili", duration: "7 Oy", code: "KO" },
        { name: "Nemis Tili", duration: "7 Oy", code: "DE" },
        { name: "Yapon Tili", duration: "7 Oy", code: "JA" }
      ]
    },
    {
      id: 3,
      title: "KOMBINATSIYA 3",
      badge: "Biznes & Diplomatiya",
      steps: [
        { name: "Rus Tili", duration: "7 Oy", code: "RU" },
        { name: "Ingliz Tili", duration: "7 Oy", code: "EN" },
        { name: "Xitoy Tili", duration: "7 Oy", code: "ZH" },
        { name: "Yapon Tili", duration: "7 Oy", code: "JA" }
      ]
    },
    {
      id: 4,
      title: "KOMBINATSIYA 4",
      badge: "Global Muloqot",
      steps: [
        { name: "Ingliz Tili", duration: "7 Oy", code: "EN" },
        { name: "Rus Tili", duration: "7 Oy", code: "RU" },
        { name: "Fors Tili", duration: "7 Oy", code: "FA" },
        { name: "Nemis Tili", duration: "7 Oy", code: "DE" }
      ]
    }
  ];

  return (
    <Card className="w-full bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
      
      {/* Board Top Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Eksklyuziv 28 Oylik Ta'lim Tizimi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading uppercase">
          AL-HAKIM AT-TERMIZIY O'QUV MARKAZI
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
          4 ta tilga muvofiq chuqur va keng tafakkurga ega bo'ling
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
              className={`rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative ${
                isActive
                  ? 'bg-sky-50/80 dark:bg-slate-800 border-2 border-sky-500 dark:border-sky-500 shadow-xl shadow-sky-500/15 ring-2 ring-sky-300/40 dark:ring-sky-500/30 -translate-y-1'
                  : 'bg-slate-50/70 hover:bg-white dark:bg-slate-800/40 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-sky-400 dark:hover:border-sky-500/70 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-700">
                  <div>
                    <span className={`text-xs font-black tracking-wider uppercase font-heading block ${
                      isActive 
                        ? 'text-sky-600 dark:text-sky-400' 
                        : 'text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors'
                    }`}>
                      {combo.title}
                    </span>
                    {combo.badge && (
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mt-0.5">
                        {combo.badge}
                      </span>
                    )}
                  </div>
                  
                  <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-sky-500 ring-4 ring-sky-400/30 shadow-xs' 
                      : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-sky-400'
                  }`} />
                </div>

                {/* 4 Language Steps */}
                <div className="space-y-2">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className={`p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between gap-2 shadow-2xs ${
                        isActive
                          ? 'bg-white dark:bg-slate-900 border border-sky-200 dark:border-slate-700'
                          : 'bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/70 group-hover:border-sky-200 dark:group-hover:border-slate-600'
                      }`}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-7 h-7 rounded-lg bg-sky-100/70 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-extrabold text-[10px] flex items-center justify-center shrink-0 border border-sky-200/60 dark:border-sky-800 font-heading">
                            {step.code}
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white tracking-tight font-heading truncate">
                            {step.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-[10px] px-2 py-0.5 rounded-md font-extrabold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-none shrink-0"
                        >
                          {step.duration}
                        </Badge>
                      </div>

                      {/* Direction flow connector */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5">
                          <ChevronDown className={`w-3.5 h-3.5 transition-colors ${
                            isActive ? 'text-sky-500' : 'text-slate-300 dark:text-slate-600 group-hover:text-sky-400'
                          }`} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Bottom Action (Direct Telegram Link) */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-slate-700">
                <Button
                  asChild
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className={`w-full font-bold text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-600 hover:bg-sky-700 text-white shadow-md shadow-sky-600/25'
                      : 'bg-white hover:bg-sky-600 text-slate-800 hover:text-white dark:bg-slate-900 dark:hover:bg-sky-600 dark:text-slate-200 dark:hover:text-white border-slate-200 dark:border-slate-700 hover:border-sky-600 dark:hover:border-sky-600'
                  }`}
                >
                  <a 
                    href={TELEGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-1.5"
                  >
                    <span>Telegramda Yozilish</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Ribbon Bar */}
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Phone */}
        <Button 
          variant="outline" 
          size="sm" 
          asChild 
          className="rounded-xl font-mono font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white"
        >
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
        <Badge variant="outline" className="px-3 py-1.5 gap-1.5 font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
          <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Qarshi Shahar</span>
        </Badge>

      </div>

    </Card>
  );
};
