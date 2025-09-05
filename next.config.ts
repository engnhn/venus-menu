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
            {
                protocol: "https",
                hostname: "www.venusvefa.com.tr",
                port: "",
                pathname: "/uploads/**",
            },
        ],
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
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                ],
            },
        ];
    },

    async rewrites() {
        return [
            {
                source: "/api/v1/:path*",
                destination: "http://88.209.248.254:8081/api/v1/:path*",
            },
            {
                source: "/api/v1/:path*",
                destination: "http://88.209.248.254:8081/api/v1/:path*",
            },
        ];
    },
};

export default nextConfig;