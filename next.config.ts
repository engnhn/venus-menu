import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "88.209.248.254",
                port: "8081",
                pathname: "/uploads/**",
            },
        ],
        // (opsiyonel) tarayıcı desteğini iyileştirmek için:
        // formats: ["image/avif", "image/webp"],
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    // Modern tarayıcılarda etkisiz ama sorun değil:
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    // (opsiyonel) yalnızca HTTPS kaynaklarını zorlamak istersen:
                    // { key: "Content-Security-Policy", value: "upgrade-insecure-requests" },
                ],
            },
        ];
    },

    // API mixed content sorununu çözmek için rewrite:
    async rewrites() {
        return [
            {
                source: "/api/v1/:path*",
                destination: "http://88.209.248.254:8081/api/v1/:path*",
            },
        ];
    },
};

export default nextConfig;
