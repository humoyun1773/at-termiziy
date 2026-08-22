import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { teachersData, testimonialsData, faqData } from '../data/mockData';
import { BannerCombinationsBoard } from '../components/common/BannerCombinationsBoard';
import { IslamicGirihPattern, CornerArabesque } from '../components/common/OrientalPatterns';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  UserCheck, 
  Building2, 
  Send,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-16 md:space-y-20 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-4 md:pt-10 md:pb-8 bg-mesh-subtle overflow-hidden">
        {/* Subtle Islamic Girih Geometric Watermark */}
        <IslamicGirihPattern opacity={0.035} className="text-sky-950" />
        
        {/* Animated Background Glowing Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-sky-400/15 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-blob [animation-delay:4s]" />
        
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Floating Language Badges (Desktop decoration) */}
          <div className="hidden xl:block pointer-events-none">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-2"
            >
              <span className="text-lg">🇬🇧</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">IELTS 7.5+</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-8 top-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-2"
            >
              <span className="text-lg">🇩🇪</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Goethe B2</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-10 bottom-24 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-2"
            >
              <span className="text-lg">🇨🇳</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">HSK 5</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-12 bottom-28 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex items-center gap-2"
            >
              <span className="text-lg">🇰🇷</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">TOPIK 5</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto space-y-5 mb-8 md:mb-12"
          >
            {/* Top Motto pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-extrabold tracking-wide uppercase shadow-2xs border border-amber-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
              <span>{t.brand.motto}</span>
            </motion.div>
            
            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-slate-900 dark:text-white tracking-tight font-heading max-w-4xl mx-auto py-3"
              style={{ lineHeight: 1.55 }}
            >
              <span className="block mb-2 md:mb-3">{t.hero.titleStart}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-sky-500 animate-gradient-x inline">
                {t.hero.titleHighlight}
              </span>{' '}
              <span>{t.hero.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 font-normal max-w-2xl mx-auto pt-2"
              style={{ lineHeight: 1.7 }}
            >
              {t.hero.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-600/25 hover:scale-105 active:scale-95 transition-all cursor-pointer animate-glow"
              >
                <a 
                  href={TELEGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>{t.hero.freeConsultation}</span>
                  <Send className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* 2. THE CENTRAL 4-COMBINATIONS BOARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-2 max-w-[1600px] w-full mx-auto"
          >
            <BannerCombinationsBoard />
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-[1600px] w-full mx-auto">
            {[
              { num: "28 OY", label: t.hero.statMonths, icon: Clock, color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10 dark:bg-sky-500/15 border-sky-500/20" },
              { num: "4 TA", label: t.hero.statLanguages, icon: GraduationCap, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/20" },
              { num: "100%", label: t.hero.statJobGuarantee, icon: Briefcase, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/20" },
              { num: "500+", label: t.hero.statStudents, icon: Users, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/20" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm h-full transition-all duration-200 hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-500">
                  <CardContent className="p-4 sm:p-5 flex items-center gap-3.5">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-xs`}>
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-heading block leading-none mb-1">
                        {stat.num}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold leading-tight block">
                        {stat.label}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* 3. TA'LIM METODIKASI & TAMOYILLAR */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="relative bg-gradient-to-r from-sky-50/80 via-white to-amber-50/60 rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm overflow-hidden">
          <IslamicGirihPattern opacity={0.04} className="text-sky-900" />
          <CornerArabesque position="top-right" className="text-amber-500/20" />
          <CornerArabesque position="bottom-left" className="text-sky-500/20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-3">
              <Badge variant="secondary" className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200">
                {t.mottoSection.tag}
              </Badge>
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                {t.mottoSection.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.mottoSection.description}
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" asChild className="rounded-xl font-bold border-sky-200 hover:bg-sky-50 text-sky-900">
                  <Link to="/about" className="flex items-center gap-1.5">
                    <span>Markaz Nizomi & Qoidalari</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {t.mottoSection.points.map((pt, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-white/95 backdrop-blur-xs p-4 rounded-2xl border border-sky-100 flex items-start gap-3.5 shadow-2xs hover:border-sky-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs shadow-2xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 font-heading">
                      {pt.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. CAMPUS & ENVIRONMENT IN QARSHI */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
          <IslamicGirihPattern opacity={0.03} className="text-sky-950" />
          <CornerArabesque position="top-right" className="text-sky-500/20" />
          <CornerArabesque position="bottom-left" className="text-amber-500/20" />

          <div className="lg:col-span-6 space-y-4 relative z-10">
            <Badge variant="secondary" className="px-3 py-1 gap-1.5 bg-sky-50 text-sky-800 border border-sky-200">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              Qarshi Shahar Bosh Binomiz
            </Badge>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading leading-snug md:leading-normal">
              Zamonaviy Sharoitlar va Haqiqiy Ko'p Tilli Muhit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Markazimiz Qarshi shahrining eng qulay joyida joylashgan bo'lib, har bir xona interaktiv texnologiyalar va speaking zonalar bilan jihozlangan.
            </p>

            <div className="space-y-2 pt-1">
              {[
                "Interaktiv aqlli doskalar va multimedia xonalari",
                "Maxsus Language Lab va xalqaro speaking klublar",
                "Katta kutubxona: 7 tildagi nodir adabiyotlar va qo'llanmalar",
                "Individual mentorlik va kunlik monitoring xonasi"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild className="rounded-xl font-bold text-xs hover:scale-105 active:scale-95 transition-transform bg-sky-600 hover:bg-sky-700 text-white">
                <a href="tel:+998919517335" className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Markazga Tashrif: +998 91 951 73 35</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-sky-950 via-slate-900 to-sky-900 text-white shadow-md space-y-4 border border-sky-800 overflow-hidden">
              <IslamicGirihPattern opacity={0.08} className="text-white" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-200">Qarshi Filiali</span>
                </div>
                <Badge variant="success" className="text-[10px]">Ochiq</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Al-Hakim At-Termiziy O'quv Markazi
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manzil: Qashqadaryo viloyati, Qarshi shahri, Mustaqillik shoh ko'chasi. Dushanba - Shanba kunlari soat 08:00 dan 20:00 gacha xizmatingizdamiz.
              </p>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">Qabul bo'limi:</span>
                <span className="font-mono font-bold text-white">+998 91 951 73 35</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* 7. EXPERT TEACHERS & POLYGLOTS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="secondary" className="px-3 py-1">
            Bizning Ustozlarimiz
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Xalqaro Sertifikatlarga Ega Mentorlar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Darslarni o'z sohasining eng yuqori darajadagi mutaxassislari olib boradilar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teachersData.map((teacher, idx) => {
            const role = teacher.role[language] || teacher.role.uz;
            const exp = teacher.experience[language] || teacher.experience.uz;
            const bio = teacher.bio[language] || teacher.bio.uz;

            return (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="rounded-2xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-2xs hover:border-sky-300 dark:hover:border-sky-700 transition-all text-center h-full">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 flex items-center justify-center mb-3">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                      {teacher.name}
                    </h3>
                    <span className="text-[11px] text-sky-700 dark:text-sky-400 font-medium block mt-0.5">
                      {role}
                    </span>
                    <div className="flex items-center justify-center gap-1.5 my-2">
                      <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                        {teacher.certificate}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                        {exp}
                      </Badge>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>


      {/* 8. TESTIMONIALS */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="success" className="px-3 py-1">
            Muvaffaqiyat Tarixlari
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            28 Oylik Kurs Bitiruvchilarining Natijalari
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonialsData.map((item, idx) => {
            const role = item.currentRole[language] || item.currentRole.uz;
            const quote = item.quote[language] || item.quote.uz;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="rounded-2xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-2xs flex flex-col justify-between h-full">
                  <CardContent className="p-5 sm:p-6">
                    <div>
                      <div className="flex items-center gap-1 text-amber-400 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed mb-5">
                        "{quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 font-bold flex items-center justify-center text-[11px]">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</h4>
                        <span className="text-[10px] text-sky-600 dark:text-sky-400 font-medium block">{role}</span>
                        <span className="text-[10px] text-slate-400 block">{item.company}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>


      {/* 9. FAQ ACCORDION WITH SHADCN */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 relative"
      >
        {/* Background glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none animate-blob" />

        <div className="text-center mb-8 space-y-2 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-200 dark:border-sky-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping" />
            <span>Savollar & Javoblar</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
            Ko'p Beriladigan Savollar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Markazimiz, 28 oylik dastur va o'qish tartibi haqidagi eng asosiy savollarga javoblar.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3 relative z-10">
          {faqData.map((faq, idx) => {
            const question = faq.question[language] || faq.question.uz;
            const answer = faq.answer[language] || faq.answer.uz;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <AccordionItem value={faq.id}>
                  <AccordionTrigger>
                    <span>{question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </motion.section>


      {/* 10. BOTTOM REGISTRATION CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="bg-sky-900 text-white rounded-3xl p-6 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-lg border border-sky-800">
          <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white">
            Kelajagingizni 4 Ta Til Bilan Boshlang!
          </h2>
          <p className="text-xs sm:text-sm text-sky-200 max-w-lg mx-auto leading-relaxed">
            Qarshi shahridagi eng intizomli va natijador o'quv markazimizda bepul konsultatsiyaga yoziling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-sky-900 font-bold text-xs sm:text-sm hover:bg-sky-50 hover:scale-105 active:scale-95 transition-transform"
            >
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Telegram orqali Ariza Qoldirish</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-800 text-white font-bold text-xs sm:text-sm border-sky-700 hover:bg-sky-700 hover:text-white hover:scale-105 active:scale-95 transition-transform"
            >
              <a href="tel:+998919517335" className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>+998 91 951 73 35</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
