import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { AboutsubApi,AboutTechApi } from "./dataapi";

const About = () => {
  return (
    <>
      <Nav />
      <div class="card text-center">
        <div class="card-header">WELCOME TO ABOUT EXAM PRO</div>
        <div class="card-body">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://source.unsplash.com/4000x6000/?exam"
                  style={{ height: "497px" }}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <NavLink to="/" className="navbar-brand">
                    <i
                      className="fas fa-chalkboard-teacher text-success"
                      style={{ fontSize: "40px" }}
                    ></i>
                  </NavLink>

                  <p
                    class="card-text mt-4 fw-bold"
                    style={{ fontSize: "16px" }}
                  >
                    Online Examination System is a cost-effective, scalable way
                    to convert traditional paper-based exams to online paperless
                    mode. Candidates can appear for the exam using any desktop
                    or mobile device with a browser. Exam results can be
                    generated instantly.
                  </p>
                  <div className="mb-3">
                    <p
                      class="card-text fw-bold btn btn-outline-success fw-bold border rounded-pill btn-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Exam Subjects
                      <br />
                      <i
                        className="	fas fa-arrow-alt-circle-down "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </p>
                  </div>

                  {AboutsubApi.map((val) => {
                    return (
                      <>
                        <span key={val.id} className="btn btn-outline-success fw-bold border rounded-pill btn-sm">
                          <i
                            className="fa fa-tag"
                            style={{ fontSize: "20px", color: "orange" }}
                          ></i>
                          <p style={{ fontSize: "12px" }}>{val.subname}</p>
                        </span>
                      </>
                    );
                  })}

                  <div className="mt-4 mb-4">
                    <p
                      class="card-text fw-bold btn btn-outline-success fw-bold border rounded-pill btn-sm"
                      style={{ fontSize: "16px" }}
                    >
                      Technology Use
                      <br />
                      <i
                        className="	fas fa-arrow-alt-circle-down "
                        style={{ fontSize: "20px" }}
                      ></i>
                    </p>
                  </div>
                  {AboutTechApi.map((val) => {
                    return (
                      <>
                        <span key={val.id} className="btn btn-outline-success fw-bold border rounded-pill btn-sm">
                          <i
                            className={val.ticon}
                            style={{ fontSize: "20px", color: "orange" }}
                          ></i>
                          <p style={{ fontSize: "12px" }}>{val.tname}</p>
                        </span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-body-secondary">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
