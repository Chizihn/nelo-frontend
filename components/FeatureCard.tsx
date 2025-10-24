import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
  index: number;
}
export default function FeatureCard({
  title,
  description,
  icon: Icon,
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
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-black z-0"></div>
      {/* Card container */}
      <div
        className={`relative z-10 border-2 border-black px-8 py-10 ${
          highlighted ? "bg-[#F5E6CC]" : "bg-white"
        }`}
        style={{
          boxShadow: "0 0 0 0 black", // ensures crisp 2D style
        }}
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[#FFE66D] border-2 border-black flex items-center justify-center mb-6">
          <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
        </div>

        <h3 className="text-[18px] font-bold text-black mb-3">{title}</h3>
        <p className="text-[15px] text-black font-medium leading-snug">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
