import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './About.css';
import image from './About.png';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="about-us-container">
      <h1 className="about-us-title" data-aos="fade-up">About Us</h1>
      <div className="about-us-content">
        <div className="about-us-text" data-aos="fade-right">
          <p>
            We are a dedicated team with a passion for creating high-quality products and services. Our mission is to deliver exceptional results for our clients, using our expertise and innovative approach to exceed expectations. With years of experience in the industry, we are committed to continuous improvement and staying at the forefront of the latest trends.
          </p>
          <button className="gradient-button">Learn More</button>
        </div>
        <div className="about-us-image" data-aos="fade-left">
          <img src={image} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
