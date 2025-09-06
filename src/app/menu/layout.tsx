// app/menu/layout.tsx

import { Header } from '@/components/menu/Header';
import {Footer} from "@/components/layout/Footer";

// Bu layout, children prop'u aracılığıyla sayfa içeriklerini alacak.
export default function MenuLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex justify-center items-start p-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden relative">


                <main>
                    {children}
                    <Footer />
                </main>
            </div>
        </div>
    );
}