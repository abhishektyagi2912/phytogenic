"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useProducts } from "@/lib/queries";

const AllProduct = () => {
  const { data: products, isLoading } = useProducts();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!products) return [];
    return Array.from(new Set(products.map((p) => p.category?.trim()).filter(Boolean)));
  }, [products]);

  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesQuery = product.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      const matchesCategory =
        !activeCategory || product.category?.trim() === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, activeCategory]);

  return (
    <>
      <section className="bg-gradient-to-b from-forest-900 to-forest-950 py-20 text-center text-white">
        <div className="container-custom">
          <h1 className="font-display text-3xl font-semibold sm:text-5xl">
            All Products
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-sage-200">
            Browse our complete range of herbal extracts, natural actives and
            speciality chemicals.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-custom">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-sage-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-sage-200 bg-white py-2.5 pl-11 pr-4 text-sm text-forest-900 outline-none ring-forest-400 transition focus:ring-2"
              />
            </div>

            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    activeCategory === null
                      ? "bg-forest-700 text-white"
                      : "bg-sage-100 text-sage-700 hover:bg-sage-200"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition-colors ${
                      activeCategory === category
                        ? "bg-forest-700 text-white"
                        : "bg-sage-100 text-sage-700 hover:bg-sage-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            ) : filtered.length > 0 ? (
              filtered.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <h2 className="font-display text-2xl text-sage-600">
                  No products match your search.
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
