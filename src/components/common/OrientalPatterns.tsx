import React from 'react';

/**
 * Islamic Girih Geometric Background Pattern (SVG Vector)
 */
export const IslamicGirihPattern: React.FC<{ className?: string; opacity?: number }> = ({ 
  className = '', 
  opacity = 0.04 
}) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="girih-star-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* 8-pointed Islamic Star geometry */}
          <path
            d="M40,10 L48,26 L64,20 L58,36 L74,40 L58,44 L64,60 L48,54 L40,70 L32,54 L16,60 L22,44 L6,40 L22,36 L16,20 L32,26 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          {/* Inner interlace lines */}
          <polygon
            points="40,22 52,40 40,58 28,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <polygon
            points="31,31 49,31 49,49 31,49"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          {/* Corner connections */}
          <path d="M0,0 L16,16 M80,0 L64,16 M0,80 L16,64 M80,80 L64,64" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#girih-star-pattern)" />
    </svg>
  );
};

/**
 * Authentic Oriental Arabesque Divider (Islimiy Naqsh)
 */
export const ArabesqueDivider: React.FC<{ className?: string; color?: string }> = ({ 
  className = '',
  color = '#0284c7' 
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1.5px] flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-sky-300 to-sky-500 rounded-full" />
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Central Lotus & Arabesque Medallion */}
        <path d="M24 2C24 2 28 8 28 12C28 16 24 22 24 22C24 22 20 16 20 12C20 8 24 2 24 2Z" fill={color} fillOpacity="0.85" />
        <path d="M24 6C24 6 34 10 34 12C34 14 24 18 24 18C24 18 14 14 14 12C14 10 24 6 24 6Z" fill="#38bdf8" fillOpacity="0.6" />
        <circle cx="24" cy="12" r="2.5" fill="#f59e0b" />
        <circle cx="10" cy="12" r="1.5" fill="#0284c7" />
        <circle cx="38" cy="12" r="1.5" fill="#0284c7" />
        <path d="M4 12H8 M40 12H44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="h-[1.5px] flex-1 max-w-[120px] bg-gradient-to-l from-transparent via-sky-300 to-sky-500 rounded-full" />
    </div>
  );
};

/**
 * Oriental Archway / Mihrab Crest Badge
 */
export const TermiziyEmblem: React.FC<{ size?: number; className?: string }> = ({ 
  size = 56, 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="termiziy-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="termiziy-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      
      {/* Outer 8-point Star Seal */}
      <rect x="12" y="12" width="40" height="40" rx="8" transform="rotate(45 32 32)" fill="url(#termiziy-blue)" />
      <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#termiziy-blue)" fillOpacity="0.9" />
      
      {/* Gold Border Ornament */}
      <rect x="15" y="15" width="34" height="34" rx="6" stroke="url(#termiziy-gold)" strokeWidth="1.5" />
      
      {/* Termiziy Arch (Mihrab) Silhouette */}
      <path 
        d="M22 42V31C22 25.4772 26.4772 21 32 21C37.5228 21 42 25.4772 42 31V42" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M26 42V33C26 29.6863 28.6863 27 32 27C35.3137 27 38 29.6863 38 33V42" 
        stroke="url(#termiziy-gold)" 
        strokeWidth="1.5" 
      />
      
      {/* Central Star & Illumination */}
      <circle cx="32" cy="33" r="2.5" fill="#f59e0b" />
      <circle cx="32" cy="18" r="1.5" fill="#ffffff" />
      <circle cx="18" cy="32" r="1.5" fill="#ffffff" />
      <circle cx="46" cy="32" r="1.5" fill="#ffffff" />
      <circle cx="32" cy="46" r="1.5" fill="#ffffff" />
    </svg>
  );
};

/**
 * Corner Arabesque Flourish for Cards
 */
export const CornerArabesque: React.FC<{ 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const transformClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
    'bottom-left': 'bottom-0 left-0 -rotate-90'
  }[position];

  return (
    <svg 
      width="44" 
      height="44" 
      viewBox="0 0 44 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${transformClass} pointer-events-none text-sky-500/25 ${className}`}
      aria-hidden="true"
    >
      <path 
        d="M0 0C24.3 0 44 19.7 44 44H38C38 23 21 6 0 6V0Z" 
        fill="currentColor" 
      />
      <path 
        d="M12 0C24 0 34 10 34 22H30C30 12 22 4 12 4V0Z" 
        fill="currentColor" 
        fillOpacity="0.7" 
      />
      <circle cx="28" cy="28" r="3" fill="#f59e0b" fillOpacity="0.7" />
    </svg>
  );
};
