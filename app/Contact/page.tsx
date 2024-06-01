import Head from "next/head";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact SR Realty" />
      </Head>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-phone-fill"></i>
                <p className="title">Contact</p>
                <p className="info">400 500 600 700</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-mail-line"></i>
                <p className="title">Email</p>
                <p className="info">info@srrealty.com</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-global-fill"></i>
                <p className="title">Website</p>
                <p className="info">www.srrealty.com</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-map-pin-2-fill"></i>
                <p className="title">Address</p>
                <p className="info">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="write">
                <h2>Write To Us</h2>
                <form action="#" method="post" className="form-group">
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Address"
                      name="address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="custom-message">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
