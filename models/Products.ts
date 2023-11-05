interface Category {
    _id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

export interface Product {
    sold: number;
  _id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
    filter(arg0: (product: any) => boolean): unknown;
    products: Product[],
}