import {Header} from "@/components/menu/Header";

export default async function MenuLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="w-full max-w-4xl mx-auto px-4 py-8">
                <main>
                    <Header />
                    {children}
                </main>
            </div>
        </div>
    );
}