import React from 'react';
import './App.css';

const App = () => {
  const toggleSubmenu = (event) => {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <>
      <header>
        <h1>Topher's Maintenance and Repair</h1>
        <nav>
          <ul className="nav">
            <li><a href="/">Welcome</a></li>
            <li>
              <a href="/services" onClick={toggleSubmenu}>Services</a>
              <ul className="sub-menu">
                <li><a href="/services/landscape-irrigation">Landscape & Irrigation</a></li>
                <li><a href="/services/concrete-asphalt">Concrete & Asphalt</a></li>
                <li><a href="/services/snow-ice">Snow & Ice Management</a></li>
                <li><a href="/services/construction">Construction Services</a></li>
              </ul>
            </li>
            <li>
              <a href="/about-us" onClick={toggleSubmenu}>About</a>   
            </li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </nav>
      </header>
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
      <section className="service">
        <h1>Service in Action</h1>
        <div className="grid">
          <div>
            <img src="path_to_image1.jpg" alt="Porches" />
            <h2>Porches</h2>
            <p>Our experts can repair and maintain your porch to keep it looking great.</p>
            <button>View More</button>
          </div>
          <div>
            <img src="path_to_image2.jpg" alt="Bathroom" />
            <h2>Bathroom</h2>
            <p>Our team can help you design and build the perfect bathroom.</p>
            <button>View More</button>
          </div>
          <div>
            <img src="path_to_image3.jpg" alt="Kitchen" />
            <h2>Kitchen</h2>
            <p>We specialize in kitchen renovations to create a space you'll love.</p>
            <button>View More</button>
          </div>
          <div>
            <img src="path_to_image4.jpg" alt="Remodel" />
            <h2>Remodel</h2>
            <p>From design to construction, we handle every aspect of your remodel.</p>
            <button>View More</button>
          </div>
        </div>
      </section>
      <section className="preventative">
        <h1>Reviews</h1>
        <p>Learn about our preventative care services to prolong the life of your equipment.</p>
      </section>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>Have a question or need a quote? Contact us today!</p>
      </section>
      <footer>
        <p>© 2024 Topher's Maintenance and Repair</p>
      </footer>
    </>
  );
}

export default App;