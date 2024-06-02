import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = async ({
  params,
}: {
  params: { id: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.id);
  return (
    <>
      <section>
        <div className="innerpages-title-wrapper">
          <div className="innerpages-title bg-title-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 innerpages-title1">
                  <div>
                    <h1>{collectionDetails.title}</h1>
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
            {collectionDetails.products.map((product: ProductType) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
export const dynamic = "force-dynamic";
