import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carousel.css';
import embroidery from './embroidey-stock-transformed.jpeg';
import caps from './caps-stock-transformed.png';
import patches from './Untitled design.jpg';

const slides = [
  {
    image: patches,
    heading: 'Exceptional Custom Patches with Fast Turnaround.',
    paragraph: 'Enhance your brand or express your unique style with our top-quality custom patches. We craft each patch with precision, ensuring vibrant colors and detailed designs that stand out.',
    buttonLabel: 'Get a Quote',
    buttonUrl: '#',
  },
  {
    image: embroidery,
    heading: 'Expert Embroidery Digitizing In Just 4 Hours',
    paragraph: 'Transform your designs into flawless embroidery with our expert digitizing services. We meticulously convert your artwork into digital embroidery files that ensure smooth, detailed stitching on any fabric.',
    buttonLabel: 'Get a Quote',
    buttonUrl: '#',
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/000/224/406/original/vector-fantasy-landscape-illustration.jpg',
    heading: 'Transform Your Ideas into Crisp Vector Artwork – Fast & Flawless.',
    paragraph: 'Get precise, scalable vector artwork tailored to your needs. Our expert team delivers high-quality designs with a quick turnaround, perfect for any application.',
    buttonLabel: 'Get a Quote',
    buttonUrl: '#',
  },
  {
    image: caps,
    heading: 'Stand Out with Custom Caps – Crafted Just for You.',
    paragraph: 'Stand out with custom caps, crafted to your style with embroidery or print. High quality, fast delivery, and designed just for you.',
    buttonLabel: 'Get a Quote',
    buttonUrl: '#',
  },
  {
    image: 'https://www.dtfnc.com/cdn/shop/files/8_1.jpg?v=1694199777',
    heading: 'High-Resolution DTF Sheets for Vibrant Prints.',
    paragraph: 'Vibrant, durable DTF sheets that bring your designs to life. High-resolution prints with a quick turnaround, perfect for apparel and more.',
    buttonLabel: 'Get a Quote',
    buttonUrl: '#',
  }
];

const Carousel = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const touchStartX = useRef(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of AOS animation
      once: true, // Whether animation should happen only once
    });

    const slideInterval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFadeIn(true);
      }, 500);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  const goToPrevious = () => {
    setFadeIn(false);
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setFadeIn(true);
    }, 500);
  };

  const goToNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setFadeIn(true);
    }, 500);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      goToNext();
    }
    if (touchStartX.current - touchEndX < -50) {
      goToPrevious();
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      data-aos="fade-up"
    >
      <div
        className={`carousel-slide ${fadeIn ? 'fade-in' : 'fade-out'}`}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="carousel-content" data-aos="zoom-in">
          <h1>{slides[currentIndex].heading}</h1>
          <p>{slides[currentIndex].paragraph}</p>
          <a href={slides[currentIndex].buttonUrl} className="gradient-button">
            {slides[currentIndex].buttonLabel}
          </a>
        </div>
      </div>
      <button className="carousel-button-left" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-button-right" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
