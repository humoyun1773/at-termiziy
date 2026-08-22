import React from 'react';

/**
 * Islamic Girih Geometric Background Pattern (Rich & Crisp Multi-Layer SVG Vector)
 */
export const IslamicGirihPattern: React.FC<{ className?: string; opacity?: number; color?: string }> = ({ 
  className = '', 
  opacity = 0.12,
  color = '#0284c7'
}) => {
  return (
    <svg 
      className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="girih-star-pattern-rich" width="90" height="90" patternUnits="userSpaceOnUse">
          {/* Main 8-pointed Islamic Star Geometry */}
          <path
            d="M45,10 L54,28 L72,22 L65,40 L83,45 L65,50 L72,68 L54,62 L45,80 L36,62 L18,68 L25,50 L7,45 L25,40 L18,22 L36,28 Z"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Gold Inner Star Accent */}
          <polygon
            points="45,24 58,45 45,66 32,45"
            fill="rgba(245, 158, 11, 0.08)"
            stroke="#f59e0b"
            strokeWidth="1.2"
          />
          {/* Diamond Interlace */}
          <polygon
            points="35,35 55,35 55,55 35,55"
            fill="none"
            stroke={color}
            strokeWidth="1.2"
          />
          {/* Central Gold Node */}
          <circle cx="45" cy="45" r="3" fill="#f59e0b" />
          
          {/* Corner Girih Connecting Knot Lines */}
          <path d="M0,0 L20,20 M90,0 L70,20 M0,90 L20,70 M90,90 L70,70" stroke={color} strokeWidth="1.2" />
          <circle cx="0" cy="0" r="4" fill="#f59e0b" />
          <circle cx="90" cy="0" r="4" fill="#f59e0b" />
          <circle cx="0" cy="90" r="4" fill="#f59e0b" />
          <circle cx="90" cy="90" r="4" fill="#f59e0b" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#girih-star-pattern-rich)" />
    </svg>
  );
};

/**
 * Animated Rotating Islamic Geometric Mandala (Rosette)
 */
export const TermiziyMandalaRing: React.FC<{ size?: number; className?: string; opacity?: number }> = ({ 
  size = 320, 
  className = '',
  opacity = 0.15
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      className={`pointer-events-none animate-[spin_60s_linear_infinite] ${className}`}
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="90" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="75" stroke="#f59e0b" strokeWidth="1.5" />
      
      {/* 12-point Interlaced Islamic Rosette */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => (
        <rect 
          key={i} 
          x="30" 
          y="30" 
          width="140" 
          height="140" 
          rx="12" 
          transform={`rotate(${angle} 100 100)`} 
          stroke={i % 2 === 0 ? "#0284c7" : "#d97706"} 
          strokeWidth="1.2" 
          fill="none" 
        />
      ))}
      <circle cx="100" cy="100" r="28" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="100" cy="100" r="10" fill="#0284c7" />
    </svg>
  );
};

/**
 * Authentic Oriental Arabesque Divider (Islimiy Naqshli Medalyon)
 */
export const ArabesqueDivider: React.FC<{ className?: string; color?: string }> = ({ 
  className = '',
  color = '#0284c7' 
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 select-none ${className}`}>
      <div className="h-[2px] flex-1 max-w-[140px] bg-gradient-to-r from-transparent via-amber-400 to-sky-500 rounded-full" />
      <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 drop-shadow-sm hover:scale-110 transition-transform">
        {/* Central Lotus & Arabesque Medallion */}
        <path d="M30 2C30 2 36 9 36 14C36 19 30 26 30 26C30 26 24 19 24 14C24 9 30 2 30 2Z" fill={color} fillOpacity="0.95" />
        <path d="M30 6C30 6 42 11 42 14C42 17 30 22 30 22C30 22 18 17 18 14C18 11 30 6 30 6Z" fill="#f59e0b" fillOpacity="0.75" />
        <circle cx="30" cy="14" r="3.5" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
        
        {/* Side Lotus Flourishes */}
        <circle cx="12" cy="14" r="2.5" fill={color} />
        <circle cx="48" cy="14" r="2.5" fill={color} />
        <path d="M4 14H8 M52 14H56" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="h-[2px] flex-1 max-w-[140px] bg-gradient-to-l from-transparent via-amber-400 to-sky-500 rounded-full" />
    </div>
  );
};

/**
 * Oriental Archway / Mihrab Crest Badge
 */
export const TermiziyEmblem: React.FC<{ size?: number; className?: string }> = ({ 
  size = 64, 
  className = '' 
}) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Golden Aura Glow */}
      <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-md animate-pulse" />
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`relative z-10 drop-shadow-md hover:scale-105 transition-transform duration-300 ${className}`}
      >
        <defs>
          <linearGradient id="termiziy-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="termiziy-sky-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        
        {/* Outer 8-point Star Seal */}
        <rect x="12" y="12" width="40" height="40" rx="8" transform="rotate(45 32 32)" fill="url(#termiziy-sky-grad)" />
        <rect x="12" y="12" width="40" height="40" rx="8" fill="url(#termiziy-sky-grad)" fillOpacity="0.9" />
        
        {/* Gold Border Ornament */}
        <rect x="14" y="14" width="36" height="36" rx="6" stroke="url(#termiziy-gold-grad)" strokeWidth="2" />
        <rect x="17" y="17" width="30" height="30" rx="4" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="2 2" />
        
        {/* Termiziy Arch (Mihrab) Silhouette */}
        <path 
          d="M21 43V31C21 24.9248 25.9248 20 32 20C38.0752 20 43 24.9248 43 31V43" 
          stroke="#ffffff" 
          strokeWidth="2.2" 
          strokeLinecap="round"
        />
        <path 
          d="M25 43V33C25 29.134 28.134 26 32 26C35.866 26 39 29.134 39 33V43" 
          stroke="url(#termiziy-gold-grad)" 
          strokeWidth="1.8" 
        />
        
        {/* Central Star & Illumination */}
        <circle cx="32" cy="33" r="3" fill="#f59e0b" />
        <circle cx="32" cy="18" r="2" fill="#ffffff" />
        <circle cx="18" cy="32" r="2" fill="#ffffff" />
        <circle cx="46" cy="32" r="2" fill="#ffffff" />
        <circle cx="32" cy="46" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
};

/**
 * Corner Arabesque Flourish for Cards & Banners (Vibrant Gold & Sky)
 */
export const CornerArabesque: React.FC<{ 
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position = 'top-right', className = '', size = 56 }) => {
  const transformClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
    'bottom-left': 'bottom-0 left-0 -rotate-90'
  }[position];

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${transformClass} pointer-events-none transition-transform duration-300 ${className}`}
      aria-hidden="true"
    >
      <path 
        d="M0 0C30.9 0 56 25.1 56 56H48C48 29.5 26.5 8 0 8V0Z" 
        fill="url(#corner-sky-grad)" 
        fillOpacity="0.45"
      />
      <path 
        d="M15 0C33.2 0 48 14.8 48 33H42C42 18.1 29.9 6 15 6V0Z" 
        fill="#f59e0b" 
        fillOpacity="0.55" 
      />
      <path 
        d="M0 15C18.2 15 33 29.8 33 48V42C18.1 42 6 29.9 6 15H0Z" 
        fill="#0284c7" 
        fillOpacity="0.4" 
      />
      <circle cx="36" cy="36" r="4.5" fill="#f59e0b" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1" />
      <circle cx="22" cy="22" r="2.5" fill="#0284c7" />
      <defs>
        <linearGradient id="corner-sky-grad" x1="0" y1="0" x2="56" y2="56">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

/**
 * Top Oriental Tile Border Band
 */
export const OrientalTopBorderBand: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-2.5 bg-gradient-to-r from-sky-600 via-amber-400 to-sky-600 relative overflow-hidden shadow-xs ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-60" />
    </div>
  );
};

/**
 * Vertical Oriental Border Pillars for Screen Edges
 */
export const OrientalSideBorder: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const positionClass = side === 'left' ? 'left-0' : 'right-0';
  return (
    <div className={`fixed top-0 bottom-0 ${positionClass} w-2.5 sm:w-3.5 z-30 pointer-events-none hidden md:block overflow-hidden`}>
      <div className="w-full h-full bg-gradient-to-b from-sky-600 via-amber-400 to-blue-700 opacity-70 shadow-lg" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:10px_10px] opacity-50" />
    </div>
  );
};
