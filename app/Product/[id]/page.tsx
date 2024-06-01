import Image from "next/image";

const Products = () => {
  return (
    <>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>Products</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-3">
              <div className="main-part">
                <div className="prod-image p-3 ">
                  <Image
                    src="/images/herbal-1.jpg"
                    alt="Herbal Product"
                    width={200}
                    height={200}
                  />
                  <p className="text-center mt-2">Glabridin 3.5%</p>
                </div>
                <div className="prod-name p-3 text-center bg-custom">
                  <p className="font-weight-bold">Glabridin 3.5%</p>
                  <a href="#" className="d-block mt-2 text-success p-2 rounded">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="main-part">
                <div className="prod-image p-3">
                  <Image
                    src="/images/herbal-2.jpg"
                    alt="Herbal Product"
                    width={200}
                    height={200}
                  />
                  <p className="text-center mt-2">Glabridin 3.5%</p>
                </div>
                <div className="prod-name p-3 text-center bg-custom">
                  <p className="font-weight-bold">Glabridin 3.5%</p>
                  <a href="#" className="d-block mt-2 text-success p-2 rounded">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="main-part">
                <div className="prod-image p-3">
                  <Image
                    src="/images/herbal-3.jpg"
                    alt="Herbal Product"
                    width={200}
                    height={200}
                  />
                  <p className="text-center mt-2">Glabridin 3.5%</p>
                </div>
                <div className="prod-name p-3 text-center bg-custom">
                  <p className="font-weight-bold">Glabridin 3.5%</p>
                  <a href="#" className="d-block mt-2 text-success p-2 rounded">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="main-part">
                <div className="prod-image p-3">
                  <Image
                    src="/images/herbal-5.jpg"
                    alt="Herbal Product"
                    width={200}
                    height={200}
                  />
                  <p className="text-center mt-2">Glabridin 3.5%</p>
                </div>
                <div className="prod-name p-3 text-center bg-custom">
                  <p className="font-weight-bold">Glabridin 3.5%</p>
                  <a href="#" className="d-block mt-2 text-success p-2 rounded">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="part-two mt-3 ">
            <div className="row">
              <div className="col-md-3">
                <div className="main-part">
                  <div className="prod-image p-3">
                    <Image
                      src="/images/herbal-5.jpg"
                      alt="Herbal Product"
                      width={200}
                      height={200}
                    />
                    <p className="text-center mt-2">Glabridin 3.5%</p>
                  </div>
                  <div className="prod-name p-3 text-center bg-custom">
                    <p className="font-weight-bold">Glabridin 3.5%</p>
                    <a
                      href="#"
                      className="d-block mt-2 text-success p-2 rounded"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="main-part">
                  <div className="prod-image p-3">
                    <Image
                      src="/images/herbal-1.jpg"
                      alt="Herbal Product"
                      width={200}
                      height={200}
                    />
                    <p className="text-center mt-2">Glabridin 3.5%</p>
                  </div>
                  <div className="prod-name p-3 text-center bg-custom">
                    <p className="font-weight-bold">Glabridin 3.5%</p>
                    <a
                      href="#"
                      className="d-block mt-2 text-success p-2 rounded"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="main-part">
                  <div className="prod-image p-3">
                    <Image
                      src="/images/herbal-2.jpg"
                      alt="Herbal Product"
                      width={200}
                      height={200}
                    />
                    <p className="text-center mt-2">Glabridin 3.5%</p>
                  </div>
                  <div className="prod-name p-3 text-center bg-custom">
                    <p className="font-weight-bold">Glabridin 3.5%</p>
                    <a
                      href="#"
                      className="d-block mt-2 text-success p-2 rounded"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="main-part">
                  <div className="prod-image p-3">
                    <Image
                      src="/images/herbal-3.jpg"
                      alt="Herbal Product"
                      width={200}
                      height={200}
                    />
                    <p className="text-center mt-2">Glabridin 3.5%</p>
                  </div>
                  <div className="prod-name p-3 text-center bg-custom">
                    <p className="font-weight-bold">Glabridin 3.5%</p>
                    <a
                      href="#"
                      className="d-block mt-2 text-success p-2 rounded"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
