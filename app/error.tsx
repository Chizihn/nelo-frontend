"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-[#FFEBD1] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-4 border-black bg-[#FFA64D] p-12 text-center max-w-lg w-full shadow-[6px_6px_0px_#000]"
        >
          <h1 className="text-5xl md:text-6xl font-bebas font-bold text-black mb-3 uppercase">
            Oops! Something went wrong.
          </h1>
          <p className="text-black/80 font-space-grotesk mb-6">
            We encountered an unexpected error. Please try again later.
          </p>
          <button
            onClick={reset}
            className="px-6 py-2 bg-[#F4D9B0] border-2 border-black text-sm font-orbitron font-semibold hover:bg-[#F0C890] transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      </section>
    </>
  );
}
