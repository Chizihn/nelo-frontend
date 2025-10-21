import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  highlighted?: boolean;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  highlighted = false,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full h-full"
    >
      {/* Black offset shadow */}
      <div className="absolute bottom-[-8px] right-[-8px] w-full h-full bg-black z-0"></div>

      {/* Card container */}
      <div
        className={`relative z-10 border-2 border-black bg-white px-8 py-10 ${
          highlighted ? "bg-[#F5E6CC]" : "bg-white"
        }`}
        style={{
          boxShadow: "0 0 0 0 black", // ensures crisp 2D style
        }}
      >
        <h3 className="text-[18px] font-bold text-black mb-3">{title}</h3>
        <p className="text-[15px] text-black font-medium leading-snug">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
