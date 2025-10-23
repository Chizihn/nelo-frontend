"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WHAT ARE THE SUPPORTED BLOCKCHAINS/NETWORKS ON NELO?",
      answer:
        "Nelo supports major blockchain networks including Ethereum, Bitcoin, Binance Smart Chain, and other popular cryptocurrencies. You can instantly convert your local currency to any supported crypto directly through WhatsApp.",
    },
    {
      question: "HOW LONG DOES IT TAKE TO COMPLETE A TRANSACTION?",
      answer:
        "Transactions are processed instantly. Once you send your payment, the crypto is delivered to your wallet within minutes, with no complicated forms or delays.",
    },
    {
      question: "IS NELO SAFE AND SECURE?",
      answer:
        "Yes, Nelo uses bank-level encryption and security protocols to protect your transactions. All crypto transfers are secured and your personal information is encrypted.",
    },
    {
      question: "WHAT PAYMENT METHODS ARE ACCEPTED?",
      answer:
        "Nelo accepts various local payment methods including bank transfers, mobile money, and other region-specific payment options for seamless currency conversion.",
    },
    {
      question: "DO I NEED TO CREATE AN ACCOUNT?",
      answer:
        "No complicated sign-ups required! Simply start chatting with the Nelo AI Agent on WhatsApp and begin your crypto transactions immediately.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Inline SVG for ChevronDown
  const ChevronDownSVG = ({ className }: { className?: string }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      width={20}
      height={20}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col  justify-center ">
          <h2 className="text-5xl font-bold mb-4 font-space-grotesk">
            Frequently
            <br />
            Asked <span className="text-[#ff8a3d]">questions</span>
          </h2>
          <p className="text-lg lg:text-2xl font-space-grotesk">
            These are the most commonly asked questions about NELO. Can&apos;t
            find what you&apos;re looking for?
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-black bg-[#f4d9b0] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between font-orbitron text-sm font-semibold tracking-wide text-left hover:bg-[#f0c890] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDownSVG
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t-2 border-black font-space-grotesk">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
