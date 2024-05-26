import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="mt-4">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <Image
                src="/logo.jpg"
                alt="Plantly Logo"
                width={50}
                height={50}
              />
            </a>
            <span className="mb-3 mb-md-0 text-muted"> Copyright ©Phytogenic</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
