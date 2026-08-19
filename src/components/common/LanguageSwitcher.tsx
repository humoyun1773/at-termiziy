import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Language } from '../../types';
import { ChevronDown, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: "🇺🇿" },
    { code: 'ru', label: "Русский", flag: "🇷🇺" },
    { code: 'en', label: "English", flag: "🇬🇧" }
  ];

  const currentLang = languagesList.find(l => l.code === language) || languagesList[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="secondary" 
          size="sm"
          className="rounded-full px-3 py-1.5 h-8 gap-1.5 font-bold text-xs shadow-2xs border-sky-200 text-sky-900 bg-sky-50 hover:bg-sky-100 cursor-pointer"
        >
          <span className="text-sm leading-none">{currentLang.flag}</span>
          <span className="uppercase tracking-wider">{currentLang.code}</span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-36 rounded-2xl p-1 shadow-xl border-slate-200">
        {languagesList.map((item) => (
          <DropdownMenuItem
            key={item.code}
            onClick={() => setLanguage(item.code)}
            className={`flex items-center justify-between gap-2 px-3 py-2 text-xs font-semibold rounded-xl cursor-pointer ${
              language === item.code
                ? 'bg-sky-600 text-white font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm leading-none">{item.flag}</span>
              <span>{item.label}</span>
            </div>
            {language === item.code && <Check className="w-3.5 h-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
