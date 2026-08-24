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

export const AboutPage: React.FC = () => {
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
        <span className="px-4 py-1.5 rounded-full bg-sky-500 text-white border border-sky-400/40 text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 mb-4 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          {t.aboutPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading mb-4 tracking-tight drop-shadow-lg">
          {t.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-sky-100 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md mb-6">
          {t.aboutPage.intro}
        </p>

        {/* Shior Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-amber-400 text-slate-950 text-xs sm:text-sm font-black shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-pulse" />
          <span>{t.brand.motto}</span>
        </div>
      </motion.section>

      {/* Mission & Vision Cards with Real Photo Accents */}
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
            className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-0 border border-white/15 shadow-2xl hover:border-sky-400 transition-all overflow-hidden flex flex-col text-white"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Bizning Missiya" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {t.aboutPage.missionTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm text-sky-100 leading-relaxed font-medium">
                {t.aboutPage.missionText}
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-0 border border-white/15 shadow-2xl hover:border-emerald-400 transition-all overflow-hidden flex flex-col text-white"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=800" 
                alt="Bizning Kelajak" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {t.aboutPage.visionTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm text-sky-100 leading-relaxed font-medium">
                {t.aboutPage.visionText}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Academy Life Photo Showcase */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-black uppercase tracking-wider inline-block shadow-md">
            Akademiya Hayoti
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight drop-shadow-md">
            Zamonaviy Auditoriyalar va Amaliy Muhit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-3xl overflow-hidden shadow-xl group h-72 relative border border-white/15">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Interaktiv darslar" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">Poliglotlar Debat Klubi</h4>
              <p className="text-xs text-sky-200 mt-1">Har hafta xorijiy tillarda erkin muloqot mashg'ulotlari</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl group h-72 relative border border-white/15">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
              alt="Kutubxona va kovorking" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">Media Kutubxona</h4>
              <p className="text-xs text-sky-200 mt-1">Minglab xalqaro darsliklar va audio-video resurslar bazasi</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl group h-72 relative border border-white/15">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
              alt="Sertifikat topshirish" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">Xalqaro Sertifikatsiya</h4>
              <p className="text-xs text-sky-200 mt-1">IELTS, Goethe, HSK va TOPIK imtihonlariga rasmiy tayyorgarlik</p>
            </div>
          </div>
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
        <div className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-white/15 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
              <ShieldCheck className="w-4 h-4 fill-current" />
              <span>Qat'iy Intizom Tamoyillari</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
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
                className="bg-slate-900/70 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-sky-400 transition-all shadow-md"
              >
                <span className="w-8 h-8 rounded-xl bg-sky-500 text-white font-black flex items-center justify-center text-xs shrink-0 shadow-md">
                  {idx + 1}
                </span>
                <span className="text-xs md:text-sm font-medium text-sky-100 leading-relaxed">
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
