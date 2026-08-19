import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: "Standart Oylik",
      badge: "Eng qulay",
      price: "490 000",
      period: "oyiga",
      description: "Tillar, bolalar va umumiy ta'lim kurslari uchun mo'ljallangan qulay oylik to'lov rejasi.",
      features: [
        "Haftada 3 kunlik darslar (1.5 soat)",
        "O'quv materiallari va audio qo'llanmalar",
        "Haftalik uy vazifasi nazorati",
        "Guruhda 10-14 nafar o'quvchi",
        "1-dars bepul sinov darsi"
      ],
      popular: false,
      cta: "Standart ta'rifni tanlash"
    },
    {
      name: "IT Pro & Intensiv",
      badge: "Karyera uchun",
      price: "690 000",
      period: "oyiga",
      description: "Dasturlash (Frontend/Python) va IELTS Intensive kurslari uchun to'liq amaliyotli reja.",
      features: [
        "Haftada 3 kunlik intensiv darslar (2 soat)",
        "Shaxsiy Support Mentor yordami",
        "Bepul Coworking zonasi (cheksiz kirish)",
        "Real 5+ ta portfolio loyihasi",
        "Karyera markazi va rezyume tayyorlash",
        "Xalqaro QR-kodli sertifikat"
      ],
      popular: true,
      cta: "IT Pro ta'rifni tanlash"
    },
    {
      name: "VIP / Individual",
      badge: "Maksimal tezlik",
      price: "1 400 000",
      period: "oyiga",
      description: "Ustoz bilan 1-ga-1 yakka tartibda shug'ullanish va moslashuvchan dars jadvali.",
      features: [
        "Individual moslashuvchan jadval",
        "Shaxsiy murabbiy bilan 1-ga-1 darslar",
        "Tezlashtirilgan o'quv dasturi",
        "Xalqaro imtihonlarga 100% kafolatli tayyorgarlik",
        "Dars yozuvlari va VIP qo'llab-quvvatlash"
      ],
      popular: false,
      cta: "VIP ta'rifni tanlash"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badgeText="Shaffof Narxlar"
          title="O‘zingizga Mos Ta’lim Rejasini Tanlang"
          subtitle="Hech qanday yashirin to‘lovlarsiz, 1-dars sinov bepul va to‘liq amaliyot kafolati."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/30 scale-105 border-2 border-emerald-500 z-10'
                  : 'bg-slate-50/80 text-slate-900 border border-slate-200/80 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>ENG KO‘P TANLANADIGAN</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    plan.popular ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-xs sm:text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-200/20">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs font-medium ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                    so'm / {plan.period}
                  </span>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  onClick={() => onSelectPlan(plan.name)}
                  variant={plan.popular ? 'primary' : 'white'}
                  size="md"
                  className="w-full text-sm font-bold"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};