'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 01-1.06 0l-1.59-1.591a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.061zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.106 17.894a.75.75 0 010-1.06l1.59-1.591a.75.75 0 011.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM3 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 12zM6.106 6.106a.75.75 0 011.06 0l1.591 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06z" />
  </svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.635 4.398-8.552a.75.75 0 01.82.161z" clipRule="evenodd" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-dark dark:text-light hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  );
};


export const FadeInSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        const { current } = domRef;
        if(current) {
            observer.observe(current);
        }

        return () => {
            if(current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`${className || ''} transition-opacity duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            {children}
        </div>
    );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
}

export const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const baseClasses = "rounded-3xl p-8 md:p-12";
  const variantClasses = {
    default: "bg-light-gray dark:bg-dark",
    glass: "bg-white/60 dark:bg-dark/60 backdrop-blur-lg border border-black/10 dark:border-white/10"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}>
      {children}
    </div>
  );
};