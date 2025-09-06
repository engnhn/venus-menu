"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
    { href: "/menu", label: "Menü" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/nerede", label: "Nerede?" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="sticky top-4 z-50 flex justify-center w-full px-4 mb-8">
                <div className="w-full max-w-5xl flex items-center justify-between gap-x-4 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl px-4 sm:px-6 py-3">
                    <div className="flex-grow flex justify-center md:justify-start">
                        <Link href="/" className="flex items-center justify-center transition-opacity hover:opacity-80">
                            <Image
                                src="/venus-logo.svg"
                                alt="Venus Cafe Logo"
                                width={120}
                                height={40}
                                priority
                                className="max-w-[120px] h-auto"
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-x-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center justify-end md:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                            <Menu className="w-6 h-6 text-zinc-800" />
                        </button>
                    </div>
                    <div className="hidden md:flex flex-grow justify-end">
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-full max-w-xs bg-white p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2">
                                <X className="w-7 h-7 text-zinc-500" />
                            </button>
                            <nav className="flex flex-col items-center justify-center h-full gap-y-8">
                                {navLinks.map((link) => (
                                    <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold text-zinc-800">
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}