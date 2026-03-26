import React from 'react';
import Nav from './nav';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '1rem', textAlign: 'center' }}>
      <h1>Perfumes Elegantes</h1>
      <Nav />
    </header>
  );
};

export default Header;