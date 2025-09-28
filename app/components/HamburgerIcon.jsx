"use client";
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      {/* Hamburger Button (only visible below lg) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden focus:outline-none p-3"
      >
        {isOpen ? (
          // X Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu (only below lg) */}
      {isOpen && (
        <div
          id="menu"
          className="absolute left-6 right-6 mt-10 flex flex-col items-center space-y-6 font-bold bg-white py-8 px-6 shadow-md lg:hidden"
        >
          <Link href="#">Pricing</Link>
          <Link href="#">Product</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Community</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
