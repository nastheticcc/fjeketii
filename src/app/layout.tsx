'use client';
import "./globals.css"; 
import { ReactNode } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-pink-300 text-black min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}