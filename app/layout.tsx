import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const victorMono = Victor_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Svemirko",
  description: "tvoj najdraži bend",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        href: "/images/logo-black.svg",
        url: "/images/logo-black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/images/logo-white.svg",
        url: "/images/logo-white.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(victorMono.className, "bg-black text-white")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
