"use client";

import { useState } from 'react';
import { IoClose, IoCopy, IoCheckmark } from 'react-icons/io5';

interface WifiModalProps {
    ssid: string;
    password: string;
    onClose: () => void;
}

export function WifiModal({ ssid, password, onClose }: WifiModalProps) {
    const [copiedKey, setCopiedKey] = useState<'ssid' | 'pass' | null>(null);

    const handleCopyToClipboard = (text: string, key: 'ssid' | 'pass') => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedKey(key);
            setTimeout(() => {
                setCopiedKey(null);
            }, 2000);
        });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={onClose}
            />
            <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-fade-in-up">
                <div className="flex items-center justify-between border-b px-5 py-4">
                    <h3 className="text-lg font-semibold">Wi-Fi Bilgileri</h3>
                    <button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-gray-100"
                        aria-label="Kapat"
                    >
                        <IoClose className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-4 px-5 py-5">
                    <div className="flex items-center justify-between rounded-xl border bg-gray-50 px-4 py-3">
                        <div>
                            <div className="text-xs uppercase tracking-wide text-gray-500">Ağ Adı (SSID)</div>
                            <div className="font-medium text-gray-900">{ssid}</div>
                        </div>
                        <button
                            onClick={() => handleCopyToClipboard(ssid, 'ssid')}
                            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-50"
                        >
                            {copiedKey === 'ssid' ? (
                                <> <IoCheckmark className="h-4 w-4 text-green-600" /> Kopyalandı </>
                            ) : (
                                <> <IoCopy className="h-4 w-4" /> Kopyala </>
                            )}
                        </button>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border bg-gray-50 px-4 py-3">
                        <div>
                            <div className="text-xs uppercase tracking-wide text-gray-500">Şifre</div>
                            <div className="font-medium text-gray-900">{password}</div>
                        </div>
                        <button
                            onClick={() => handleCopyToClipboard(password, 'pass')}
                            className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-50"
                        >
                            {copiedKey === 'pass' ? (
                                <> <IoCheckmark className="h-4 w-4 text-green-600" /> Kopyalandı </>
                            ) : (
                                <> <IoCopy className="h-4 w-4" /> Kopyala </>
                            )}
                        </button>
                    </div>

                    <p className="text-xs text-gray-500">
                        İpucu: SSID ve şifreyi kopyaladıktan sonra cihazınızın Wi-Fi ayarlarına gidip hızlıca yapıştırabilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}