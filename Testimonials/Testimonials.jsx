import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa'; // Quotation mark icon

const testimonials = [
  {
    text: "This service has completely transformed our business! The results speak for themselves.",
    clientName: "John Doe",
    clientCompany: "ABC Corp",
    clientImage: "https://via.placeholder.com/100?text=JD"
  },
  {
    text: "We couldn’t be happier with the outcomes. Highly recommended!",
    clientName: "Jane Smith",
    clientCompany: "XYZ Inc",
    clientImage: "https://via.placeholder.com/100?text=JS"
  },
  {
    text: "Outstanding experience from start to finish. Our go-to solution provider!",
    clientName: "Alice Johnson",
    clientCompany: "Tech Solutions",
    clientImage: "https://via.placeholder.com/100?text=AJ"
  },
];

const Testimonials = () => {
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
    <div className="testimonials-section">
      <h2 className="testimonials-heading">Don’t Just Take Our Word for It <br/>Hear from Our Clients</h2>
      <p className="testimonials-subheading">Trusted by our clients for excellence and reliability.</p>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
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
