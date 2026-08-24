import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { 
  Globe,
  Send,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
export const CareerPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Clean Page Hero Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 md:pt-10"
      >
        <span className="px-4 py-1.5 rounded-full bg-emerald-500 text-white border border-emerald-400/40 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 mb-4 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          {t.jobGuarantee.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading mb-4 tracking-tight drop-shadow-lg">
          {t.jobGuarantee.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-emerald-100 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
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
            className="relative bg-emerald-950/80 backdrop-blur-md rounded-3xl p-8 text-white shadow-2xl overflow-hidden border border-emerald-500/40"
          >
            <div className="relative z-10">
              <span className="text-xs font-black text-emerald-300 uppercase tracking-wider block mb-1">
                Boshlang'ich Maosh Prognozi
              </span>
              <div className="text-2xl sm:text-3xl font-black font-heading mb-2 text-white">
                {t.careerPage.salaryRange}
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                4 ta xorijiy tilni puxta biladigan mutaxassislarga to'lanadigan o'rtacha oylik daromad.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-2xl hover:border-sky-400 transition-all overflow-hidden text-white"
          >
            <div className="relative z-10">
              <span className="text-xs font-black text-sky-400 uppercase tracking-wider block mb-1">
                Hamkor Tashkilotlar
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading mb-2">
                30+ Kompaniya
              </div>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-medium">
                O'zbekiston, Germaniya, Xitoy, Koreya va Yaqin Sharqdagi rasmiy shartnomaga ega hamkorlarimiz.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-2xl hover:border-blue-400 transition-all overflow-hidden text-white"
          >
            <div className="relative z-10">
              <span className="text-xs font-black text-amber-400 uppercase tracking-wider block mb-1">
                Ishga Joylashish Kafolati
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-heading mb-2">
                100% Shartnoma
              </div>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-medium">
                28 oylik dasturni to'liq muvaffaqiyat bilan yakunlagan barcha talabalarga rasmiy kafolat beriladi.
              </p>
            </div>
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
        <div className="bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/15 shadow-2xl text-white">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-black uppercase tracking-wider inline-block shadow-md">
              Bosqichma-bosqich Jarayon
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              {t.careerPage.stepsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.careerPage.steps.map((st, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-slate-900/70 backdrop-blur-md p-6 rounded-3xl border border-white/10 relative flex flex-col justify-between hover:border-sky-400 transition-all shadow-lg"
              >
                <div>
                  <span className="text-3xl font-black text-sky-400 font-heading block mb-3">
                    {st.step}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed font-medium">
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
          <span className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-black uppercase tracking-wider inline-block shadow-md">
            Sohalar
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
            Bitiruvchilarimiz Qayerlarda Ishlashadi?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.jobGuarantee.features.map((feat, idx) => {
            const industryImages = [
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600"
            ];
            const indImg = industryImages[idx % industryImages.length];

            return (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-slate-950/75 backdrop-blur-md p-0 rounded-3xl border border-white/15 shadow-2xl hover:border-sky-400 transition-all overflow-hidden flex flex-col text-white"
              >
                <div className="h-40 w-full overflow-hidden relative">
                  <img 
                    src={indImg} 
                    alt={feat.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                    <div className="w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-heading mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
        <div className="bg-slate-950/80 backdrop-blur-md text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-4 shadow-2xl border border-white/15">
          <h3 className="text-2xl sm:text-4xl font-black font-heading tracking-tight text-white">
            Xalqaro Karyerangizni Bugundan Rejalashtiring
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto leading-relaxed">
            Qarshi shahridagi "Al-Hakim At-Termiziy" o'quv markaziga ariza qoldiring va 4 til bo'yicha orzuingizdagi kasb sari qadam tashlang.
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs md:text-sm shadow-lg shadow-sky-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
