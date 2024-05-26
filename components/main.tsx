import React from "react";
import Image from "next/image";

function Main() {
  return (
    <section className="top-image d-flex flex-column justify-content-between vh-80 bg-light mb-0 px-0 ">
      <div className="container my-auto">
        <div className="row align-items-center">
          <div className="col-md-5 text-content">
            Grow <span className="highlight">there where</span> u are planted
            <div className="content mt-3">
              <p>
                Embrace your current situation and make the most of it. Just
                like a plant thrives where it is rooted, find your strength and
                potential in your present environment.
              </p>
            </div>
          </div>
          <div className="col-md-7 d-flex justify-content-center">
            <Image
              src="/main_png.jpg"
              alt="Image description"
              className="img-fluid"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
