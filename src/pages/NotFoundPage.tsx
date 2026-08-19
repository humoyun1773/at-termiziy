import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md space-y-5 bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
        <span className="text-6xl font-black text-sky-600 font-heading block">404</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">
          Sahifa Topilmadi
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Kechirasiz, siz qidirgan sahifa mavjud emas yoki boshqa manzilga ko'chirilgan.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Bosh Sahifaga Qaytish</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
