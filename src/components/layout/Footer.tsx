import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { 
  GraduationCap, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ArrowUp, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden pt-16 pb-12 border-t border-slate-800">
      {/* Background glow circle */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white font-heading block">
                  {t.brand.name}
                </span>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">
                  {t.brand.type} • {t.brand.city}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Column 2: 28 Month Combinations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-sky-400">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/combinations#kombinatsiya-1" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Kombinatsiya 1: Ingliz, Fors, Nemis, Xitoy
                </Link>
              </li>
              <li>
                <Link to="/combinations#kombinatsiya-2" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Kombinatsiya 2: Ingliz, Koreys, Nemis, Yapon
                </Link>
              </li>
              <li>
                <Link to="/combinations#kombinatsiya-3" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Kombinatsiya 3: Rus, Ingliz, Xitoy, Yapon
                </Link>
              </li>
              <li>
                <Link to="/combinations#kombinatsiya-4" className="hover:text-sky-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500" />
                  Kombinatsiya 4: Ingliz, Rus, Fors, Nemis
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/courses" className="text-sky-400 font-semibold hover:underline flex items-center gap-1">
                  Barcha 7 ta tilni ko'rish →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-sky-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/combinations" className="hover:text-white transition-colors">
                  {t.nav.combinations}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  {t.nav.courses}
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition-colors">
                  {t.nav.career}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Qarshi Campus */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 text-sky-400">
              {t.footer.contactInfo}
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>{t.brand.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+998919517335" className="hover:text-white font-mono font-bold">
                {t.brand.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{t.brand.workHours}</span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openModal()}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>{t.nav.applyBtn}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>© {new Date().getFullYear()} {t.brand.name}. {t.footer.allRights}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>{t.footer.developedWith}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};