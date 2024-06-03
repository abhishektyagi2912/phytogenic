'use client';
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = ({ params }: { params: { id: string } }) => {
  const [collectionDetails, setCollectionDetails] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedCollectionDetails = await getCollectionDetails(params.id);
      setCollectionDetails(fetchedCollectionDetails);
      setLoading(false);
    };
    fetchProducts();
  }, [params.id]);

  return (
    <>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>{loading ? <Skeleton width={200} /> : collectionDetails.title}</h1>
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
            {loading ? (
              Array.from({ length: 8 }).map((_, index) => (
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
            ) : collectionDetails.products && collectionDetails.products.length > 0 ? (
              collectionDetails.products.map((product: ProductType) => (
                <div className="col-md-3 mt-3 px-2" key={product._id}>
                  <div className="main-part">
                    <div className="prod-image p-3">
                      <Image
                        src={product.media[0]}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="rounded-lg cursor-pointer"
                      />
                      <p className="text-center mt-2">{product.title}</p>
                    </div>
                    <div className="prod-name p-3 text-center bg-custom">
                      <p className="font-weight-bold">{product.title}</p>
                      <Link href="/Contact" className="d-block mt-2 text-success p-2 rounded">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-4 mb-4 mt-4 col-12 text-center">
                <h2>No Products Available</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
export const dynamic = "force-dynamic";
