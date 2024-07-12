'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';

export const IntersectionContext = createContext<string>('');

interface IntersectionProviderProps {
  children: ReactNode;
}

export const IntersectionProvider: React.FC<IntersectionProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <IntersectionContext.Provider value={activeSection}>
      {children}
    </IntersectionContext.Provider>
  );
};