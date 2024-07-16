import { useContext, useEffect } from "react";

import style from "./cart.module.css";
import { CartContext } from "../../context";
import useStripePayment from "../../hooks/useStripePayment";

import { CiSquareRemove } from "react-icons/ci";


export default function Cart() {
  useEffect(() => window.scrollTo(0, 0), []);
  const useCartData = () => useContext(CartContext);
  const {
    cartProducts,
    removeProductToCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartData();
  const getPaymentData = useStripePayment();
  const totalAmount = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  let cartProductsLength = cartProducts.length;

  let ProductsActualPrice = cartProducts.map(
    (product) =>
      (product.price / (1 - product.discountPercentage / 100)) *
      product.quantity
  );
  let totalActualPrice = ProductsActualPrice.reduce(
    (sum, price) => sum + Number(price),
    0
  );

  

  return (
    <>
      <div className={style.container_1}>
        {cartProductsLength ? (
          <div className={style.mainDiv}>
            <div className={style.mainContainer}>
              <div className={style.sectionDiv}>
                <div className={style.itemsDiv}>
                  {cartProducts.map((item) => {
                    const {
                      id,
                      images,
                      title,
                      rating,
                      brand,
                      description,
                      price,
                      discountPercentage,
                      quantity,
                    } = item;
                    return (
                      <div key={id} className={style.container}>
                        <div className={style.box}>
                          <div className={style.content}>
                            <div className={style.img_box}>
                              <img src={images[0]} alt={title} />
                            </div>
                            <div className={style.detail}>
                              <div className={style.info}>
                                <div className={style.nameDiv}>
                                  <h3>{title}</h3>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <p className={style.ratingRate}>
                                      {rating}&#9734;
                                    </p>

                                    {brand && (
                                      <p
                                        style={{
                                          color: "#544C42",
                                          marginLeft: "15px",
                                        }}
                                      >
                                        Brand: {brand}
                                      </p>
                                    )}
                                  </div>
                                  <p className={style.description}>
                                    {description}
                                  </p>

                                  <div className={style.priceDiv}>
                                    <p>${price}</p>

                                    <p
                                      style={{
                                        color: "#948979",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      $
                                      {(
                                        price /
                                        (1 - discountPercentage / 100)
                                      ).toFixed(2)}{" "}
                                      {/* actual price of an product */}
                                    </p>

                                    {discountPercentage >= 1 ? (
                                      <p
                                        className={style.percentageOff}
                                        style={{ color: "#388e3c" }}
                                      >
                                        {parseInt(discountPercentage)}% off
                                      </p>
                                    ) : (
                                      <p
                                        className={style.percentageOff}
                                        style={{ color: "#388e3c" }}
                                      >
                                        best deal
                                      </p>
                                    )}
                                  </div>
                                  <div className={style.quantityContainer}>
                                    <div className={style.quantityDiv}>
                                      <button
                                        onClick={() => decrementQuantity(id)}
                                      >
                                        -
                                      </button>
                                      <span>{quantity}</span>
                                      <button
                                        onClick={() => incrementQuantity(id)}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <button style={{display:"flex", fontSize:"17px"}}
                                      onClick={() => removeProductToCart(id)}
                                    >
                                     <div><CiSquareRemove /></div>
                                      remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className={style.orderDiv}>
              <button onClick={() => getPaymentData(cartProducts)}>
                Place Order
              </button>
            </div>
            {/* price calculation section */}
            <div className={style.accountCart}>
              <div className={style.accountCartChild}>
                <h2 style={{ color: "gray" }}>PRICE DETAILS</h2>
                <hr />
                <div className={style.accountSpaceDiv}>
                  <h3>
                    Price({cartProductsLength}{" "}
                    {cartProductsLength > 1 ? "items" : "item"})
                  </h3>
                  <h3>{totalActualPrice.toFixed(2)}$</h3>
                </div>

                <div className={style.accountSpaceDiv}>
                  <h3>Discount</h3>
                  <h3 style={{ color: "green" }}>
                    -{(totalActualPrice - totalAmount).toFixed(2)}$
                  </h3>
                </div>
                <hr />

                <div className={style.accountSpaceDiv}>
                  <h2>Total Amount</h2>
                  <h2>{totalAmount.toFixed(2)}$</h2>
                </div>

                <hr />
                <h4 style={{ color: "green", fontSize: "20px" }}>
                  You will save {(totalActualPrice - totalAmount).toFixed(2)}$
                  on this order
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className={style.missingCartContainer}>
            <div className={style.missingCartDiv}>
              <img
                src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                alt=""
              />
              <h1>Missing Cart items?</h1>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
}
