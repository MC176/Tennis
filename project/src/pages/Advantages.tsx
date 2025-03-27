import React from 'react';
import { Leaf, Maximize, Smartphone } from 'lucide-react';

interface AdvantagesProps {
  language: string;
}

const Advantages: React.FC<AdvantagesProps> = ({ language }) => {
  const content = {
    fr: {
      title: 'Nos Avantages',
      subtitle: 'Découvrez ce qui rend Combe Arena unique',
      advantages: [
        {
          icon: <Leaf className="w-12 h-12" />,
          title: 'En pleine nature',
          description: 'Profitez d\'un cadre exceptionnel en pleine nature pour votre pratique sportive. Un environnement paisible et ressourçant pour une expérience unique.'
        },
        {
          icon: <Maximize className="w-12 h-12" />,
          title: 'Grands espaces',
          description: 'Des installations spacieuses et bien pensées pour votre confort. Profitez de grands espaces pour pratiquer votre sport en toute liberté.'
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: 'Infrastructures 100% digitales',
          description: 'Une expérience utilisateur optimale avec notre système de réservation en ligne. Sélectionnez votre court, réservez et payez en quelques clics.'
        }
      ]
    },
    en: {
      title: 'Our Advantages',
      subtitle: 'Discover what makes Combe Arena unique',
      advantages: [
        {
          icon: <Leaf className="w-12 h-12" />,
          title: 'In the heart of nature',
          description: 'Enjoy an exceptional natural setting for your sports practice. A peaceful and rejuvenating environment for a unique experience.'
        },
        {
          icon: <Maximize className="w-12 h-12" />,
          title: 'Large spaces',
          description: 'Spacious and well-thought-out facilities for your comfort. Enjoy large spaces to practice your sport freely.'
        },
        {
          icon: <Smartphone className="w-12 h-12" />,
          title: '100% digital infrastructure',
          description: 'Optimal user experience with our online booking system. Select your court, book and pay in just a few clicks.'
        }
      ]
    }
  };

  const currentContent = language === 'fr' ? content.fr : content.en;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">{currentContent.title}</h1>
        <p className="text-xl text-gray-600 text-center mb-12">{currentContent.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.advantages.map((advantage, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6 text-black">
                {advantage.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{advantage.title}</h3>
              <p className="text-gray-600 text-center">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;