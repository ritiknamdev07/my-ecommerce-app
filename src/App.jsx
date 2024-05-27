import "./App.css";
import DealsContainer from "./components/DealsContainer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Navbar from "./components/Navbar.jsx";

import { useProductData } from "./hooks/useProductData.jsx";
import { useCartProducts } from "./hooks/useCartProducts.jsx";
import ProductDetailsPage from "./components/Product Details/ProductDetailsPage.jsx";
import ProductCategory from "./components/product category/ProductCategory.jsx";
import { AppContext, CartContext } from "./context.js";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <DealsContainer key="oneSection-1" />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar /> <Login />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <Navbar /> <Cart />{" "}
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
  ]);

  return (
    <>
      <AppContext.Provider value={useProductData()}>
        <CartContext.Provider value={useCartProducts()}>
          <RouterProvider router={router} />
        </CartContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;
