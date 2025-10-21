"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b-2 border-black bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Image src="/nelo-logo.png" alt="Nelo Logo" width={120} height={40} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-orbitron text-sm font-medium tracking-wide">
          <Link
            href="#how-it-works"
            className="hover:opacity-70 transition-opacity"
          >
            HOW IT WORKS
          </Link>
          <Link
            href="#features"
            className="hover:opacity-70 transition-opacity"
          >
            FEATURES
          </Link>
          <Link
            href="#partners"
            className="hover:opacity-70 transition-opacity"
          >
            PARTNERS
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Get Started Button (Desktop) */}
        <button className="hidden md:inline-block px-6 py-3 bg-[#f4d9b0] border-2 border-black font-orbitron text-sm font-bold tracking-wide hover:bg-[#f0c890] transition-colors whitespace-nowrap">
          GET STARTED
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f0f0f0] border-t-2 border-black">
          <nav className="flex flex-col items-center gap-4 py-4 font-orbitron text-sm font-medium tracking-wide">
            <Link
              href="#how-it-works"
              className="hover:opacity-70 transition-opacity"
              onClick={toggleMenu}
            >
              HOW IT WORKS
            </Link>
            <Link
              href="#features"
              className="hover:opacity-70 transition-opacity"
              onClick={toggleMenu}
            >
              FEATURES
            </Link>
            <Link
              href="#partners"
              className="hover:opacity-70 transition-opacity"
              onClick={toggleMenu}
            >
              PARTNERS
            </Link>
            <button
              className="px-6 py-3 bg-[#f4d9b0] border-2 border-black font-orbitron text-sm font-semibold tracking-wide hover:bg-[#f0c890] transition-colors whitespace-nowrap"
              onClick={toggleMenu}
            >
              GET STARTED
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
