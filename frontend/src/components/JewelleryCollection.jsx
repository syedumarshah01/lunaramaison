import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import Aos from "aos";
import "aos/dist/aos.css";
import {ProductSkeletonTwo} from "./ProductSkeleton"

const JewelleryCollection = () => {
  const { products, navigate } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  const onViewAllClick = () => {
    navigate("/collection")
  }

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const itemsPerPage = screenWidth < 640 ? 4 : 10;
    const artificialJewelleryProducts = products.filter((product) => product.category === "Artificial Jewellery")
    setLatestProducts(artificialJewelleryProducts.slice(0, itemsPerPage));
  }, [products]);

  return (
    <div id="jewellery-collection" className="my-10 jewelleryCollection" data-aos="fade-up">
      <div className="text-center py-8 text-3xl">
        <Title text1={"JEWELLERY"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          A stunning selection of timeless and trendy jewellery to elevate your
          style!
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {latestProducts.length === 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
              [0, 1, 2, 3, 4].map(() => (
                <ProductSkeletonTwo/>
              ))
            }
              
          </div>
          
        ) : (
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
          </div>
        )}
      </div>

      <div onClick={onViewAllClick} className="text-center mt-8 cursor-pointer">
        <p className="inline border px-3 py-2 hover:bg-black hover:text-white rounded-full">View All</p>
      </div>
    </div>
  );
};

export default JewelleryCollection;
