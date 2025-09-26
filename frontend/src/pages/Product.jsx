import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Helmet} from 'react-helmet-async'
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import SizeSelector from "../components/SizeSelector"
import { ImageModal } from "../components/ImageModal";
import CollapsibleList from "@/components/CollapsibleList";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, discount, navigate, token } =
    useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0)
  const pathname = window.location.pathname
  


  const getProductSchemaJson = () => {
    if (!productData) return "{}";
    
    const schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": productData.name,
      "image": productData.image[0],
      "description": productData.description,
      "brand": {
        "@type": "Brand",
        "name": "Lunara Maison"
      },
      "offers": {
        "@type": "Offer",
        "price": productData.price,
        "priceCurrency": currency,
        "availability": "https://schema.org/InStock"
      }
    };
    
    return JSON.stringify(schema);
  };



  const onClickBuyHandler = async () => {
    if(!token) {
      navigate(`/login?redirect=${pathname}`)
      return
    }
    const isAdded = await addToCart(productData._id, size, color, Number(quantity));
    if (isAdded) navigate("/cart");
  };

  const onClickAddToCartHandler = async () => {
    if(!token) {
      navigate(`/login?redirect=${pathname}`)
      return
    }
    await addToCart(productData._id, size, color, Number(quantity));
  }

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId)

    if(product) {
      setProductData(product)
      setImage(product.image[0])
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <>
      <Helmet>
        <link rel="canonical" href={`https://lunaramaison.com/${productData._id}`}/>
        <title>{productData.name}</title>
        <meta name="description" content={`Buy ${productData.name} at Lunara Maison. Affordable artificial jewellery and Peshawari chappals.`} />
        <meta name="keywords" content={`beautiful, earrings, necklace, bracelet, ring, women, artificial jewellery, jewellery, peshawari chappal, ${productData.name}, Lunara Maison`} />
        <meta property="og:title" content={productData.name} />
        <meta property="og:image" content={productData.image[0]} />

        <meta property="twitter:title" content={productData.name}/>
        <meta property="twitter:image" content={productData.image[0]} />
        

        <script type="application/ld+json">
          {getProductSchemaJson()}
        </script>
      </Helmet>

      
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* Product Data */}
        <div className="flex gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll gap-2 sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setCurrentImage(productData.image.indexOf(item))}
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-md"
                  alt={`${productData.name} artificial jewellery`} loading="lazy"
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <div className="relative">
                <img className="w-full h-auto rounded-md" src={productData.image[currentImage]} alt={`${productData.name} aritificial jewellery`} loading="eager"/>
              <div className="absolute bottom-4 w-full px-4 flex flex-row-reverse justify-between">
                <button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-2 py-1 opacity-80 focus:outline-none" onClick={() => setCurrentImage(prev => (prev + 1) % productData.image.length)}>Next</button>
                <button className="bg-white text-black hover:bg-black hover:text-white rounded-full px-2 py-1 opacity-80 focus:outline-none" onClick={() => setCurrentImage(prev => (prev - 1 + productData.image.length) % productData.image.length)}>Prev</button>
              </div>
            </div>
          </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 h-screen overflow-scroll">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <p className="pl-2 text-gray-500">(122)</p>
              {/* <p className='pl-2 text-gray-500'>|</p> */}
              {/* <p className='pl-2 text-gray-500'>Sold: 1.4K</p> */}
            </div>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-3xl font-medium">
              {currency}{" "}
              {productData.price - productData.price * (discount / 100)}
            </p>
            <p className="text-2xl line-through font-normal text-gray-700">
              {currency}{" "}
              {productData.price}
            </p>
            </div>

            
            {productData.colors.length > 0 && productData.sizes.length > 0 ? (
              <>
                <div className="flex flex-col gap-4 mt-5">
                  <p>Select Color</p>
                  <div className="flex gap-2">
                    {productData.colors.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setColor(item)}
                        className={`border py-2 px-4 bg-gray-100 ${
                          item === color ? "border-orange-500" : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <SizeSelector size={size} setSize={setSize}/>
                  <ImageModal/>
                </div>
    
                
              </>
            ) : productData.colors.length > 0 ? (
              <div className="flex flex-col gap-4 mt-5">
                <p>Select Color</p>
                <div className="flex gap-2">
                  {productData.colors.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setColor(item)}
                      className={`border py-2 px-4 bg-gray-100 rounded-full ${
                        item === color ? "border-orange-500" : ""
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-5">
                <SizeSelector size={size} setSize={setSize}/>
                <ImageModal/>
              </div>
            )}

            <div className="mt-5">
              <label htmlFor="quantity">Quantity: </label>
              <input
                required
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                value={quantity}
                className="border border-gray-300 rounded-full py-1.5 px-3.5 w-[15%] ml-3 text-center font-normal"
                type="number"
              />
            </div>

            <div className="w-[60%] flex gap-4 text-nowrap mt-5">
              <button
                onClick={onClickAddToCartHandler}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-full"
              >
                ADD TO CART
              </button>

              <button
                onClick={onClickBuyHandler}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-full"
              >
                BUY NOW
              </button>
            </div>

            <CollapsibleList productData={productData}/>
          </div>
        </div>

        {/* Display Related Products */}
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;