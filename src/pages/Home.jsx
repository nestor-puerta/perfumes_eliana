import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const categorias = [
  {
    id: 1,
    nombre: 'Hombre',
    descripcion: 'Aromes varoniles y sofisticados',
    imagen: 'https://media.gq.com.mx/photos/5f03717b85180fb06783509c/16:9/w_2560%2Cc_limit/Cover.jpg',
    ruta: '/perfumes-hombre',
  },
  {
    id: 2,
    nombre: 'Mujer',
    descripcion: 'Fragancias delicadas y elegantes',
    imagen: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
    ruta: '/perfumes-mujer',
  },
  {
    id: 3,
    nombre: 'Niños',
    descripcion: 'Dulces y divertida para los pequeños',
    imagen: 'https://img.grouponcdn.com/deal/iw8kjFoFJgxtGQAqKgbR/cU-1000x600/v1/t440x300.jpg',
    ruta: '/perfumes-ninos',
  },
  {
    id: 4,
    nombre: 'Mascotas',
    descripcion: 'Aromes suaves para consentir a tu mascota',
    imagen: 'https://tse1.mm.bing.net/th/id/OIP.e5eu9m8dF0o_uXFvjM27QAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    ruta: '/perfumes-mascotas',
  },
];

const Home = () => {
  return (
    <>
      <section style={{ backgroundColor: '#e9ecef', padding: '2rem', textAlign: 'center' }}>
        <h2>Bienvenido a nuestra colección de perfumes</h2>
        <p>Descubre aromas únicos para cada ocasión.</p>
        <img src="https://via.placeholder.com/400x200?text=Perfumes" alt="Perfumes" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>

      <section style={{ padding: '2rem 1rem' }}>
        <h3 style={{ textAlign: 'center', color: '#5f2a6d', marginBottom: '2rem' }}>Explora nuestras categorías</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {categorias.map((categoria) => (
            <Link 
              to={categoria.ruta} 
              key={categoria.id}
              style={{ 
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                backgroundColor: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
              >
                <img 
                  src={categoria.imagen} 
                  alt={categoria.nombre}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover' 
                  }} 
                />
                <div style={{ padding: '1.2rem', textAlign: 'center', backgroundColor: '#fff' }}>
                  <h4 style={{ 
                    color: '#5f2a6d', 
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.3rem',
                  }}>
                    {categoria.nombre}
                  </h4>
                  <p style={{ 
                    color: '#666', 
                    margin: 0,
                    fontSize: '0.9rem',
                  }}>
                    {categoria.descripcion}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;