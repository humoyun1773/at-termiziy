import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { LocationSection } from '../components/common/LocationSection';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Navigation, 
  Car, 
  Bus, 
  Compass,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { IslamicGirihPattern, CornerArabesque, ArabesqueDivider, TermiziyEmblem } from '../components/common/OrientalPatterns';

export const LocationPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-20 space-y-16 overflow-hidden">
      
      {/* Header Banner with Termiziy Emblem & Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative"
      >
        <IslamicGirihPattern opacity={0.035} className="text-sky-950" />
        <div className="flex justify-center mb-3">
          <TermiziyEmblem size={60} className="drop-shadow-sm hover:scale-105 transition-transform" />
        </div>
        <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.contactPage.title}</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading mb-4">
          {t.nav.location}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {t.hero.subheading}
        </p>
        <ArabesqueDivider />
      </motion.section>

      {/* Quick Location Snapshot Cards with Naqshlar */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <Card className="relative p-6 rounded-3xl bg-white border-sky-100 shadow-sm flex flex-col justify-between overflow-hidden">
            <CornerArabesque position="top-right" className="text-sky-400/20" />
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Manzil</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Qarshi Shahar
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                Mustaqillik shoh ko'chasi
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mo'ljal</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Mustaqillik Maydoni
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                Markaziy xiyobon ro'parasida
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ish Vaqti</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                08:00 — 20:00
              </h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                Dushanba - Shanba
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telefon</span>
            </div>
            <div>
              <a href="tel:+998919517335" className="font-mono font-bold text-slate-900 dark:text-white text-sm hover:text-sky-600 transition-colors block">
                +998 91 951 73 35
              </a>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Qabul va ma'lumot
              </p>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Main Interactive Map & Navigators */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <LocationSection />
      </section>

      {/* Campus Guidelines / How to reach */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Yo'nalish Bo'yicha Maslahatlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
              Markazimizga Qanday Yetib Kelish Mumkin?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Jamoat Transporti
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Qarshi shahrining barcha asosiy avtobus va marshrutkalari markaziy shoh ko'cha orqali o'tadi. Mustaqillik maydoni bekatida tushish eng qulay.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Shaxsiy Avtomobilda
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Yandex yoki Google Xaritalar orqali "Al-Hakim At-Termiziy" manzilini kiriting. Bino oldida keng va bepul avtoturargoh mavjud.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Taksi va Mo'ljal
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Haydovchiga: "Mustaqillik shoh ko'chasi, At-Termiziy o'quv markazi" deb aytishingiz kifoya qiladi.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Box */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-heading">
            Sizni Markazimizda Kutib Qolamiz!
          </h3>
          <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto">
            Keling, o'quv xonalari va ustozlarimiz bilan shaxsan tanishing yoki onlayn ariza qoldiring.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
                <span>Telegram orqali Bog'lanish</span>
                <Send className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3.5 rounded-xl bg-sky-800 text-white hover:bg-sky-900 border-sky-500 font-bold text-xs md:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <a href="tel:+998919517335" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+998 91 951 73 35</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
