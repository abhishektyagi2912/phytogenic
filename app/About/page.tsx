// pages/about.js
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="comp-section shortcode-section text-left fluid-height"
        style={{ paddingTop: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="overline-14" style={{ letterSpacing: "-0.10" }}>
                  Our Mission
                </h1>
                <h2 className="comp-title shortcode-title heading-48">
                  We believe that raw material is the soul of formulation. It
                  helps to make the product quality better and effective. We are
                  committed to providing the best quality raw materials to our
                  customers. 
                </h2>
                <div className="content">
                  <p>
                    "Our mission is to be the premier provider of high-quality
                    and innovative cosmetic raw materials, committed to
                    sustainability, ethical sourcing, and regulatory
                    compliance.We aim to innovate and supply the highest quality
                    raw materials to the cosmetic industry, fostering beauty and
                    wellness through sustainable and scientifically advanced
                    solutions We strive to exceed our customers' expectations by
                    delivering exceptional service, fostering strong
                    partnerships, and continuously improving our products and
                    processes. This mission encapsulates the core values and
                    objectives that guide the operations and strategic direction
                    of a cosmetic raw material trading company."
                  </p>
                  <p>
                    We are committed to: <br /> Quality Excellence: Ensuring our
                    raw materials meet the highest standards of purity, safety,
                    and efficacy, empowering our clients to create exceptional
                    cosmetic products. Sustainability: Prioritizing
                    environmentally responsible practices, from sourcing
                    sustainable ingredients to minimizing our carbon footprint,
                    for a healthier planet. Innovation: Continuously researching
                    and developing cutting-edge materials that meet the evolving
                    needs of the beauty industry and enhance consumer
                    experiences. Customer Partnership: Building strong,
                    collaborative relationships with our clients by providing
                    personalized service, technical support, and tailored
                    solutions to help them achieve their goals. Ethical
                    Responsibility: Upholding ethical business practices,
                    promoting fair trade, and supporting the communities
                    involved in our supply chain.
                  </p>
                </div>
              </div>
              <div>
                <h1 className="overline-14" style={{ letterSpacing: "-0.10" }}>
                  Our Vision
                </h1>
                <div className="content">
                  <p>
                    To be the premier global trading company in cosmetic raw
                    materials, recognized for our integrity, innovation, and
                    commitment to sustainable and ethical sourcing. We envision
                    establishing ourselves as the leading trading partner for
                    cosmetic raw materials, known for our extensive network and
                    unmatched industry expertise. The one who promotes and
                    adopts sustainable sourcing and trading practices that
                    protect the environment and support biodiversity, ensuring
                    the long-term availability of natural resources.
                  </p>
                  <p>
                    Building long-lasting relationships with our clients by
                    understanding their unique needs, providing exceptional
                    service, and offering tailored solutions that drive their
                    success. Ethical Responsibility: Upholding the highest
                    standards of ethical business practices, promoting fair
                    trade, and contributing positively to the communities
                    involved in our supply chain. By staying true to these
                    principles, we aim to shape the future of the cosmetic
                    industry, fostering a market where beauty, sustainability,
                    and ethical practices go hand in hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
