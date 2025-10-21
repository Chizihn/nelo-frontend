"use client";

export default function CryptoSection() {
  return (
    <section className="bg-[#D8D8A399] px-6 py-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* ORANGE CTA SECTION */}
        <div className="relative border-2 border-black bg-[#FFA64D] px-16 py-20 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left text */}
            <div className="max-w-lg">
              <h2 className="text-5xl font-bebas font-bold leading-tight mb-4 text-black uppercase">
                BUY CRYPTO EASILY ON <br /> WHATSAPP AT GREAT RATES
              </h2>
              <p className="text-lg text-black font-medium mb-8 font-space-grotesk leading-relaxed">
                Buy Crypto Easily on WhatsApp at GetTrade stablecoins seamlessly
                with your local currency — right from your WhatsApp, with rates
                you&apos;ll love.
              </p>
              <button className="px-6 py-3 bg-[#F4D9B0] border-2 border-black text-base font-semibold font-orbitron hover:bg-[#F0C890] transition-colors">
                Chat on Whatsapp
              </button>
            </div>

            {/* Right circular placeholder */}
            <div className="relative w-64 h-64 shrink-0">
              <div className="absolute inset-0 bg-[#FFD95C] border-4 border-black rounded-full"></div>
              <div className="absolute inset-8 border-4 border-black rounded-full bg-transparent"></div>
            </div>
          </div>

          {/* Overlap circle outside right edge */}
          <div className="absolute -right-24 -top-12 w-[320px] h-[320px] bg-[#FFD95C] border-4 border-black rounded-full hidden md:block"></div>
          <div className="absolute -right-16 top-0 w-[320px] h-[320px] border-4 border-black rounded-full bg-transparent hidden md:block"></div>
        </div>

        {/* BEIGE CTA SECTION */}
        <div className="relative border-2 border-black bg-[#F5F5DC] px-16 py-20 overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
            {/* Right text */}
            <div className="max-w-lg">
              <h2 className="text-5xl font-bebas font-bold leading-tight mb-4 text-black uppercase">
                BUY CRYPTO EASILY ON <br /> WHATSAPP AT GREAT RATES
              </h2>
              <p className="text-lg text-black font-medium mb-8 font-space-grotesk leading-relaxed">
                Buy Crypto Easily on WhatsApp at GetTrade stablecoins seamlessly
                with your local currency — right from your WhatsApp, with rates
                you&apos;ll love.
              </p>
              <button className="px-6 py-3 bg-[#F4D9B0] border-2 border-black text-base font-semibold font-orbitron hover:bg-[#F0C890] transition-colors">
                Chat on Whatsapp
              </button>
            </div>

            {/* Left circular placeholder */}
            <div className="relative w-64 h-64 shrink-0">
              <div className="absolute inset-0 bg-[#FFD95C] border-4 border-black rounded-full"></div>
              <div className="absolute inset-8 border-4 border-black rounded-full bg-transparent"></div>
            </div>
          </div>

          {/* Overlap circle outside left edge */}
          <div className="absolute -left-24 -top-12 w-[320px] h-[320px] bg-[#FFD95C] border-4 border-black rounded-full hidden md:block"></div>
          <div className="absolute -left-16 top-0 w-[320px] h-[320px] border-4 border-black rounded-full bg-transparent hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
