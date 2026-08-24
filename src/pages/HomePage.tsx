import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TELEGRAM_URL } from '../data/siteConfig';
import { faqData } from '../data/mockData';
import { BannerCombinationsBoard } from '../components/common/BannerCombinationsBoard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
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
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 md:pt-14 md:pb-20 overflow-hidden">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Floating Language Badges (Desktop decoration) */}
          <div className="hidden xl:block pointer-events-none">
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-6 top-16 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 text-white"
            >
              <span className="text-lg">🇬🇧</span>
              <span className="text-xs font-bold text-white">IELTS 7.5+</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-8 top-12 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 text-white"
            >
              <span className="text-lg">🇩🇪</span>
              <span className="text-xs font-bold text-white">Goethe B2</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-10 bottom-24 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 text-white"
            >
              <span className="text-lg">🇨🇳</span>
              <span className="text-xs font-bold text-white">HSK 5</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute right-12 bottom-28 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20 flex items-center gap-2 text-white"
            >
              <span className="text-lg">🇰🇷</span>
              <span className="text-xs font-bold text-white">TOPIK 5</span>
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
              { num: "28 OY", label: t.hero.statMonths, icon: Clock, color: "text-sky-400", bg: "bg-sky-500/20 border-sky-400/30" },
              { num: "4 TA", label: t.hero.statLanguages, icon: GraduationCap, color: "text-blue-400", bg: "bg-blue-500/20 border-blue-400/30" },
              { num: "100%", label: t.hero.statJobGuarantee, icon: Briefcase, color: "text-emerald-400", bg: "bg-emerald-500/20 border-emerald-400/30" },
              { num: "500+", label: t.hero.statStudents, icon: Users, color: "text-amber-400", bg: "bg-amber-500/20 border-amber-400/30" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="rounded-3xl border border-white/15 bg-slate-950/70 backdrop-blur-md shadow-xl p-4 sm:p-5 flex items-center gap-3.5 transition-all hover:border-sky-400 hover:bg-slate-950/85"
              >
                <div className={`w-12 h-12 rounded-2xl border ${stat.bg} ${stat.color} flex items-center justify-center shrink-0 shadow-xs`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-white font-heading block leading-none mb-1">
                    {stat.num}
                  </span>
                  <span className="text-xs text-sky-100 font-medium leading-tight block">
                    {stat.label}
                  </span>
                </div>
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
        <div className="relative rounded-3xl p-6 sm:p-12 border border-white/15 bg-slate-950/75 backdrop-blur-md shadow-2xl text-white overflow-hidden">
          {/* Background Photo with Scrim */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=100&w=2560" 
              alt="Dars jarayoni" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <Badge variant="secondary" className="px-3.5 py-1.5 bg-amber-400 text-slate-950 font-black border-0 uppercase text-xs">
                {t.mottoSection.tag}
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
                {t.mottoSection.title}
              </h2>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed font-medium">
                {t.mottoSection.description}
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" asChild className="rounded-xl font-bold border-white/20 hover:bg-sky-600 text-white bg-slate-900/80">
                  <Link to="/about" className="flex items-center gap-1.5">
                    <span>Markaz Nizomi & Qoidalari</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {t.mottoSection.points.map((pt, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-slate-900/70 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 shadow-md hover:border-sky-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-sky-500 text-white font-black flex items-center justify-center shrink-0 text-xs shadow-md">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {pt.title}
                    </h4>
                    <p className="text-xs text-sky-100/80 mt-0.5 leading-relaxed">
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
        <div className="relative rounded-3xl p-6 sm:p-12 border border-white/15 bg-slate-950/75 backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden text-white">
          {/* Campus Background Image */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=100&w=2560" 
              alt="Akademiya binosi" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 relative z-10">
            <Badge variant="secondary" className="px-3.5 py-1.5 gap-1.5 bg-sky-500 text-white border-0 font-bold text-xs uppercase">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              Qarshi Shahar Bosh Binomiz
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-black text-white font-heading leading-snug md:leading-normal">
              Zamonaviy Sharoitlar va Haqiqiy Ko'p Tilli Muhit
            </h2>
            <p className="text-sm sm:text-base text-sky-100 leading-relaxed font-medium">
              Markazimiz Qarshi shahrining eng qulay joyida joylashgan bo'lib, har bir xona interaktiv texnologiyalar va speaking zonalar bilan jihozlangan.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                "Interaktiv aqlli doskalar va multimedia xonalari",
                "Maxsus Language Lab va xalqaro speaking klublar",
                "Katta kutubxona: 7 tildagi nodir adabiyotlar va qo'llanmalar",
                "Individual mentorlik va kunlik monitoring xonasi"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-sky-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild className="rounded-2xl font-bold text-sm hover:scale-105 active:scale-95 transition-transform bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/25 px-6 py-3.5">
                <a href="tel:+998919517335" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Markazga Tashrif: +998 91 951 73 35</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-md text-white shadow-xl space-y-4 border border-white/15 overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-300">Qarshi Filiali</span>
                </div>
                <Badge variant="success" className="text-[10px] bg-emerald-500 text-white font-bold">Ochiq</Badge>
              </div>
              <h3 className="text-xl font-black font-heading text-white">
                Al-Hakim At-Termiziy O'quv Markazi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Manzil: Qashqadaryo viloyati, Qarshi shahri, Mustaqillik shoh ko'chasi. Dushanba - Shanba kunlari soat 08:00 dan 20:00 gacha xizmatingizdamiz.
              </p>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-300 font-medium">Qabul bo'limi:</span>
                <span className="font-mono font-bold text-white text-sm sm:text-base">+998 91 951 73 35</span>
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
          <Badge variant="secondary" className="px-4 py-1.5 bg-sky-500 text-white border-0 text-xs font-black uppercase tracking-wider shadow-md">
            Jonli Jarayonlar
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight drop-shadow-md">
            Akademiyamizdagi Dars va Talabalar Hayoti
          </h2>
          <p className="text-sm sm:text-base text-sky-100 font-medium leading-relaxed">
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
              className="relative rounded-3xl overflow-hidden shadow-xl group h-64 border border-white/15"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
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
        <div className="text-center mb-12 space-y-3 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Savollar & Javoblar</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight drop-shadow-md">
            Ko'p Beriladigan Savollar
          </h2>
          <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto leading-relaxed font-medium">
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
