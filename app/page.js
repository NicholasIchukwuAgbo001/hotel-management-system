"use client"

import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";
import useTypedText from "@/app/_hooks/useTypedText";

export default function Page() {

  const messages = [
    "Welcome to luxury.",
    "Relax.",
    "Unwind.",
    "Stay in style.",
    "Pure comfort.",
    "Welcome to luxury.",
  ];

  
  const typedText = useTypedText(messages, 80);

  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className=""
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-7xl text-yellow-500 mb-10 tracking-tight font-bold">
          {typedText}|
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg rounded-sm font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
