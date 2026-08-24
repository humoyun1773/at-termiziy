import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TELEGRAM_URL } from '../../data/siteConfig';
import { useLanguage } from '../../context/LanguageContext';
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

interface LanguageStep {
  name: string;
  duration: string;
  code: string;
}

interface CombinationPlan {
  id: number;
  title: string;
  steps: LanguageStep[];
}

export const BannerCombinationsBoard: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCombo, setActiveCombo] = useState<number>(1);

  const durationStr = language === 'ru' ? '7 месяцев' : language === 'en' ? '7 months' : '7 oy';

  // EXACT CURRICULUM APPROVED COMBINATIONS
  const combinations: CombinationPlan[] = [
    {
      id: 1,
      title: language === 'ru' ? 'Комбинация 1' : language === 'en' ? 'Combination 1' : 'Kombinatsiya 1',
      steps: [
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.german, duration: durationStr, code: "DE" },
        { name: t.languages.turkish, duration: durationStr, code: "TR" },
        { name: t.languages.chinese, duration: durationStr, code: "ZH" }
      ]
    },
    {
      id: 2,
      title: language === 'ru' ? 'Комбинация 2' : language === 'en' ? 'Combination 2' : 'Kombinatsiya 2',
      steps: [
        { name: t.languages.german, duration: durationStr, code: "DE" },
        { name: t.languages.russian, duration: durationStr, code: "RU" },
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.japanese, duration: durationStr, code: "JA" }
      ]
    },
    {
      id: 3,
      title: language === 'ru' ? 'Комбинация 3' : language === 'en' ? 'Combination 3' : 'Kombinatsiya 3',
      steps: [
        { name: t.languages.turkish, duration: durationStr, code: "TR" },
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.japanese, duration: durationStr, code: "JA" },
        { name: t.languages.korean, duration: durationStr, code: "KO" }
      ]
    },
    {
      id: 4,
      title: language === 'ru' ? 'Комбинация 4' : language === 'en' ? 'Combination 4' : 'Kombinatsiya 4',
      steps: [
        { name: t.languages.korean, duration: durationStr, code: "KO" },
        { name: t.languages.japanese, duration: durationStr, code: "JA" },
        { name: t.languages.russian, duration: durationStr, code: "RU" },
        { name: t.languages.english, duration: durationStr, code: "EN" }
      ]
    }
  ];

  return (
    <div className="relative w-full py-4">
      {/* Board Top Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>At-Termiziy Ilmiy Metodikasi • 28 Oylik Dastur</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading uppercase drop-shadow-lg">
          {t.brand.name}
        </h2>
        <p className="text-sm sm:text-base text-sky-100 font-medium mt-2 drop-shadow-md">
          {t.hero.titleHighlight} — {t.hero.titleEnd}
        </p>
      </div>

      {/* 4 Columns Combinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {combinations.map((combo) => {
          const isActive = activeCombo === combo.id;

          return (
            <motion.div
              key={combo.id}
              onClick={() => setActiveCombo(combo.id)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              animate={isActive ? { scale: 1.02 } : { scale: 1 }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl p-5 transition-all duration-200 flex flex-col justify-between cursor-pointer backdrop-blur-md shadow-xl ${
                isActive
                  ? 'bg-slate-950/90 border-2 border-sky-400 shadow-sky-500/20 ring-4 ring-sky-500/20'
                  : 'bg-slate-950/60 border border-white/15 hover:border-sky-400/60 hover:bg-slate-950/80'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/15">
                  <span className={`text-xs font-extrabold tracking-wider uppercase font-heading ${
                    isActive ? 'text-sky-300' : 'text-white'
                  }`}>
                    {combo.title}
                  </span>
                  <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isActive ? 'bg-sky-400 scale-125 shadow-xs shadow-sky-400' : 'bg-slate-500'
                  }`} />
                </div>

                {/* 4 Language Steps */}
                <div className="space-y-2.5">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className={`p-2.5 rounded-2xl border shadow-xs flex items-center justify-between gap-2 transition-all ${
                        isActive 
                          ? 'bg-sky-950/70 border-sky-400/50 hover:border-sky-300' 
                          : 'bg-slate-900/60 border-white/10 hover:border-white/30'
                      }`}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`w-7 h-7 rounded-lg font-black text-[10px] flex items-center justify-center shrink-0 font-heading border ${
                            isActive
                              ? 'bg-sky-500 text-white border-sky-300'
                              : 'bg-slate-800 text-sky-200 border-white/10'
                          }`}>
                            {step.code}
                          </span>
                          <span className="text-xs font-bold text-white tracking-tight font-heading truncate">
                            {step.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-[10px] px-2 py-0.5 rounded-md font-extrabold shrink-0 bg-slate-800 text-sky-200 border border-white/10"
                        >
                          {step.duration}
                        </Badge>
                      </div>

                      {/* Direction flow connector */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5">
                          <ChevronDown className="w-3.5 h-3.5 text-sky-300/60" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Bottom Action (Direct Telegram Link) */}
              <div className="mt-5 pt-3 border-t border-white/15">
                <Button
                  asChild
                  size="sm"
                  className={`w-full font-bold text-xs hover:scale-102 active:scale-98 transition-all cursor-pointer rounded-xl ${
                    isActive
                      ? 'bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-600/30 border-0'
                      : 'bg-slate-800/90 hover:bg-sky-600 text-white border border-white/15'
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
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Info Ribbon Bar */}
      <div className="rounded-3xl bg-slate-950/70 backdrop-blur-md border border-white/15 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-white shadow-xl">
        
        {/* Left: Phone */}
        <Button variant="outline" size="sm" asChild className="rounded-xl font-mono font-bold text-xs sm:text-sm bg-slate-900 text-white border-white/20 hover:bg-sky-600">
          <a href="tel:+998919517335" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+998 91 951 73 35</span>
          </a>
        </Button>

        {/* Center: Guarantee & Details */}
        <div className="space-y-1 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-white text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-sky-300">
              <Calendar className="w-3.5 h-3.5" />
              {t.hero.statMonths}
            </span>
            <span className="text-slate-500">•</span>
            <span>{t.hero.titleHighlight}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-300 font-bold text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.combinationsSection.guaranteeBanner}</span>
          </div>
        </div>

        {/* Right: Location */}
        <Badge variant="outline" className="px-3 py-1.5 gap-1.5 font-bold bg-slate-900 text-white border-white/20">
          <MapPin className="w-3.5 h-3.5 text-sky-400" />
          <span>{t.brand.city}</span>
        </Badge>

      </div>

    </div>
  );
};
