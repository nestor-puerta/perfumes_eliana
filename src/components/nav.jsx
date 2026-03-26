import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" style={{ margin: '0 1rem' }}>Inicio</Link>
      <Link to="/about" style={{ margin: '0 1rem' }}>Sobre Nosotros</Link>
      <Link to="/perfumes-hombre" style={{ margin: '0 1rem' }}>Hombre</Link>
      <Link to="/perfumes-mujer" style={{ margin: '0 1rem' }}>Mujer</Link>
      <Link to="/perfumes-ninos" style={{ margin: '0 1rem' }}>Niños</Link>
      <Link to="/perfumes-mascotas" style={{ margin: '0 1rem' }}>Mascotas</Link>
      <Link to="/contact" style={{ margin: '0 1rem' }}>Contacto</Link>
    </nav>
  );
};

export default Nav;