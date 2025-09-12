
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Jewellery Collections",
    description: "Sale! Up to 20% off!",
    // img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg",
    // img: "https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg",
    url: "jewellery-collection",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Peshawari Chappal Collections",
    description: "Sale! Up to 20% off!",
    // img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    img: "https://pakhtunwardrobe.com/cdn/shop/products/MAD07715_1.jpg?v=1668556657",
    url: "peshawari-chappal-collection",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const handleShopNow = (url) => {
    document.getElementById(url).scrollIntoView({ behavior: "smooth" })
  }

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] overflow-hidden relative -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 lg:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center px-4">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl font-medium">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              {/* <Link to={slide.url}> */}
                <button onClick={() => handleShopNow(slide.url)} className="rounded-md bg-black text-white py-3 px-4 hover:bg-gray-800 transition-colors duration-300">
                  SHOP NOW
                </button>
              {/* </Link> */}
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 lg:w-1/2 lg:h-full relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* NAVIGATION DOTS */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center transition-transform duration-300 ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;