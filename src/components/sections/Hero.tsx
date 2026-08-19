import React from 'react';
import { ArrowRight, CheckCircle2, Star, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-emerald-50/40 via-white to-white">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-300/20 to-teal-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300/15 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200/80 px-4 py-1.5 rounded-full text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>Zamonaviy kasblar & Xalqaro sertifikatlar</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Kelajak kasblarini <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                At-Termiziy
              </span> bilan o‘rganing!
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Dasturlash (Frontend & Python), IELTS, Arab tili va Aniq fanlar. Amaliy loyihalar, kuchli mentorlar va kafolatlangan ta’lim tizimi orqali yuqori darajaga erishing.
            </p>

            {/* Key Advantages list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>1-dars mutlaqo bepul (Sinov darsi)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Karyera markazi & Ishga joylashish</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Bepul Coworking & WiFi zonasi</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>QR-kodli rasmiy xalqaro sertifikat</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                onClick={onOpenModal}
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto text-base"
              >
                Bepul darsga yozilish
              </Button>
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center font-semibold rounded-xl px-7 py-3.5 text-base gap-2 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-emerald-600 transition-colors shadow-sm"
              >
                Kurslarni ko‘rish
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Talaba"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Talaba"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Talaba"
                />
                <div className="h-10 w-10 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                  +5k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-slate-800 font-bold text-sm ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-500">5,000 dan ortiq mamnun o‘quvchilar</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/4.5]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="At-Termiziy Ta'lim Markazi talabalari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Sifat kafolati</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug">
                    Amaliyotga asoslangan zamonaviy ta'lim muhiti
                  </h3>
                </div>
              </div>

              {/* Floating Card 1: IELTS Score */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg shadow-inner">
                  8.5
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">IELTS Band 8.5+</p>
                  <p className="text-[11px] text-slate-500">Eng yuqori natijalarimiz</p>
                </div>
              </div>

              {/* Floating Card 2: Employment */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">92% Ishga Joylashish</p>
                  <p className="text-[11px] text-slate-500">IT mutaxassisliklari</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};