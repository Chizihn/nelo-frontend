"use client";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowDownToLine,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function HowItWorks() {
  const features = [
    {
      title: "Easy on-ramp",
      description:
        "Send and receive crypto directly from your local payment methods fast, secure and stress-free.",
      icon: Wallet,
    },
    {
      title: "Seamless Off-ramp",
      description:
        "Convert your crypto back to cash anytime. Instant withdrawals,. Zero confusion. Full control.",
      icon: ArrowDownToLine,
    },
    {
      title: "Virtual Cards for everyday use",
      description:
        "Spend your crypto anywhere, anytime with a NELO virtual card.",
      icon: CreditCard,
    },
    {
      title: "Chat-Based payments",
      description:
        "Send and receive money right from whatsapp. As easy as sending a message, no complexity.",
      icon: MessageSquare,
      highlighted: true,
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#FAFAFA] py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2">
            Why people choose Nelo
          </h2>
          <p className="text-gray-600 text-lg">
            Designed for speed, trust, and everyday use.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
