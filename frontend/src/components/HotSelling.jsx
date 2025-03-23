import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { LoadingOne } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'


const HotSelling = () => {
  const { products, isLoading } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

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
                                                              {/* scroll-element-best-seller */}
      {isLoading ? <LoadingOne/> : <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
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

export default HotSelling;
