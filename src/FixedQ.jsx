import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {Qapi} from "./dataapi";
import Result from "./Result";
import Nav from "./Nav";
import "./App.css";
import Footer from "./Footer";

const FixedQ = () => {
  const [Qchange, setQchange] = useState(0);
  const [answerchose, setanswerchose] = useState();
  const [marks, setmarks] = useState(0);
  const [resultpage, setresultpage] = useState(false);

  const nextpage = () => {
    if (Qchange < Qapi.length) {
      setQchange(Qchange + 1);
    }
    if (answerchose === Qapi[Qchange].ans) {
      setmarks(marks + 1);
    }
  };

  const fimarks = () => {
    if (answerchose === Qapi[Qchange].ans) {
      setmarks(marks + 1);
    }
  };

  return (
    <>
      <Nav />
      {resultpage ? (
        <Result fimark={marks} />
      ) : (
        <div className="position-absolute top-0 start-50 translate-middle-x" style={{marginTop:"65px"}}>
          <h1 className="text-success text-center">Fixed Exam</h1>
          <div
            className="card mt-4 border border-success"
            style={{ textAlign: "center" }}
          >
            <div className="card-body">
              <h5 className="card-title">{Qapi[Qchange].qname}</h5>
              {Qapi[Qchange].o1.map((val, i) => {
                return (
                  <>
                    <p
                      key={i}
                      className={`card-text mt-5 border border-success rounded p-1 op ${
                        answerchose == val ? "lagado" : "matlagao"
                      }`}
                      onClick={() => {
                        setanswerchose(val);
                      }}
                    >
                      {val}
                    </p>
                  </>
                );
              })}
              {Qchange === Qapi.length - 1 ? (
                <button
                  onClick={() => {
                    fimarks();
                    setresultpage(true);
                  }}
                  className="btn btn-primary mt-3"
                >
                  Finish
                </button>
              ) : (
                <button onClick={nextpage} className="btn btn-primary mt-3">
                  Next
                </button>
              )}
            </div>
          </div>
          
          <Footer />
         
         
        </div>
      )}
    </>
  );
};

export default FixedQ;
