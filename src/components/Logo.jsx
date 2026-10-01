import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = 'h-16 sm:h-20 md:h-24' }) => {
  return (
    <div className="inline-flex items-center select-none py-1">
      <img 
        src={logoImg} 
        alt="PRO CARE Poly Clinic - We Treat, He Cures" 
        className={`object-contain max-w-full drop-shadow-sm ${className}`}
      />
    </div>
  );
};

export default Logo;
