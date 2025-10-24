"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-6 py-16 sm:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* TEXT - Always first on mobile */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center lg:text-left space-y-5 order-1" // ← order-1
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight font-space-grotesk">
            Seamless payments, right inside your chats.
          </h1>
          <p className="text-lg sm:text-xl font-space-grotesk leading-relaxed text-gray-700">
            Send and receive crypto instantly with Nelo, your AI agent on
            WhatsApp.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hi`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-8 py-4 bg-[#FFA94D] border-2 border-black font-orbitron text-sm font-bold tracking-wide hover:bg-[#ec963a] transition-colors whitespace-nowrap inline-block"
            >
              GET STARTED
            </Link>
          </div>
        </motion.div>

        {/* IMAGE - Always second on mobile */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2" // ← order-2
        >
          {/* Desktop Image */}
          <div className="hidden lg:block relative w-full h-0 pb-[75%] rounded-xl overflow-hidden  ">
            <Image
              src="/hero-img.png"
              alt="Nelo - Crypto payments in WhatsApp"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden relative w-full h-0 pb-[100%] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/hero-img-mobile.png"
              alt="Nelo - Mobile crypto payments"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
