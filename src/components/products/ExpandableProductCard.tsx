"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Product } from '@/types/menu';

const apiUrl = "http://88.209.248.254:8081";

function formatPrice(price: number) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    }).format(price);
}

interface ExpandableProductCardProps {
    product: Product;
}

export function ExpandableProductCard({ product }: ExpandableProductCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const imageUrl = product.imagePath
        ? `${apiUrl}${product.imagePath}`
        : null;

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="flex items-start gap-4 p-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {imageUrl && (
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden relative">
                        <Image
                            src={imageUrl}
                            alt={product.name}
                            fill
                            sizes="96px"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                )}
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-zinc-800">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    <div className="mt-2 text-xl font-bold text-zinc-900">{formatPrice(product.price)}</div>
                </div>
                <button aria-label={isExpanded ? "Daralt" : "Genişlet"} className="p-1 text-gray-500 hover:bg-gray-100 rounded-full">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
            </div>

            {isExpanded && (
                <div className="px-4 pb-4 animate-fade-in">
                    <p className="text-sm text-gray-700">{product.description}</p>
                </div>
            )}
        </div>
    );
}