export interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
}

export interface ProductGrid {
  productTitle: string;
  productPrice: number;
  productImage: string;
}
