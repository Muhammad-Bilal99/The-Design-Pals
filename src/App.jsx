import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
  <Routes>
    <Route path="" element={<Home/>}/>
  </Routes> 
  );
};

export default App;
