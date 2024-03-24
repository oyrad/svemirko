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
        href: "/favicon/icon-light.png",
        url: "/favicon/icon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        href: "/favicon/icon-dark.png",
        url: "/favicon/icon-dark.png",
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
      <body
        className={cn(
          victorMono.className,
          "bg-black text-white hide-scrollbar"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
