import { useContext,useEffect,useState } from "react";


import style from "./cart.module.css";
import { CartContext } from "../context";


export default function Cart() {
  const useCartData = () => useContext(CartContext);
  const { cart:cartProducts, removeProductToCart } = useCartData();
  
  const totalAmount = cartProducts.reduce((a, b) => a + b.price, 0);

  let noItem = cartProducts.length;

  const removeTOCart = (id) => {
    removeProductToCart(id)
  }

  return (
    <>
      <div className={style.container_1}>
        {noItem ? (
          <div className={style.mainDiv}>
            <div className={style.mainContainer}>
              <div>
                <div className={style.itemsDiv}>
                  {cartProducts.map((item) => {
                    return (
                      <div key={item.id} className={style.container}>
                        <div className={style.box}>
                          <div className={style.content}>
                            <div className={style.img_box}>
                              <img src={item.images[0]} alt={item.title} />
                            </div>
                            <div className={style.detail}>
                              <div className={style.info}>
                                <div className={style.nameDiv}>
                                  <h3>{item.title}</h3>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <p className={style.ratingRate}>
                                      {item.rating}&#9734;
                                    </p>
                                   
                                    {/* {item.brand && ( */}
                                      <p
                                        style={{
                                          color: "#544C42",
                                          marginLeft: "15px",
                                        }}
                                      >
                                        Brand: {item.brand}
                                      </p>
                                    {/* )} */}
                                  </div>
                                  <p>{item.description}</p>
                                </div>
                                <div className={style.priceDiv}>
                                  <p>Price: ${item.price}</p>
                                  {item.brand ? (
                                    <p
                                      style={{
                                        color: "#948979",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      $
                                      {parseInt(
                                        item.price /
                                          (1 - item.discountPercentage / 100)
                                      )}
                                    </p>
                                  ) : (
                                    <p
                                      style={{
                                        color: "#948979",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      ${item.actualPrice}
                                    </p>
                                  )}
                                  {item.discountPercentage && (
                                    <p
                                      className={style.percentageOff}
                                      style={{ color: "#388e3c" }}
                                    >
                                      {parseInt(item.discountPercentage)}% off
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => removeTOCart(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* here */}
              </div>

              <div className={style.accountCart}>
                <div className={style.accountCartChild}>
                  <h2>PRICE DETAILS</h2>
                  <hr />

                  <h3>
                    Price({noItem} {noItem > 1 ? "items" : "item"}){" "} 
                  </h3>
                  <h3>Discount</h3>
                  <hr />

                  <h2>Total Amount = {totalAmount.toFixed(2)}$ </h2>
                </div>
              </div>
            </div>
            <div className={style.orderDiv}>
              <button>Place Order</button>
            </div>
          </div>
        ) : (
          <div className={style.missCartOutdiv}>
            <div className={style.missingCartDiv} >
              <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
              <h1>Missing Cart items?</h1>
            </div>
          </div>
        )}
      </div>{" "}
    </>
  );
}
