import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const slides = [
  {
    image: 'https://c8.alamy.com/comp/2AP9BBD/textile-professional-and-industrial-embroidery-machine-machine-embroidery-is-an-embroidery-process-whereby-a-sewing-machine-or-embroidery-machine-i-2AP9BBD.jpg',
    heading: 'Exceptional Custom Patches with Fast Turnaround.',
    paragraph: 'Enhance your brand or express your unique style with our top-quality custom patches. We craft each patch with precision, ensuring vibrant colors and detailed designs that stand out.',
    buttonLabel: 'Learn More',
    buttonUrl: '#',
  },
  {
    image: 'https://via.placeholder.com/1920x1080?text=Slide+1',
    heading: 'Expert Embroidery Digitizing In Just 4 Hours',
    paragraph: 'Transform your designs into flawless embroidery with our expert digitizing services. We meticulously convert your artwork into digital embroidery files that ensure smooth, detailed stitching on any fabric.',
    buttonLabel: 'Learn More',
    buttonUrl: '#',
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/000/224/406/original/vector-fantasy-landscape-illustration.jpg',
    heading: 'Transform Your Ideas into Crisp Vector Artwork – Fast & Flawless.',
    paragraph: 'Get precise, scalable vector artwork tailored to your needs. Our expert team delivers high-quality designs with a quick turnaround, perfect for any application.',
    buttonLabel: 'Get Started',
    buttonUrl: '#',
  },
  {
    image: 'https://via.placeholder.com/1920x1080?text=Slide+3',
    heading: 'Stand Out with Custom Caps – Crafted Just for You.',
    paragraph: 'Stand out with custom caps, crafted to your style with embroidery or print. High quality, fast delivery, and designed just for you.',
    buttonLabel: 'Join Now',
    buttonUrl: '#',
  },
  {
    image: 'https://www.dtfnc.com/cdn/shop/files/8_1.jpg?v=1694199777',
    heading: 'High-Resolution DTF Sheets for Vibrant Prints.',
    paragraph: 'Vibrant, durable DTF sheets that bring your designs to life. High-resolution prints with a quick turnaround, perfect for apparel and more.',
    buttonLabel: 'Join Now',
    buttonUrl: '#',
  }
];

const Carousel = ({ interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const touchStartX = useRef(0);

  useEffect(() => {
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
    >
      <div
        className={`carousel-slide ${fadeIn ? 'fade-in' : 'fade-out'}`}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="carousel-content">
          <h1>{slides[currentIndex].heading}</h1>
          <p>{slides[currentIndex].paragraph}</p>
          <a href={slides[currentIndex].buttonUrl} className="carousel-button">
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
