"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex instead of Grid */}
      <div className="flex items-center justify-between whitespace-nowrap p-4 mx-auto w-full">
        {/* Logo */}
        <div className="pt-2">
          <Image alt="Logo" src="/logo.svg" width={100} height={100} />
        </div>

        {/* Center Nav (Desktop only) */}
        <div className="hidden lg:flex justify-center space-x-10 flex-1">
          <Link href="/pricing" className="hover:text-gray-400 text-gray-950">Pricing</Link>
          <Link href="/product" className="hover:text-gray-400 text-gray-950">Product</Link>
          <Link href="/about" className="hover:text-gray-400 text-gray-950">About Us</Link>
          <Link href="/careers" className="hover:text-gray-400 text-gray-950">Careers</Link>
          <Link href="/community" className="hover:text-gray-400 text-gray-950">Community</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Link href="/get-started" className="btn">Get Started</Link>
          </div>

          {/* Hamburger Button (Mobile only) */}
          <button
            className="cursor-pointer lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // X Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when open) */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-xs" onClick={()=>setIsOpen(false)}></div>
          <div
            id="menu"
            className="absolute max-w-xl mx-auto left-6 right-6 mt-10 flex flex-col items-center space-y-6 font-bold bg-white py-8 px-6 shadow-md"
          >
            <Link className="hover:text-gray-400" href="/pricing">Pricing</Link>
            <Link className="hover:text-gray-400" href="/product">Product</Link>
            <Link className="hover:text-gray-400" href="/about">About Us</Link>
            <Link className="hover:text-gray-400" href="/careers">Careers</Link>
            <Link className="hover:text-gray-400" href="/community">Community</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
