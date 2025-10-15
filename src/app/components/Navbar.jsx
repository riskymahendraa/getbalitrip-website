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
    <nav className="fixed top-0 left-0 right-0 w-full z-[9999] bg-black/40 backdrop-blur-sm text-white shadow-lg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl leading-relaxed tracking-wide font-bold hover:text-green-600 transition-colors"
          >
            GetBaliTrip.
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[10000]"
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
            <ul className="flex items-center tracking-wide leading-relaxed gap-x-6">
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors px-2 py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors px-2 py-1"
                >
                  About
                </a>
              </li>
              <li className="relative">
                <details className="group">
                  <summary className="cursor-pointer hover:text-green-600 transition-colors list-none px-2 py-1">
                    Tour Packages
                  </summary>
                  <ul className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg p-2 min-w-[180px] z-[10001] opacity-0 invisible group-open:opacity-100 group-open:visible transition-all text-black">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 rounded transition-colors"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-green-100 rounded transition-colors"
                      >
                        Link 2
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors px-2 py-1"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-600 transition-colors px-2 py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <ul className="py-4 space-y-1">
            <li>
              <a
                href="#"
                className="block text-black py-2 px-2 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black py-2 px-2 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={() => setIsTourOpen(!isTourOpen)}
                className="w-full text-black text-left py-2 px-2 hover:text-green-600 hover:bg-green-50 rounded transition-colors flex items-center justify-between"
              >
                <span>Tour Packages</span>
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
                className={`overflow-hidden transition-all duration-300 ${
                  isTourOpen ? "max-h-40 mt-1" : "max-h-0"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="block text-black py-2 px-6 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-black py-2 px-6 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
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
                className="block text-black py-2 px-2 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-black py-2 px-2 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
