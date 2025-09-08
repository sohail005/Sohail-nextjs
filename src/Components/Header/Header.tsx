"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

import logo from "../../../src/Assets/Images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={120} height={40} className="object-contain" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-black font-medium">
          <span className="hover:text-blue-500 cursor-pointer">Destinations</span>
          <span className="hover:text-blue-500 cursor-pointer">Hotels</span>
          <span className="hover:text-blue-500 cursor-pointer">Flights</span>
          <span className="hover:text-blue-500 cursor-pointer">Bookings</span>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-gray-400 hover:border-blue-500 rounded px-3 py-1 text-sm text-black hover:text-blue-500 transition-colors">
            Login
          </button>
          <button className="border border-gray-400 hover:border-blue-500 rounded px-3 py-1 text-sm text-black hover:text-blue-500 transition-colors">
            Sign up
          </button>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <ul className="flex flex-col items-center gap-2 py-3 text-black font-medium w-full">
            <button className="hover:text-blue-500 cursor-pointer bg-gray-100 w-full text-center p-5 border-none outline-none">
              Destinations
            </button>
            <button className="hover:text-blue-500 cursor-pointer bg-gray-100 w-full text-center p-5 border-none outline-none">
              Hotels
            </button>
            <button className="hover:text-blue-500 cursor-pointer bg-gray-100 w-full text-center p-5 border-none outline-none">
              Flights
            </button>
            <button className="hover:text-blue-500 cursor-pointer bg-gray-100 w-full text-center p-5 border-none outline-none">
              Bookings
            </button>
            <div className="w-full my-2 auto flex justify-center gap-8">
              <li>
                <button className="border border-gray-400 hover:border-blue-500 rounded px-8 py-3 text-sm text-black hover:text-blue-500 transition-colors">
                  Login
                </button>
              </li>
              <li>
                <button className="border border-gray-400 hover:border-blue-500 rounded px-8 py-3 text-sm text-black hover:text-blue-500 transition-colors">
                  Sign up
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
