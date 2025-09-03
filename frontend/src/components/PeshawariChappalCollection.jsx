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
import ProductSkeleton, {ProductSkeletonTwo} from "./ProductSkeleton"

const PeshawariChappalCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [productIndex, setProductIndex] = useState(0);

  const handlePaginate = (direction) => {
    setProductIndex((prevIndex) => {
      const screenWidth = window.innerWidth;
      const itemsPerPage = screenWidth < 640 ? 4 : 10;

      const maxIndex = products.length;

      let newIndex;

      if (direction === "next") {
        newIndex = prevIndex + itemsPerPage;
        if (newIndex >= maxIndex) return prevIndex; // can't go further
      } else if (direction === "prev") {
        newIndex = Math.max(prevIndex - itemsPerPage, 0);
      }

      const newItems = products.slice(newIndex, newIndex + itemsPerPage);
      setLatestProducts(newItems);

      return newIndex;
    });
  };

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const itemsPerPage = screenWidth < 640 ? 4 : 10;
    const peshawariChappalProducts = products.filter((product) => product.category === "Peshawari Chappal")
    setLatestProducts(peshawariChappalProducts.slice(0, itemsPerPage));
  }, [products]);

  return (
    <div id="peshawari-chappal-collection" className="my-10 jewelleryCollection" data-aos="fade-up">
      <div className="text-center py-8 text-3xl">
        <Title text1={"PESHAWARI CHAPPAL"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
         Experience tradition and comfort with our premium handcrafted Peshawari Chappals!
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

        <div className="self-center flex gap-8">
          <button
            disabled={productIndex === 0}
            onClick={() => handlePaginate("prev")}
            className="px-4 py-2 bg-gray-600 text-white rounded-full"
          >
            Prev
          </button>
          <button
            disabled={productIndex >= products.length}
            onClick={() => handlePaginate("next")}
            className="px-4 py-2 bg-gray-600 text-white rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeshawariChappalCollection;
