import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { combinationsData } from '../data/combinationsData';
import { 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Sparkles,
  Phone
} from 'lucide-react';
import { Button } from '../components/ui/button';

export const CombinationsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const monthSuffix = language === 'ru' ? 'МЕС' : language === 'en' ? 'MON' : 'OY';

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Full-Width Hero Banner with Ultra-Clear High Contrast Typography */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full relative py-16 sm:py-24 text-center overflow-hidden shadow-xl border-b border-sky-100"
      >
        {/* Real Multi-Language Students & Teacher Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=100&w=2560" 
            alt="Ta'lim jarayonidagi talabalar va o'qituvchilar" 
            className="w-full h-full object-cover object-center"
          />
          {/* High-Contrast Gradient Scrim for 100% Clear Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-slate-950/50" />
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-sky-500 text-white border border-sky-400/40 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 mb-4 shadow-lg backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
            {t.combinationsSection.tag}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading mb-4 tracking-tight drop-shadow-lg">
            {t.combinationsSection.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-sky-100 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
            {t.combinationsSection.subtitle}
          </p>
        </div>
      </motion.section>

      {/* 4 Detailed Combinations Sections */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {combinationsData.map((combo, idx) => {
          const comboImages: Record<number, string> = {
            1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
            2: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
            3: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
            4: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200"
          };
          const comboImg = comboImages[combo.id] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200";

          return (
            <motion.div
              key={combo.id}
              id={`kombinatsiya-${combo.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl text-white overflow-hidden"
            >
              {/* Photo Banner Header for Each Combination */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                <img 
                  src={comboImg} 
                  alt={combo.subtitleKey}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full text-white">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 rounded-lg bg-sky-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                          {combo.titleKey}
                        </span>
                        <span className="text-xs font-bold text-sky-200 flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                          <Clock className="w-3.5 h-3.5 text-sky-400" />
                          {t.combinationsSection.totalBadge}
                        </span>
                        {combo.badgeKey && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold">
                            {combo.badgeKey}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                        {combo.subtitleKey}
                      </h2>
                    </div>

                    <Button
                      asChild
                      className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs md:text-sm shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                    >
                      <a 
                        href={TELEGRAM_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>{t.combinationsSection.selectBtn}</span>
                        <Send className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-10">
                {/* Target profile */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-white/10 text-xs md:text-sm text-sky-100 font-medium">
                  <strong className="text-sky-300 block mb-1 font-bold">🎯 {t.jobGuarantee.tag}:</strong>
                  {combo.recommendedForKey}
                </div>

                {/* 4 Sequential 7-Month Stages (Timeline) */}
                <div className="space-y-4 my-8">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                    {t.combinationsSection.modulesTitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {combo.modules.map((mod, mIdx) => (
                      <div
                        key={mod.id}
                        className="relative bg-slate-900/70 rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="w-8 h-8 rounded-lg bg-sky-500 border border-sky-400 flex items-center justify-center text-xs font-black text-white shadow-xs">
                              0{mIdx + 1}
                            </span>
                            <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                              {mod.durationMonths} {monthSuffix}
                            </span>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{mod.flag}</span>
                            <div>
                              <h4 className="text-sm font-bold text-white font-heading">
                                {mod.nameKey}
                              </h4>
                              <span className="text-[10px] font-semibold text-sky-400 block">
                                {mod.targetLevel}
                              </span>
                            </div>
                          </div>

                          <p className="text-[11px] text-sky-100/80 leading-relaxed font-medium">
                            {mod.descriptionKey}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex flex-wrap gap-1">
                            {mod.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="text-[9px] font-medium bg-slate-800 px-2 py-0.5 rounded border border-white/10 text-sky-200">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/10">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                      {t.combinationsSection.outcomesTitle}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-sky-100 font-medium">
                      {combo.careerProspectsKey.map((cp, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-white flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                    <div className="text-xs">
                      <strong className="block font-bold text-emerald-200 text-sm">
                        {t.combinationsSection.guaranteeBanner}
                      </strong>
                      <span className="text-emerald-100 leading-relaxed block mt-0.5">
                        {t.combinationsSection.guaranteeSub}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-950/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl border border-white/15 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-black uppercase tracking-wider inline-block shadow-md">
              {t.combinationsSection.tag}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
              {t.hero.subheading}
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-xl mx-auto">
              {t.hero.locationBadge}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>{t.hero.freeConsultation}</span>
                  <Send className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm border-white/20 hover:bg-sky-600 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <a href="tel:+998919517335" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+998 91 951 73 35</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
