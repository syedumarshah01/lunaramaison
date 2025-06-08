import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { LoadingOne } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'


const HotSelling = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [productIndex, setProductIndex] = useState(0);
  

  const nextButton = () => {
  const nextItems = products.slice(productIndex, productIndex + 2);
  setLatestProducts(nextItems);
  setProductIndex(prev => Math.min(prev + nextItems.length, products.length));
};

  const prevButton = () => {
  const newIndex = Math.max(productIndex - 2, 0);
  const prevItems = products.slice(newIndex, newIndex + 2);
  setLatestProducts(prevItems);
  setProductIndex(newIndex);
};

  useEffect(() => {
    Aos.init({duration: 2000
    })
  })

  useEffect(() => {
  const bestProduct = products.filter((item) => item.bestseller);
  setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10" data-aos='fade-right'>
      <div className="text-center text-3xl py-8">
        <Title text1={"HOT"} text2={"SELLING"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Discover our most-loved and trending pieces— Shop Now
        </p>
      </div>
          
          
      <div className="flex flex-col gap-16">
        {products.length === 0 ? <LoadingOne/> : <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
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
      
          
        <div className="self-center flex gap-8">
          <button onClick={prevButton} disabled={productIndex === 0} className="px-4 py-2 bg-gray-600 text-white rounded-full">Prev</button>
          <button onClick={nextButton} disabled={productIndex >= products.length} className="px-4 py-2 bg-gray-600 text-white rounded-full">Next</button>
        </div>
      </div>                                                   
      
    </div>
  );
};

export default HotSelling;
