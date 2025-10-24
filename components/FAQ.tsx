"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WHAT IS NELO?",
      answer:
        "Nelo is an innovative AI-powered financial platform that lets you send, receive, and manage cryptocurrencies directly through WhatsApp. It's your personal AI financial assistant that makes crypto transactions as simple as sending a message, with built-in virtual card capabilities for everyday spending.",
    },
    {
      question: "HOW DOES NELO WORK?",
      answer:
        "Nelo works through a simple WhatsApp chat interface. Just message our AI agent to buy or sell crypto, check rates, or manage your virtual card. Our AI understands natural language, so you can simply type what you want to do, and it will guide you through the process. No complex apps or websites needed - everything happens right in your WhatsApp chat.",
    },
    {
      question: "IS NELO SECURE?",
      answer:
        "Absolutely! Nelo employs security measures including end-to-end encryption, multi-factor authentication, and real-time fraud monitoring. Our platform is built with multiple security layers, regular security audits, and complies with international financial security standards to ensure your transactions and data are always protected.",
    },
    {
      question: "DO I NEED A CRYPTO WALLET TO USE NELO?",
      answer:
        "No, you don't need a pre-existing crypto wallet! Nelo creates and manages a secure wallet for you automatically. We handle all the technical complexities, so you can focus on making transactions.",
    },
    {
      question: "WHAT CAN I DO WITH NELO BESIDES CRYPTO?",
      answer:
        "Nelo's virtual card transforms your crypto into everyday spending power. Use it for online shopping, subscription services, travel bookings, and more. The card works anywhere major cards are accepted online. You can instantly generate cards, set spending limits, freeze/unfreeze them, and track all transactions in real-time - all through WhatsApp commands.",
    },
  ];

  const toggleFAQ = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ----- LEFT ----- */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold mb-4 font-space-grotesk leading-tight">
            Frequently
            <br />
            Asked <span className="text-[#ff8a3d]">questions</span>
          </h2>
          <p className="text-lg lg:text-2xl font-space-grotesk text-gray-700">
            These are the most commonly asked questions about NELO. Can&apos;t
            find what you&apos;re looking for?
          </p>
        </motion.div>

        {/* ----- RIGHT – ACCORDION ----- */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-2 border-black bg-[#f4d9b0] overflow-hidden"
              >
                {/* ----- ORIGINAL BUTTON DESIGN ----- */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={`
                    w-full px-6 py-4 flex items-center justify-between
                    font-orbitron text-sm font-semibold tracking-wide text-left
                    hover:bg-[#f0c890] transition-colors
                    ${isOpen ? "bg-[#f0c890]" : ""}
                  `}
                >
                  <span>{faq.question}</span>

                  {/* Animated chevron – same SVG you used */}
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 9l6 6 6-6"
                    />
                  </motion.svg>
                </button>

                {/* ----- EXPANDING ANSWER ----- */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-white border-t-2 border-black font-space-grotesk text-gray-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
