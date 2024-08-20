import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CallToAction.css';

const CallToAction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="call-to-action" data-aos="fade-left">
      <h2 className="cta-heading" data-aos="fade-right">Transform Your Vision into Reality <br/> Partner up with the Best!</h2>
      <a href="/request-quote" className="cta-button" data-aos="zoom-in">Request Your Free Quote</a>
    </div>
  );
};

export default CallToAction;

