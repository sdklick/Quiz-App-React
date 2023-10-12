import React, { useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Footer from "./Footer";
import Pdfdown from "./Pdfdown";

const Result = (props) => {
  const { fimark, totalmark, tabledata } = props;
  const pdfref=useRef()
  return (
    <>
      <div className="row row-cols-1 row-cols-md-1 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-white border rounded-pill bg-success text-center p-2">
                RANDOM EXAM RESULT
              </h5>
              <div
                className="card mt-4 border border-success"
                style={{ textAlign: "center" }}
              >
                <div className="card-body">
                  {props.fimark >= 5 ? (
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

                  <h5 className="card-title mt-4">
                    You scored {fimark} of {totalmark}
                  </h5>

                  {props.fimark >= 5 ? (
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

                  <p
                    className={`card-text mt-5 border border-success rounded p-1`}
                    style={{fontSize:"20px"}}
                  >
                    {props.fimark >= 5 ? "PASS" : "FAIL"}
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
          </div>
        </div>
        <div ref={pdfref}>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-white border rounded-pill bg-success text-center p-2">
                QUESTION ANSWER LIST
              </h5>
              <table className="table table-success table-striped mt-4">
                {tabledata.map((val,index) => {
                  return (
                    <>
                      <thead>
                        <tr>
                          <th scope="col">{index+1}</th>
                          <th scope="col">{val.question.text}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Ans</th>
                          <td>{val.correctAnswer}</td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Pdfdown pdfref={pdfref}/>
      <Footer/>
    </>
  );
};

export default Result;
