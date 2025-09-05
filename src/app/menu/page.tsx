"use client";

import { useState, useEffect } from 'react';

import { Header } from '@/components/menu/Header';
import { CategoryGrid } from '@/components/menu/CategoryGrid';
import { FloatingActions } from '@/components/menu/FloatingActions';
import { WifiModal } from '@/components/modals/WifiModal';
import { RatingModal } from '@/components/modals/RatingModal';

import type { MenuResponse } from '@/types/menu';

const googleReviewUrl = 'https://g.page/r/CbITFijjJDOYEBM/review';
const wifiSsid = 'VENUS';
const wifiPassword = 'venus.vefa';
const apiUrl = "http://88.209.248.254:8081"

async function getMenuData(slug: string): Promise<MenuResponse | null> {
    try {
        const res = await fetch(`/api/v1/public/menus/${slug}/menu`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch menu data. Status: ${res.status}`);
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default function MenuPage() {
    const [isWifiModalOpen, setIsWifiModalOpen] = useState(false);
    const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
    const [menuData, setMenuData] = useState<MenuResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getMenuData('venus').then(data => {
            setMenuData(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <div className="bg-white text-zinc-800 min-h-screen flex items-center justify-center">
                Yükleniyor...
            </div>
        );
    }

    if (!menuData || !menuData.categories) {
        return (
            <div className="bg-white text-zinc-800 min-h-screen flex flex-col">
                <Header cafeName="Hata" />
                <main className="flex-grow flex items-center justify-center">
                    <p>Menü yüklenirken bir sorun oluştu.</p>
                </main>
            </div>
        );
    }

    return (
        <div className="bg-white text-zinc-900 min-h-screen font-sans">
            <Header cafeName={menuData.cafeName} />

            <main className="p-4">
                <CategoryGrid categories={menuData.categories} />
            </main>

            <FloatingActions
                onShowWifi={() => setIsWifiModalOpen(true)}
                onShowRating={() => setIsRatingModalOpen(true)}
            />

            {isWifiModalOpen && (
                <WifiModal
                    ssid={wifiSsid}
                    password={wifiPassword}
                    onClose={() => setIsWifiModalOpen(false)}
                />
            )}

            {isRatingModalOpen && (
                <RatingModal
                    reviewUrl={googleReviewUrl}
                    onClose={() => setIsRatingModalOpen(false)}
                />
            )}
        </div>
    );
}