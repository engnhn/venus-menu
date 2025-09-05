import type { Product } from '@/types/menu';

function formatPrice(price: number) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    }).format(price);
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
            <div>
                <h3 className="text-lg font-semibold text-zinc-800">{product.name}</h3>
                {product.description && (
                    <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                )}
            </div>
            <div className="mt-4 text-right">
                <span className="text-xl font-bold text-zinc-900">{formatPrice(product.price)}</span>
            </div>
        </div>
    );
}