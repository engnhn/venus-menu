export interface Product {
    name: string;
    description: string | null;
    price: number;
    imagePath: string | null;
}

export interface Category {
    name:string;
    products: Product[];
    imageUrl: string | null;
}

export interface MenuResponse {
    cafeName: string;
    categories: Category[];
}