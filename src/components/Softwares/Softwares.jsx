import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Softwares.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Softwares = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
  }, []);

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
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
  };

  return (
    <div className="software-carousel-container" data-aos="fade-up">
      <h2 className="heading" data-aos="fade-right">Softwares We Use</h2>
      <Slider {...settings}>
        {softwareLogos.map((software, index) => (
          <div className="carousel-item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <img src={software.logo} alt={software.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Softwares;
