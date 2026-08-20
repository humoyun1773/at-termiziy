import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 p-0 flex items-center justify-center border-slate-200 dark:border-[#1d2f52] bg-slate-50 dark:bg-[#0e1c3a] text-slate-700 dark:text-amber-400 hover:bg-sky-50 dark:hover:bg-[#142850] hover:border-sky-300 dark:hover:border-sky-500 transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Rejim: ${theme === 'light' ? 'Tungi rejim (Ko\'k)' : 'Kunduzgi rejim (Oq)'}`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-slate-700 animate-in spin-in-90 duration-200" />
      ) : (
        <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-200" />
      )}
    </Button>
  );
};
