import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const Result = (props) => {
  return (
    <>
      <div  className="position-absolute top-0 start-50 translate-middle-x mt-4" >
      <h1 style={{marginTop:"65px"}} className="text-white border rounded-pill bg-success text-center p-2">FIXED RESULT</h1>
        <div
          className="card mt-4 border border-success"
          style={{ textAlign: "center" }}
        >
          <div className="card-body">
            {props.fimark >= 3 ? (
              <i
                className="fa fa-check"
                style={{ fontSize: "100px", color: "green" }}
              ></i>
            ) : (
              <i
                className="fa fa-close"
                style={{ fontSize: "100px", color: "red" }}
              ></i>
            )}

            <h5 className="card-title mt-4">You scored {props.fimark} of 5</h5>

            {props.fimark >= 3 ? (
              <i
                className="fa fa-hand-o-down mt-5"
                style={{ fontSize: "50px", color: "green" }}
              ></i>
            ) : (
              <i
                className="fa fa-hand-o-down mt-5"
                style={{ fontSize: "50px", color: "red" }}
              ></i>
            )}

            <p className={`card-text mt-5 border border-success rounded p-1`}>
              {props.fimark >= 3 ? "PASS" : "FAIL"}
            </p>
            <i
              onClick={() => {
                window.location.reload(false);
              }}
              className="fa fa-refresh "
              style={{ fontSize: "20px", color: "orange" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
