import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  GraduationCap, 
  Compass, 
  Target
} from 'lucide-react';
import { LocationSection } from '../components/common/LocationSection';

export const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
          <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
          {t.aboutPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mb-4">
          {t.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.aboutPage.intro}
        </p>
      </motion.section>

      {/* Philosophy Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-sky-800 via-sky-700 to-blue-900 rounded-3xl p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Animated decorative glow orb */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl animate-blob pointer-events-none" />
          <div className="absolute left-1/3 -top-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob [animation-delay:3s] pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider inline-flex items-center gap-2">
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

      {/* Mission & Vision */}
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
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-700 transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-2xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              {t.aboutPage.missionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.aboutPage.missionText}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-2xs">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
              {t.aboutPage.visionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.aboutPage.visionText}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Golden Rules of the Academy */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 md:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Qat'iy Qoidalar
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {t.aboutPage.rulesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1600px] w-full mx-auto">
            {t.aboutPage.rules.map((rule, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
                className="bg-slate-800/80 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-700/80 dark:border-slate-800 flex items-start gap-3.5 hover:border-sky-500/50 transition-all shadow-2xs hover:shadow-md"
              >
                <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 font-bold flex items-center justify-center text-xs shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-200 leading-relaxed">
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
