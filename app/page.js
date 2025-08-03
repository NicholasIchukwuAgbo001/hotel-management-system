"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg from "@/public/bg.png";

const messages = [
  "Welcome to paradise.",
  "Escape beautifully.",
  "Nature. Reimagined.",
  "Luxury, defined.",
  "Serenity begins here.",
  "Timeless tranquility.",
  "Unwind in style.",
  "Breathe. Stay. Belong.",
  "Elevate your escape.",
  "Pure indulgence.",
  "Welcome home.",
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top absolute"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center mt-40 px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-5xl sm:text-6xl md:text-7xl text-primary-50 mb-10 tracking-tight font-semibold"
          >
            {messages[currentIndex]}
          </motion.h1>
        </AnimatePresence>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-5 text-primary-800 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury rooms
        </Link>
      </div>
    </main>
  );
}