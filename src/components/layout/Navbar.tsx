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
    { path: '/about', label: t.nav.about }
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 bg-white transition-all duration-200 border-b border-slate-200 ${
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
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight group-hover:text-sky-600 transition-colors whitespace-nowrap">
                {t.brand.name}
              </span>
            </Link>

            {/* Desktop Navigation Links (Strictly Single-Line & Premium Underline on Hover) */}
            <nav className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-7 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`group relative py-2.5 text-xs xl:text-sm font-semibold tracking-normal transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-sky-600 font-bold'
                        : 'text-slate-700 hover:text-sky-600'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Premium Animated Border Bottom */}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 transition-all duration-300 origin-left ${
                        isActive 
                          ? 'scale-x-100 opacity-100 shadow-xs' 
                          : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Language Switcher & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
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