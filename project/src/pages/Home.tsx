import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070"
        >
          <source
            src="https://player.vimeo.com/external/477743905.sd.mp4?s=4c6d7a4c8a9c6f75c69d9d9cae99c66c78b45c1c&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
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
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1964"
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
                src="https://images.unsplash.com/photo-1570829053985-56e661df1ca2?q=80&w=2070"
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
    </div>
  );
};

export default Home;