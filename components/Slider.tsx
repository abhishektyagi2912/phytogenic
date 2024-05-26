import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <section
      className="happy-travelers"
      style={{ backgroundColor: "#caddc7", height: "50vh" }}
    >
      <div className="container-xxl p-10 ">
        <h2 className="mt-2">See through the eyes of our Organic Plants</h2>
      </div>
      <div
        id="carouselExampleIndicators2"
        className="carousel slide pt-4"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {[
                "herbal-1.jpg",
                "herbal-2.jpg",
                "herbal-3.jpg",
                "herbal-4.jpg",
                "herbal-5.jpg",
              ].map((src, index) => (
                <div className="col position-relative" key={index}>
                  <div className="plant-card">
                    <Image
                      src={`/${src}`}
                      className="d-block w-100"
                      alt={`Image ${index + 1}`}
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                    <div className="overlay-content">
                      <a href="#">Contact Us</a>
                    </div>
                    <div className="name">
                      <p>Name {index + 1}</p>
                    </div>
                    <div className="like">
                      <span className="like-icon">&#x2661;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {[
                "herbal-6.jpg",
                "herbal-5.jpg",
                "plant-3-removebg-preview.png",
                "herbal-5.jpg",
                "herbal-5.jpg",
              ].map((src, index) => (
                <div className="col position-relative" key={index}>
                  <div className="plant-card">
                    <Image
                      src={`/${src}`}
                      className="d-block w-100"
                      alt={`Image ${index + 1}`}
                      layout="responsive"
                      width={500}
                      height={250}
                    />
                    <div className="overlay-content">
                      <a href="#">Contact Us</a>
                    </div>
                    <div className="name">
                      <p>Name {index + 1}</p>
                    </div>
                    <div className="like">
                      <span className="like-icon">&#x2661;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <Image
            src="/left.png"
            className="carousel-control-prev-icon"
            alt="Previous"
            width={40}
            height={40}
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <Image
            src="/right.png"
            className="carousel-control-next-icon"
            alt="Next"
            width={40}
            height={40}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
