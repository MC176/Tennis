import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">COMBE ARENA</h3>
            <p className="text-gray-400">
              Complexe sportif avec courts de tennis et piste de BMX.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/a-propos" className="text-gray-400 hover:text-white">À Propos</Link></li>
              <li><Link to="/installations" className="text-gray-400 hover:text-white">Installations</Link></li>
              <li><Link to="/reservation" className="text-gray-400 hover:text-white">Réservation</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires d'Ouverture</h3>
            <ul className="text-gray-400">
              <li>Lundi - Dimanche : 8h - 20h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} COMBE ARENA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;