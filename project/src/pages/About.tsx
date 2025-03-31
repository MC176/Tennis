import React from 'react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">À Propos de Combe Arena</h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1470"
              alt="Combe Arena"
              className="w-full h-96 object-cover"
            />
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Notre Vision</h2>
              <p className="text-gray-600 mb-8">
                Combe Arena est un complexe sportif accueillant et moderne, conçu pour tous les passionnés 
                de sport. Nos installations comprennent des courts de tennis de qualité et une piste de BMX, 
                offrant un espace idéal pour la pratique sportive.
              </p>

              <h2 className="text-2xl font-bold mb-6">Notre Engagement</h2>
              <p className="text-gray-600 mb-8">
                Nous nous engageons à fournir des installations sportives de qualité, accessibles à tous. 
                Notre équipe veille à l'entretien régulier des équipements pour garantir une expérience 
                sportive optimale.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Nos Installations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Courts de tennis bien entretenus</li>
                    <li>• Éclairage LED pour jeu nocturne</li>
                    <li>• Piste de BMX sécurisée</li>
                    <li>• Vestiaires équipés</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Réservation en ligne</li>
                    <li>• Location d'équipement</li>
                    <li>• Parking gratuit</li>
                    <li>• Espace détente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;