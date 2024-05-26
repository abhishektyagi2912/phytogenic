import React from "react";
import Image from "next/image";
import { getProducts } from "@/lib/actions/actions";

const ProductSection = async() => {
  const products = await getProducts();

  return (
    <section>
      <div className="container-xxl">
        <div className="mid-part text-center">
          <h2 className="mb-4">Products</h2>
          <div className="row">
            {products.map((product: ProductType) => (
              <div className="col-md-3 mb-4" key={product._id}>
                <div className="card product-card h-100">
                  <Image
                    src={product.media[0]}
                    alt={product.title}
                    className="card-img-top image-hover"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
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
