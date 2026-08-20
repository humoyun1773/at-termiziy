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
      
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <span className="px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          {t.contactPage.tag}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-heading mb-4">
          {t.contactPage.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
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
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Aloqa Ma'lumotlari
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Telefon Raqam</span>
                    <a href="tel:+998919517335" className="font-mono font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors text-sm">
                      +998 91 951 73 35
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Manzil</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Qashqadaryo viloyati, Qarshi shahri, Mustaqillik shoh ko'chasi
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Ish Vaqti</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Dushanba – Shanba: 08:00 – 20:00
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+998919517335"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.contactPage.callDirectly}</span>
                </a>
              </div>
            </div>

            {/* Banner preview widget */}
            <div className="bg-sky-900 rounded-3xl p-6 text-white text-xs space-y-3 border border-sky-800">
              <span className="font-bold text-sky-300 uppercase tracking-wider block">
                {t.brand.motto}
              </span>
              <p className="text-sky-100 leading-relaxed">
                28 oylik ta'lim kombinatsiyalariga mos 4 ta tilga muvofiq tafakkur. Kursni muvaffaqiyatli tugatgan talabalar ish bilan ta'minlanadi!
              </p>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-lg">
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
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-pulse-subtle">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
                      {t.contactPage.successTitle}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                      {t.contactPage.successDesc}
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFullName('');
                        setPhone('');
                        setSelectedTarget('');
                      }}
                      className="px-6 py-2.5 rounded-xl bg-sky-600 text-white text-xs font-bold shadow-md hover:bg-sky-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">
                      {t.contactPage.formTitle}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.contactPage.formSubtitle}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      {t.contactPage.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contactPage.namePlaceholder}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      {t.contactPage.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contactPage.phonePlaceholder}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      {t.contactPage.combinationLabel}
                    </label>
                    <select
                      value={selectedTarget}
                      onChange={(e) => setSelectedTarget(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 cursor-pointer"
                    >
                      <option value="" className="dark:bg-slate-900">{t.contactPage.selectOptionDefault}</option>
                      <optgroup label="28 Oylik Kombinatsiyalar" className="dark:bg-slate-900">
                        <option value="Kombinatsiya 1">Kombinatsiya 1: Ingliz, Nemis, Turk, Xitoy</option>
                        <option value="Kombinatsiya 2">Kombinatsiya 2: Nemis, Rus, Ingliz, Yapon</option>
                        <option value="Kombinatsiya 3">Kombinatsiya 3: Turk, Ingliz, Yapon, Koreys</option>
                        <option value="Kombinatsiya 4">Kombinatsiya 4: Koreys, Yapon, Rus, Ingliz</option>
                      </optgroup>
                      <optgroup label="Alohida Tillar" className="dark:bg-slate-900">
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
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
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
                          className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                            shiftTime === shift.id
                              ? 'border-sky-500 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold'
                              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
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
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 hover:scale-102 active:scale-98 cursor-pointer disabled:opacity-70 animate-glow"
                    >
                      {isSubmitting ? (
                        <span>{t.contactPage.submitting}</span>
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
