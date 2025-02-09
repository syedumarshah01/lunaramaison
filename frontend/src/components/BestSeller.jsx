import React, { useContext, useEffect, useRef, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { LoadingOne } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'


const BestSeller = () => {
  const { products, isLoading } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  // const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef()

  // useEffect(() => {
  //     const observer = new IntersectionObserver((entries, observer) => {
  //       const entry = entries[0]
  //       if(entry.isIntersecting) {
  //         entry.target.classList.add('visible')
  //         setIsIntersecting(true)
  //       } else {
  //         entry.target.classList.remove('visible')
  //         setIsIntersecting(false)
  //       }
  //     }, {threshold: 0.2})
  //     observer.observe(ref.current)
  //   }, [isIntersecting])


    useEffect(() => {
      Aos.init({duration: 2000
      })
    })

    useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div ref={ref} className="my-10" data-aos='fade-right'>
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum is a dummy text displayed for testing purposes.
        </p>
      </div>
                                                              {/* scroll-element-best-seller */}
      {isLoading ? <LoadingOne/> : <div ref={ref} className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image[0]}
            price={item.price}
          />
        ))}
      </div>}
      
    </div>
  );
};

export default BestSeller;
