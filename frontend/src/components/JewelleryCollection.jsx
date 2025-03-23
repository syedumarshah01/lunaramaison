import React, { useContext, useEffect, useState, Suspense, lazy, useReducer, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { LoadingOne, LoadingTwo } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'

const JewelleryCollection = () => {
  const { products, isLoading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])
  

  useEffect(() => {
    Aos.init({duration: 2000,
      once: true
    })
  }, [])


  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

 return (
    
    <div className="my-10 jewelleryCollection" data-aos='fade-up'>
      
      <div className="text-center py-8 text-3xl">
        <Title text1={"JEWELLERY"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        A stunning selection of timeless and trendy jewellery to elevate your style!
        </p>
      </div>

      {isLoading ? <LoadingOne/> : 
      // Rendering Products
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
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

export default JewelleryCollection;
