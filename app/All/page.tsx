"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "@/lib/actions/actions";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const topProducts = products;

  return (
    <>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>All Products</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container-xxl">
          <div className="row">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                <div className="col-md-3 mt-3 px-2" key={index}>
                  <div className="main-part">
                    <div className="prod-image p-3">
                      <Skeleton height={200} width={200} />
                      <p className="text-center mt-2">
                        <Skeleton width={100} />
                      </p>
                    </div>
                    <div className="prod-name p-3 text-center bg-custom">
                      <p className="font-weight-bold">
                        <Skeleton width={100} />
                      </p>
                      <Skeleton width={80} height={30} />
                    </div>
                  </div>
                </div>
              ))
              : topProducts.map((product:ProductType) => (
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
                        <h5 className="card-title text-center mb-4">
                          {product.title}
                        </h5>
                        <div className="mt-auto text-center">
                          <Link
                            href="/Contact"
                            className="btn btn-success btn-custom"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
