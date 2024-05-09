// DealsContainer.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for API requests
import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import { Data } from "../product-data/Data";
import dealCss from "./dealCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/add to cart/addToCartSlice";
import { addProduct } from "../features/products-details/setProductsSlice";

const DealsContainer = () => {
  const [detail, setDetail] = useState([]);
  // const [apiData, setApiData] = useState([]) 19p api
  const [products, setProducts] = useState([]);
  // const productsItem = useSelector((state) => state.setProduct.products);

  const dispatch = useDispatch();
//https://fakestoreapi.com/products 19 products only 19p api
//https://dummyjson.com/products?limit=100

  useEffect(()=>{
    async function getProducts (){
      let data = await fetch("https://dummyjson.com/products?limit=100")
      return data.json()
    }

    getProducts()
    .then((pro)=>setProducts(pro.products))
    
  },[])


  // useEffect(() => {
  //   async function getData() {
  //     let data = await fetch("https://fakestoreapi.com/products");
  //     return await data.json();
  //   }
  //   getData()
  //     .then((data) => setApiData(data))
  
  //     .catch((err) => console.log("error in getting api data", err));

      
  // },[]);

  // const products = useSelector((state)=>state.setProduct.products)
  // console.log(products);
  
  const handleClose = () => {
    setDetail([]);
  };
  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        key: item.id,
        id: item.id,
        name: item.title,
        image: [item.images[0]],
        price: item.price,
        actualPrice: item.actualPrice,
        description: item.description,
        brand: item.brand,
        discountPercentage: item.discountPercentage,
        rating: item.rating,

      })
    );
  };

  

  
  return (
    <>
      {detail.map((x) => {
        return (
          <>
            <div className={dealCss.detail_container}>
              <div className={dealCss.d_contant}>
                <button onClick={handleClose} className={dealCss.close}>
                  X
                </button>
                <div className={dealCss.detail_info}>
                  <div className={dealCss.img_box}>
                    <img src={x.images[0]} alt={x.title} />
                  </div>
                  <div className={dealCss.d_pro_info}>
                    <h3>{x.title}</h3>
                    {x.brand&&<p style={{color: "#524C42"}} >Brand: {x.brand}</p>}
                    <div className={dealCss.rating}>
      <p className={dealCss.ratingRate}>{x.rating}&#9734;</p>
      </div>
                    <div className={dealCss.priceDiv}>
                    <p>Price: ${x.price}</p>
                    {x.stock?<p style={{color:"#948979"}} className={dealCss.actualPrice}>${parseInt(x.price/(1-(x.discountPercentage/100)))}</p>:<p style={{color:"#948979"}} className={dealCss.actualPrice}>${x.actualPrice}</p>}
                    <div className={dealCss.percentageOff}>
       {x.discountPercentage && <p style={{color:"#388e3c"}} >{x.discountPercentage}%off</p>}
    </div>
                    </div>
                    {/* <p>actualPrice: ${x.actualPrice}</p> */}
                    <p style={{color:"#524C42"}}>{x.description}</p>

                    <Link to="/cart">
                      <button onClick={() => handleAddToCart(x)}>
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <div className={dealCss.conatiner}>

      {/* { products.map(product =>{( <DealCard key={product.id} setDetail={setDetail}  deal={product} /> )}} */}
       {
        products.map((product) => (
          <DealCard key={product.id} setDetail={setDetail}  deal={product} />
        ))
       }

        {/* {apiData.map((deal) => (
          <DealCard key={deal.id} setDetail={setDetail} deal={deal} />  //19p api//
        ))} */} 

        {Data.map((data) => (
          <DealCard key={data.id} setDetail={setDetail} deal={data} />
        ))}
      </div>
    </>
  );
};

export default DealsContainer;
