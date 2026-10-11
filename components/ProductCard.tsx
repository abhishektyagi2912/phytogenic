"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import { useTilt } from "@/components/hooks/useTilt";

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt();
  const image = product.media?.[0];

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="card-surface group flex h-full flex-col overflow-hidden transition-transform duration-200 will-change-transform"
    >
      <Link href={`/products/${product._id}`} className="relative block aspect-[4/3] overflow-hidden bg-sage-100">
        {image ? (
          <Image
            src={image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sage-400">
            <Leaf className="h-10 w-10" />
          </div>
        )}
        {product.category && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-700 shadow-sm backdrop-blur">
            {product.category.trim()}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-forest-950">
          {product.title}
        </h3>
        {product.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-sage-700">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <Link
            href={`/products/${product._id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-900"
          >
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/Contact" className="btn-primary px-4 py-2 text-xs">
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
