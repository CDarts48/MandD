import React from 'react';

const Header = ({ toggleSubmenu }) => {
  return (
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
  );
}

export default Header;