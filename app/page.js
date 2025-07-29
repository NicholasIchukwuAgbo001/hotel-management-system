"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import bg1 from '@/public/bg.png';
import bg2 from '@/public/bg2.jpg';
import bg3 from '@/public/bg3.png';
import bg4 from '@/public/bg4.jpg';
import bg5 from '@/public/bg5.jpg';
import bg6 from '@/public/bg6.jpg';
import bg7 from '@/public/bg7.jpg';
import bg8 from '@/public/bg8.jpg';
import bg9 from '@/public/bg9.jpg';
import bg10 from '@/public/bg10.jpg';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, []);

  return (
    <main className="mt-24">
      <Image 
      src={images[currentImageIndex]}
      fill
      placeholder="blur"
      quality={80}
      className="object-cover object-top"
      alt="Mountains and forests with two cabins" 
      />

      <div className="relative text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
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