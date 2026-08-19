import React from 'react';
import type { Combination } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { ArrowRight, Clock, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface Props {
  combination: Combination;
}

export const CombinationCard: React.FC<Props> = ({ combination }) => {
  const { t } = useLanguage();
  const { openModal } = useModal();

  return (
    <Card className={`relative rounded-3xl p-6 lg:p-8 flex flex-col justify-between transition-all ${
      combination.isPopular 
        ? 'border-sky-300 shadow-xl shadow-sky-100 ring-2 ring-sky-400/20' 
        : 'border-slate-200/90 shadow-md hover:shadow-xl hover:border-sky-200'
    }`}>
      {/* Popular Badge */}
      {combination.isPopular && (
        <div className="absolute -top-3.5 right-6">
          <Badge className="bg-sky-600 text-white gap-1 px-3 py-1 shadow-md font-bold">
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
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                28 Oylik Ta'lim
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              {combination.subtitleKey}
            </h3>
          </div>
        </div>

        {/* Recommended for */}
        <p className="text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded-2xl border border-slate-100 leading-relaxed">
          <strong className="text-sky-900 block mb-0.5">🎯 Maqsadli Yo'nalish:</strong>
          {combination.recommendedForKey}
        </p>

        {/* 4 Language Stages */}
        <div className="space-y-2.5 mb-6">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
            <span>4 Ta Til Ketma-ketligi</span>
            <span className="text-sky-600 font-bold">Har biri 7 Oydan</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {combination.modules.map((module) => (
              <div
                key={module.id}
                className="relative p-3 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-sky-300 transition-all flex items-center gap-3 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-xl shrink-0">
                  {module.flag}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {module.nameKey}
                    </h4>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                      {module.durationMonths} OY
                    </Badge>
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                    {module.targetLevel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Placement Guarantee Badge */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 mb-6 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs">
            <strong className="block font-bold text-emerald-900">
              Ish Bilan Ta'minlanadi
            </strong>
            <span className="text-emerald-700 text-[11px]">
              Dasturni muvaffaqiyatli tugatgan barcha talabalar ishga joylashtiriladi.
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        <Button
          onClick={() => openModal({ combinationId: combination.id })}
          size="lg"
          className="w-full font-bold text-xs md:text-sm shadow-md"
        >
          <span>{t.combinationsSection.selectBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-full text-xs font-semibold text-sky-700 hover:text-sky-900"
        >
          <Link to={`/combinations#kombinatsiya-${combination.id}`}>
            {t.combinationsSection.viewDetails} →
          </Link>
        </Button>
      </div>
    </Card>
  );
};
