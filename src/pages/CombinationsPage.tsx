import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { combinationsData } from '../data/combinationsData';
import { 
  Layers, 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { Button } from '../components/ui/button';

export const CombinationsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 space-y-16">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          {t.combinationsSection.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mb-4">
          28 Oylik Eksklyuziv Ta'lim Kombinatsiyalari
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          4 ta tilga muvofiq chuqur va keng tafakkurga ega bo'ling. Har bir til 7 oydan o'rgatiladi va yakunda bitiruvchilar nufuzli tashkilotlarga ish bilan ta'minlanadi.
        </p>
      </section>

      {/* 4 Detailed Combinations Sections */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {combinationsData.map((combo) => (
          <div
            key={combo.id}
            id={`kombinatsiya-${combo.id}`}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-lg bg-sky-600 text-white font-extrabold text-xs uppercase tracking-wider">
                    {combo.titleKey}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    Jami 28 Oy (4 × 7 Oy)
                  </span>
                  {combo.badgeKey && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-bold">
                      {combo.badgeKey}
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">
                  {combo.subtitleKey}
                </h2>
              </div>

              <Button
                asChild
                className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs md:text-sm shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <a 
                  href={TELEGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Telegramda Yozilish</span>
                  <Send className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Target profile */}
            <div className="my-6 p-4 rounded-2xl bg-sky-50/60 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-800 text-xs md:text-sm text-slate-700 dark:text-slate-300">
              <strong className="text-sky-900 dark:text-sky-300 block mb-1 font-bold">🎯 Kimlar Uchun Tavsiya Qilinadi:</strong>
              {combo.recommendedForKey}
            </div>

            {/* 4 Sequential 7-Month Stages (Timeline) */}
            <div className="space-y-4 my-8">
              <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                O'quv Rejasi Bosqichlari (Har bir til 7 oydan):
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {combo.modules.map((mod, idx) => (
                  <div
                    key={mod.id}
                    className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs font-black text-sky-700 dark:text-sky-400 shadow-xs">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300">
                          {mod.durationMonths} OY
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{mod.flag}</span>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                            {mod.nameKey}
                          </h4>
                          <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 block">
                            {mod.targetLevel}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {mod.descriptionKey}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                      <div className="flex flex-wrap gap-1">
                        {mod.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[9px] font-medium bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes & Guarantee */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  Karyera Imkoniyatlari:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {combo.careerProspectsKey.map((cp, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <strong className="block font-bold text-emerald-900 dark:text-emerald-200 text-sm">
                    Kafolatlangan Ish Bilan Ta'minlash
                  </strong>
                  <span className="text-emerald-800 dark:text-emerald-300 leading-relaxed block mt-0.5">
                    Ushbu kombinatsiyani muvaffaqiyatli tamomlagan bitiruvchilarimizga to'g'ridan-to'g'ri nufuzli kompaniyalarda ish o'rni kafolatlanadi.
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-900 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold font-heading">
            Qaysi Kombinatsiya Sizga Mos Kelishini Bilmayapsizmi?
          </h3>
          <p className="text-xs sm:text-sm text-sky-200 max-w-lg mx-auto">
            Markazimiz mutaxassislari sizning qiziqishingiz, bilim darajangiz va kelajak rejalaringizni bepul tahlil qilib, eng optimal kombinatsiyani tavsiya etishadi.
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="px-8 py-3.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs md:text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Telegramda Bepul Diagnostika & Konsultatsiya</span>
                <Send className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
