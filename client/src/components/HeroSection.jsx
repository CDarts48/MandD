import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="path_to_your_image.jpg" alt="Hero" />
        </div>
        <div className="hero-text">
          <h1>Quality Service</h1>
          <p>Professional handyman for residential and commercial properties.</p>
          <button>Contact Me Today!</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;