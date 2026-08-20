import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

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
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 bg-white/95 dark:bg-[#081024]/95 backdrop-blur-md transition-all duration-200 border-b border-slate-200 dark:border-[#1a2b4c] ${
        isScrolled 
          ? 'shadow-md py-3' 
          : 'shadow-2xs py-4'
      }`}>
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors whitespace-nowrap">
                {t.brand.name}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-8 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-xs xl:text-sm font-bold tracking-tight transition-all duration-200 py-1 cursor-pointer ${
                      isActive 
                        ? 'text-sky-600 dark:text-sky-400' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-sky-600 dark:bg-sky-400 rounded-full animate-in fade-in zoom-in-75 duration-200" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls: Language, Theme & Contact CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <ThemeToggle />
              <LanguageSwitcher />

              <Button
                asChild
                size="sm"
                className="ml-1 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-2xs hover:scale-102 transition-transform cursor-pointer"
              >
                <Link to="/contact">
                  <span>{t.nav.applyBtn}</span>
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-slate-200 dark:border-[#1a2b4c] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#0e1c3a] transition-colors cursor-pointer"
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

        {/* Mobile Dropdown Menu Container with Fixed Height & Scroll */}
        {mobileMenuOpen && (
          <>
            {/* Mobile Menu Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 top-[65px] bg-slate-950/60 backdrop-blur-xs z-30 animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <div 
              className="lg:hidden relative z-40 bg-white dark:bg-[#0c172e] border-b border-slate-200 dark:border-[#1a2b4c] px-4 py-5 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
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
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#112040] hover:text-sky-600 dark:hover:text-sky-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Controls inside Mobile Menu: Theme Toggle & Language Switcher */}
              <div className="py-3 px-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Rejim:</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Til:</span>
                  <LanguageSwitcher />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Qarshi shahar</span>
                <a 
                  href="tel:+998919517335" 
                  className="font-mono font-bold text-sky-600 dark:text-sky-400 hover:underline"
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