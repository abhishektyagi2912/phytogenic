"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Head from "next/head";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

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
                <p className="info">
                  +91-9599177616 <br /> +91-8696580932
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-mail-line"></i>
                <p className="title">Email</p>
                <p className="info">
                  sales@phytogenic.co.in <br /> ridhima@phytogenic.co.in
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-map-pin-2-fill"></i>
                <p className="title">Corporate Office</p>
                <p className="info">
                  Phytogenic Life Science, Landmark Cyber Park, 3rd floor,
                  sector 67, Gurugram, Haryana 1220002
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <i className="ri ri-map-pin-2-fill"></i>
                <p className="title">Address</p>
                <p className="info">
                  Manufacturing Unit: Plot No. C-21, Khasara No. 85,
                  Mauja-Dehtora, Nandanpuram, Agra 282007
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
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Mobile No."
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="custom-message">
                    Send Message
                  </button>
                </form>
                {status && <p>{status}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
