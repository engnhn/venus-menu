"use client";

import { IoClose, IoStar } from 'react-icons/io5';

interface RatingModalProps {
    reviewUrl: string;
    onClose: () => void;
}

export function RatingModal({ reviewUrl, onClose }: RatingModalProps) {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={onClose}
            />
            <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-fade-in-up">
                <div className="flex items-center justify-between border-b px-5 py-4">
                    <h3 className="text-lg font-semibold">Bizi Puanlayın ⭐</h3>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-gray-100"
                        aria-label="Kapat"
                    >
                        <IoClose className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-4 px-5 py-5">
                    <p className="text-sm text-gray-700">
                        Deneyiminizi paylaşmanız bizim için çok değerli. Bir dakikanızı ayırıp Google’da işletmemizi puanlar mısınız?
                    </p>
                    <a
                        href={reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-yellow-950 transition-colors hover:bg-yellow-300"
                    >
                        <IoStar className="h-5 w-5" />
                        Google’da Puanla
                    </a>
                    <p className="text-xs text-gray-500">
                        Link yeni bir sekmede açılır. Google hesabınızla giriş yapmanız gerekebilir.
                    </p>
                </div>

                <div className="flex justify-end gap-2 border-t px-5 py-4">
                    <button
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Kapat
                    </button>
                </div>
            </div>
        </div>
    );
}