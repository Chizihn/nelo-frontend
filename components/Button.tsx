"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

// Combine native button props + motion props, but exclude conflicting ones
type ButtonProps = {
  children: ReactNode;
  small?: boolean;
  whiteBorder?: boolean;
} & Omit<HTMLMotionProps<"button">, "ref"> &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd"
  >;

export default function Button({
  children,
  small,
  whiteBorder,
  className = "",
  ...rest
}: ButtonProps) {
  const base = `
    px-${small ? "6" : "8"} py-${small ? "3" : "4"}
    bg-[#FFA94D] border-2 ${whiteBorder ? "border-white" : "border-black"}
    font-orbitron text-sm font-bold tracking-wide
    hover:bg-[#ec963a] transition-colors
    whitespace-nowrap inline-block
  `;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${base} ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
