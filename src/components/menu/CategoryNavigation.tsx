"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Category } from '@/types/menu';

interface CategoryNavigationProps {
    categories: Category[];
    currentCafeSlug: string;
}

export function CategoryNavigation({ categories, currentCafeSlug }: CategoryNavigationProps) {
    const pathname = usePathname();

    const navClasses = "bg-white border-b py-3 px-4 overflow-x-auto whitespace-nowrap scrollbar-hide";

    return (
        <nav className={navClasses}>
            <div className="inline-flex space-x-4">
                {categories.map((category) => {
                    const categorySlug = category.name.toLowerCase().replace(/ /g, '-');
                    const href = `/menu/${categorySlug}`;
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={category.name}
                            href={href}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                isActive
                                    ? 'bg-zinc-900 text-white shadow'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}