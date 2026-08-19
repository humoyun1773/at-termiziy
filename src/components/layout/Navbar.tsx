import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { 
  GraduationCap, 
  Menu, 
  X
} from 'lucide-react';

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

  // Close mobile menu on route change & lock body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
    { path: '/combinations', label: t.nav.combinations },
    { path: '/courses', label: t.nav.courses },
    { path: '/career', label: t.nav.career },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-md py-3' 
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
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

            {/* Right actions: Language Switcher & Mobile Menu Toggle */}
            <div className="flex items-center gap-2.5">
              <LanguageSwitcher />

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

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div 
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 top-[65px]"
            />
            <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-5 z-50 animate-in slide-in-from-top-2 duration-200">
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
                          : 'text-slate-800 hover:bg-slate-50'
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
                  className="font-mono font-bold text-sky-700 hover:underline"
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