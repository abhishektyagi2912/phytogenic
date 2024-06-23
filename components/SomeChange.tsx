import React from "react";
import Image from "next/image";
import Link from "next/link";

const TherapeuticSection = () => {
  return (
    <section className="mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center py-4 ">
            <div className="first-p py-4">
              <p className="title-p h5 mb-3">
                Kakadu Plum (Terminalia ferdinandiana)
              </p>
              <p className="content-p mb-4">
                Kakadu Plum (Terminalia ferdinandiana) has 55 times more Vitamin
                C than an orange. Kakadu plum is usually found as a concentrate
                or a supplement, and it packs a whopping 150-400 milligrams of
                Vitamin C per gram.
              </p>
              <Link href="/Contact">
                <button className="btn btn-success">Contact for info</button>
              </Link>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <div className="cactus">
              <Image
                src="/images/kakadu.jpg"
                alt="Cactus"
                width={300}
                height={300}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="content-wrapper py-4">
              {[
                {
                  src: "/images/flash.png",
                  alt: "Powerful antioxidant",
                  heading: "Powerful antioxidant",
                  content:
                    "The Kakadu Plum contains even more antioxidants than blueberry, making it one of the most remarkable high-antioxidant foods on the planet.",
                },
                {
                  src: "/images/heart-attack.png",
                  alt: "Reduces signs of aging",
                  heading: "Reduces signs of aging",
                  content:
                    "Kakadu Plum extract is packed with Vitamins C and E, folic acid and carotenoids, which help reverse the effects of free radicals and reduce the visible signs of aging. It also aids in reducing dark circles and puffiness from under the eyes. ",
                },
                {
                  src: "/images/autism.png",
                  alt: "Treats acne",
                  heading: "Treats acne",
                  content:
                    "The high content of Vitamin C present in Kakadu Plum makes it an effective remedy for the treatment of acne ",
                },
              ].map((item, index) => (
                <div className="content-item d-flex mb-4" key={index}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={50}
                    height={90}
                    className="img-fluid me-3"
                  />
                  <div className="relief-content">
                    <p className="heading mb-1">
                      <strong>{item.heading}</strong>
                    </p>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapeuticSection;
