import React from "react";
import Nav from "./Nav";
import { CategoryApi } from "./dataapi";
import Footer from "./Footer";

const Category = () => {
  return (
    <>
      <Nav />

      <div class="card text-center">
        <div class="card-header">Welcome To Category Of Exams</div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-md-4 g-4">
            {CategoryApi.map((val) => {
              let { id, subname, subphoto, subapi } = val;
              return (
                <>
                  <div class="col">
                    <div class="card h-100">
                      <img src={subphoto} class="card-img-top" alt="" />
                      <div class="card-body">
                        <p class="card-title fw-bold">{subname}</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                          <button class="btn btn-primary mt-3" >
                            Random
                          </button>
                        </div>
                        <br></br>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic mixed styles example"
                        >
                          <button type="button" class="btn btn-success">
                            Easy
                          </button>
                          <button type="button" class="btn btn-warning">
                            Midium
                          </button>
                          <button type="button" class="btn btn-danger">
                            Hard
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="card-footer text-body-secondary">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Category;
