import React from 'react';
import { siteConfig } from '@/types/site';

export function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-200 py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-y-4 text-center">

                    <p className="text-sm sm:text-2xl text-zinc-800 leading-tight max-w-lg">
                        <span className="text-neutral-900"><strong>{siteConfig.name}</strong></span> gücünü
                        <a
                            href="https://sagalas.com.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-900 hover:text-neutral-950 transition-colors mx-1"
                        >
                            <strong>sagalas.com.tr</strong>
                        </a>'den alır.
                    </p>
                    <p className="text-xs text-neutral-500 italic max-w-md">
                        © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
                    </p>

                </div>
            </div>
        </footer>
    );
};