'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (value: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('');

  // Load saved theme from localStorage once on mount
  useEffect(() => {
    const saved = localStorage.getItem('techisn-theme-active') || '';
    setTheme(saved);
  }, []);

  // Whenever theme state changes, update the document class and localStorage
  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem('techisn-theme-active', theme);
    } else {
      document.documentElement.className = '';
      localStorage.removeItem('techisn-theme-active');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
