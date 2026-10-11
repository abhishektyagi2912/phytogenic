"use client";

import { Leaf } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useCollectionDetails } from "@/lib/queries";

const CollectionDetail = ({ params }: { params: { id: string } }) => {
  const { data: collection, isLoading } = useCollectionDetails(params.id);

  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <span className="section-eyebrow bg-white/10 text-sage-100">
            <Leaf className="h-3.5 w-3.5" /> Collection
          </span>
          <h1 className="mt-5 font-display text-3xl font-semibold sm:text-5xl">
            {isLoading ? "Loading…" : collection?.title}
          </h1>
          {collection?.description && (
            <p className="mx-auto mt-4 max-w-xl text-sm text-sage-200">
              {collection.description}
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            ) : collection?.products && collection.products.length > 0 ? (
              collection.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <h2 className="font-display text-2xl text-sage-600">
                  No products available in this collection yet.
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionDetail;
