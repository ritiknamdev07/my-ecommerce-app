import { Link } from "react-router-dom";
import cardStyle from "./HomeCard.module.css";
import PropTypes from "prop-types";

const HomeCard = (props) => {
  const { product } = props;
  const { category, title, thumbnail, tags, discountPercentage } = product;

  return (
    <>
      <div className={cardStyle.box}>
        <div className={cardStyle.content}>
          <Link to={`/products/category/${category}`}>
            <div className={cardStyle.img_box}>
              <img src={thumbnail} alt={title} />
            </div>
          </Link>

          <div className={cardStyle.detail}>
            <div className={cardStyle.info}>
              {tags ? (
                tags.length > 1 ? (
                  <h3 className={cardStyle.cardTitle} >{tags[1]}</h3>
                ) : (
                  <h3 className={cardStyle.cardTitle} >{tags[0]}</h3>
                )
              ) : (
                <h3  className={cardStyle.cardTitle} >{title}</h3>
              )}

              {discountPercentage && (
                <p className={cardStyle.percentageOff}>
                  {parseInt(discountPercentage) > 0
                    ? `Min. ${parseInt(discountPercentage)}% off`
                    : "Most-Loved"}
                </p>
              )}
              {/* <div  className={cardStyle.rating}>
      <p className={cardStyle.ratingRate}>{product.rating}&#9734;</p>
      </div>
      
      <div className={cardStyle.priceDiv}>
      <p>${product.price}</p>
      <p className={cardStyle.actualPrice}>${parseInt(product.price/(1-(product.discountPercentage/100)))}</p>
       {product.discountPercentage && <p className={cardStyle.percentageOff} >{parseInt(product.discountPercentage)}% off</p>}
    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;

HomeCard.propTypes = {
  product: PropTypes.object.isRequired, // Example, adjust as needed
};
