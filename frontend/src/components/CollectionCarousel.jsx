import React, { useRef } from 'react';

const CollectionCarousel = ({ items }) => {
  const carouselRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (direction === 'left') {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden my-6">
      {/* Scroll Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md z-10 p-2 rounded-full text-2xl opacity-80 hover:opacity-100"
        onClick={() => scroll('left')}
      >
        ‹
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 px-4 scroll-smooth scrollbar-hide"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 bg-white border border-gray-200 rounded-lg p-3 text-center shadow hover:scale-105 transition-transform"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded"
            />
            <h4 className="text-sm font-medium mt-2">{item.name}</h4>
            <p className="text-gray-600 text-sm">${item.price}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md z-10 p-2 rounded-full text-2xl opacity-80 hover:opacity-100"
        onClick={() => scroll('right')}
      >
        ›
      </button>
    </div>
  );
};

export default CollectionCarousel;
