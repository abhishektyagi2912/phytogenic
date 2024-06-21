import React from "react";
import Contact from "./contact";

function Main() {
  return (
    <section className="top-image d-flex flex-column justify-content-between  bg-light mb-0 px-0 ">
      <div className="container my-auto">
        <div className="row align-items-center">
          <div className="col-md-8 text-content">
            Phytogenic Life Science{" "} <br />
            <span className="highlight"> Herbal-Extract, Natural Active</span>{" "} <br />
            Speciality Chemicals
            <div className="content mt-3">
              <p className="embrace">
                We are a leading manufacturer of Herbal Extracts, Natural
                Actives and Speciality Chemicals. We are committed to providing
                the best quality products to our customers. Our products are
                manufactured using the latest technology and are in compliance
                with international standards. 
              </p>
            </div>
            <div className="custom-button">
              <Contact />
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center"></div>
        </div>
      </div>
    </section>
  );
}

export default Main;
