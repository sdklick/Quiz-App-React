import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import Randomresult from "./Randomresult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Random = () => {
  const [data, setdata] = useState([]);
  const [qchange, setqchange] = useState(0);
  const [load, setload] = useState(false);
  const [fioption, setfioption] = useState([]);
  const [fires, setfires] = useState(0);
  const [answerc, setanswerc] = useState();
  const [resultpage, setresultpage] = useState(false);
  const [nextcheck, setnextcheck] = useState(false);

  useEffect(() => {
    Apidata();
  }, []);
  useEffect(() => {
    load ? Qmix() : null;
  }, [load]);
  useEffect(() => {
    load ? Qmix() : null;
  }, [qchange]);
  useEffect(() => {
    load ? optioncheck() : null;
  }, [qchange]);

  const Apidata = async () => {
    let dataurl = await fetch("https://the-trivia-api.com/v2/questions");
    let fiurl = await dataurl.json();
    setdata(fiurl);
    setload(true);
  };

  const nextpage = () => {
    if (qchange < data.length - 1) {
      setqchange(qchange + 1);
    }
  };

  const Qmix = () => {
    let wanswer = data[qchange].incorrectAnswers;
    let canswer = data[qchange].correctAnswer;
    let mixdata = [...wanswer];
    let rand = Math.floor(Math.random() * (mixdata.length + 1));
    mixdata.splice(rand, 0, canswer);
    setfioption(mixdata);
  };

  const fimarks = () => {
    answerc == data[qchange].correctAnswer ? setfires(fires + 1) : null;
  };

  const optioncheck = () => {
    setnextcheck(false);
  };

  return (
    <>
      <Nav />
      {resultpage ? (
        <Randomresult fimark={fires} totalmark={qchange + 1} tabledata={data} />
      ) : (
        <div className="card text-center">
          {/* Tag Section */}
          {load ? (
            <div className="card-header">
              <span className="btn btn-primary border rounded-pill btn-sm">
                <i
                  className="fa fa-tag"
                  style={{ fontSize: "20px", color: "greenyellow" }}
                ></i>
              </span>
              <span className="btn btn-muted border rounded-pill btn-sm">
                <i
                  className="fas fa-arrow-alt-circle-right"
                  style={{ fontSize: "20px" }}
                ></i>
              </span>
              {data[qchange].tags.map((val, index) => {
                return (
                  <>
                    <span
                      key={val}
                      className="ml-5 btn btn-success border rounded-pill btn-sm"
                    >
                      {val}
                    </span>
                  </>
                );
              })}
              {/* question id section */}

              <span className="ml-5 btn btn-success border rounded-pill btn-sm float-end">
                {data[qchange].id}
              </span>
              <span className="btn btn-muted border rounded-pill btn-sm float-end">
                <i
                  className="fas fa-arrow-alt-circle-right"
                  style={{ fontSize: "20px" }}
                ></i>
              </span>
              <span className="btn btn-primary border rounded-pill btn-sm float-end ">
                <i
                  className="fas fa-id-card-alt "
                  style={{ fontSize: "20px", color: "greenyellow" }}
                ></i>
              </span>
            </div>
          ) : (
            <Skeleton count={40} />
          )}

          {/* Question category section */}

          <div className="card-body">
            <div className="row">
              <div className="col">
                {load ? (
                  <div>
                    <span className="btn btn-primary border rounded-pill btn-sm">
                      <i
                        className="fas fa-list-alt"
                        style={{ fontSize: "20px", color: "greenyellow" }}
                      ></i>
                    </span>
                    <span className="btn btn-muted border rounded-pill btn-sm">
                      <i
                        className="fas fa-arrow-alt-circle-right"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>

                    <span className="btn btn-success border rounded-pill btn-sm">
                      {data[qchange].category}
                    </span>
                  </div>
                ) : (
                  <Skeleton />
                )}
              </div>

              {/* Question difficulty section */}

              <div className="col">
                {load ? (
                  <div>
                    <span className="btn btn-primary border rounded-pill btn-sm">
                      {data[qchange].difficulty == "easy" ? (
                        <i
                          className="fas fa-smile"
                          style={{ fontSize: "20px", color: "greenyellow" }}
                        ></i>
                      ) : data[qchange].difficulty == "medium" ? (
                        <i
                          className="fas fa-tired"
                          style={{ fontSize: "20px", color: "greenyellow" }}
                        ></i>
                      ) : (
                        <i
                          className="fas fa-sad-tear"
                          style={{ fontSize: "20px", color: "greenyellow" }}
                        ></i>
                      )}
                    </span>
                    <span className="btn btn-muted border rounded-pill btn-sm">
                      <i
                        className="fas fa-arrow-alt-circle-right"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </span>

                    <span className="btn btn-success border rounded-pill btn-sm">
                      {data[qchange].difficulty}
                    </span>
                  </div>
                ) : (
                  <Skeleton />
                )}
              </div>
            </div>
            {/* Question section */}

            {load ? (
              <div className="m-5">
                <span className="btn btn-primary border rounded-pill btn-sm">
                  {qchange + 1}/10
                </span>
                <span className="btn btn-muted border rounded-pill btn-sm">
                  <i
                    className="fas fa-arrow-alt-circle-right"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>

                <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {data[qchange].question.text}
                </span>
              </div>
            ) : (
              <Skeleton />
            )}
            {/* Question option section */}
            {load ? (
              fioption.map((val, index) => {
                return (
                  <>
                    <h4
                      style={{ fontSize: "20px" }}
                      className={`op p-2 bg-outline-success border rounded-pill btn-sm ${
                        answerc == val ? "lagado" : "matlagao"
                      }`}
                      key={data[qchange].id}
                      onClick={() => {
                        setanswerc(val);
                        setnextcheck(true);
                      }}
                    >
                      {val}
                    </h4>
                    <br />
                  </>
                );
              })
            ) : (
              <Skeleton />
            )}

            {/* next Question section */}
            {data.length - 1 == qchange ? (
              <button
                onClick={() => {
                  if (nextcheck) {
                    fimarks();
                    setresultpage(true);
                  } else {
                    toast.warn("Please Select Any Option", {
                      position: "top-center",
                    });
                  }
                }}
                className="btn btn-primary"
              >
                Finish
              </button>
            ) : load ? (
              <button
                onClick={() => {
                  if (nextcheck) {
                    nextpage();
                    fimarks();
                  } else {
                    toast.warn("Please Select Any Option", {
                      position: "top-center",
                    });
                  }
                }}
                className="btn btn-primary"
              >
                <i
                  className="fas fa-angle-double-right"
                  style={{ fontSize: "25px" }}
                ></i>
              </button>
            ) : null}
          </div>

          <span>
            <Footer />
          </span>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Random;
