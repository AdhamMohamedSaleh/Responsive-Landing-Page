import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="grid grid-cols-3 items-center whitespace-nowrap p-4 mx-auto">

        <div className="pt-2"><Image alt="Logo" src="/logo.svg" width={100} height={100} /></div>

        <div className="hidden lg:flex justify-center space-x-10">
          <Link href="/pricing" className="hover:text-gray-400 text-gray-950">Pricing</Link>
          <Link href="/product" className="hover:text-gray-400 text-gray-950">Product</Link>
          <Link href="/about" className="hover:text-gray-400 text-gray-950">About Us</Link>
          <Link href="/careers" className="hover:text-gray-400 text-gray-950">Careers</Link>
          <Link href="/community" className="hover:text-gray-400 text-gray-950">Community</Link>
        </div>

        <div className="hidden lg:flex justify-end">
          <Link href="/get-started" className="btn">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;