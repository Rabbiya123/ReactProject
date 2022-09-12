import "./css/style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Practice from "./components/Home/Practice";
import Desgin from "./components/Home/Desgin";
import Nav from "./components/Home/Nav";
import Footer from "./components/Home/Footer";
import Blog from "./components/Home/Blog";
import Coder from "./components/Home/Coder";
import HeroSlider from "./components/Home/HeroSlider";
import FormJava from "./components/Home/FormJava";
import Calculator from "./components/Home/Calculator";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="/Desgin" element={<Desgin />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Coder" element={<Coder />} />
        <Route path="/HeroSlider" element={<HeroSlider />} />
        <Route path="/FormJava" element={<FormJava />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
