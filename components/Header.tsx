"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b-2 border-black bg-[#f0f0f0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image src="/nelo-logo.png" alt="Nelo Logo" width={120} height={40} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-orbitron text-sm font-medium tracking-wide">
          {["HOW IT WORKS", "FEATURES", "PARTNERS"].map((txt) => (
            <Link
              key={txt}
              href={`#${txt.toLowerCase().replace(/ /g, "-")}`}
              className="hover:opacity-70 transition-opacity"
            >
              {txt}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop CTA - ONLY on lg+ */}
        <div className="hidden lg:block">
          <Link
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#FFA94D] border-2 border-black font-orbitron text-sm font-bold tracking-wide hover:bg-[#ec963a] transition-colors whitespace-nowrap inline-block"
          >
            GET STARTED
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-[#f0f0f0] border-t-2 border-black"
        >
          <nav className="flex flex-col items-center gap-4 py-4 font-orbitron text-sm font-medium tracking-wide">
            {["HOW IT WORKS", "FEATURES", "PARTNERS"].map((txt) => (
              <Link
                key={txt}
                href={`#${txt.toLowerCase().replace(/ /g, "-")}`}
                className="hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                {txt}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FFA94D] border-2 border-black font-orbitron text-sm font-bold tracking-wide hover:bg-[#ec963a] transition-colors whitespace-nowrap inline-block"
              onClick={toggleMenu}
            >
              GET STARTED
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
