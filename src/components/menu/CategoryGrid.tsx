import Link from 'next/link';
import type { Category } from '@/types/menu';

interface CategoryCardProps {
    category: Category;
    className?: string;
}

function CategoryCard({ category, className = '' }: CategoryCardProps) {
    const categorySlug = category.name.toLowerCase().replace(/ /g, '-');

    return (
        <Link href={`/menu/${categorySlug}`} className={`relative overflow-hidden rounded-2xl group ${className}`}>
            <div className="absolute inset-0 bg-[#F3F4F6] group-hover:bg-gray-200 transition-colors duration-300"></div>

            <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                <h2 className="text-3xl font-bold text-zinc-800">{category.name}</h2>
                <p className="text-sm text-zinc-600 mt-1">Discover our {category.name.toLowerCase()} selection.</p>
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