import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <button
      onClick={() => onLanguageChange(currentLanguage === 'fr' ? 'en' : 'fr')}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
    >
      <Globe className="h-5 w-5" />
      <span>{currentLanguage.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSelector;