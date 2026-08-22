import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  IslamicGirihPattern, 
  ArabesqueDivider, 
  TermiziyEmblem, 
  CornerArabesque 
} from './OrientalPatterns';
import { 
  Scroll, 
  Award, 
  BookOpen, 
  Sparkles, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';
import { Card } from '../ui/card';

export const AlHakimTermiziySection: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'ru' 
    ? 'Великое Наследие: Аль-Хаким Ат-Термизий' 
    : language === 'en' 
    ? 'Historical Heritage: Al-Hakim At-Termiziy' 
    : "Tarixiy Meros: Buyuk Alloma Al-Hakim At-Termiziy";

  const subtitle = language === 'ru'
    ? 'Основатель восточной духовной мысли, железной дисциплины и межкультурного просвещения IX века'
    : language === 'en'
    ? '9th-century polymath, pioneer of spiritual discipline and cross-cultural mastery'
    : "IX asr buyuk allomasi, Sharq falsafasi, qat'iy intizom va jahon ma'rifati asoschisi";

  const heritageCards = [
    {
      icon: Scroll,
      title: language === 'ru' ? 'Железная Дисциплина' : language === 'en' ? 'Unwavering Discipline' : "Qat'iy Intizom va Odob",
      desc: language === 'ru' 
        ? 'Методология обучения построена на вековых традициях самоконтроля, ежедневного усердия и точности.'
        : language === 'en'
        ? 'Educational methodology rooted in century-tested self-discipline, daily diligence, and high standards.'
        : "Allomaning 'Odob al-Muridiyn' ta'limoti asosida qurilgan qat'iy kun tartibi va muntazam mashg'ulotlar tizimi.",
      tag: "Intizom & Axloq"
    },
    {
      icon: Globe2,
      title: language === 'ru' ? 'Перекресток Цивилизаций' : language === 'en' ? 'Crossroads of Civilizations' : "Ipak Yo'li va Ko'p Tillilik",
      desc: language === 'ru'
        ? 'Древний Термез являлся центром Великого шелкового пути, где полиглоты владели восточными и западными языками.'
        : language === 'en'
        ? 'Ancient Termez was the bustling Silk Road gateway where polyglots mastered diverse Eastern and Western tongues.'
        : "Qadimiy Termiz sivilizatsiyalar chorrahasi bo'lib, allomalar jahon tillarida erkin muloqot qilgan va asarlar yozgan.",
      tag: "Ko'p Tilli Meros"
    },
    {
      icon: BookOpen,
      title: language === 'ru' ? 'Глубокие Академические Знания' : language === 'en' ? 'Profound Academic Wisdom' : "Chuqur Akademik Ilm",
      desc: language === 'ru'
        ? 'Сотни фундаментальных научных трудов, изучаемых в ведущих мировых университетах от Оксфорда до Каира.'
        : language === 'en'
        ? 'Hundreds of fundamental manuscripts studied across renowned world institutions from Oxford to Al-Azhar.'
        : "Dunyoning nufuzli oliygohlarida o'rganiladigan 400 dan ortiq fundamental ilmiy va falsafiy asarlar muallifi.",
      tag: "Ilmiy Salohiyat"
    },
    {
      icon: Award,
      title: language === 'ru' ? 'Мировое Признание' : language === 'en' ? 'Global Impact' : "Jahon Miqyosidagi Nufuz",
      desc: language === 'ru'
        ? '28-месячная программа продолжает великие традиции, выводя выпускников на мировой уровень.'
        : language === 'en'
        ? 'Our 28-month program upholds this profound heritage, preparing students for international leadership.'
        : "28 oylik tizim orqali talabalarimiz qadimiy Termiz allomalari kabi global miqyosda 4 tilda fikrlaydigan kadr bo'ladi.",
      tag: "Kafolatlangan Kelajak"
    }
  ];

  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-sky-50/60 via-white to-amber-50/40 rounded-3xl overflow-hidden border border-sky-100 shadow-sm">
      {/* Islamic Girih Geometric Background Watermark */}
      <IslamicGirihPattern opacity={0.06} className="text-sky-900" />

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Termiziy Emblem & Arabesque */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex justify-center mb-3">
            <TermiziyEmblem size={64} className="drop-shadow-md hover:scale-105 transition-transform" />
          </div>

          <span className="px-4 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80 text-xs font-extrabold uppercase tracking-widest inline-flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Tarixiy Ildizlar & Ma'naviy Meros</span>
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-3 mb-3">
            {title}
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <ArabesqueDivider />
        </motion.div>

        {/* 4 Pillars Grid with Oriental Corners and Arch Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {heritageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="relative p-6 sm:p-7 rounded-3xl bg-white/90 backdrop-blur-xs border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between group overflow-hidden">
                  <CornerArabesque position="top-right" className="text-sky-400/20 group-hover:text-amber-500/30 transition-colors" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200 uppercase tracking-wider">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-sky-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Intizomli ta'lim tamoyili</span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Historical Quote Box with Ancient Motif */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white shadow-xl relative overflow-hidden text-center"
        >
          <IslamicGirihPattern opacity={0.08} className="text-white" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
              Allomaning O'giti
            </span>
            <blockquote className="text-sm sm:text-lg font-medium italic text-sky-100 leading-relaxed font-heading">
              "Ilm — qalbning chirog'i, intizom esa maqsadga eltuvchi mustahkam yo'ldir. Kimki o'z nafsini tartibga solsa, barcha ilmlar unga osonlashur."
            </blockquote>
            <p className="text-xs text-amber-300 font-bold tracking-wider uppercase pt-1">
              — Abu Abdulloh Al-Hakim At-Termiziy (820–932)
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
