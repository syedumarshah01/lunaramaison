import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import SingleProductCarousel from "../components/SingleProductCarousel"

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const sampleItems = [
    { name: 'T-Shirt', price: 19.99, image: 'https://media.istockphoto.com/id/1726263781/vector/blank-black-t-shirt-template.jpg?s=612x612&w=0&k=20&c=D99VMv8nYh1tmSZO61Do3OYbUldC4JMQt7OiyyTaLG8=' },
    { name: 'Sneakers', price: 59.99, image: 'https://t4.ftcdn.net/jpg/04/42/54/79/360_F_442547913_tWYOcGkO06Vbo30KOvrOPte5JqDHVWmR.jpg' },
    { name: 'Hoodie', price: 39.99, image: 'https://static.vecteezy.com/system/resources/thumbnails/026/325/400/small/white-hoodie-mockup-empty-and-3d-isolated-on-a-plain-background-ai-generated-photo.jpg' },
    { name: 'Watch', price: 89.99, image: 'https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE=' },
  ];
  
  const getCollectionSchemaJson = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Collection - Lunara Maison",
      description:
        "Explore our exclusive collection of artificial jewellery and authentic Peshawari chappals. Shop now for stylish and affordable accessories and footwear.",
      brand: {
        "@type": "Brand",
        name: "Lunara Maison",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };
    return JSON.stringify(schema);
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filteredProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price),
        );
        break;

      case "high-low":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price),
        );
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Collection - Lunara Maison</title>
        <meta
          name="description"
          content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"
        />
        <meta
          name="keywords"
          content="artificial jewellery, jewellery, ring, necklace, bracelet, women, men, Peshawari chappals, fashion accessories, affordable jewellery, handmade chappals, stylish footwear"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Collection - Lunara Maison" />
        <meta
          property="og:description"
          content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"
        />
        <meta property="og:site_name" content="Lunara Maison" />

        {/* Twitter */}
        <meta property="twitter:title" content="Collection - Lunara Maison" />
        <meta
          property="twitter:description"
          content="Shop the latest collection of artificial jewellery and authentic Peshawari chappals. Stylish, affordable, and perfect for every occasion. Explore now!"
        />

        <link rel="canonical" href="https://www.lunaramaison.com/" />

        <script type="application/ld+json">{getCollectionSchemaJson()}</script>
      </Helmet>

      <div className="flex h-72 flex-col sm:flex-row bg-gray-100">    
          <div className="flex flex-col sm:flex-row w-full h-full items-center justify-between mx-auto">
            <div className="flex items-center justify-center w-full h-1/2 sm:w-1/2 sm:h-full bg-cover bg-center bg-[url(/background.jpg)]">
              <h2 className="text-2xl font-semibold">New Arrivals</h2>
            </div>

            <div className="w-full h-1/2 sm:w-1/2 sm:h-full">
              <SingleProductCarousel items={sampleItems} />
            </div>
                 </div>
          
        {/* <div class="w-full sm:w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 class="text-4xl font-semibold leading-[48px] text-gray-700 text-center montserrat-bold">
            Grab up to
            <br />{" "}
            <span className="bg-gradient-to-tr from-blue-400 to-pink-400 bg-clip-text text-transparent">
              20%
            </span>{" "}
            OFF
            <br /> on
            <br /> Selected Products
          </h1> */}
        {/* </div> */}

        {/* <div className="relative w-full rounded-lg shadow-md">
          <img src="./banner_1.png" alt="" />
        </div> */}
      </div>
      <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt="dropdown"
            />
          </p>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 rounded-2xl ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Artificial Jewellery"}
                  onChange={toggleCategory}
                />{" "}
                Artificial Jewellery
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Peshawari Chappals"}
                  onChange={toggleCategory}
                />{" "}
                Peshawari Chappals
              </p>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 rounded-2xl ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">SUB CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Necklaces"}
                  onChange={toggleSubCategory}
                />{" "}
                Necklaces
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Earrings"}
                  onChange={toggleSubCategory}
                />{" "}
                Earrings
              </p>
            
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Product Sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 text-sm px-2 rounded-2xl"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image[0]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
