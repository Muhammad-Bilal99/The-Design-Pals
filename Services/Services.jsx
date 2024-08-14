import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Embroidery Digitizing',
    description: 'High-quality embroidery digitizing services.',
    imageUrl: 'https://via.placeholder.com/150x100', // Replace with actual image URLs
  },
  {
    title: 'Custom Patches',
    description: 'Create custom patches for your brand or project.',
    imageUrl: 'https://via.placeholder.com/150x100',
  },
  {
    title: 'Vector Artwork',
    description: 'Professional vector artwork creation services.',
    imageUrl: 'https://via.placeholder.com/150x100',
  },
  {
    title: 'DTF Sheets',
    description: 'Durable and vibrant Direct to Film sheets.',
    imageUrl: 'https://via.placeholder.com/150x100',
  },
  {
    title: 'Custom Caps',
    description: 'Design and order custom caps.',
    imageUrl: 'https://via.placeholder.com/150x100',
  },
  {
    title: 'T-Shirts',
    description: 'High-quality custom t-shirts.',
    imageUrl: 'https://via.placeholder.com/150x100',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        We offer a wide range of services to meet your custom needs.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-text">{service.description}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
