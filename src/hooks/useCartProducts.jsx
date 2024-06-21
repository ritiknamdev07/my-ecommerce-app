import { useCallback, useState } from "react";

const useCartProducts = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = useCallback((product) => {
    setCartProducts((ExistingProducts) => {
      const existingProductIndex = ExistingProducts.findIndex(
        (existingProduct) => existingProduct.id === product.id
      );
      if (existingProductIndex > -1) {
        // Product already exists in cart, update quantity
        const updatedCartProducts = [...ExistingProducts];
        updatedCartProducts[existingProductIndex].quantity += 1;
        return updatedCartProducts;
      } else {
        // Product does not exist, add it to cart
        return [...ExistingProducts, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeProductToCart = useCallback((id) => {
    setCartProducts((ExistingProducts) => {
      return ExistingProducts.filter((product) => product.id !== id);
    });
  }, []);

  const incrementQuantity = useCallback(
    (productId) => {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    },
    [cartProducts]
  );

  const decrementQuantity = useCallback(
    (productId) => {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    },
    [cartProducts]
  );

  return {
    cartProducts,
    addProductToCart,
    removeProductToCart,
    incrementQuantity,
    decrementQuantity,
  };
};

export { useCartProducts };
