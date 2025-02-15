import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import NavBar from "./NavBar";

const slides = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/880908134/fi/valokuva/wedding-crown-kukkataustalla.jpg?s=1024x1024&w=is&k=20&c=xvdFyNCqf_h-QIAIw6ZH_N0Ls_ut0Dr-NX98dZL3Q4E=",
    title: "Adorn Yourself with Timeless Elegance",
    subtitle: "Discover our exclusive collection of handcrafted jewelry",
    cta: "Shop Jewellery Collection"
  },
  {
    id: 2,
    image: "https://www.peshawarichappals.pk/wp-content/uploads/2021/12/7-14.jpg",
    title: "Crafted Comfort, Traditional Style",
    subtitle: "Experience the legacy of Peshawari Chappal",
    cta: "Explore Footwear"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    title: "Tradition Meets Contemporary Fashion",
    subtitle: "Where heritage meets modern aesthetics",
    cta: "View Full Collection"
  }
];

const HeroTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative h-screen overflow-hidden  -top-40 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="container mx-auto px-4 h-full flex items-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-3xl text-white"
                >
                  <h1 className="text-5xl md:text-6xl font-serif mb-4">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    {slides[currentSlide].subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300"
                  >
                    {slides[currentSlide].cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}</div>
    </div>
  );
};

export default HeroTwo;