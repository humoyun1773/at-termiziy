import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { 
  ShieldCheck, 
  Globe,
  Send
} from 'lucide-react';
import { Button } from '../components/ui/button';

export const CareerPage: React.FC = () => {
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
        <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          {t.jobGuarantee.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mb-4">
          {t.jobGuarantee.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.jobGuarantee.desc}
        </p>
      </motion.section>

      {/* Salary & Opportunity Metrics */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-lg"
          >
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider block mb-1">
              Boshlang'ich Maosh Prognozi
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading mb-2">
              $800 – $3,500+
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed">
              4 ta xorijiy tilni puxta biladigan mutaxassislarga xalqaro kompaniyalarda to'lanadigan o'rtacha oylik maosh.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
              Hamkor Tashkilotlar
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mb-2">
              30+ Kompaniya
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              O'zbekiston, Germaniya, Xitoy, Koreya va Yaqin Sharqdagi rasmiy shartnomaga ega hamkorlarimiz.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-1">
              Ishga Joylashish Kafolati
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading mb-2">
              100% Shartnoma
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              28 oylik dasturni to'liq muvaffaqiyat bilan yakunlagan barcha talabalarga rasmiy kafolat beriladi.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 4 Steps to Employment */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Bosqichma-bosqich Jarayon
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              {t.careerPage.stepsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.careerPage.steps.map((st, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-sky-600 dark:text-sky-400 font-heading block mb-3">
                    {st.step}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Target Industries */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            Sohalar
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Bitiruvchilarimiz Qayerlarda Ishlashadi?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.jobGuarantee.features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading mb-2">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Box */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-heading">
            Xalqaro Karyerangizni Bugundan Rejalashtiring
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Qarshi shahridagi "Al-Hakim At-Termiziy" o'quv markaziga ariza qoldiring va 4 til bo'yicha orzuingizdagi kasb sari qadam tashlang.
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs md:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Telegram orqali Ariza Topshirish</span>
                <Send className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
