import React from "react";
import Image from "next/image";

const ProductSection = () => {
  const products = [
    { id: 1, name: "Hawaii Heartbreak", image: "/images/product-1.jpg" },
    { id: 2, name: "Tangerine Dream", image: "/images/product-2.jpg" },
    { id: 3, name: "Forbidden Fruit", image: "/images/product-3.jpg" },
    { id: 4, name: "Sativa Bud", image: "/images/product-4.jpg" },
  ];

  return (
    <section>
      <div className="container-xxl">
        <div className="mid-part text-center">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card product-card h-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="card-img-top image-hover"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="mt-auto">
                      <a href="#" className="btn btn-green">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
