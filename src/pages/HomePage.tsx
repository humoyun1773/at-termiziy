import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { faqData } from '../data/mockData';
import { BannerCombinationsBoard } from '../components/common/BannerCombinationsBoard';
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
  Building2, 
  Send,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-16 md:space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION WITH VIBRANT TEACHERS & STUDENTS BACKGROUND */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-sky-100/80">
        {/* Real Teachers & Students Classroom Background Image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=100&w=2560" 
            alt="O'qituvchilar va talabalar" 
            className="w-full h-full object-cover object-center scale-100"
          />
          {/* High-Contrast Gradient Scrim for 100% Clear Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        {/* Animated Background Glowing Orbs */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none animate-blob" />
        <div className="absolute top-32 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none animate-blob [animation-delay:3s]" />
        
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Floating Language Badges (Desktop decoration) */}
          <div className="hidden xl:block pointer-events-none">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-16 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2"
            >
              <span className="text-lg">🇬🇧</span>
              <span className="text-xs font-bold text-slate-800">IELTS 7.5+</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-8 top-12 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2"
            >
              <span className="text-lg">🇩🇪</span>
              <span className="text-xs font-bold text-slate-800">Goethe B2</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-10 bottom-24 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2"
            >
              <span className="text-lg">🇨🇳</span>
              <span className="text-xs font-bold text-slate-800">HSK 5</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-12 bottom-28 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2"
            >
              <span className="text-lg">🇰🇷</span>
              <span className="text-xs font-bold text-slate-800">TOPIK 5</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto space-y-4 mb-8 md:mb-12"
          >
            {/* Top Motto pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs font-extrabold tracking-wide uppercase shadow-lg border border-sky-400/40 backdrop-blur-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>{t.brand.motto}</span>
            </motion.div>
            
            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-white tracking-tight font-heading max-w-4xl mx-auto py-2 drop-shadow-lg"
              style={{ lineHeight: 1.55 }}
            >
              <span className="block mb-2 md:mb-3">{t.hero.titleStart}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 animate-gradient-x inline">
                {t.hero.titleHighlight}
              </span>{' '}
              <span>{t.hero.titleEnd}</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-sm sm:text-base md:text-lg text-sky-100 font-medium max-w-2xl mx-auto pt-2 drop-shadow-md"
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
        <div className="relative rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm overflow-hidden">
          {/* Subtle Classroom Background (100% Pure Raw Photo) */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=100&w=2560" 
              alt="Dars jarayoni" 
              className="w-full h-full object-cover"
            />
          </div>

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
        <div className="relative rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
          {/* Campus Background Image (100% Pure Raw Photo) */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=100&w=2560" 
              alt="Akademiya binosi" 
              className="w-full h-full object-cover"
            />
          </div>

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


      {/* 7. PHOTO GALLERY: REAL CAMPUS & STUDENT LIFE */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="secondary" className="px-3.5 py-1 bg-sky-100 text-sky-900 border border-sky-200">
            Jonli Jarayonlar
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            Akademiyamizdagi Dars va Talabalar Hayoti
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Haqiqiy xalqaro muhit, qizg'in bahslar, speaking clublar va zamonaviy ta'lim jihozlari.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
              title: "Interaktiv Guruh Darslari",
              desc: "4 ta tilni parallel o'rganish amaliyoti"
            },
            {
              img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
              title: "Xalqaro Mentorlar Seminari",
              desc: "Native speakerlar va C1-C2 darajali ustozlar"
            },
            {
              img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
              title: "Kovorking & Speaking Club",
              desc: "Jonli muloqot va keyslar tahlili"
            },
            {
              img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
              title: "Bitiruv & Xalqaro Sertifikatlar",
              desc: "IELTS, Goethe, TOPIK, HSK imtihon natijalari"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-3xl overflow-hidden shadow-lg group h-64 border border-sky-100"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="font-bold text-base font-heading text-white">{item.title}</h3>
                <p className="text-xs text-sky-200 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 9. FAQ ACCORDION WITH SHADCN (ENLARGED & EXPANDED) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 relative"
      >
        {/* Background glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/15 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none animate-blob" />

        <div className="text-center mb-12 space-y-3 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-sky-200 dark:border-sky-800 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <span>Savollar & Javoblar</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-heading tracking-tight">
            Ko'p Beriladigan Savollar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Markazimiz, 28 oylik dastur va o'qish tartibi haqidagi eng asosiy savollarga batafsil javoblar.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-4 relative z-10">
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
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
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


      {/* 10. BOTTOM REGISTRATION CTA (ENLARGED & EXPANDED) */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full mx-auto px-4 sm:px-6"
      >
        <div className="bg-gradient-to-r from-sky-950 via-sky-900 to-blue-950 text-white rounded-3xl p-8 sm:p-14 md:p-16 text-center mx-auto space-y-6 shadow-2xl border border-sky-800 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <span className="px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider inline-block shadow-md">
              Kafolatlangan Ta'lim
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight">
              Kelajagingizni 4 Ta Til Bilan Boshlang!
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
              Qarshi shahridagi eng intizomli va natijador o'quv markazimizda bepul konsultatsiyaga yoziling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-sky-950 hover:bg-sky-50 font-black text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <a 
                href={TELEGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <span>Telegram orqali Ariza Qoldirish</span>
                <Send className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-sky-800/80 text-white font-bold text-sm sm:text-base border-sky-600 hover:bg-sky-700 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
            >
              <a href="tel:+998919517335" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+998 91 951 73 35</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
