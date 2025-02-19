import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LoadingTwo } from "./Loading";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductItem = ({ id, image, name, price }) => {
  const { currency, discount } = useContext(ShopContext);
  const discountedPrice = price - (price * (discount / 100))

  return (
    <Link
      className="text-gray-700 bg-zinc-100 hover:bg-zinc-300 cursor-pointer flex flex-col justify-between rounded-b"
      to={`/product/${id}`}
    >
      <div className="relative overflow-hidden basis-3/4">
        {/* <img className='hover:scale-110 transition ease-in-out h-full w-full' src={image[0]} alt=""/> */}
        <LazyLoadImage
          className="w-full h-full aspect-[6/7] hover:scale-110 transition ease-in-out rounded-t"
          src={image}
          // placeholder={<LoadingTwo/>}
          effect="blur"
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
          placeholderSrc={image}
        />

        <span className="absolute top-2 right-2 w-[40%] h-auto text-center  rounded-lg bg-red-600 text-nowrap text-sm text-white">{`${discount}% OFF`}</span>
      </div>

      <div className="pl-2 pr-2 pb-2">
        <p className="pt-3 pb-2 text-sm">{name}</p>
        <div className="flex justify-between">
        <p className="text-sm font-medium">
          {currency} {discountedPrice.toFixed(2)}
        </p>
        <p className="text-gray-500 text-sm line-through">{currency} {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
