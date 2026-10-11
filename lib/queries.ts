import { useQuery } from "@tanstack/react-query";
import {
  getCollectionDetails,
  getCollections,
  getProducts,
  getSearchedProducts,
} from "@/lib/actions/actions";

const FIVE_MINUTES = 5 * 60 * 1000;
const THIRTY_MINUTES = 30 * 60 * 1000;

const defaultOptions = {
  staleTime: FIVE_MINUTES,
  gcTime: THIRTY_MINUTES,
  refetchOnWindowFocus: false,
} as const;

// Trim each product's embedded collection objects down to {_id, title} —
// the upstream API embeds each collection's full nested product-id array,
// which balloons payload/memory for no UI benefit here.
function trimProduct(product: ProductType): ProductType {
  return {
    ...product,
    collections: Array.isArray(product.collections)
      ? product.collections.map((c: any) => ({ _id: c._id, title: c.title }))
      : [],
  };
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (data) => data.map(trimProduct),
    ...defaultOptions,
  });
}

export function useCollections() {
  return useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
    select: (data) => [...data].reverse(),
    ...defaultOptions,
  });
}

export function useCollectionDetails(collectionId: string | undefined) {
  return useQuery({
    queryKey: ["collection", collectionId],
    queryFn: () => getCollectionDetails(collectionId as string),
    enabled: Boolean(collectionId),
    select: (data) => ({
      ...data,
      products: Array.isArray(data.products)
        ? (data.products as ProductType[]).map(trimProduct)
        : [],
    }),
    ...defaultOptions,
  });
}

export function useSearchedProducts(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearchedProducts(query),
    enabled: query.trim().length > 0,
    select: (data) => data.map(trimProduct),
    ...defaultOptions,
  });
}
