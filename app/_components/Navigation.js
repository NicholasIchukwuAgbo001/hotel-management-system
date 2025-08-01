"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const [underlineWidth, setUnderlineWidth] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const activeLink = containerRef.current?.querySelector("a.active");

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineLeft(offsetLeft);
      setUnderlineWidth(offsetWidth);
    }
  }, [pathname]);

  const links = [
    { href: "/cabins", label: "Rooms" },
    { href: "/about", label: "About" },
    { href: "/account", label: "Guest area" },
  ];

  return (
    <nav className="relative z-10 text-lg sm:text-base">
      <ul
        className="flex gap-10 sm:gap-16 items-center relative transition-all"
        ref={containerRef}
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`pb-1 transition-colors ${
                  isActive ? "text-accent-400 font-semibold active" : "text-primary-100 hover:text-accent-400"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}

        <span
          className="absolute bottom-0 h-[2px] bg-accent-400 transition-all duration-300"
          style={{
            left: underlineLeft,
            width: underlineWidth,
          }}
        />
      </ul>
    </nav>
  );
}
