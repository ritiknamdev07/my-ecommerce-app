import { useCallback, useEffect, useMemo, useState } from "react";

const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // const [cart, setCart] = useState([]);
  const addProductToCart = useCallback((product) => {
    setCartProducts((cartProduct) => {
      return [...cartProduct, product];
    });
  }, []);


  const removeProductToCart = useCallback((id) => {
    setCartProducts((pro) => {
      return pro.filter((p) => p.id !== id);
    });
  }, []);



//   useEffect(() => {
//       // Load cart data from local storage on component mount
//       const savedCart = JSON.parse(localStorage.getItem('cart'));
//       if (savedCart) {
//           setCart(savedCart);
//       }
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   useEffect(() => {
//       // Save cart data to local storage whenever cart state changes
//       localStorage.setItem('cart', JSON.stringify(cartProducts));
//   }, [cartProducts]); // Update local storage whenever cart state changes

//   const removeProductToCart = (productId) => {
//       // Remove product from cart
//       const updatedCart = cart.filter(item => item.id !== productId);
//       setCart(updatedCart);
//   };

// console.log(cart);


  return { cart:cartProducts, addProductToCart, removeProductToCart };
};

export { useCartProducts };
