"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-4 border-black bg-white p-12 max-w-lg w-full text-center relative shadow-[6px_6px_0px_#000]"
      >
        <h1 className="text-6xl md:text-7xl font-bebas text-black mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-bebas font-bold text-black mb-4 uppercase">
          Page Not Found
        </h2>
        <p className="text-black/70 font-space-grotesk mb-6">
          Looks like this page doesn’t exist. You might have taken a wrong turn.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#F4D9B0] border-2 border-black text-sm font-orbitron font-semibold hover:bg-[#F0C890] transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}
