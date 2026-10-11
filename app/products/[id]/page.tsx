"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Tag } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/lib/queries";

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { data: products, isLoading } = useProducts();
  const [activeImage, setActiveImage] = useState(0);

  const product = useMemo(
    () => products?.find((p) => p._id === params.id),
    [products, params.id]
  );

  const related = useMemo(() => {
    if (!products || !product) return [];
    return products
      .filter((p) => p._id !== product._id && p.category === product.category)
      .slice(0, 4);
  }, [products, product]);

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="skeleton-shimmer aspect-square rounded-3xl bg-sage-100" />
          <div className="space-y-4">
            <div className="skeleton-shimmer h-8 w-2/3 rounded-full bg-sage-100" />
            <div className="skeleton-shimmer h-4 w-full rounded-full bg-sage-100" />
            <div className="skeleton-shimmer h-4 w-5/6 rounded-full bg-sage-100" />
            <div className="skeleton-shimmer h-4 w-3/4 rounded-full bg-sage-100" />
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="py-24 text-center">
        <h1 className="font-display text-3xl text-sage-700">Product not found</h1>
        <Link href="/All" className="btn-primary mt-6 inline-flex">
          Browse all products
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="py-14 sm:py-20">
        <div className="container-custom grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="card-surface relative aspect-square overflow-hidden">
              {product.media?.[activeImage] ? (
                <Image
                  src={product.media[activeImage]}
                  alt={product.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sage-400">
                  <Leaf className="h-12 w-12" />
                </div>
              )}
            </div>
            {product.media && product.media.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.media.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActiveImage(i)}
                    className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-colors ${
                      activeImage === i ? "border-forest-600" : "border-transparent"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.category && (
              <span className="section-eyebrow">
                <Leaf className="h-3.5 w-3.5" /> {product.category.trim()}
              </span>
            )}
            <h1 className="mt-5 font-display text-3xl font-semibold text-forest-950 sm:text-4xl">
              {product.title}
            </h1>

            {product.description && (
              <p className="mt-5 text-base leading-relaxed text-sage-700">
                {product.description}
              </p>
            )}

            {product.tags && product.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-sage-100 px-3 py-1 text-xs font-medium text-sage-700"
                  >
                    <Tag className="h-3 w-3" /> {tag}
                  </span>
                ))}
              </div>
            )}

            {product.collections && product.collections.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-400">
                  Part of
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.collections.map((c) => (
                    <Link
                      key={c._id}
                      href={`/Product/${c._id}`}
                      className="rounded-full border border-sage-200 px-3 py-1 text-xs font-medium text-forest-700 hover:border-forest-400"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/Contact" className="btn-primary">
                Enquire About This Product
              </Link>
              <Link href="/All" className="btn-secondary">
                Browse More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-sage-50 py-16">
          <div className="container-custom">
            <h2 className="section-heading">You may also like</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
