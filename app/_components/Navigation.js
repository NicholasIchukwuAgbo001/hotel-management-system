'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/cabins', label: 'Rooms' },
    { href: '/about', label: 'About' },
    { href: '/account', label: 'Guest area' },
  ];

  return (
    <nav className="z-10 text-base sm:text-lg">
      <ul className="flex gap-8 sm:gap-12 items-center">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-accent-400 font-semibold border-b'
                    : 'text-primary-300 hover:text-accent-400'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
