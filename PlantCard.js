import React from 'react';

const PlantCard = ({ plant, onAddToCart, isInCart }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="category">{plant.category}</p>
        <p className="description">{plant.description}</p>
        <div className="price-section">
          <span className="price">${plant.price.toFixed(2)}</span>
          <button
            className={add-to-cart-btn ${isInCart ? 'disabled' : ''}}
            onClick={onAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;