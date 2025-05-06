"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define achievement images
const ACHIEVEMENT_IMAGES = [
  {
    src: "/achievements/pic1.jpg",
    alt: "Hackathon 1",
    title: "1st Hackathon",
    description: "Won 1st place as a Frontend Developer, building an intuitive UI and collaborating with a diverse team."
  },
  {
    src: "/achievements/pic2.jpg",
    alt: "Hackathon 2",
    title: "2nd Hackathon",
    description: "Led frontend architecture, implemented responsive design, and helped my team win another 1st place!"
  },
  {
    src: "/achievements/pic3.jpg",
    alt: "Hackathon Excellence Award",
    title: "3rd Hackathon",
    description: "SOON......"
  }
];

export const AchievementsFace = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);

  // Helper function to get the previous image index safely
  const getPrevIndex = (current: number): number => {
    return current === 0 ? ACHIEVEMENT_IMAGES.length - 1 : current - 1;
  };

  // Helper function to get the next image index safely
  const getNextIndex = (current: number): number => {
    return current === ACHIEVEMENT_IMAGES.length - 1 ? 0 : current + 1;
  };

  // We use this to track animation state even during re-renders
  useEffect(() => {
    animatingRef.current = isAnimating;
  }, [isAnimating]);

  // Autoplay functionality with improved timing
  useEffect(() => {
    // A more reliable auto-rotation that isn't affected by state updates
    const timer = setInterval(() => {
      if (!animatingRef.current) {
        setIsAnimating(true);
        setCurrentIndex(prevIndex => getNextIndex(prevIndex));
        
        // Reset animation flag after the animation duration
        setTimeout(() => {
          setIsAnimating(false);
        }, 600); // Slightly longer than the animation duration for safety
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []); // Note: no dependency on currentIndex to prevent clearing/restarting

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(getNextIndex(currentIndex));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(getPrevIndex(currentIndex));
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Get the current, previous, and next image data
  const currentImage = ACHIEVEMENT_IMAGES[currentIndex];
  const prevImage = ACHIEVEMENT_IMAGES[getPrevIndex(currentIndex)];
  const nextImage = ACHIEVEMENT_IMAGES[getNextIndex(currentIndex)];

  return (
    <section id="achievements" className="relative flex flex-col items-center justify-center min-h-[70vh] w-full overflow-hidden bg-transparent py-6">
      {/* Starry background is assumed to be global or in parent */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
        Hackathon <span className="text-blue-400">Achievements</span>
      </h1>
      
      <div className="relative flex flex-col items-center justify-center w-full max-w-6xl px-4">
        {/* Glowing effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-3xl z-0" />
        
        {/* Image Carousel */}
        <div className="relative flex items-center justify-center w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] z-10 mb-6">
          {/* Images container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Previous Image (Hidden on mobile) */}
            <div className="hidden md:flex absolute left-0 md:left-[10%] lg:left-[15%] items-center justify-end z-10">
              <div 
                className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={prevSlide}
              >
                <Image
                  src={prevImage.src}
                  alt={`Previous: ${prevImage.alt}`}
                  width={200}
                  height={200}
                  className="rounded-xl border-2 border-purple-500/40 shadow-lg object-cover object-center bg-black/40 h-[150px] w-[150px] md:h-[180px] md:w-[180px] opacity-60 filter blur-[1px] hover:blur-0 hover:opacity-80 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 rounded-full p-2 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative z-20"
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={500}
                  height={500}
                  className="rounded-2xl border-4 border-cyan-500/60 shadow-xl object-cover object-center bg-black/40 h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Image (Hidden on mobile) */}
            <div className="hidden md:flex absolute right-0 md:right-[10%] lg:right-[15%] items-center justify-start z-10">
              <div 
                className="relative cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={nextSlide}
              >
                <Image
                  src={nextImage.src}
                  alt={`Next: ${nextImage.alt}`}
                  width={200}
                  height={200}
                  className="rounded-xl border-2 border-purple-500/40 shadow-lg object-cover object-center bg-black/40 h-[150px] w-[150px] md:h-[180px] md:w-[180px] opacity-60 filter blur-[1px] hover:blur-0 hover:opacity-80 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 rounded-full p-2 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation buttons (visible only on small screens) */}
          <div className="flex md:hidden justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-2">
            <button 
              onClick={prevSlide} 
              className="bg-black/30 hover:bg-black/50 text-white font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg z-20 transition-colors"
              disabled={isAnimating}
            >
              &#10094;
            </button>
            <button 
              onClick={nextSlide} 
              className="bg-black/30 hover:bg-black/50 text-white font-bold rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-lg z-20 transition-colors"
              disabled={isAnimating}
            >
              &#10095;
            </button>
          </div>
          
          {/* Dots/indicators */}
          <div className="absolute bottom-0 flex space-x-3 mb-[-30px]">
            {ACHIEVEMENT_IMAGES.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Fixed Descriptions Section - All descriptions shown together */}
        <div className="relative z-10 max-w-3xl w-full text-gray-300 text-base md:text-lg bg-black/40 rounded-xl px-6 py-4 backdrop-blur-md border border-purple-500/20 shadow-md mt-8 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENT_IMAGES.map((achievement, index) => (
              <div 
                key={index} 
                className={`text-center p-3 rounded-lg ${
                  currentIndex === index 
                    ? 'bg-purple-900/30 border border-purple-500/30' 
                    : 'bg-transparent'
                }`}
              >
                <h3 className="mb-2 font-semibold text-cyan-300">{achievement.title}</h3>
                <p className="text-sm sm:text-base">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 