"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from '@/public/bg.png';
import bg2 from '@/public/bg2.jpg';
import bg4 from '@/public/bg4.jpg';
import bg5 from '@/public/bg5.jpg';
import bg6 from '@/public/bg6.jpg';
import bg7 from '@/public/bg7.jpg';
import bg8 from '@/public/bg8.jpg';
import bg9 from '@/public/bg9.jpg';
import bg10 from '@/public/bg10.jpg';

const images = [bg1, bg2, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

const fullText = [
  "Welcome to paradise🌠",
  "Experience nature🌳",
  "Your luxury getaway awaits^_^",
  "Find your perfect cabin🛖",
  "Unwind. recharge. explore😻",
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, []);

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
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            fill
            placeholder="blur"
            quality={80}
            className="object-cover object-top"
            alt="Background image"
          />
        </motion.div>
      </AnimatePresence>

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
