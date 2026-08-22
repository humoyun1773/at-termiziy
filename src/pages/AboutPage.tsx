import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Compass, 
  Target,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LocationSection } from '../components/common/LocationSection';
import { 
  IslamicGirihPattern, 
  ArabesqueDivider, 
  TermiziyEmblem,
  CornerArabesque,
  TermiziyMandalaRing
} from '../components/common/OrientalPatterns';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Header with Termiziy Emblem, Mandala Ring & Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <IslamicGirihPattern opacity={0.12} color="#0284c7" />
        <div className="absolute -top-12 -left-12 pointer-events-none opacity-30">
          <TermiziyMandalaRing size={280} opacity={0.3} />
        </div>
        <div className="absolute -bottom-12 -right-12 pointer-events-none opacity-30">
          <TermiziyMandalaRing size={280} opacity={0.3} />
        </div>

        <div className="flex justify-center mb-3 relative z-10">
          <TermiziyEmblem size={68} className="drop-shadow-md hover:scale-105 transition-transform" />
        </div>
        <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-2xs relative z-10">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
          {t.aboutPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-4 relative z-10">
          {t.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto relative z-10">
          {t.aboutPage.intro}
        </p>
        <ArabesqueDivider className="relative z-10" />
      </motion.section>

      {/* Philosophy Banner with Oriental Accents */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-950 rounded-3xl p-8 md:p-14 text-white shadow-2xl relative overflow-hidden border-2 border-sky-600/40 ring-4 ring-sky-500/10">
          <IslamicGirihPattern opacity={0.12} color="#38bdf8" />
          <div className="absolute -right-16 -bottom-16 pointer-events-none opacity-40">
            <TermiziyMandalaRing size={300} opacity={0.35} />
          </div>
          <CornerArabesque position="top-right" size={64} className="text-amber-400/40" />
          <CornerArabesque position="bottom-left" size={64} className="text-sky-300/40" />
          <CornerArabesque position="top-left" size={64} className="text-sky-300/40" />
          <CornerArabesque position="bottom-right" size={64} className="text-amber-400/40" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider inline-flex items-center gap-2 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {t.brand.motto}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
              {t.mottoSection.title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-sky-100 leading-relaxed">
              {t.mottoSection.description}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Cards with Corner Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl p-8 border-2 border-sky-200 shadow-lg hover:shadow-2xl hover:border-sky-400 transition-all space-y-4 overflow-hidden ring-2 ring-sky-400/10"
          >
            <IslamicGirihPattern opacity={0.12} color="#0284c7" />
            <CornerArabesque position="top-right" size={60} className="text-amber-500/35" />
            <CornerArabesque position="bottom-left" size={60} className="text-sky-500/35" />
            
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-2xs relative z-10">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading relative z-10">
              {t.aboutPage.missionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
              {t.aboutPage.missionText}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all space-y-4 overflow-hidden ring-2 ring-emerald-400/10"
          >
            <IslamicGirihPattern opacity={0.12} color="#059669" />
            <CornerArabesque position="top-right" size={60} className="text-emerald-500/35" />
            <CornerArabesque position="bottom-left" size={60} className="text-amber-500/35" />

            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-2xs relative z-10">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading relative z-10">
              {t.aboutPage.visionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed relative z-10">
              {t.aboutPage.visionText}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Golden Rules of the Academy with Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border-2 border-sky-700/50 overflow-hidden ring-4 ring-sky-500/10">
          <IslamicGirihPattern opacity={0.14} color="#38bdf8" />
          <CornerArabesque position="top-right" size={64} className="text-amber-400/40" />
          <CornerArabesque position="bottom-left" size={64} className="text-sky-400/40" />

          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Qat'iy Intizom Tamoyillari</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {t.aboutPage.rulesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1600px] w-full mx-auto relative z-10">
            {t.aboutPage.rules.map((rule, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-amber-400/50 transition-all shadow-2xs hover:shadow-md"
              >
                <span className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 font-bold flex items-center justify-center text-xs shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-100 leading-relaxed">
                  {rule}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Campus & Location showcase */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <LocationSection />
      </section>

    </div>
  );
};
