import React, { useState, useContext } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const NavBarTwo = () => {
  const { token, setToken, setCartItems, setShowSearch, navigate } = useContext(ShopContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  


  return (
    <div className="relative bg-cream-50 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]">
      <nav className="top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 basis-[15vw]">
              <NavLink to="/">
                <img
                  className="h-12 w-auto scale-150"
                  alt="Logo"
                  src={assets.lunaramaison}
                />
              </NavLink>
            </div>

            <div className="hidden md:flex mr-[5vw] basis-[60vw]">
              <NavLink to="/">
                <motion.a
                  key={"Home"}
                  className="text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"Home"}
                </motion.a>
              </NavLink>

              <NavLink to="/collection">
                <motion.a
                  key={"Collection"}
                  className="text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"Collection"}
                </motion.a>
              </NavLink>

              <div className="mx-auto font-bold md:scale-125 lg:scale-150">
                <h1>Lunara Maison</h1>
              </div>

              <NavLink to="/about">
                <motion.a
                  key={"About Us"}
                  className="text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"About Us"}
                </motion.a>
              </NavLink>

              <NavLink to="/contact">
                <motion.a
                  key={"Contact"}
                  className="text-gray-700 hover:text-gold-600 px-3 py-2 rounded-md text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {"Contact"}
                </motion.a>
              </NavLink>
            </div>

            <div className="flex items-center space-x-4 basis-[15vw]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => (token ? null : navigate("/login"))}
              >
                <FiSearch onClick={() => setShowSearch(true)} className="h-6 w-6 text-gray-700" />
              </motion.button>

              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FiShoppingCart className="h-6 w-6 text-gray-700" />
                </motion.button>
              </Link>

              <div className="group relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-gray-100"
                  onClick={() => (token ? null : navigate("/login"))}
                >
                  <FiUser className="h-6 w-6 text-gray-700" />
                </motion.button>

                {token && (
                  <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                      
                      <p
                        onClick={() => navigate("/orders")}
                        className="cursor-pointer hover:text-black"
                      >
                        Orders
                      </p>
                      <p
                        onClick={logout}
                        className="cursor-pointer hover:text-black"
                      >
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <FiMenu className="h-6 w-6 text-gray-700" />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50"
                  to="/"
                  onClick={() => setIsNavOpen(false)}
                >
                  HOME
                </NavLink>
                <NavLink
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50"
                  to="/collection"
                  onClick={() => setIsNavOpen(false)}
                >
                  COLLECTION
                </NavLink>
                <NavLink
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50"
                  to="/about"
                  onClick={() => setIsNavOpen(false)}
                >
                  ABOUT
                </NavLink>
                <NavLink
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50"
                  to="/contact"
                  onClick={() => setIsNavOpen(false)}
                >
                  CONTACT
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default NavBarTwo;
