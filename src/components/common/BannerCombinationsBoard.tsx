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
  Send
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
  steps: LanguageStep[];
}

export const BannerCombinationsBoard: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCombo, setActiveCombo] = useState<number>(1);

  const durationStr = language === 'ru' ? '7 Мес' : language === 'en' ? '7 Mon' : '7 Oy';
  const comboPrefix = language === 'ru' ? 'КОМБИНАЦИЯ' : language === 'en' ? 'COMBINATION' : 'KOMBINATSIYA';

  const combinations: BannerColumn[] = [
    {
      id: 1,
      title: `${comboPrefix} 1`,
      steps: [
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.persian, duration: durationStr, code: "FA" },
        { name: t.languages.german, duration: durationStr, code: "DE" },
        { name: t.languages.chinese, duration: durationStr, code: "ZH" }
      ]
    },
    {
      id: 2,
      title: `${comboPrefix} 2`,
      steps: [
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.korean, duration: durationStr, code: "KO" },
        { name: t.languages.german, duration: durationStr, code: "DE" },
        { name: t.languages.japanese, duration: durationStr, code: "JA" }
      ]
    },
    {
      id: 3,
      title: `${comboPrefix} 3`,
      steps: [
        { name: t.languages.russian, duration: durationStr, code: "RU" },
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.chinese, duration: durationStr, code: "ZH" },
        { name: t.languages.japanese, duration: durationStr, code: "JA" }
      ]
    },
    {
      id: 4,
      title: `${comboPrefix} 4`,
      steps: [
        { name: t.languages.english, duration: durationStr, code: "EN" },
        { name: t.languages.russian, duration: durationStr, code: "RU" },
        { name: t.languages.persian, duration: durationStr, code: "FA" },
        { name: t.languages.german, duration: durationStr, code: "DE" }
      ]
    }
  ];

  return (
    <Card className="w-full bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-8 border-slate-200 dark:border-slate-800 shadow-lg">
      
      {/* Board Top Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading uppercase">
          {t.brand.name}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
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
              className={`rounded-2xl p-4 sm:p-5 transition-colors duration-200 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? 'bg-sky-50 dark:bg-slate-800 border-2 border-sky-400 dark:border-sky-600 shadow-md ring-2 ring-sky-400/20'
                  : 'bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                  <span className={`text-xs font-extrabold tracking-wider uppercase font-heading ${
                    isActive ? 'text-sky-600 dark:text-sky-400' : 'text-slate-700 dark:text-slate-300'
                  }`}>
                    {combo.title}
                  </span>
                  <span className={`w-2 h-2 rounded-full transition-all ${
                    isActive ? 'bg-sky-500 scale-125 shadow-xs shadow-sky-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`} />
                </div>

                {/* 4 Language Steps */}
                <div className="space-y-2">
                  {combo.steps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between gap-2 hover:border-sky-300 dark:hover:border-sky-700 transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-extrabold text-[10px] flex items-center justify-center shrink-0 font-heading">
                            {step.code}
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight font-heading truncate">
                            {step.name}
                          </span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-[10px] px-1.5 py-0.5 rounded-md font-extrabold shrink-0"
                        >
                          {step.duration}
                        </Badge>
                      </div>

                      {/* Direction flow connector */}
                      {sIdx < combo.steps.length - 1 && (
                        <div className="flex items-center justify-center py-0.5">
                          <ChevronDown className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Column Bottom Action (Direct Telegram Link) */}
              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-700">
                <Button
                  asChild
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  className="w-full font-bold text-xs hover:scale-102 active:scale-98 transition-transform"
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
      <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        {/* Left: Phone */}
        <Button variant="outline" size="sm" asChild className="rounded-xl font-mono font-bold text-xs sm:text-sm">
          <a href="tel:+998919517335" className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>+998 91 951 73 35</span>
          </a>
        </Button>

        {/* Center: Guarantee & Details */}
        <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-slate-800 dark:text-slate-200 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-sky-600 dark:text-sky-400">
              <Calendar className="w-3.5 h-3.5" />
              {t.hero.statMonths}
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span>{t.hero.titleHighlight}</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] sm:text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.combinationsSection.guaranteeBanner}</span>
          </div>
        </div>

        {/* Right: Location */}
        <Badge variant="outline" className="px-3 py-1.5 gap-1.5 font-bold">
          <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>{t.brand.city}</span>
        </Badge>

      </div>

    </Card>
  );
};
