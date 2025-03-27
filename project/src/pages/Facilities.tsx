import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Nos Installations</h1>

        {/* Tennis Courts */}
        <div className="mb-20">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1964"
                alt="Courts de Tennis"
                className="h-96 w-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Courts de Tennis</h2>
                <p className="text-gray-600 mb-6">
                  Deux courts de tennis bien entretenus avec éclairage LED pour le jeu en soirée. 
                  Parfaits pour les parties amicales comme pour l'entraînement.
                </p>
                <ul className="space-y-2 text-gray-600 mb-8">
                  <li>• Surface de qualité</li>
                  <li>• Éclairage LED</li>
                  <li>• Bancs de repos</li>
                  <li>• Location de matériel</li>
                </ul>
                <Link
                  to="/reservation"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-900 transition-colors rounded-lg"
                >
                  Réserver un Court
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Piste BMX */}
        <div className="mb-20">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Piste de BMX</h2>
                <p className="text-gray-600 mb-6">
                  Une piste de BMX adaptée à tous les niveaux, permettant aux débutants 
                  comme aux plus expérimentés de progresser dans leur pratique.
                </p>
                <ul className="space-y-2 text-gray-600 mb-8">
                  <li>• Parcours varié</li>
                  <li>• Zone débutants</li>
                  <li>• Entretien régulier</li>
                  <li>• Équipements de sécurité disponibles</li>
                </ul>
                <Link
                  to="/reservation"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-900 transition-colors rounded-lg"
                >
                  Réserver la Piste
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <img
                src="https://unsplash.com/fr/photos/textile-blanc-sur-un-champ-dherbe-verte-pres-des-arbres-pendant-la-journee-u_CJSPUW908"
                alt="Piste BMX"
                className="h-96 w-full object-cover order-1 md:order-2"
              />
            </div>
          </div>
        </div>

        {/* Vestiaires */}
        <div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                src="https://unsplash.com/fr/photos/commode-a-cote-du-canape-JIUjvqe2ZHg"
                alt="Vestiaires"
                className="h-96 w-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Vestiaires</h2>
                <p className="text-gray-600 mb-6">
                  Des vestiaires propres et bien équipés pour votre confort avant et après 
                  votre séance sportive.
                </p>
                <ul className="space-y-2 text-gray-600 mb-8">
                  <li>• Douches</li>
                  <li>• Casiers sécurisés</li>
                  <li>• Espace de rangement</li>
                  <li>• Entretien quotidien</li>
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-900 transition-colors rounded-lg"
                >
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;