import React, { useContext, useEffect, useState, Suspense, lazy, useReducer, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { LoadingOne, LoadingTwo } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'

const LatestCollection = () => {
  const { products, isLoading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  // const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef()

  

  useEffect(() => {
    Aos.init({duration: 2000
    })
  }, [])

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0]
  //     if(entry.isIntersecting) {
  //       entry.target.classList.add('visible')
  //       setIsIntersecting(true)
  //     } else {
  //       setIsIntersecting(false)
  //     }
  //   }, {threshold: 0.2})
  //    observer.observe(ref.current)
  // }, [isIntersecting])


  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  // console.log(products)
  return (
    
    <div ref={ref} className="my-10" data-aos='fade-up'>
      
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply a dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      {isLoading ? <LoadingOne/> : 
      // Rendering Products
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {products.map((item) => (
        <ProductItem
          key={item._id}
          id={item._id}
          image={item.image[0]}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>}      
    </div>
  );
};

export default LatestCollection;
