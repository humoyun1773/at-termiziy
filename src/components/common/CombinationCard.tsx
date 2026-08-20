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
  const monthSuffix = language === 'ru' ? 'МЕС' : language === 'en' ? 'MON' : 'OY';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={`relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full transition-all ${
        combination.isPopular 
          ? 'border-sky-300 dark:border-sky-700 shadow-xl shadow-sky-100 dark:shadow-none ring-2 ring-sky-400/20' 
          : 'border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-sky-200'
      }`}>
        {/* Popular Badge */}
        {combination.isPopular && (
          <div className="absolute -top-3.5 right-6">
            <Badge className="bg-sky-600 text-white gap-1 px-3 py-1 shadow-md font-bold animate-pulse-subtle">
              <Star className="w-3 h-3 fill-current" />
              <span>{combination.badgeKey || "Tavsiya Qilinadi"}</span>
            </Badge>
          </div>
        )}

      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="secondary" className="font-extrabold uppercase">
                {combination.titleKey}
              </Badge>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                {t.combinationsSection.totalBadge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              {combination.subtitleKey}
            </h3>
          </div>
        </div>

        {/* Recommended for */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 leading-relaxed">
          <strong className="text-sky-900 dark:text-sky-300 block mb-0.5">🎯 Maqsadli Yo'nalish:</strong>
          {combination.recommendedForKey}
        </p>

        {/* 4 Language Stages */}
        <div className="space-y-2.5 mb-6">
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center justify-between">
            <span>{t.combinationsSection.modulesTitle}</span>
            <span className="text-sky-600 dark:text-sky-400 font-bold">{t.combinationsSection.monthsBadge}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {combination.modules.map((module) => (
              <div
                key={module.id}
                className="relative p-3 rounded-2xl bg-slate-50/70 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 transition-all flex items-center gap-3 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 shadow-2xs border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xl shrink-0">
                  {module.flag}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {module.nameKey}
                    </h4>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                      {module.durationMonths} {monthSuffix}
                    </Badge>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {module.targetLevel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Placement Guarantee Badge */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 mb-6 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs">
            <strong className="block font-bold text-emerald-900 dark:text-emerald-200">
              {t.combinationsSection.guaranteeBanner}
            </strong>
            <span className="text-emerald-700 dark:text-emerald-400 text-[11px]">
              {t.combinationsSection.guaranteeSub}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
        <Button
          asChild
          size="lg"
          className="w-full font-bold text-xs md:text-sm shadow-md"
        >
          <a 
            href={TELEGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>{t.combinationsSection.selectBtn}</span>
            <Send className="w-4 h-4" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-full text-xs font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-900"
        >
          <Link to={`/combinations#kombinatsiya-${combination.id}`}>
            {t.combinationsSection.viewDetails} →
          </Link>
        </Button>
      </div>
    </Card>
  </motion.div>
  );
};
