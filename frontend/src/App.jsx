import React, { useEffect, lazy, Suspense} from "react";
import { Routes, Route, useLocation } from "react-router-dom";

const Collection = lazy(() => import("./pages/Collection"))
const About = lazy(() => import("./pages/About"))
const Home = lazy(() => import("./pages/Home"))
const Product = lazy(() => import("./pages/Product"))
const Cart = lazy(() => import("./pages/Cart"))
const Login = lazy(() => import("./pages/Login"))
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"))
const Orders = lazy(() => import("./pages/Orders"))
const ContactUs = lazy(() => import("./pages/ContactUs"))

// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBarTwo from "./components/NavBarTwo";
import LoadingSpinner from "./components/LoadingSpinner";
import LoadingLogo from "./components/LoadingLogo";


function ScrollToTop() {
  const location = useLocation();
  if(location.pathname === '/' || location.pathname === '/collection') return

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <>
        <ScrollToTop />
        <NavBarTwo/>
        <SearchBar />
      <Suspense fallback={<LoadingLogo/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Suspense>

        <Footer />
      </>
    </div>
  );
};

export default App;
