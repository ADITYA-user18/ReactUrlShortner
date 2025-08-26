import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-orange-400 text-white h-20 w-full">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center h-full px-8">
        <div className="font-bold text-3xl tracking-wide ">
          LinkSpark
        </div>

      
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/shorten">Shorten</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-white text-amber-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                Try now
              </button>
            </Link>
            <Link href="/github">
              <button className="border border-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-amber-800 transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
