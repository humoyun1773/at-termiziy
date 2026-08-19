import React from 'react';
import { 
  Laptop, Users, Trophy, Target, Award, Coffee 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: <Laptop className="w-7 h-7 text-emerald-600" />,
      title: "Zamonaviy IT Laboratoriya & Coworking",
      description: "Darsdan tashqari vaqtlarda ham markazimizda bepul qolib mustaqil o'rganish va kod yozish uchun barcha sharoitlar yaratilgan."
    },
    {
      icon: <Users className="w-7 h-7 text-teal-600" />,
      title: "Shaxsiy Mentorlik Tizimi",
      description: "Har bir guruhga asosiy ustozdan tashqari qo'shimcha Support Mentor biriktiriladi. Har bir uy vazifasi batafsil tahlil qilinadi."
    },
    {
      icon: <Trophy className="w-7 h-7 text-blue-600" />,
      title: "Real Amaliy Loyihalar & Portfolio",
      description: "Quruq nazariya emas, real ish beruvchilar talabiga mos 5+ ta to'liq loyihani portfoliongizga qo'shasiz."
    },
    {
      icon: <Target className="w-7 h-7 text-indigo-600" />,
      title: "Karyera Markazi & Ishga Joylashish",
      description: "Rezyume tayyorlash, mock intervyular va hamkor kompaniyalarga tavsiya qilish orqali ish topishingizga to'liq ko'maklashamiz."
    },
    {
      icon: <Award className="w-7 h-7 text-purple-600" />,
      title: "QR-kodli Xalqaro Sertifikat",
      description: "Kursni muvaffaqiyatli tamomlaganlarga rasmiy, tekshiruvdan o'tadigan QR-kodli xalqaro namunadagi sertifikat beriladi."
    },
    {
      icon: <Coffee className="w-7 h-7 text-amber-600" />,
      title: "Qulay Muhit & Networking",
      description: "Tengdoshlar bilan jamoaviy ishlash, master-klasslar, bepul qahva va choy burchagi hamda qizg'in ta'lim muhiti."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Nega Bizni Tanlashadi?"
          title="Sizning Muvaffaqiyatingiz Uchun Barcha Sharoitlar"
          subtitle="At-Termiziy o‘quv markazida sifatli ta’lim va yuqori natijaga erishish uchun yaratilgan qulayliklar bilan tanishing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50/70 border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-50 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};