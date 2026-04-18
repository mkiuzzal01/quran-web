import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/StoreProvider";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Holy Quran",
  description: "The Holy Quran - Read, Search, and Explore Ayahs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
