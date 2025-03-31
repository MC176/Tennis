import React from 'react';
import { ArrowRight, Leaf, Maximize, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tennisCourt1, tennisHero, bmxTrack1 } from '../assets/images';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={tennisCourt1}
          alt="Tennis Court"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              COMBE ARENA
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Votre espace sportif dédié au tennis et au BMX
            </p>
            <Link
              to="/reservation"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-colors"
            >
              Réserver
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Tennis Courts */}
            <div className="text-center">
              <img
                src={tennisHero}
                alt="Courts de Tennis"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Courts de Tennis</h3>
              <p className="text-gray-600 mb-6">
                Deux courts de tennis professionnels avec éclairage LED
              </p>
              <Link
                to="/installations"
                className="inline-flex items-center px-6 py-3 text-white bg-black hover:bg-gray-900 transition-colors rounded-lg"
              >
                Découvrir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* BMX Track */}
            <div className="text-center">
              <img
                src={bmxTrack1}
                alt="Piste BMX"
                className="w-full h-64 object-cover mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Piste de BMX</h3>
              <p className="text-gray-600 mb-6">
                Une piste adaptée à tous les niveaux
              </p>
              <Link
                to="/installations"
                className="inline-flex items-center px-6 py-3 text-white bg-black hover:bg-gray-900 transition-colors rounded-lg"
              >
                Découvrir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nos Avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6 text-black">
                <Leaf className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">En pleine nature</h3>
              <p className="text-gray-600 text-center">
                Profitez d'un cadre exceptionnel en pleine nature pour votre pratique sportive. Un environnement paisible et ressourçant pour une expérience unique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6 text-black">
                <Maximize className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Grands espaces</h3>
              <p className="text-gray-600 text-center">
                Des installations spacieuses et bien pensées pour votre confort. Profitez de grands espaces pour pratiquer votre sport en toute liberté.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex justify-center mb-6 text-black">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Infrastructures 100% digitales</h3>
              <p className="text-gray-600 text-center">
                Une expérience utilisateur optimale avec notre système de réservation en ligne. Sélectionnez votre court, réservez et payez en quelques clics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Envie de nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre créneau et profitez de nos installations sportives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-white hover:bg-gray-100 transition-colors"
          >
            Nous Contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Saint Restitut Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Découvrez Saint Restitut</h2>
              <p className="text-gray-600 mb-6">
                Saint Restitut est un charmant village provençal situé dans la Drôme. Riche en histoire et en patrimoine, 
                il est connu pour sa pierre calcaire unique et ses carrières historiques. Le village offre une vue imprenable 
                sur la vallée du Rhône et les dentelles de Montmirail.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, Saint Restitut allie parfaitement tradition et modernité, comme en témoigne le complexe sportif 
                Combe Arena. Le village propose de nombreuses activités culturelles et sportives, faisant de lui un lieu de 
                vie dynamique et accueillant pour tous ses visiteurs.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1559751880-e0c1169aa845?q=80&w=1470"
                alt="Saint Restitut"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;