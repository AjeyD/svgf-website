'use client';
import { Montserrat, Inter } from "next/font/google";
import Link from "next/link";
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
        <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3 bg-black/95 shadow-lg sticky top-0 z-50 border-b border-green-900 backdrop-blur-sm">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/LOGO-01.svg" alt="SVGF Logo" width={44} height={44} className="rounded-full border-2 border-[#1D4727] bg-white shadow-sm" />
            <span className="font-bold text-lg md:text-2xl text-white tracking-tight animate-fade-in whitespace-nowrap bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">Shri Vasudev Green Fuels LLP</span>
          </Link>
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
            <span className={`block w-7 h-0.5 bg-[#1D4727] mb-1 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#1D4727] mb-1 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-[#1D4727] transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          <ul className={`md:flex gap-6 font-semibold text-base transition-all duration-300 ${navOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-black/95 shadow-lg p-6 z-50' : 'hidden md:flex'} `}>
            {[
              {label: 'Home', path: '/'},
              {label: 'About', path: '/about'},
              {label: 'Products', path: '/products'},
              {label: 'Query', path: '/query'},
              {label: 'Contact', path: '/contact'},
            ].map((link) => (
              <li key={link.label} className="my-2 md:my-0">
                <Link
                  href={link.path}
                  className="relative transition-colors duration-200 text-white hover:text-green-400 px-3 py-1 block group rounded-md"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="transition-all duration-500 animate-fade-in">{children}</div>
        <footer className="w-full bg-gradient-to-r from-[#1D4727] to-green-900 text-white py-8 mt-16 shadow-inner border-t border-green-700">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Link href="/" className="hover:text-green-300 transition-colors duration-200 px-2 py-1">Home</Link>
              <Link href="/products" className="hover:text-green-300 transition-colors duration-200 px-2 py-1">Products</Link>
              <Link href="/contact" className="hover:text-green-300 transition-colors duration-200 px-2 py-1">Contact</Link>
              <Link href="/query" className="hover:text-green-300 transition-colors duration-200 px-2 py-1">Query</Link>
            </div>
            <div className="text-center md:text-right text-sm">
              <div>VPO Phaggu, Kalanwali, Distt. Sirsa - 125201, Haryana</div>
              <div>&copy; {new Date().getFullYear()} Shri Vasudev Green Fuels LLP</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

