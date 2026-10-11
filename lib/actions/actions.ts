const API_BASE = "https://admin-dashborad-p.vercel.app/api";

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}): ${url}`);
  }
  return res.json();
}

export const getCollections = async (): Promise<CollectionType[]> => {
  return fetchJson<CollectionType[]>(`${API_BASE}/collections`);
};

export const getCollectionDetails = async (collectionId: string) => {
  return fetchJson<CollectionType & { products: ProductType[] }>(
    `${API_BASE}/collections/${collectionId}`
  );
};

export const getProducts = async (): Promise<ProductType[]> => {
  return fetchJson<ProductType[]>(`${API_BASE}/products`);
};

export const getSearchedProducts = async (
  query: string
): Promise<ProductType[]> => {
  return fetchJson<ProductType[]>(
    `${API_BASE}/search/${encodeURIComponent(query)}`
  );
};
