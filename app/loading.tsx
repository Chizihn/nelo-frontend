"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center bg-[#FFD95C] shadow-[6px_6px_0px_#000]"
      >
        <div className="w-8 h-8 bg-black rounded-full animate-bounce"></div>
      </motion.div>
      <p className="mt-6 font-space-grotesk text-black text-base font-medium">
        Loading, please wait...
      </p>
    </section>
  );
}
