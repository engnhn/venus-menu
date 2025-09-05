"use client";

import { useState } from 'react';
import { Sparkles, X, Wifi, Star } from 'lucide-react';

interface ActionButtonsProps {
    onShowWifi: () => void;
    onShowRating: () => void;
}

export function FloatingActions({ onShowWifi, onShowRating }: ActionButtonsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItemStyle = "flex items-center gap-x-3 w-full max-w-xs bg-white/70 backdrop-blur-sm shadow-lg rounded-xl px-4 py-3 text-zinc-900 font-bold transition-all duration-300 ease-in-out";
    const mainButtonStyle = "flex items-center justify-center w-16 h-16 bg-white/70 backdrop-blur-sm shadow-lg rounded-full text-zinc-900 transition-transform duration-300 hover:scale-110";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="flex flex-col items-end gap-4">
                    <button onClick={onShowWifi} className={menuItemStyle}>
                        <Wifi size={18} />
                        <span>Wifi Bilgileri</span>
                    </button>
                    <button onClick={onShowRating} className={menuItemStyle}>
                        <Star size={18} />
                        <span>Bizi Puanla</span>
                    </button>
                </div>
            )}

            <button onClick={toggleMenu} className={mainButtonStyle}>
                {isOpen ? <X size={26} /> : <Sparkles size={26} />}
            </button>
        </div>
    );
}