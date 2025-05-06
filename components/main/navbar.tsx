'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[65px] px-4 sm:px-5 md:px-10">
        {/* Logo & Name */}
        <Link href="#about-me" className="flex items-center group" onClick={closeMenu}>
          <div className="relative hidden sm:block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 scale-110 group-hover:scale-125"></div>
            <div className="relative overflow-hidden rounded-full border-2 border-purple-500/50 p-[2px] transition-all duration-300 group-hover:border-cyan-400">
              <Image
                src="/badal.png"
                alt="Badal"
                width={50}
                height={50}
                draggable={false}
                className="cursor-pointer rounded-full w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          <span className="text-white font-bold text-sm sm:text-base md:text-lg ml-1 sm:ml-2 group-hover:text-cyan-300 transition-colors duration-300">
            Badal&apos;s Portfolio 
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 bg-[rgba(3,0,20,0.37)] px-4 lg:px-6 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link key={link.title} href={link.link} className="text-sm lg:text-base hover:text-[rgb(112,66,248)] transition">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex space-x-3 lg:space-x-4">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
              <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl sm:text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Slide in smoothly
            exit={{ opacity: 0, x: 300 }} // Slide out to the right
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full xs:w-3/4 sm:w-1/2 h-screen bg-[#030014]/90 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-6 text-white text-2xl sm:text-3xl"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-5 sm:space-y-6 text-base sm:text-lg">
              {NAV_LINKS.map((link) => (
                <Link key={link.title} href={link.link} onClick={closeMenu} className="hover:text-[rgb(112,66,248)] transition">
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-5 sm:space-x-6 mt-8">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
