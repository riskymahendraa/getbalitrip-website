"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsTourOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 mx-auto md:px-10 w-full z-50 bg-black/40 text-white backdrop-blur-sm">
      <div className="flex justify-between items-center px-6 py-4 w-full">
        {/* Logo */}
        <a
          href="/"
          className="text-2xl md:text-3xl leading-relaxed tracking-wide font-bold"
        >
          GetBaliTrip.
        </a>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center mx-10 items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-7 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-none">
          <ul className="menu tracking-wide leading-relaxed menu-horizontal px-1 gap-x-4">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                About
              </a>
            </li>
            <li className="relative">
              <details className="group">
                <summary className="cursor-pointer hover:text-green-600 transition-colors">
                  Tour Packages
                </summary>
                <ul className="absolute left-0 mt-2 bg-white rounded-md shadow-lg p-2 min-w-[150px] z-50 opacity-0 invisible group-open:opacity-100 group-open:visible transition-all text-black">
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-1 hover:bg-green-100 rounded"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-2 py-1 hover:bg-green-100 rounded"
                    >
                      Link 2
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="py-4 px-6 space-y-3">
          <li>
            <a
              href="#"
              className="block text-black py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-black py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsTourOpen(!isTourOpen)}
              className="w-full text-black text-left py-2 hover:text-green-600 transition-colors flex items-center gap-2"
            >
              Tour Packages
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isTourOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <ul
              className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                isTourOpen ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="block text-black py-1 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-black py-1 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Link 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="block text-black py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-black py-2 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
