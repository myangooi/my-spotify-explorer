import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Spotify Explorer",
  description: "Spotify Stuff at a Glance",
  icons: "./favicon.ico",
  metadataBase: new URL("https://myangooi.github.io/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
