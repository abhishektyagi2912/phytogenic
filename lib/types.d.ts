type CollectionRef = {
    _id: string;
    title: string;
  };

  type CollectionType = {
    _id: string;
    title: string;
    description?: string;
    products: string[] | ProductType[];
    image: string;
    createdAt?: string;
    updatedAt?: string;
  };

  type ProductType = {
    _id: string;
    title: string;
    description: string;
    media: string[];
    category: string;
    collections: CollectionRef[];
    tags: string[];
    createdAt: string;
    updatedAt: string;
  };
  
  type UserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
  };
  
  type OrderType = {
    shippingAddress: Object;
    _id: string;
    customerClerkId: string;
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
  }
  
  type OrderItemType = {
    product: ProductType;
    color: string;
    size: string;
    quantity: number;
    _id: string;
  }