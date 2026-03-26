import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <section style={{ backgroundColor: '#e9ecef', padding: '2rem', textAlign: 'center' }}>
        <h2>Bienvenido a nuestra colección de perfumes</h2>
        <p>Descubre aromas únicos para cada ocasión.</p>
        <img src="https://via.placeholder.com/400x200?text=Perfumes" alt="Perfumes" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>
    </>
  );
};

export default Home;