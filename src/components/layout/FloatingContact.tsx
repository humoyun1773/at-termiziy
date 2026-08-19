import React from 'react';
import { useModal } from '../../context/ModalContext';
import { Phone, Sparkles } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Quick Call Button */}
      <a
        href="tel:+998919517335"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 group relative"
        aria-label="Direct Call"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          +998 91 951 73 35
        </span>
      </a>

      {/* Quick Application CTA */}
      <button
        onClick={() => openModal()}
        className="px-4 py-3 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs shadow-xl shadow-sky-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-sky-400/30"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Qabulga Yozilish</span>
      </button>
    </div>
  );
};
