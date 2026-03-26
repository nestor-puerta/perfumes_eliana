import React from 'react';

const MapLocation = ({ 
  titulo = "Tiendas de perfumes", 
  direccion = "Visita tu tienda de perfumes más cercana",
  iframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1234567890!2d-74.1234567890!3d4.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDcnMzAuMiJOIDc0wrAwNyczMS40Ilc!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
}) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  };

  const tituloStyle = {
    color: '#5f2a6d',
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const direccionStyle = {
    color: '#666',
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  };

  const mapContainerStyle = {
    width: '100%',
    height: '350px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '2px solid #e9ecef',
  };

  return (
    <div style={containerStyle}>
      <h3 style={tituloStyle}>{titulo}</h3>
      <p style={direccionStyle}>
        <span style={{ fontSize: '1.2rem' }}>📍</span>
        {direccion}
      </p>
      <div style={mapContainerStyle}>
        <iframe
          src={iframeUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en el mapa"
        />
      </div>
    </div>
  );
};

export default MapLocation;
