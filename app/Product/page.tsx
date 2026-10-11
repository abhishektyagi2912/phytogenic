"use client";

import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { useCollections } from "@/lib/queries";

const Category = () => {
  const { data: collections, isLoading } = useCollections();

  return (
    <section className="bg-cream-50 py-16 sm:py-20">
      <div className="container-custom">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="section-eyebrow">
              <Leaf className="h-3.5 w-3.5" /> Browse by Collection
            </span>
            <h2 className="section-heading mt-4">Our Product Collections</h2>
          </div>
        </div>

        <div className="no-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-2">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="skeleton-shimmer h-56 w-48 flex-shrink-0 rounded-3xl bg-sage-100 sm:w-56"
                />
              ))
            : collections?.map((collection) => (
                <Link
                  key={collection._id}
                  href={`/Product/${collection._id}`}
                  className="group relative h-56 w-48 flex-shrink-0 overflow-hidden rounded-3xl shadow-md transition-transform duration-300 hover:-translate-y-1 sm:w-56"
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="224px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-display text-base font-semibold text-white">
                      {collection.title}
                    </h3>
                    {Array.isArray(collection.products) && (
                      <p className="text-xs text-sage-200">
                        {collection.products.length} products
                      </p>
                    )}
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
