import React from 'react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ currentLang, onLanguageChange }) => {
  const languages: { id: Language; flag: string; label: string }[] = [
    { id: 'pl', flag: '🇵🇱', label: 'PL' },
    { id: 'en', flag: '🇬🇧', label: 'EN' },
    { id: 'ua', flag: '🇺🇦', label: 'UA' },
  ];

  return (
    <div className="flex p-1 space-x-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 w-fit mx-auto mb-6">
      {languages.map((lang) => (
        <button
          key={lang.id}
          onClick={() => onLanguageChange(lang.id)}
          className={`
            px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            flex items-center gap-2
            ${currentLang === lang.id 
              ? 'bg-white/20 text-white shadow-lg border border-white/20' 
              : 'text-white/60 hover:text-white hover:bg-white/10'}
          `}
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  );
};