const ProductCardSkeleton = () => (
  <div className="card-surface flex h-full flex-col overflow-hidden">
    <div className="skeleton-shimmer aspect-[4/3] bg-sage-100" />
    <div className="flex flex-1 flex-col gap-3 p-5">
      <div className="skeleton-shimmer h-5 w-3/4 rounded-full bg-sage-100" />
      <div className="skeleton-shimmer h-3 w-full rounded-full bg-sage-100" />
      <div className="skeleton-shimmer h-3 w-5/6 rounded-full bg-sage-100" />
      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="skeleton-shimmer h-4 w-20 rounded-full bg-sage-100" />
        <div className="skeleton-shimmer h-8 w-20 rounded-full bg-sage-100" />
      </div>
    </div>
  </div>
);

export default ProductCardSkeleton;
