import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Carousel from "../components/Carousel/Carousel";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Softwares from "../components/Softwares/Softwares";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";


const Home = () => {

  return (
    <>
    <Navigation/>
    <Carousel interval={4000} /> {/* Interval in milliseconds */}
    <About/>
    <Services/>
    <Softwares/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default Home;