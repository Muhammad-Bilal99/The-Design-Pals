import React from 'react';
import './Navigation.css';
import Logo from './TDP-logo-svg.svg'

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img class="logo" src={Logo} alt="" /></a>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navigation;
