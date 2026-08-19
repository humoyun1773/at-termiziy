import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, User, BookOpen } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { coursesData } from '../../data/courses';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import type { LeadFormData } from '../../types';

interface ContactProps {
  initialCourse?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialCourse = '' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    course: initialCourse || coursesData[0]?.title || '',
    timePreference: 'afternoon',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        course: coursesData[0]?.title || '',
        timePreference: 'afternoon',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Qabul Ochiq"
          title="Bepul Sinov Darsiga Ro‘yxatdan O‘ting"
          subtitle="Ismingiz va telefon raqamingizni qoldiring. Menejerlarimiz 15 daqiqa ichida siz bilan bog‘lanishadi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-black mb-2">
                At-Termiziy Ta'lim Markazi
              </h3>
              <p className="text-emerald-100 text-sm mb-8 leading-relaxed">
                Kelajak orzularingizni bugundan boshlang. Birinchi darsimizga tashrif buyurib, ta'lim sifatini o'zingiz his qiling.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Manzilimiz:</h5>
                    <p className="text-sm font-medium text-white">{siteConfig.address}</p>
                    <p className="text-xs text-emerald-200 mt-0.5">{siteConfig.targetLandmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Telefonlar:</h5>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="text-sm font-bold text-white block hover:underline">
                      {siteConfig.phone}
                    </a>
                    <a href={`tel:${siteConfig.altPhone.replace(/\D/g, '')}`} className="text-xs text-emerald-100 block hover:underline">
                      {siteConfig.altPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Ish Vaqti:</h5>
                    <p className="text-sm font-medium text-white">{siteConfig.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location preview card */}
            <div className="rounded-3xl border border-slate-200/80 p-6 bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Markazga yetib kelish juda oson:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Metro Shahriston bekatidan 2 daqiqalik piyoda yo'l. Markaz oldida bepul avtoturargoh mavjud.
              </p>
            </div>

          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/90 rounded-3xl p-7 sm:p-10 border border-slate-200/80 shadow-md">
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Arizangiz Qabul Qilindi!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Rahmat! Operatorlarimiz tez orada siz bilan bog'lanib, bepul sinov darsi vaqtini tasdiqlashadi.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="sm"
                  >
                    Boshqa ariza yuborish
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Ochiq darsga joy band qilish
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Ma'lumotlaringizni to'ldiring, biz sizga bepul dars jadvalini yuboramiz.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Ism va Familiyangiz *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor Komilov"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Telefon Raqamingiz *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+998 (90) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Qiziqayotgan Kursingiz *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                      >
                        {coursesData.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Time preference */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Sizga qulay dars vaqti:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: 'morning', label: 'Ertalab (09:00)' },
                        { key: 'afternoon', label: 'Tushlik (14:00)' },
                        { key: 'evening', label: 'Kechki (18:30)' }
                      ].map((t) => (
                        <button
                          type="button"
                          key={t.key}
                          onClick={() => setFormData({ ...formData, timePreference: t.key as any })}
                          className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                            formData.timePreference === t.key
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full mt-4 font-bold text-base shadow-lg shadow-emerald-600/30"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {loading ? 'Yuborilmoqda...' : 'Bepul Darsga Yozilish'}
                  </Button>

                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    🔒 Ma'lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};