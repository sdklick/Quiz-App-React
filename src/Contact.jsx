import React from "react";
import Nav from "./Nav";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const Contact = () => {
  return (
    <>
      <Nav />

      <div class="card text-bg-dark text-center">
        <img
          src="https://source.unsplash.com/1600x700/?contact"
          class="card-img "
          alt="..."
        />
        <div class="card-img-overlay">
          <div class="card position-fixed top-50 start-50 translate-middle">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://source.unsplash.com/550x800/?india"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body ">
                  <h4 class="card-title mb-4">Contact Us</h4>
                  <div
                    class="row border rounded-pill"
                    style={{ backgroundColor: "orange" }}
                  >
                    <div class="col ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>

                  <div class="row mt-3" style={{ backgroundColor: "white" }}>
                    <div class="col ">
                      <input
                        type="email"
                        class="form-control border border-secondary rounded-pill"
                        placeholder="Email                                        ⚛"
                        aria-label="First name"
                      />
                    </div>
                  </div>
                  <div
                    class="row mt-3 border rounded-pill"
                    style={{ backgroundColor: "green" }}
                  >
                    <div class="col  ">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control "
                        placeholder="Message"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <input
                    type="file"
                    class="form-control mt-3 border border-success rounded-pill"
                  />
                  <button className="btn btn-primary mt-3">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
