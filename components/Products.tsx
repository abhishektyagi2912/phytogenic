import React from "react";
import { getProducts } from "@/lib/actions/actions";

const ProductSection = async () => {
  const products = await getProducts();

  const topProducts = products.slice(0, 4);

  return (
    <section>
      <div className="container-xxl">
        <div className="text-center my-4">
          <h4 className="h4tag">Popular Products</h4>
          <p className="ptag">
            Suscipit tellus mauris a diam maecenas sed enim ut sem. <br />
            Turpis egestas maecenas pharetra convallis posuere.
          </p>
        </div>
        <div className="row">
          {topProducts.map((product: ProductType) => (
            <div className="col-md-3 mb-4" key={product._id}>
              <div className="card h-100 border-0">
                <div
                  className="card-img-top d-flex justify-content-center align-items-center"
                  style={{
                    height: "230px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={product.media[0]}
                    alt={product.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      transition: "transform 0.5s",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center mb-4">{product.title}</h5>
                  <div className="mt-auto text-center">
                    <a href="#" className="btn btn-success btn-custom">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn btn-custom btn-all-products">
            All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
