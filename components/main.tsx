import React from "react";
import Image from "next/image";
import Contact from "./contact";

function Main() {
  return (
    <section className="top-image d-flex flex-column justify-content-between  bg-light mb-0 px-0 ">
      <div className="container my-auto">
        <div className="row align-items-center">
          <div className="col-md-8 text-content">
          Herbalist–  Medical <span className="highlight"> Marijuana</span> Store Theme
            <div className="content mt-3">
              <p className="embrace">
                Embrace your current situation and make the most of it. Just
                like a plant thrives where it is rooted, find your strength and
                potential in your present environment.
              </p>
            </div>
            <div className="custom-button">
              <Contact/>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
