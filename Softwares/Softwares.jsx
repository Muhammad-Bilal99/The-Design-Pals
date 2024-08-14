import React from "react";
import "./Softwares.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Softwares = () => {
  const softwareLogos = [
    { name: 'AI', logo: 'https://logowik.com/content/uploads/images/adobe-illustrator-cc2069.jpg' },
    { name: 'PS', logo: 'https://logowik.com/content/uploads/images/adobe-photoshop-cc3131.jpg' },
    { name: 'CS', logo: 'https://logowik.com/content/uploads/images/adobe-creative-cloud6378.jpg' },
    { name: 'Wilcom', logo: 'https://seeklogo.com/images/W/wilcom-logo-ADA1277B7E-seeklogo.com.png' },
    { name: 'InkSpace', logo: 'https://image.pngaaa.com/888/5990888-middle.png' },
    { name: 'AutoCAD', logo: 'https://seeklogo.com/images/A/autocad-logo-C9817CB828-seeklogo.com.png' },
    { name: 'Sketch', logo: 'https://seeklogo.com/images/S/sketch-logo-E6FC85934D-seeklogo.com.png' },
  ];

  const settings = {
    infinite: true,
    speed: 3000,  // Adjust speed as needed
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,  // Set to 0 for continuous scrolling
    pauseOnHover: false,  // Disable pause on hover
    cssEase: 'linear',  // Ensure a linear easing function for smooth scrolling
  };

  return (
    <div className="software-carousel-container">
      <h2>Softwares We Use</h2>
      <Slider {...settings}>
        {softwareLogos.map((software, index) => (
          <div className="carousel-item" key={index}>
            <img src={software.logo} alt={software.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Softwares;