import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';
import alice from './lady-portrait.jpg';
import jane from './lady-portrait2.jpg';
import john from './man-portrait.jpg';

const testimonials = [
  {
    text: "This service has completely transformed our business! The results speak for themselves.",
    clientName: "John Doe",
    clientCompany: "ABC Corp",
    clientImage: john
  },
  {
    text: "We couldn’t be happier with the outcomes. Highly recommended!",
    clientName: "Jane Smith",
    clientCompany: "XYZ Inc",
    clientImage: jane
  },
  {
    text: "Outstanding experience from start to finish. Our go-to solution provider!",
    clientName: "Alice Johnson",
    clientCompany: "Tech Solutions",
    clientImage: alice
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation occurs only once
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: 'linear',
  };

  return (
    <div className="testimonials-section" data-aos="fade-up">
      <h2 className="testimonials-heading" data-aos="fade-right">Don’t Just Take Our Word for It <br/>Hear from Our Clients</h2>
      <p className="testimonials-subheading" data-aos="fade-left">Trusted by our clients for excellence and reliability.</p>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial" data-aos="zoom-in" data-aos-delay={index * 100}>
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="client-info">
              <img src={testimonial.clientImage} alt={testimonial.clientName} className="client-image" />
              <div className="client-details">
                <p className="client-name">{testimonial.clientName}</p>
                <p className="client-company">{testimonial.clientCompany}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
