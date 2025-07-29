"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Cabins", href: "/cabins" },
  { label: "About", href: "/about" },
  { label: "Guest Area", href: "/account" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10 text-lg font-medium">
      <ul className="flex gap-10 items-center">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="relative">
              <Link
                href={href}
                className="px-3 py-2 rounded-md transition-all duration-200 hover:text-accent-400 hover:bg-primary-900"
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 rounded-full -bottom-1"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
