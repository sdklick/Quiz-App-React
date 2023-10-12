import React from "react";

const Signinmodal = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary border rounded-start"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Login
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 " id="exampleModalLabel">
                Login Here
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
                    placeholder="Enter Username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div class="mb-3 float-end">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <span>Do Not Have a Account? <strong className="text-success">Signup</strong> </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinmodal;
