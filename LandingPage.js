import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div 
        className="hero-section"
        style={{
          backgroundImage: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600'),
        }}
      >
        <div className="hero-content">
          <h1 className="company-name">GreenThumb Houseplants</h1>
          <p className="company-description">
            Welcome to GreenThumb, your premier destination for quality houseplants. 
            We specialize in bringing nature indoors with our carefully curated selection 
            of tropical plants, succulents, and air-purifying greens. Each plant is 
            nurtured with care and ready to thrive in your home.
          </p>
          <Link to="/products">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;