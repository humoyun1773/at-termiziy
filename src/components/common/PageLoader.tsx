import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PageLoaderProps {
  fullScreen?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ fullScreen = false }) => {
  const { language } = useLanguage();

  const loadingText = {
    uz: 'Sahifa yuklanmoqda...',
    ru: 'Страница загружается...',
    en: 'Loading page...'
  }[language] || 'Sahifa yuklanmoqda...';

  const subText = {
    uz: 'Al-Hakim At-Termiziy Ilmiy Metodikasi',
    ru: 'Научная Методика Аль-Хаким Ат-Термизий',
    en: 'Al-Hakim At-Termiziy Academic System'
  }[language] || 'Al-Hakim At-Termiziy Ilmiy Metodikasi';

  return (
    <div 
      className={`flex flex-col items-center justify-center ${
        fullScreen 
          ? 'fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md' 
          : 'min-h-[60vh] w-full py-20'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center p-8 rounded-3xl bg-slate-900/85 backdrop-blur-xl border border-white/20 shadow-2xl text-center max-w-sm mx-4"
      >
        {/* Animated Brand Emblem with Pulsing Orbit Rings */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer glowing pulsing aura */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-500/40 via-blue-600/30 to-amber-400/40 blur-lg"
          />

          {/* Rotating Spinner Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-20 h-20 rounded-full border-2 border-transparent border-t-sky-400 border-r-amber-400"
          />

          {/* Central Logo Box */}
          <div className="absolute inset-2.5 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
            <GraduationCap className="w-8 h-8 drop-shadow" />
          </div>

          {/* Floating mini sparkle */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1 -right-1"
          >
            <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300 drop-shadow" />
          </motion.div>
        </div>

        {/* Brand Title */}
        <h3 className="text-base font-black text-white font-heading tracking-tight mb-1">
          AL-HAKIM AT-TERMIZIY
        </h3>
        <p className="text-[11px] text-sky-200/80 font-medium mb-5">
          {subText}
        </p>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden relative mb-3">
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1/2 h-full bg-gradient-to-r from-sky-400 via-blue-400 to-amber-300 rounded-full"
          />
        </div>

        {/* Loading Text */}
        <span className="text-xs font-bold text-sky-300 animate-pulse tracking-wide">
          {loadingText}
        </span>
      </motion.div>
    </div>
  );
};
