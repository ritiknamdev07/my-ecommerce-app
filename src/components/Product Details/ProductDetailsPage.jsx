import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import style from ".//productDetails.module.css";
import Card from "../Card";
import { AppContext, CartContext } from "../../context";
const useProductsData = () => useContext(AppContext);
const useAddToCart = () => useContext(CartContext);


const ProductDetailsPage = () => {
  window.scrollTo(0, 0);
  const [bigImg, setBigImg] = useState(0)
  const { products, loading  } = useProductsData();
  const { addProductToCart } = useAddToCart();

  const {productId}= useParams()

  const product = products.find((product) => product.id === parseInt(productId))


 const mainProductId = product.id
  const sameCategory = products.filter(
    (pro) => pro.category === product.category
  );


  

  return (
    <>
    { !loading? <div key={1} className={style.detail_container}>
        <div className={style.d_content}>
          <div className={style.detail_info}>

            <div className={style.img_box}>
            {product.images.length > 1 ?
              <div className={style.productImages}>
                <div className={style.bigImg}>
               { (product.images[bigImg])?<img src={product.images[bigImg]} alt={product.title} />:  setBigImg(0)}
               
                </div>
                <div className={style.smallImg}>
                  { product.images.map((image, index) => {
                 return index !== bigImg &&  (
                    <img key={index} src={image} onClick={()=>setBigImg(index)} alt={`Small ${index + 1}`} />
                  )}) }
                </div>


              </div>:
              <div className={style.productImages}>
              <div className={style.bigImg}>
                  <img src={product.images[bigImg]} alt={product.title} />
                </div>
                </div>

            }
            </div>
            <div className={style.detailsProductInfo}>
              <h3>{product.title}</h3>
              {product.brand && (
                <p style={{ color: "#524C42" }}>Brand: {product.brand}</p>
              )}
              <div className={style.rating}>
                <p className={style.ratingRate}>{product.rating}&#9734;</p>
              </div>
              <div className={style.priceDiv}>
                <p>Price: ${product.price}</p>
                
                  <p className={style.actualPriceText}>
                    $
                    {parseInt(
                      product.price / (1 - product.discountPercentage / 100)
                    )}
                  </p>
                
                <div className={style.percentageOff}>
                  {product.discountPercentage && (
                    <p style={{ color: "#388e3c" }}>
                      {parseInt(product.discountPercentage)}% off
                    </p>
                  )}
                </div>
              </div>
            
              <p  className={style.ProductDescription} >{product.description}</p>
              <div className={style.buttons}>
                <button className={style.buyButton}>Buy</button>
                <Link to="/cart">
                  <button
                    className={style.addToCartButton}
                    onClick={() => addProductToCart(product)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
      </div> : <h1>loading...........</h1> }
      {/* more products of same category */}

    { !loading? <div>
      <h1>Similar products</h1>
    <div className={style.conatiner}>
    
        {sameCategory.map((product) =>{
        return  product.id !== mainProductId && (
          <Card key={product.id} product={product} />
        )})}
      </div></div>: <h1>loading</h1> }
    </>
  );
};

export default ProductDetailsPage;
