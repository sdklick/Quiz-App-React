import React from "react";
import Signinmodal from "./Signinmodal";
import { NavLink } from "react-router-dom";

const Signupmodal = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-success border rounded-end-circle"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Signup
      </button>

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModal1Label">
                Signup Here
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Set Your Username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Set your Password"
                    required
                  />
                </div>
                <div class="mb-3 float-end">
                  <button type="submit" class="btn btn-success">
                    Signup
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupmodal;
