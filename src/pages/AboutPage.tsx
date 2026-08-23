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
      
      {/* Header with Teachers & Students Background */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative py-12 rounded-3xl overflow-hidden border border-sky-100 shadow-sm"
      >
        {/* Real Teacher Instructing Students Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920" 
            alt="Ustoz va o'quvchilar darsi" 
            className="w-full h-full object-cover object-center opacity-15 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-sky-50/70 to-white/95" />
        </div>

        <span className="px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-2xs relative z-10">
          <Sparkles className="w-3.5 h-3.5 text-sky-600 fill-sky-400" />
          {t.aboutPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-4 relative z-10">
          {t.aboutPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto relative z-10">
          {t.aboutPage.intro}
        </p>
      </motion.section>

      {/* Philosophy Banner with Modern Photo Atmosphere */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-950 rounded-3xl p-8 md:p-14 text-white shadow-2xl relative overflow-hidden border border-sky-700/40 ring-4 ring-sky-500/10">
          {/* Background Language Students collaborating */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920" 
              alt="Talabalar akademiyasi" 
              className="w-full h-full object-cover"
            />
          </div>

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
            className="relative bg-white rounded-3xl p-0 border border-sky-100 shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Bizning Missiya" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-sky-600 flex items-center justify-center shadow-md">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {t.aboutPage.missionTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.aboutPage.missionText}
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl p-0 border border-emerald-100 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&q=80&w=800" 
                alt="Bizning Kelajak" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-emerald-600 flex items-center justify-center shadow-md">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {t.aboutPage.visionTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold uppercase tracking-wider inline-block">
            Akademiya Hayoti
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Zamonaviy Auditoriyalar va Amaliy Muhit
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-3xl overflow-hidden shadow-md group h-72 relative">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Interaktiv darslar" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">Poliglotlar Debat Klubi</h4>
              <p className="text-xs text-sky-200 mt-1">Har hafta xorijiy tillarda erkin muloqot mashg'ulotlari</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md group h-72 relative">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
              alt="Kutubxona va kovorking" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
              <h4 className="font-bold text-base">Media Kutubxona</h4>
              <p className="text-xs text-sky-200 mt-1">Minglab xalqaro darsliklar va audio-video resurslar bazasi</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md group h-72 relative">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800" 
              alt="Sertifikat topshirish" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
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
        <div className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl border border-sky-800 overflow-hidden">
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
