"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Shorter descriptions for each skill (15-20 words)
const SKILL_DESCRIPTIONS: Record<string, string> = {
  "HTML": "The backbone of web content - creates structure and organizes content on websites.",
  "CSS": "Styles web pages with colors, layouts, and responsive designs for all devices.",
  "JavaScript": "Adds interactivity to websites, enabling dynamic content and user-responsive features.",
  "Tailwind CSS": "Utility-first framework for rapid UI development with pre-built classes and responsive components.",
  "React": "JavaScript library for building fast, interactive UIs with reusable components and virtual DOM.",
  "Redux": "State management for JavaScript apps, maintaining consistent app state across components.",
  "TypeScript": "JavaScript with added type safety to catch errors early and improve code quality.",
  "Next.js 14": "React framework with server-side rendering, optimized performance, and simplified routing.",
  "Framer Motion": "Animation library for React that makes creating smooth, interactive UI animations simple.",
  "Stripe": "Payment processing platform for online businesses with secure checkout and subscription management.",
  "Node.js": "JavaScript runtime for server-side development, enabling back-end code with JavaScript.",
  "MongoDB": "NoSQL database storing data in flexible JSON-like documents for modern applications.",
  "Express.js": "Minimal Node.js framework that simplifies API creation and server-side routing."
};

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  
  const [isHovered, setIsHovered] = useState(false);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Glowing effect on hover */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md transition-opacity duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-0'}`}></div>
        
        {/* Circular container for image with transparent background */}
        <div className={`relative overflow-hidden rounded-full border-2 ${isHovered ? 'border-cyan-400 scale-105' : 'border-purple-500/50'} transition-all duration-300 p-3 flex items-center justify-center bg-transparent backdrop-blur-sm`} style={{ width: width + 20, height: height + 20 }}>
          <Image 
            src={`/skills/${src}`} 
            width={width} 
            height={height} 
            alt={name} 
            className="object-contain transition-transform duration-300 filter drop-shadow-lg"
          />
        </div>

        {/* Name label below icon (always visible) */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
          <span className="text-xs text-white font-medium">{name}</span>
        </div>
      </div>
    </motion.div>
  );
};
