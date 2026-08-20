import React from 'react';
import { motion } from 'framer-motion';
import type { Combination } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { TELEGRAM_URL } from '../../data/siteConfig';
import { Clock, CheckCircle2, Star, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface Props {
  combination: Combination;
}

export const CombinationCard: React.FC<Props> = ({ combination }) => {
  const { t, language } = useLanguage();
  const monthSuffix = language === 'ru' ? 'Oy' : language === 'en' ? 'Mon' : 'Oy';

  // Clean 2-letter code mapping
  const getLanguageCode = (nameKey: string, flag: string) => {
    if (nameKey.toLowerCase().includes('ingliz') || flag === '🇬🇧') return 'EN';
    if (nameKey.toLowerCase().includes('nemis') || flag === '🇩🇪') return 'DE';
    if (nameKey.toLowerCase().includes('xitoy') || flag === '🇨🇳') return 'ZH';
    if (nameKey.toLowerCase().includes('koreys') || flag === '🇰🇷') return 'KO';
    if (nameKey.toLowerCase().includes('yapon') || flag === '🇯🇵') return 'JA';
    if (nameKey.toLowerCase().includes('rus') || flag === '🇷🇺') return 'RU';
    if (nameKey.toLowerCase().includes('arab') || flag === '🇸🇦') return 'AR';
    if (nameKey.toLowerCase().includes('fors') || flag === '🇮🇷') return 'FA';
    return 'TL';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-200 ${
        combination.isPopular 
          ? 'border-2 border-sky-400 dark:border-sky-500/80 bg-white dark:bg-slate-900 shadow-lg shadow-sky-500/10 ring-2 ring-sky-400/20' 
          : 'border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-600'
      }`}>
        {/* Popular Badge */}
        {combination.isPopular && (
          <div className="absolute -top-3 right-5">
            <Badge className="bg-gradient-to-r from-sky-600 to-blue-600 text-white gap-1 px-2.5 py-0.5 shadow-md font-bold text-[10px] tracking-wide uppercase">
              <Star className="w-3 h-3 fill-current" />
              <span>{combination.badgeKey || "Tavsiya Qilinadi"}</span>
            </Badge>
          </div>
        )}

        <div>
          {/* Header */}
          <div className="mb-3.5">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {combination.titleKey}
              </span>
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                {t.combinationsSection.totalBadge}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-heading leading-snug">
              {combination.subtitleKey}
            </h3>
          </div>

          {/* Recommended for */}
          <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 mb-4 bg-slate-50 dark:bg-slate-800/60 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 leading-relaxed">
            <span className="text-sky-700 dark:text-sky-300 font-extrabold block mb-0.5">🎯 Maqsadli Yo'nalish:</span>
            <span>{combination.recommendedForKey}</span>
          </div>

          {/* 4 Language Stages */}
          <div className="space-y-2 mb-4">
            <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>{t.combinationsSection.modulesTitle}</span>
              <span className="text-sky-600 dark:text-sky-400">{t.combinationsSection.monthsBadge}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {combination.modules.map((module) => (
                <div
                  key={module.id}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-sky-600 transition-all flex items-center gap-2 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 flex items-center justify-center font-extrabold text-[10px] shrink-0 font-heading">
                    {getLanguageCode(module.nameKey, module.flag)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                        {module.nameKey}
                      </h4>
                      <span className="text-[10px] font-extrabold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-1 py-0.2 rounded border border-slate-200 dark:border-slate-700 shrink-0">
                        {module.durationMonths} {monthSuffix}
                      </span>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
                      {module.targetLevel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Placement Guarantee Badge */}
          <div className="p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/90 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-300 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div className="text-[11px] leading-tight">
              <strong className="font-bold text-emerald-900 dark:text-emerald-200">
                {t.combinationsSection.guaranteeBanner}:
              </strong>{' '}
              <span className="text-emerald-700 dark:text-emerald-400">
                {t.combinationsSection.guaranteeSub}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="flex-1 h-9 rounded-xl font-bold text-xs bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-md shadow-sky-600/20"
          >
            <a 
              href={TELEGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5"
            >
              <span>{t.combinationsSection.selectBtn}</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </Button>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="h-9 px-3 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 shrink-0"
          >
            <Link to={`/combinations`}>
              Batafsil
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
