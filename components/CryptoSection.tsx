"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CryptoSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#FFE0B8] px-4 sm:px-6 py-12 sm:py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
        {/* CTA */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-2 border-black bg-[#000000] px-4 sm:px-8 md:px-16 py-10 sm:py-12 md:py-20 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
            {/* Text */}
            <div className="max-w-lg w-full text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas font-bold leading-tight mb-4 text-white uppercase">
                EXPERIENCE BORDERLESS <br /> SPENDING WITH A NELO CARD.
              </h2>
              <p className="text-base sm:text-lg text-white font-medium mb-6 sm:mb-8 font-space-grotesk leading-relaxed">
                Generate a NELO virtual card and take control of your payments.
                Perfect for streaming, shopping, or international services.
              </p>

              <div className="lg:hidden mb-6 relative w-full h-80">
                <Image
                  src="/nelo-card-sm.png"
                  alt="NELO Card"
                  fill
                  className="w-full max-w-sm mx-auto"
                />
              </div>
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi, I want to get a virtual card`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FFA94D] border-2 border-white font-orbitron text-sm font-bold tracking-wide hover:bg-[#ec963a] transition-colors whitespace-nowrap inline-block text-white"
              >
                GET CARD
              </Link>
            </div>

            {/* Desktop card image */}
            <div className="hidden lg:flex relative w-full max-w-md h-[400px]">
              <Image
                src="/nelo-card-sm.png"
                alt="NELO Cards"
                fill
                className="object-contain"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
