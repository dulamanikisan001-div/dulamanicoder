import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PlantCard from './PlantCard';

const ProductListing = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const plants = useSelector(state => state.products.plants);
  const categories = useSelector(state => state.products.categories);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      <h1>Our Houseplants</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={category-btn ${selectedCategory === category ? 'active' : ''}}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="plants-grid">
        {filteredPlants.map(plant => {
          const isInCart = cartItems.some(item => item.id === plant.id);
          return (
            <PlantCard
              key={plant.id}
              plant={plant}
              onAddToCart={() => handleAddToCart(plant)}
              isInCart={isInCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;

