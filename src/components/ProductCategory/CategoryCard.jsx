import style from "./productCategory.module.css";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
const CategoryCard = (props) => {
    const { product } = props;
    const {
      id,
      images,
      title,
      rating,
      brand,
      description,
      price,
      discountPercentage,
      stock,
    } = product;
  
    return (
      <Link to={`/product/${id}`}>
        <div className={`${style.box} `}>
          <div className={style.content}>
            <div className={style.img_box}>
              <img src={images[0]} alt={title} />
            </div>
          </div>
  
          <div className={style.detailsProductInfo}>
            <div className={style.midSectionProductInfo}>
              <h3 className={style.productTitle}>{title}</h3>
  
              <div className={style.rating}>
                <p className={style.ratingRate}>{rating}&#9734;</p>
              </div>
              {brand && <p style={{ color: "#524C42" }}>Brand: {brand}</p>}
            </div>
            <p className={style.ProductDescription}>{description}</p>
          </div>
  
          <div className={style.priceDiv}>
            <p className={style.price}>${price}</p>
  
            <p className={style.actualPriceText}>
              ${(price / (1 - discountPercentage / 100)).toFixed(2)}
            </p>
  
            <div className={style.percentageOff}>
              <p style={{ color: "#388e3c" }}>
                {parseInt(discountPercentage) > 1
                  ? parseInt(discountPercentage) + "% off"
                  : "best deal"}
              </p>
            </div>
            {price > 10 && <p>Free delivery</p>}
            {discountPercentage > 12 && (
              <h4 className={style.LowestPriceMonth}>
                Lowest Price in this Month
              </h4>
            )}
            {stock < 30 && <p className={style.onlyFew}>only few left</p>}
          </div>
        </div>
      </Link>
    );
  };
  CategoryCard.propTypes = {
    product: PropTypes.object.isRequired, // Example, adjust as needed
  };
  

  export default CategoryCard