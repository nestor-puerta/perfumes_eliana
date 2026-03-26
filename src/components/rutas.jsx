import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import PerfumesHombre from '../pages/PerfumesHombre';
import PerfumesMujer from '../pages/PerfumesMujer';
import PerfumesNinos from '../pages/PerfumesNinos';
import PerfumesMascotas from '../pages/PerfumesMascotas';
import Contact from '../pages/Contact';

function Rutas() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfumes-hombre" element={<PerfumesHombre />} />
        <Route path="/perfumes-mujer" element={<PerfumesMujer />} />
        <Route path="/perfumes-ninos" element={<PerfumesNinos />} />
        <Route path="/perfumes-mascotas" element={<PerfumesMascotas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Rutas;