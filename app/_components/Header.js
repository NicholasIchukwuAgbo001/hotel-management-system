"use client";
import { useState } from "react";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-950 border-b border-primary-900 px-4 sm:px-6 md:px-8 py-3 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />

      
        <div className="hidden md:block">
          <Navigation />
        </div>

      
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 hover:text-accent-400 transition-all duration-300" />
          ) : (
            <Bars3Icon className="w-6 h-6 hover:text-accent-400 transition-all duration-300" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-[60px] right-0  bg-primary-950 border-l border-primary-900 px-4 py-6 shadow-lg transition-all z-40">
          <Navigation onLinkClick={handleNavClick} />
        </div>
      )}
    </header>
  );
}

export default Header;
