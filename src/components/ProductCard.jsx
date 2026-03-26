import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, price, image }) => {
  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <div className="product-card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="product-card-footer">
          <span className="price">${price}</span>
          <button className="product-btn">Ver detalles</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;