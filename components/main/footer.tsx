import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0F1729] text-gray-200 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {/* Quick Links Column */}
          <div className="col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            
            {/* Two-column grid for navigation links */}
            <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-3 text-sm sm:text-base">
              <Link href="#about-me" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Skills
              </Link>
              <Link href="#about-me" className="text-gray-400 hover:text-cyan-400 transition-colors">
                About me
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Projects
              </Link>
              <Link href="#achievements" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Achievements
              </Link>
              <Link href="/get-in-touch" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Brand Column */}
          <div className="col-span-1 mt-4 md:mt-0">
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 mb-3 sm:mb-4">
              Badal&apos;s Portfolio
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md">
              Your gateway to creative web development and modern frontend solutions.
            </p>
          </div>
        </div>

        {/* Footer Bottom - Copyright & Social */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Badal&apos;s Portfolio. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:space-x-6">
            <Link href="https://github.com/badalsaxena" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/badalsaxena" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
              LinkedIn
            </Link>
            <Link href="https://instagram.com/badalsaxena12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
