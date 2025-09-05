import Image from "next/image";
import type { Product } from "@/types/menu";

// API URL'ini .env dosyasından alıyoruz.
// Örn: NEXT_PUBLIC_API_URL="http://88.209.248.254:8081"
// Üretimde ise: NEXT_PUBLIC_API_URL="https://api.senin-domain.com"
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

// Fiyat formatlama için yardımcı fonksiyon
function formatPrice(price: number) {
    return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
    }).format(price);
}

interface ProductPreviewCardProps {
    product: Product;
}

export function ProductPreviewCard({ product }: ProductPreviewCardProps) {
    const imageUrl = product.imagePath ? `${apiUrl}${product.imagePath}` : null;

    return (
        <div className="relative flex-shrink-0 w-36 h-48 rounded-xl overflow-hidden shadow-md">
            {imageUrl ? (
                <Image
                    src={imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-105"
                />
            ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center p-2">
                    Resim Yok
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                <span className="text-sm font-semibold text-white">{product.name}</span>
                <span className="text-xs text-white/80">{formatPrice(product.price)}</span>
            </div>
        </div>
    );
}
