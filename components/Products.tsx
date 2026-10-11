"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useProducts } from "@/lib/queries";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductSection = () => {
  const { data: products, isLoading } = useProducts();
  const topProducts = products?.slice(0, 4) ?? [];

  return (
    <section className="bg-sage-50 py-16 sm:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" /> Popular Products
          </span>
          <h2 className="section-heading mt-4">Trusted by Formulators</h2>
          <p className="mt-3 text-sm text-sage-600 sm:text-base">
            Phytorelief (Chamomile, Aloevera and Ginger Extract) makes your
            formulation non-irritant, and Phytosun (Nano Zinc) delivers
            mineral sunscreen protection.
          </p>
        </motion.div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : topProducts.map((product) => (
                <motion.div key={product._id} variants={card}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/All" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
