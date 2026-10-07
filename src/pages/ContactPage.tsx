import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  User, 
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LocationSection } from '../components/common/LocationSection';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');
  const [shiftTime, setShiftTime] = useState('morning');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

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
          <Phone className="w-3.5 h-3.5 text-white" />
          {t.contactPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading mb-4 tracking-tight drop-shadow-lg">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-sky-100 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
          {t.contactPage.subtitle}
        </p>
      </motion.section>

      {/* Main Grid: Form + Info */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Campus Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 border border-white/15 shadow-2xl space-y-6 overflow-hidden text-white">
              <h3 className="text-2xl font-black text-white font-heading relative z-10">
                Aloqa Ma'lumotlari
              </h3>

              <div className="space-y-4 text-xs sm:text-sm relative z-10">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Telefon Raqam</span>
                    <a href="tel:+998901234567" className="font-mono font-bold text-white hover:text-sky-400 transition-colors text-sm sm:text-base">
                      +998 90 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Manzil</span>
                    <span className="font-semibold text-white leading-relaxed">
                      Qashqadaryo viloyati, Qarshi shahri, VR6H+M54
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Ish Vaqti</span>
                    <span className="font-semibold text-white leading-relaxed">
                      Dushanba – Shanba: 08:00 – 20:00
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 relative z-10">
                <a
                  href="tel:+998901234567"
                  className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102 active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contactPage.callDirectly}</span>
                </a>
              </div>
            </div>

            {/* Banner preview widget with Campus Reception Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/15 h-48 group">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Qabul va konsultatsiya" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white text-xs space-y-1.5">
                <span className="font-black text-amber-300 uppercase tracking-wider block">
                  {t.brand.motto}
                </span>
                <p className="text-sky-100 leading-relaxed text-xs">
                  28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkur. Kursni muvaffaqiyatli tugatgan talabalar ish bilan ta'minlanadi!
                </p>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-slate-950/75 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/15 shadow-2xl overflow-hidden text-white">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {t.contactPage.successTitle}
                    </h3>
                    <p className="text-sm text-sky-100 max-w-sm mx-auto">
                      {t.contactPage.successDesc}
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFullName('');
                        setPhone('');
                        setSelectedTarget('');
                      }}
                      className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      Yangi Ariza Qoldirish
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                  <div>
                    <h3 className="text-2xl font-black text-white font-heading mb-1">
                      {t.contactPage.formTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-100/80">
                      {t.contactPage.formSubtitle}
                    </p>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-400" />
                      {t.contactPage.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactPage.namePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl border border-white/20 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-hidden transition-all bg-slate-900/90 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-400" />
                      {t.contactPage.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contactPage.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl border border-white/20 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-hidden transition-all bg-slate-900/90 text-white placeholder:text-slate-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                      {t.contactPage.combinationLabel}
                    </label>
                    <select
                      value={selectedTarget}
                      onChange={(e) => setSelectedTarget(e.target.value)}
                      className="w-full px-4 py-3.5 text-sm rounded-xl border border-white/20 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-hidden transition-all bg-slate-900 text-white cursor-pointer"
                    >
                      <option value="" className="bg-slate-900 text-white">{t.contactPage.selectOptionDefault}</option>
                      <optgroup label="28 Oylik Kombinatsiyalar" className="bg-slate-900 text-white">
                        <option value="Kombinatsiya 1">Kombinatsiya 1: Ingliz, Nemis, Turk, Xitoy</option>
                        <option value="Kombinatsiya 2">Kombinatsiya 2: Nemis, Rus, Ingliz, Yapon</option>
                        <option value="Kombinatsiya 3">Kombinatsiya 3: Turk, Ingliz, Yapon, Koreys</option>
                        <option value="Kombinatsiya 4">Kombinatsiya 4: Koreys, Yapon, Rus, Ingliz</option>
                      </optgroup>
                      <optgroup label="Alohida Tillar" className="bg-slate-900 text-white">
                        <option value="Ingliz Tili">Ingliz Tili (IELTS / CEFR)</option>
                        <option value="Nemis Tili">Nemis Tili (Goethe / TestDaF)</option>
                        <option value="Turk Tili">Turk Tili (TÖMER / Yunus Emre)</option>
                        <option value="Xitoy Tili">Xitoy Tili (HSK / HSKK)</option>
                        <option value="Koreys Tili">Koreys Tili (TOPIK)</option>
                        <option value="Yapon Tili">Yapon Tili (JLPT)</option>
                        <option value="Rus Tili">Rus Tili (Akademik & So'zlashuv)</option>
                        <option value="Fors Tili">Fors Tili (Sharqshunoslik & Farsi)</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      {t.contactPage.timeLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'morning', label: '08:30 - 11:30' },
                        { id: 'afternoon', label: '13:30 - 16:30' },
                        { id: 'evening', label: '17:30 - 20:30' },
                      ].map((shift) => (
                        <button
                          type="button"
                          key={shift.id}
                          onClick={() => setShiftTime(shift.id)}
                          className={`p-3 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                            shiftTime === shift.id
                              ? 'border-sky-400 bg-sky-500 text-white shadow-md'
                              : 'border-white/15 bg-slate-900/80 text-sky-100 hover:bg-slate-800'
                          }`}
                        >
                          {shift.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-black text-sm shadow-xl shadow-sky-600/30 hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>{t.contactPage.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Location & Navigation Section */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <LocationSection />
      </section>

    </div>
  );
};
