import React from "react";
import FixedQ from "./FixedQ";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import Random from "./Random";
import About from "./About";
import Contact from "./Contact";
import Category from "./Category";
import Signinmodal from "./Signinmodal";
import Signupmodal from "./Signupmodal";

const App = () => {
  return (
    <>
    <SkeletonTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fixed" element={<FixedQ />} />
          <Route path="/random" element={<Random />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Signinmodal />} />
          <Route path="/signup" element={<Signupmodal />} />
        </Routes>
      </BrowserRouter>
      </SkeletonTheme>
    </>
  );
};

export default App;
