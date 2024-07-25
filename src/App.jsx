import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { useProductData } from "./hooks/useProductData.jsx";
import { useCartProducts } from "./hooks/useCartProducts.jsx";
import ProductDetailsPage from "./components/ProductDetails/ProductDetailsPage.jsx";
import ProductCategory from "./components/ProductCategory/ProductCategory.jsx";
import { AppContext, CartContext } from "./context.js";
import Success from "./components/PaymentGateway/Success.jsx";
import Cancel from "./components/PaymentGateway/Cancel.jsx";
import ImageSlider from "./components/ImageSlider/ImageSlider.jsx";

import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./components/Home/HomePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />

          <HomePage key="oneSection-1" />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar />
          <Cart />{" "}
        </>
      ),
    },
    {
      path: "/product/:productId",
      element: (
        <>
          <Navbar />
          <ProductDetailsPage />
        </>
      ),
    },
    {
      path: "/products/category/:categoryName",
      element: (
        <>
          <Navbar />
          <ProductCategory />
        </>
      ),
    },
    {
      path: "/success",
      element: (
        <>
          <Navbar />
          <Success />
        </>
      ),
    },
    {
      path: "/cancel",
      element: (
        <>
          {" "}
          <Navbar /> <Cancel />{" "}
        </>
      ),
    },
  ]);

  return (
    <>
      <AppContext.Provider value={useProductData()}>
        <CartContext.Provider value={useCartProducts()}>
          <RouterProvider router={router} />

          <Footer />
        </CartContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;
