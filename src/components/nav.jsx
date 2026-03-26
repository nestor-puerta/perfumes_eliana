import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/about" className="nav-link">Sobre Nosotros</Link>
      <Link to="/perfumes-hombre" className="nav-link">Hombre</Link>
      <Link to="/perfumes-mujer" className="nav-link">Mujer</Link>
      <Link to="/perfumes-ninos" className="nav-link">Niños</Link>
      <Link to="/perfumes-mascotas" className="nav-link">Mascotas</Link>
      <Link to="/contact" className="nav-link">Contacto</Link>
    </nav>
  );
};

export default Nav;