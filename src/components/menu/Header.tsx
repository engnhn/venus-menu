import Link from "next/link";

interface HeaderProps {
    cafeName: string;
}

export function Header({ cafeName }: HeaderProps) {
    return (
        <header className="sticky top-4 z-50 flex justify-center w-full px-4 mb-6">
            <div className="w-full max-w-4xl flex items-center justify-center gap-x-4 bg-white/70 backdrop-blur-sm shadow-lg rounded-xl px-4 sm:px-6 py-3">
                <Link href="/menu" className="transition-opacity hover:opacity-80">
                    <h1 className="text-2xl font-bold tracking-widest uppercase text-zinc-900">
                        {cafeName}
                    </h1>
                </Link>
            </div>
        </header>
    );
}