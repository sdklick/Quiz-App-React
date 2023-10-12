import React from "react";
import { NavLink } from "react-router-dom";
import Signinmodal from "./Signinmodal";
import Signupmodal from "./Signupmodal";
import Nightday from "./Nightday";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <i className="fas fa-chalkboard-teacher text-success"></i>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fixed" className="nav-link">
                  Fixed
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/random" className="nav-link">
                  Random
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
            <Nightday />
          

          <div class="float-end">
            <div
              class="btn-group "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <Signinmodal />

              <Signupmodal />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
