import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

import { Header } from '@/components/menu/Header';
import { CategoryNavigation } from '@/components/menu/CategoryNavigation';
import { ProductPreviewCard } from '@/components/products/ProductPreviewCard';
import { ExpandableProductCard } from '@/components/products/ExpandableProductCard';
import type { MenuResponse } from '@/types/menu';

const CAFE_SLUG = 'venus';
const apiUrl = "http://88.209.248.254:8081"
async function getFullMenu(): Promise<MenuResponse | null> {
    try {
        const res = await fetch(`${apiUrl}/api/v1/public/menus/${CAFE_SLUG}/menu`, {
            next: { revalidate: 3600 },
        });
        if (!res.ok) {
            console.error(`API'den veri çekilemedi. Status: ${res.status}`);
            return null;
        }
        return res.json();
    } catch (error) {
        console.error("API'ye bağlanırken bir hata oluştu:", error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }) {
    const resolvedParams = await params;
    const decodedSlug = decodeURIComponent(resolvedParams.categorySlug);
    const categoryName = decodedSlug.charAt(0).toUpperCase() + decodedSlug.slice(1).replace(/-/g, ' ');
    return {
        title: `${categoryName} - QR Menü`,
    };
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const resolvedParams = await params;
    const menuData = await getFullMenu();

    const decodedSlug = decodeURIComponent(resolvedParams.categorySlug);

    if (!menuData || !menuData.categories) {
        notFound();
    }

    const category = menuData.categories.find(
        (cat) => cat.name.toLowerCase().replace(/ /g, '-') === decodedSlug
    );

    if (!category) {
        notFound();
    }
    const productsWithImages = category.products.filter(product => product.imagePath);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header cafeName={menuData.cafeName} />

            <CategoryNavigation categories={menuData.categories} currentCafeSlug={CAFE_SLUG} />

            <main className="w-full max-w-5xl mx-auto p-4 sm:p-6">
                <div className="mb-6 flex items-center justify-between">
                    <Link href="/menu" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ChevronLeft size={20} />
                        Tüm Kategorilere Dön
                    </Link>
                </div>

                {productsWithImages.length > 0 && (
                    <div className="mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6">
                        <div className="inline-flex space-x-4 pb-4">
                            {productsWithImages.map((product) => (
                                <ProductPreviewCard key={product.name} product={product} />
                            ))}
                        </div>
                    </div>
                )}


                <h2 className="text-3xl font-bold text-zinc-900 mb-6">{category.name}</h2>
                <div className="space-y-4">
                    {category.products.length === 0 ? (
                        <p className="text-center text-gray-500">Bu kategoride henüz ürün bulunmamaktadır.</p>
                    ) : (
                        category.products.map((product) => (
                            <ExpandableProductCard key={product.name} product={product} />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}