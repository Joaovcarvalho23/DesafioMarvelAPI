import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Rodape from "@/Components/Rodape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarvelApi Desafio",
  description: "Personagens do universo Marvel e seus principais dados!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Rodape />
        </body>
    </html>
  );
}
