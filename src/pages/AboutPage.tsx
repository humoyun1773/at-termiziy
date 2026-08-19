import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { 
  GraduationCap, 
  Compass, 
  Target, 
  MapPin, 
  Phone, 
  Clock,
  Send
} from 'lucide-react';
import { Button } from '../components/ui/button';

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
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              {t.brand.motto}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
              Nega Aynan Intizom?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-sky-100 leading-relaxed">
              Til o'rganish — bu shunchaki qobiliyat emas, bu har kuni takrorlanadigan qat'iy rejim va intizom natijasidir. Bizda o'qigan har bir o'quvchi o'z vaqtini qadrlashni, kunlik vazifalarni mas'uliyat bilan bajarishni va 4 ta tilda erkin so'zlashish ko'nikmasini shakllantiradi.
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
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center">
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
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
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
        <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 md:p-12 text-white shadow-xl border border-slate-800">
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
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-slate-800/80 dark:bg-slate-900/90 p-5 rounded-2xl border border-slate-700/80 dark:border-slate-800 flex items-start gap-3.5"
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
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider inline-block">
                Qarshi Shahridagi Manzilimiz
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                Kelajakning Ko'p Tilli Mutaxassislari Shu Yerda Tarbiyalanadi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Markazimizga bevosita tashrif buyurib, o'quv xonalari, kutubxona va dars jarayonlari bilan shaxsan tanishishingiz mumkin.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Qarshi shahar, Mustaqillik shoh ko'chasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="font-mono font-bold">+998 91 951 73 35</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <span>Dushanba - Shanba: 08:00 dan 20:00 gacha</span>
                </div>
              </div>

              <div className="pt-3">
                <Button
                  asChild
                  className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
                >
                  <a 
                    href={TELEGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>Telegramda Qabulga Yozilish</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider">
                  28 Oylik Ta'lim Tizimi
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                  ✓ Ish Kafolatlangan
                </span>
              </div>
              <h4 className="text-xl font-bold font-heading text-white">
                4 Ta Tilga Muvofiq Yuqori Intellektual Tafakkur
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-sky-300 block text-[10px] uppercase font-bold">Davomiyligi</span>
                  <span className="font-extrabold text-sm text-white">28 Oy</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-sky-300 block text-[10px] uppercase font-bold">Har Bir Til</span>
                  <span className="font-extrabold text-sm text-white">7 Oydan</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-sky-200">Manzil:</span>
                <span className="font-bold text-white">Qarshi Shahar</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
