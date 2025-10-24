"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black text-white border-t border-neutral-800 py-12 px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Image
            src="/nelo-logo-2.png"
            alt="Nelo Logo"
            width={100}
            height={32}
          />
          <p className="text-sm text-neutral-400">
            Stay connected with us and follow Nelo’s journey as we shape the
            future of crypto payments.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm tracking-wide">
          {[
            { head: "Product", items: ["How it Works", "Features"] },
            {
              head: "Company",
              items: ["Terms of Service", "Privacy Policy", "FAQ / Support"],
            },
            { head: "Social", items: ["Twitter", "GitHub"] },
          ].map((col) => (
            <div key={col.head} className="flex flex-col gap-3">
              <span className="text-neutral-400 font-medium uppercase">
                {col.head}
              </span>
              {col.items.map((txt) => {
                const href =
                  col.head === "Social"
                    ? `https://${txt.toLowerCase()}.com`
                    : `/${txt.toLowerCase().replace(/ /g, "-")}`;
                return (
                  <Link
                    key={txt}
                    href={href}
                    target={col.head === "Social" ? "_blank" : undefined}
                    className="hover:text-neutral-200 transition-colors"
                  >
                    {txt}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500 flex justify-between flex-col md:flex-row gap-2">
        <p>© {new Date().getFullYear()} Nelo. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
