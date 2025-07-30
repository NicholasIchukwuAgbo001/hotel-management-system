"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bg1 from '@/public/bg.png';

const fullText = [
  "Welcome to paradise",
  "Experience nature like never before",
  "Your luxury getaway awaits",
  "Find your perfect cabin",
  "Unwind. recharge. explore.",
];

export default function Page() {
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentString = fullText[textIndex];
    if (charIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentString.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % fullText.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  return (
    <main className="mt-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src={bg1}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="Background image"
        />
      </motion.div>

      <div className="relative text-center">
        <h1 className="text-6xl md:text-8xl text-yellow-500 mb-10 tracking-tight font-bold min-h-[10rem]">
          {typedText}
          <span className="animate-pulse text-stone-500">|</span>
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold rounded-lg hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
