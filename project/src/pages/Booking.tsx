import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, Users } from 'lucide-react';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedFacility, setSelectedFacility] = useState('');
  const [participants, setParticipants] = useState(1);

  const facilities = [
    { id: 'tennis1', name: 'Court de Tennis 1' },
    { id: 'tennis2', name: 'Court de Tennis 2' },
    { id: 'bmx', name: 'Piste de BMX' },
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ selectedDate, selectedTime, selectedFacility, participants });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Réserver votre créneau</h1>
        
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Facility Selection */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choisir une installation
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {facilities.map((facility) => (
                    <button
                      key={facility.id}
                      type="button"
                      className={`p-4 border rounded-lg text-center transition-colors ${
                        selectedFacility === facility.id
                          ? 'bg-black text-white border-black'
                          : 'border-gray-200 hover:border-black'
                      }`}
                      onClick={() => setSelectedFacility(facility.id)}
                    >
                      {facility.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline-block w-4 h-4 mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={format(new Date(), 'yyyy-MM-dd')}
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline-block w-4 h-4 mr-2" />
                  Horaire
                </label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Choisir un horaire</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              {/* Participants */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline-block w-4 h-4 mr-2" />
                  Nombre de participants
                </label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black"
                  value={participants}
                  onChange={(e) => setParticipants(parseInt(e.target.value))}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;