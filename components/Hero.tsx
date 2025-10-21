// components/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-space-grotesk">
            Turn your Chats into Cashouts.
          </h1>
          <p className="text-lg sm:text-xl font-space-grotesk leading-relaxed">
            Manage your virtual cards and crypto assets directly through
            WhatsApp. Instant transactions, zero complexity, and bank-grade
            security — all in the chat you use every day.
          </p>

          <button className="mt-6 px-8 py-4 bg-[#f4d9b0] border-2 border-black font-orbitron text-sm font-bold tracking-wide hover:bg-[#f0c890] transition-colors">
            GET STARTED
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full h-80 sm:h-96 flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="/crypto-illustration.jpg"
            alt="Hero Image"
            width={400}
            height={200}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
