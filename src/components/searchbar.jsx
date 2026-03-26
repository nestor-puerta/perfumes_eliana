import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchbar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Categorías disponibles
  const categorias = {
    mujer: '/perfumes-mujer',
    hombre: '/perfumes-hombre',
    niño: '/perfumes-ninos',
    nino: '/perfumes-ninos',
    niños: '/perfumes-ninos',
    mascota: '/perfumes-mascotas',
    mascotas: '/perfumes-mascotas',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      alert('Por favor ingresa una palabra para buscar');
      return;
    }

    const busquedaLower = searchTerm.toLowerCase();
    const ruta = categorias[busquedaLower];

    if (ruta) {
      navigate(ruta);
      setSearchTerm('');
    } else {
      alert(`Busca por: mujer, hombre, niño, mascotas`);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <form className="searchbar-container" onSubmit={handleSearch}>
      <input
        type="text"
        className="searchbar-input"
        placeholder="mujer, hombre, niño, mascotas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button 
          type="button" 
          className="searchbar-clear-btn" 
          onClick={handleClear}
        >
          ✕
        </button>
      )}
      <button type="submit" className="searchbar-btn">🔍</button>
    </form>
  );
};

export default SearchBar;
