import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle2, Phone, User, BookOpen, Clock, ShieldCheck, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
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
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="p-0 border-0 overflow-hidden rounded-3xl max-w-lg">
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-5 sm:p-6 text-white shrink-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-white/20 text-white">
              <GraduationCap className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-100">
              {t.brand.name}
            </span>
          </div>
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold font-heading text-white">
              {t.contactPage.formTitle}
            </DialogTitle>
            <DialogDescription className="text-xs text-sky-100 mt-0.5">
              {t.contactPage.formSubtitle}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 bg-white">
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
                <Button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  OK
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-sky-600" />
                  {t.contactPage.nameLabel} *
                </label>
                <Input
                  type="text"
                  required
                  placeholder={t.contactPage.namePlaceholder}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  {t.contactPage.phoneLabel} *
                </label>
                <Input
                  type="tel"
                  required
                  placeholder={t.contactPage.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="font-mono"
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
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-hidden transition-all bg-slate-50 focus:bg-white cursor-pointer"
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md"
                >
                  {isSubmitting ? (
                    <span>{t.contactPage.submitting}</span>
                  ) : (
                    <>
                      <span>{t.contactPage.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Qarshi shahar, Tel: +998 91 951 73 35</span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
