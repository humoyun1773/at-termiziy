import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig, TELEGRAM_URL } from '../../data/siteConfig';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Car, 
  Bus, 
  ExternalLink,
  Send
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

interface Props {
  className?: string;
}

export const LocationSection: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      
      {/* Top Header Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <Badge variant="secondary" className="px-3.5 py-1 gap-1.5 mb-1 font-bold text-sky-700 dark:text-sky-400">
          <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
          <span>Bizning Manzilimiz</span>
        </Badge>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
          Qarshi Shahridagi Markazimizga Tashrif Buyuring
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Kelajakning 4 ta tilini o'rganish uchun eng qulay sharoit va shinam o'quv muhiti
        </p>
      </div>

      {/* Main Grid: Info Cards + Map Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Col (5 cols): Address & Navigator Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-4"
        >
          <Card className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md space-y-6 h-full flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Primary Address Box */}
              <div className="p-4 rounded-2xl bg-sky-50/80 dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/30 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-sky-600 dark:text-sky-400 uppercase font-extrabold tracking-wider block mb-0.5">
                    Asosiy Manzil
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                    {siteConfig.address}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    <strong className="text-slate-700 dark:text-slate-300">Mo'ljal:</strong> {siteConfig.landmark}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1 text-xs">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block mb-0.5">
                    Ish Vaqti
                  </span>
                  <p className="font-bold text-slate-800 dark:text-slate-200">
                    {siteConfig.workingHours}
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    {siteConfig.sundayHours}
                  </p>
                </div>
              </div>

              {/* Transport Amenities */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 mb-1">
                    <Bus className="w-4 h-4" />
                    <span className="text-xs font-bold">Transport</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    Barcha shahar avtobuslari bekatiga yaqin
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                    <Car className="w-4 h-4" />
                    <span className="text-xs font-bold">Parkovka</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    Tashrif buyuruvchilar uchun bepul parkovka
                  </p>
                </div>
              </div>
            </div>

            {/* Direction Buttons for Yandex / Google / 2GIS */}
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Navigator orqali marshrut ochish:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300"
                >
                  <a href={siteConfig.maps.yandex} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Yandex</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300"
                >
                  <a href={siteConfig.maps.google} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>Google</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full text-[11px] font-bold py-2 h-auto rounded-xl hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-slate-800 hover:border-sky-300"
                >
                  <a href={siteConfig.maps.twogis} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                    <span>2GIS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>

              {/* Direct Call & Telegram Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  <a href="tel:+998919517335" className="flex items-center justify-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Qo'ng'iroq qilish</span>
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-sm"
                >
                  <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Lokatsiya</span>
                  </a>
                </Button>
              </div>
            </div>

          </Card>
        </motion.div>

        {/* Right Col (7 cols): Interactive Map Iframe */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <Card className="rounded-3xl overflow-hidden border-slate-200 dark:border-slate-800 shadow-md h-full min-h-[420px] sm:min-h-[480px] relative group">
            
            {/* Interactive OpenStreetMap Embed for Qarshi */}
            <iframe
              title="Al-Hakim At-Termiziy O'quv Markazi Joylashuvi"
              src="https://www.openstreetmap.org/export/embed.html?bbox=65.7750%2C38.8520%2C65.8030%2C38.8690&amp;layer=mapnik&amp;marker=38.86056%2C65.78905"
              className="w-full h-full min-h-[420px] sm:min-h-[480px] border-0"
              loading="lazy"
            />

            {/* Map Overlay Badge Card */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg pointer-events-none sm:pointer-events-auto">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  AT
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate font-heading">
                    {siteConfig.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {siteConfig.shortAddress}
                  </p>
                </div>
                <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold shrink-0">
                  Ochiq
                </Badge>
              </div>
            </div>

            {/* Fullscreen Map Link Action */}
            <div className="absolute bottom-4 right-4">
              <Button
                asChild
                size="sm"
                className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-md hover:bg-sky-50 dark:hover:bg-slate-800 text-xs font-bold rounded-xl gap-1.5"
              >
                <a 
                  href={siteConfig.maps.google} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Kattalashtirib ochish</span>
                </a>
              </Button>
            </div>

          </Card>
        </motion.div>

      </div>

    </div>
  );
};
