import React from 'react';

const ServiceSection = () => {
  return (
    <section className="service">
      <h1>Service in Action</h1>
      <div className="grid">
        <div>
          <img src="path_to_image1.jpg" alt="Porches" />
          <div className="content">
            <h2>Porches</h2>
            <p>Our experts can repair and maintain your porch to keep it looking great.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="path_to_image2.jpg" alt="Bathroom" />
          <div className="content">
            <h2>Bathroom</h2>
            <p>Our team can help you design and build the perfect bathroom.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="path_to_image3.jpg" alt="Kitchen" />
          <div className="content">
            <h2>Kitchen</h2>
            <p>We specialize in kitchen renovations to create a space you'll love.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="path_to_image4.jpg" alt="Remodel" />
          <div className="content">
            <h2>Remodel</h2>
            <p>From design to construction, we handle every aspect of your remodel.</p>
          </div>
          <button>View More</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;