"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import bg from "@/public/bg.png";

const messages = [
  "Welcome to paradise.",
  "Unwind in nature.",
  "Luxury meets comfort.",
  "Find your escape.",
  "Your dream Hotel awaits.",
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);
  }, []);

  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center mt-40">
        <h1 className="text-6xl sm:text-7xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal transition-opacity duration-500 ease-in-out">
          {messages[currentIndex]}
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
