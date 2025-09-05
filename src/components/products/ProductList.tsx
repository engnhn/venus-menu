import type { Product } from '@/types/menu';
import { ProductCard } from './ProductCard';

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    if (products.length === 0) {
        return <p className="text-center text-gray-500">Bu kategoride gösterilecek ürün bulunmamaktadır.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
}