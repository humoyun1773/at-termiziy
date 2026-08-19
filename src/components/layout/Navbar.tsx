import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { 
  GraduationCap, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  MapPin,
  ChevronRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const { openModal } = useModal();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/combinations', label: t.nav.combinations },
    { path: '/courses', label: t.nav.courses },
    { path: '/career', label: t.nav.career },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-blue-900 text-white text-[11px] py-1.5 px-4 hidden md:block border-b border-sky-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-sky-200 font-semibold">
              <Sparkles className="w-3 h-3 text-amber-300" />
              {t.brand.motto}
            </span>
            <span className="text-sky-300/60">|</span>
            <span className="flex items-center gap-1 text-sky-100">
              <MapPin className="w-3 h-3 text-sky-300" />
              {t.brand.city}
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono font-medium">
            <a 
              href="tel:+998919517335" 
              className="flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors cursor-pointer"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+998 91 951 73 35</span>
            </a>
            <span className="text-sky-300/60">|</span>
            <span className="text-sky-200 text-[10px] uppercase font-sans tracking-wider">
              {t.brand.workHours}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-extrabold tracking-tight text-slate-900 font-heading leading-tight group-hover:text-sky-600 transition-colors">
                  {t.brand.name}
                </span>
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest leading-none">
                  {t.brand.type} • {t.brand.city}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 shadow-xs font-bold border border-sky-200/60'
                        : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Language Switcher & Call to action */}
            <div className="flex items-center gap-2.5">
              <LanguageSwitcher />

              <button
                onClick={() => openModal()}
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs md:text-sm font-bold shadow-md shadow-sky-600/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>{t.nav.applyBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors border border-slate-200 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-sky-100 shadow-2xl p-6 animate-in slide-in-from-top-4 duration-200 z-50">
            <div className="space-y-2 mb-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                      isActive
                        ? 'bg-sky-500 text-white'
                        : 'text-slate-800 hover:bg-sky-50 hover:text-sky-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3 rounded-xl">
                <span className="font-semibold text-slate-700">{t.brand.motto}</span>
                <span className="text-sky-600 font-bold">{t.brand.city}</span>
              </div>

              <a
                href="tel:+998919517335"
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>+998 91 951 73 35</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-600 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.nav.applyBtn}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};