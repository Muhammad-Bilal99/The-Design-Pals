import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';
import patches from './cusomt-patches-landscape.jpg';
import embroidery from './gettyimages-embroidery-transformed.jpeg';
import caps from './DeWatermark.ai_1724134061895.png';
import shirts from './gettyimages-121905915-612x612-transformed.jpeg';
import vector from './gettyimages-1322301439-612x612-transformed.jpeg';
import dtf from './DeWatermark.ai_1724133959629.png';

const services = [
  {
    title: 'Embroidery Digitizing',
    description: 'High-quality embroidery digitizing services.',
    imageUrl: embroidery,
  },
  {
    title: 'Custom Patches',
    description: 'Create custom patches for your brand or project.',
    imageUrl: patches,
  },
  {
    title: 'Vector Artwork',
    description: 'Professional vector artwork creation services.',
    imageUrl: vector,
  },
  {
    title: 'DTF Sheets',
    description: 'Durable and vibrant Direct to Film sheets.',
    imageUrl: dtf,
  },
  {
    title: 'Custom Caps',
    description: 'Design and order custom caps.',
    imageUrl: caps,
  },
  {
    title: 'T-Shirts',
    description: 'High-quality custom t-shirts.',
    imageUrl: shirts,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="services-container">
      <h1 className="services-title" data-aos="fade-up">Our Services</h1>
      <p className="services-description" data-aos="fade-up" data-aos-delay="200">
        We offer a wide range of services to meet your custom needs.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Delay based on the index
          >
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-text">{service.description}</p>
            <button className="gradient-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
