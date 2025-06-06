"use client";
import Link from "next/link";
import React, { useState } from "react";
import LinksGroup from "./LinksGroup";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-3 md:px-[130px] px-5 w-full bg-gray-700 shadow flex justify-between items-center relative">
      <Link href="/" className="text-2xl font-bold text-amber-500">
        Retro Gaming
      </Link>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Abrir menú">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="6" width="16" height="2" fill="#FBBF24" rx="1" />
            <rect x="8" y="12" width="12" height="2" fill="#FBBF24" rx="1" />
            <rect x="10" y="18" width="8" height="2" fill="#FBBF24" rx="1" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex">
        <LinksGroup />
      </div>

      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-gray-700 w-48 shadow-md md:hidden z-50">
          <LinksGroup />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
