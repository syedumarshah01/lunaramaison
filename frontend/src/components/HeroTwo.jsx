import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { assets } from '../assets/assets';

const HeroTwo = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
          image: assets.about_img,
          title: "Elegance Redefined",
          subtitle: "Discover our exclusive collection of artisanal jewelry",
          cta: "Shop Jewellery Collection",
        },
        {
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
          title: "Crafted Tradition",
          subtitle: "Experience the comfort of authentic Peshawari Chappals",
          cta: "Explore Footwear",
        },
        {
          image: "https://images.unsplash.com/photo-1602751584514-9e2b8a8c7c60",
          title: "Cultural Elegance",
          subtitle: "Blend of traditional craftsmanship with modern style",
          cta: "New Arrivals",
        },
      ];
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    
  return (
        <div className="relative h-screen overflow-hidden -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
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
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 mb-8"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-700 transition-colors"
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
  )
}

export default HeroTwo
