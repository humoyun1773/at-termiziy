import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types';
import { Globe, ChevronDown, Check } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languagesList: { code: Language; label: string; short: string }[] = [
    { code: 'uz', label: "O'zbekcha", short: "UZ" },
    { code: 'ru', label: "Русский", short: "RU" },
    { code: 'en', label: "English", short: "EN" }
  ];

  const currentLang = languagesList.find(l => l.code === language) || languagesList[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-50 dark:bg-[#0e1c3a] hover:bg-sky-50 dark:hover:bg-[#142850] text-slate-800 dark:text-slate-200 hover:text-sky-700 dark:hover:text-sky-400 border border-slate-200 dark:border-[#1d2f52] transition-all duration-200 shadow-2xs active:scale-95 cursor-pointer"
        aria-label="Tilni o'zgartirish"
      >
        <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
        <span className="tracking-wide text-slate-900 dark:text-white font-extrabold">{currentLang.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white dark:bg-[#0c172e] shadow-xl border border-slate-100 dark:border-[#1d2f52] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3.5 py-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-100 dark:border-[#1d2f52] mb-1">
            Tilni tanlang
          </div>
          {languagesList.map((item) => {
            const isSelected = language === item.code;
            return (
              <button
                key={item.code}
                onClick={() => {
                  setLanguage(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 dark:bg-[#112347] text-sky-700 dark:text-sky-300 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#112347] hover:text-sky-600 dark:hover:text-sky-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 text-[10px] font-black text-sky-600 dark:text-sky-400 bg-sky-100/60 dark:bg-[#081024] px-1.5 py-0.5 rounded uppercase">{item.short}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-sky-600 dark:text-sky-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
