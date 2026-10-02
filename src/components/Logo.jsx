import React, { useState } from 'react';

const Logo = ({ className = '', showSubtext = true }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-3 select-none text-left py-1 ${className}`}>
      {!imgError ? (
        /* High-Definition 3x Cleaned Client Logo */
        <img 
          src="/images/logo.png" 
          alt="PROCARE Polyclinic Logo"
          onError={() => setImgError(true)}
          className="h-14 sm:h-16 md:h-20 lg:h-22 w-auto object-contain max-w-full transition-all duration-200"
        />
      ) : (
        /* 4K Vector SVG & Crisp Typography Fallback */
        <div className="flex items-center gap-3">
          <div className="shrink-0 flex items-center justify-center">
            <svg 
              viewBox="0 0 200 180" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-md" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 28 142 C 14 112 18 72 42 50 C 47 46 53 51 49 57 C 32 78 28 112 48 135 C 56 144 70 148 82 148 C 88 148 84 158 76 158 C 50 158 35 152 28 142 Z" 
                fill="url(#blue_grad_left)" 
              />
              <path 
                d="M 172 142 C 186 112 182 72 158 50 C 153 46 147 51 151 57 C 168 78 172 112 152 135 C 144 144 130 148 118 148 C 112 148 116 158 124 158 C 150 158 165 152 172 142 Z" 
                fill="url(#blue_grad_right)" 
              />
              <path 
                d="M 62 52 C 72 26 112 16 140 32 C 146 35 150 27 144 23 C 110 6 60 18 48 50 C 45 56 54 58 62 52 Z" 
                fill="#16A34A" 
              />
              <path 
                d="M 138 68 C 128 94 88 104 60 88 C 54 85 50 93 56 97 C 88 114 138 102 148 72 C 151 66 142 63 138 68 Z" 
                fill="#0284C7" 
              />
              <g transform="translate(100, 60)">
                <path 
                  d="M -13 -30 H 13 V -13 H 30 V 13 H 13 V 30 H -13 V 13 H -30 V -13 H -13 Z" 
                  fill="#DC2626" 
                />
                <path 
                  d="M 0 7 C -1.2 4.8 -7 -0.5 -7 -6.5 C -7 -11.2 -2.5 -13.5 0 -10 C 2.5 -13.5 7 -11.2 7 -6.5 C 7 -0.5 1.2 4.8 0 7 Z" 
                  fill="#FFFFFF" 
                />
                <path 
                  d="M 0 4.5 C -0.8 3.2 -4 -0.5 -4 -4 C -4 -7 0 -8.5 0 -6 C 0 -8.5 4 -7 4 -4 C 4 -0.5 0.8 3.2 0 4.5 Z" 
                  fill="#DC2626" 
                />
              </g>
              <defs>
                <linearGradient id="blue_grad_left" x1="20" y1="50" x2="80" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0B428C" />
                  <stop offset="100%" stopColor="#0055B8" />
                </linearGradient>
                <linearGradient id="blue_grad_right" x1="180" y1="50" x2="120" y2="160" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0B428C" />
                  <stop offset="100%" stopColor="#0055B8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col text-left">
            <div className="text-[12px] sm:text-[14px] font-bold text-slate-900 italic font-serif leading-tight">
              “We Treat, He Cures”
            </div>
            <div className="flex items-baseline gap-1.5 leading-none my-0.5">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#0B428C] font-serif uppercase tracking-tight">
                PROCARE
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#DC2626] italic font-serif tracking-tight">
                Progressively Healthy
              </span>
            </div>
            {showSubtext && (
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-extrabold text-[#DC2626] uppercase tracking-wider border-t border-red-200/80 pt-0.5">
                POLY CLINIC &nbsp;|&nbsp; DAY CARE &nbsp;|&nbsp; DIAGNOSTICS &nbsp;|&nbsp; PHARMACY
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
