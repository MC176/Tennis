import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Advantages from './pages/Advantages';

function App() {
  const [language, setLanguage] = useState('fr');

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header language={language} onLanguageChange={setLanguage} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/a-propos" element={<About language={language} />} />
            <Route path="/installations" element={<Facilities language={language} />} />
            <Route path="/reservation" element={<Booking language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/avantages" element={<Advantages language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;