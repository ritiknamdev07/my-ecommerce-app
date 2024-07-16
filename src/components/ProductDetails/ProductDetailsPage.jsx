import { useContext, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import style from "./ProductDetails.module.css";
import Card from "../Card/Card";
import { AppContext, CartContext } from "../../context";
import useStripePayment from "../../hooks/useStripePayment";
import PropTypes from "prop-types";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// react-icons
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery,TbTruckReturn } from "react-icons/tb";
import { FaBoxesPacking } from "react-icons/fa6";
import { LuWarehouse } from "react-icons/lu";
import { RxBorderDotted } from "react-icons/rx";
//react-icons

const useProductsData = () => useContext(AppContext);
const useAddToCart = () => useContext(CartContext);

const ProductDetailsPage = () => {
  window.scrollTo(0, 0);
  const [bigImg, setBigImg] = useState(0);
  const { products, loading } = useProductsData();
  const { addProductToCart } = useAddToCart();
  const { productId } = useParams();

  const product = useMemo(
    () => products.find((product) => product.id === parseInt(productId)),
    [productId, products]
  );

  const getPaymentData = useStripePayment();

  const mainProductId = product.id;
  const sameCategory = products.filter(
    (pro) => pro.category === product.category
  );

  const tableArr = [];

  for (let [key, data] of Object.entries(product.dimensions)) {
    tableArr.push(
      <tr>
        <th>{key}</th>
        <td>{data}</td>
      </tr>
    );
  }
  const productArr = [product];

  const {
    images,
    title,
    brand,
    rating,
    price,
    discountPercentage,
    description,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
    returnPolicy,
    stock,
    minimumOrderQuantity,
    reviews,
  } = product;

  return (
    <>
      {!loading ? (
        <div key={1} className={style.detail_container}>
          <div className={style.d_content}>
            <div className={style.detail_info}>
              <div className={style.imgContainer}>
                {images.length > 1 ? (
                  <div className={style.productImages}>
                    <div className={style.bigImg}>
                      {images[bigImg] ? (
                        <img src={images[bigImg]} alt={title} />
                      ) : (
                        setBigImg(0)
                      )}
                    </div>
                    <div className={style.smallImg}>
                      {images.map((image, index) => {
                        return (
                          index !== bigImg && (
                            <img
                              key={index}
                              src={image}
                              onClick={() => setBigImg(index)}
                              alt={`Small ${index + 1}`}
                            />
                          )
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className={style.productImages}>
                    <div className={style.bigImg}>
                      <img src={images[bigImg]} alt={title} />
                    </div>
                  </div>
                )}
                <div className={style.buttons}>
                  <Link to="/cart">
                    <button
                      className={style.addToCartButton}
                      onClick={() => addProductToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </Link>
                  <button
                    onClick={() => getPaymentData(productArr)}
                    className={style.buyButton}
                  >
                    Buy
                  </button>
                </div>
              </div>

              <div className={style.detailsProductInfo}>
                <h3 className={style.productTitle}>{title}</h3>
                {brand && <p style={{ color: "#524C42" }}>Brand: {brand}</p>}
                <div className={style.rating}>
                  <p className={style.ratingRate}>{rating}&#9734;</p>
                </div>
                <div className={style.priceDiv}>
                  <p>Price: ${price}</p>

                  <p className={style.actualPriceText}>
                    ${(price / (1 - discountPercentage / 100)).toFixed(2)}
                  </p>

                  <div className={style.percentageOff}>
                    {parseInt(discountPercentage) > 0 ? (
                      <p style={{ color: "#388e3c" }}>
                        {parseInt(discountPercentage)}% off
                      </p>
                    ) : (
                      <p style={{ color: "#388e3c" }}>best deal</p>
                    )}
                  </div>
                </div>

                <p className={style.ProductDescription}>{description}</p>

                <div className={style.specificationContainer}>
                  <div className={style.specificationContainerH1}>
                    <h1>Specifications</h1>
                  </div>
                  <div className={style.generalInfoContainer}>
                    <h2>General</h2>
                    <div className={style.generalInfoFlex}>
                      <div className={style.generalInfoIcon}>
                        <div>
                          <MdOutlineSecurity />
                        </div>
                        <div>
                          <span>{warrantyInformation}</span>
                        </div>
                      </div>
                      <div className={style.generalInfoIcon}>
                        <div>
                        <TbTruckDelivery />
                        </div>
                        <div>
                        <span>{shippingInformation}</span>
                        </div>
                      </div>

                      <div className={style.generalInfoIcon}>
                        <div>
                        <FaBoxesPacking />
                        </div>
                        <div>
                        <span>{availabilityStatus}</span>
                        </div>
                      </div>

                      <div className={style.generalInfoIcon}>
                        <div>
                        <TbTruckReturn />

                        </div>
                        <div>
                        <span>{returnPolicy}</span>
                        </div>
                      </div>
                      
                      <div className={style.generalInfoIcon}>
                        <div>
                        <LuWarehouse />
                        </div>
                        <div>
                        <span>stock: {stock}</span>
                        </div>
                      </div>

                      <div className={style.generalInfoIcon}>
                        <div>
                        <RxBorderDotted />
                        </div>
                        <div>
                        <span>minimumOrderQuantity: {minimumOrderQuantity}</span>
                        </div>
                      </div>
                      
                    
                      
                      
                    </div>
                    {/* <p>weight: {product.weight}</p> */}
                  </div>

              
                </div>

                <div>
                  <div className={style.specificationContainerH1}>
                    <h1>Ratings & Reviews</h1>
                  </div>
                  {reviews.map((review, index) => (
                    <Reviews key={index} review={review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
      {/* more products of same category */}

      {!loading ? (
        <div className={style.similarProductsDiv}>
          <h1>Similar products</h1>
          <div className={style.container}>
            {sameCategory.map((product) => {
              return (
                product.id !== mainProductId && (
                  <Card key={product.id} product={product} />
                )
              );
            })}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ProductDetailsPage;

const Reviews = (props) => {
  const { review } = props;
  const { rating, reviewerName, reviewerEmail, date, comment } = review;
  return (
    <div className={style.reviewContainer}>
      <div className={style.reviewRating}>
        <p
          className={
            rating > 2
              ? style.ratingRate
              : rating == 2
              ? style.ratingIsTwo
              : style.ratingIsOne
          }
        >
          {rating}&#9734;
        </p>
        <h3>
          {(rating == 3 && "good") ||
            (rating == 4 && "Pretty good") ||
            (rating == 5 && "Brilliant") ||
            (rating == 2 && "Fair") ||
            (rating == 1 && "Not good")}
        </h3>
      </div>
      <div>
        {" "}
        <h4>{comment}</h4>
      </div>
      <div className={style.reviewerDetails}>
        <p>{reviewerName}</p>
        <p>{reviewerEmail}</p>
        <p>{date.slice(0, 10)}</p>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  review: PropTypes.object.isRequired,
};
