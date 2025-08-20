import React, { useState, useEffect } from 'react';

const SingleProductCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Slide every 3 seconds

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, [items.length]); // Dependency array ensures it only sets up once

  
  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Product Display */}
      <div className="flex flex-col items-center h-full text-center">
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="w-full h-full object-fit rounded"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full text-xl hover:bg-gray-100"
        onClick={goToPrevious}
      >
        ‹
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full text-xl hover:bg-gray-100"
        onClick={goToNext}
      >
        ›
      </button>

    </div>
  );
};

export default SingleProductCarousel;
