import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface TopBannerProps {
  onOpenModal: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white text-xs sm:text-sm py-2.5 px-4 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden">
          <span className="hidden sm:inline-flex p-1 bg-white/20 rounded-full animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </span>
          <p className="font-medium truncate">
            🔥 <strong>Yangi qabul:</strong> Barcha kurslar uchun dastlabki 20 ta ro‘yxatdan o‘tuvchiga <span className="underline decoration-amber-300 font-bold">20% chegirma</span>!
          </p>
          <button
            onClick={onOpenModal}
            className="hidden md:inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white underline underline-offset-2 ml-2 transition-colors cursor-pointer"
          >
            Ro‘yxatdan o‘tish <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0"
          aria-label="Yopish"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};