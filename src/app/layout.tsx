'use client';
import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useState } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-white text-black font-sans`}
        style={{scrollBehavior: 'smooth'}}
      >
        <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/Logo.jpeg" alt="SVGF Logo" width={44} height={44} className="rounded-full border-2 border-[#1D4727] bg-white shadow-sm" />
            <span className="font-bold text-lg md:text-2xl text-[#1D4727] tracking-tight animate-fade-in whitespace-nowrap">Shri Vasudev Green Fuels LLP</span>
          </a>
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
            <span className={`block w-7 h-0.5 bg-[#1D4727] mb-1 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#1D4727] mb-1 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#1D4727] transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          <ul className={`md:flex gap-6 font-semibold text-base transition-all duration-300 ${navOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white/95 shadow-lg p-6 z-50' : 'hidden md:flex'} `}>
            {[
              {label: 'Home', id: 'home'},
              {label: 'About', id: 'about'},
              {label: 'Products', id: 'products'},
              {label: 'Presence', id: 'presence'},
              {label: 'Query', id: 'query'},
              {label: 'Contact', id: 'contact'},
            ].map(link => (
              <li key={link.id} className="my-2 md:my-0">
                <a
                  href={`#${link.id}`}
                  className="relative transition-colors duration-200 hover:text-green-700 px-1 block"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-[#1D4727] to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
        <footer className="w-full bg-gradient-to-r from-[#1D4727] to-green-900 text-white py-8 mt-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#products" className="hover:underline">Products</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <a href="#query" className="hover:underline">Query</a>
            </div>
            <div className="text-center md:text-right text-sm">
              <div>VPO Phaggu, Kalanwali, Distt. Sirsa - 125201, Haryana</div>
              <div>© {new Date().getFullYear()} Shri Vasudev Green Fuels LLP</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
