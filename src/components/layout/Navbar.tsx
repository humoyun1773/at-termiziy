import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react';
import { OrientalTopBorderBand } from '../common/OrientalPatterns';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/career', label: t.nav.career },
    { path: '/combinations', label: t.nav.combinations },
    { path: '/courses', label: t.nav.courses }
  ];

  return (
    <>
      <OrientalTopBorderBand />
      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 border-b border-sky-100/80 shadow-xs ${
        isScrolled 
          ? 'py-2.5 shadow-sm' 
          : 'py-3.5'
      }`}>
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Logo with Oriental Touch */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group shrink-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-200 border border-amber-300/40">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                    {t.brand.name}
                  </span>
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                  <span>{t.brand.type}</span>
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span className="text-amber-700 font-bold">{t.brand.city}</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-xs xl:text-sm font-bold tracking-tight transition-all duration-200 py-1 cursor-pointer ${
                      isActive 
                        ? 'text-sky-600' 
                        : 'text-slate-600 hover:text-sky-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-sky-600 to-amber-500 rounded-full animate-in fade-in zoom-in-75 duration-200" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls: Language */}
            <div className="hidden lg:flex items-center gap-2.5">
              <LanguageSwitcher />
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Container */}
        {mobileMenuOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 top-[65px] bg-slate-950/60 backdrop-blur-xs z-30 animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div 
              className="lg:hidden relative z-40 bg-white border-b border-slate-200 px-4 py-5 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
            >
              <div className="space-y-1.5 mb-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'text-slate-800 hover:bg-slate-50 hover:text-sky-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Qarshi shahar</span>
                <a 
                  href="tel:+998919517335" 
                  className="font-mono font-bold text-sky-600 hover:underline"
                >
                  +998 91 951 73 35
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};