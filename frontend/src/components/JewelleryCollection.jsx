import React, { useContext, useEffect, useState, Suspense, lazy, useReducer, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { LoadingOne, LoadingTwo } from "./Loading";
import Aos from 'aos'
import 'aos/dist/aos.css'

const JewelleryCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])
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
    Aos.init({duration: 2000,
      once: true
    })
  }, [])


  useEffect(() => {
    setLatestProducts(products.slice(0, 5));
  }, [products]);

 return (
    
    <div className="my-10 jewelleryCollection" data-aos='fade-up'>
      
      <div className="text-center py-8 text-3xl">
        <Title text1={"JEWELLERY"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        A stunning selection of timeless and trendy jewellery to elevate your style!
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {latestProducts.length === 0 ? <LoadingOne/> : 
      // Rendering Products
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image[0]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>}

        <div className="self-center flex gap-8">
          <button disabled={productIndex === 0} onClick={prevButton} className="px-4 py-2 bg-gray-600 text-white rounded-full">Prev</button>
          <button disabled={productIndex >= products.length} onClick={nextButton} className="px-4 py-2 bg-gray-600 text-white rounded-full">Next</button>
        </div>
        
      </div>
            
    </div>
  );
};

export default JewelleryCollection;
