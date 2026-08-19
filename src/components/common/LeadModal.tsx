import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { X, Send, CheckCircle2, Phone, User, BookOpen, Clock, ShieldCheck, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LeadModal: React.FC = () => {
  const { isOpen, closeModal, modalPreset } = useModal();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('');
  const [shiftTime, setShiftTime] = useState('morning');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (modalPreset) {
      if (modalPreset.combinationId) {
        setSelectedTarget(`Kombinatsiya ${modalPreset.combinationId}`);
      } else if (modalPreset.languageName) {
        setSelectedTarget(modalPreset.languageName);
      }
    }
  }, [modalPreset]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setSelectedTarget('');
    closeModal();
  };

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-white/20 text-white">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-100">
              {t.brand.name}
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading text-white">
            {t.contactPage.formTitle}
          </h3>
          <p className="text-xs text-sky-100 mt-1">
            {t.contactPage.formSubtitle}
          </p>
        </div>

        {/* Body content */}
        <div className="p-6 md:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-heading">
                {t.contactPage.successTitle}
              </h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                {t.contactPage.successDesc}
              </p>
              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  OK
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-600" />
                  {t.contactPage.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.contactPage.namePlaceholder}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  {t.contactPage.phoneLabel} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.contactPage.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 focus:bg-white font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  {t.contactPage.combinationLabel}
                </label>
                <select
                  value={selectedTarget}
                  onChange={(e) => setSelectedTarget(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 focus:bg-white cursor-pointer"
                >
                  <option value="">{t.contactPage.selectOptionDefault}</option>
                  <optgroup label="28 Oylik Kombinatsiyalar">
                    <option value="Kombinatsiya 1">Kombinatsiya 1: Ingliz, Fors, Nemis, Xitoy</option>
                    <option value="Kombinatsiya 2">Kombinatsiya 2: Ingliz, Koreys, Nemis, Yapon</option>
                    <option value="Kombinatsiya 3">Kombinatsiya 3: Rus, Ingliz, Xitoy, Yapon</option>
                    <option value="Kombinatsiya 4">Kombinatsiya 4: Ingliz, Rus, Fors, Nemis</option>
                  </optgroup>
                  <optgroup label="Alohida Tillar">
                    <option value="Ingliz Tili">Ingliz Tili (IELTS / CEFR)</option>
                    <option value="Nemis Tili">Nemis Tili (Goethe / TestDaF)</option>
                    <option value="Xitoy Tili">Xitoy Tili (HSK / HSKK)</option>
                    <option value="Koreys Tili">Koreys Tili (TOPIK)</option>
                    <option value="Yapon Tili">Yapon Tili (JLPT)</option>
                    <option value="Rus Tili">Rus Tili (Akademik & So'zlashuv)</option>
                    <option value="Fors Tili">Fors Tili (Sharqshunoslik & Farsi)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
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
                      className={`p-2 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        shiftTime === shift.id
                          ? 'border-sky-500 bg-sky-50 text-sky-700 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
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
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-70"
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

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Qarshi shahar, Tel: +998 91 951 73 35</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
