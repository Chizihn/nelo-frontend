"use client";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

export default function HowItWorks() {
  const features = [
    {
      title: "Easy on-ramp",
      description:
        "Instantly cover your local currency to crypto directly from whatsapp, no complicated forms, no delays.",
    },
    {
      title: "Global Access",
      description:
        "Instantly cover your local currency to crypto directly from whatsapp, no complicated forms, no delays.",
    },
    {
      title: "Virtual Card",
      description:
        "Instantly cover your local currency to crypto directly from whatsapp, no complicated forms, no delays.",
    },
    {
      title: "Virtual Card",
      description:
        "Instantly cover your local currency to crypto directly from whatsapp, no complicated forms, no delays.",
      highlighted: true,
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#FAFAFA] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2">
            How it works
          </h2>
          <p className="text-gray-600 text-lg">
            This is how the website is going to work
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              highlighted={feature.highlighted}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
