import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = language === 'fr' ? [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Installations', href: '/installations' },
    { name: 'Avantages', href: '/avantages' },
    { name: 'Réservation', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/a-propos' },
    { name: 'Facilities', href: '/installations' },
    { name: 'Advantages', href: '/avantages' },
    { name: 'Booking', href: '/reservation' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-black/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">COMBE ARENA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;