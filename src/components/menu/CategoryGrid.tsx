import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types/menu';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://88.209.248.254:8081";

interface CategoryCardProps {
    category: Category;
    className?: string;
}

function CategoryCard({ category, className = '' }: CategoryCardProps) {
    const categorySlug = category.name.toLowerCase().replace(/ /g, '-');

    const absoluteImageUrl = category.imageUrl
        ? `${API_BASE_URL}${category.imageUrl}`
        : null;

    return (
        <Link href={`/menu/${categorySlug}`} className={`relative overflow-hidden rounded-2xl group ${className}`}>

            {absoluteImageUrl ? (
                <Image
                    src={absoluteImageUrl}
                    alt={category.name}
                    fill
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ) : (
                <div className="absolute inset-0 bg-[#F3F4F6] group-hover:bg-gray-200 transition-colors duration-300"></div>
            )}

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-5 flex flex-col justify-end h-full text-white">
                <h2 className="text-2xl text-shadow-lg font-bold">{category.name}</h2>
            </div>
        </Link>
    );
}

export function CategoryGrid({ categories }: { categories: Category[] }) {
    const gridLayoutClasses = [
        'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-4 row-span-2',
        'col-span-2 row-span-3', 'col-span-2 row-span-3', 'col-span-2 row-span-2',
        'col-span-2 row-span-2',
    ];

    return (
        <div className="grid grid-cols-4 grid-flow-dense gap-4" style={{gridAutoRows: '100px'}}>
            {categories.map((cat, index) => (
                <CategoryCard
                    key={cat.name}
                    category={cat}
                    className={gridLayoutClasses[index % gridLayoutClasses.length]}
                />
            ))}
        </div>
    );
}
