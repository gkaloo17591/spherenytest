import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "SphereNY — Security. Consulting. Risk. Technology.",
    description: "SphereNY delivers expert Security, Consulting, Risk Management, and Information Technology services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={inter.className}>{children}</body>
        </html>
    );
}