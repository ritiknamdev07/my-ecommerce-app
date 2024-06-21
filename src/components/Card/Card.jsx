
import { Link } from "react-router-dom"
import style from "./card.module.css"
import PropTypes from "prop-types"
const Card = ({product}) => {
    return(
      <div className={style.box}>
      <div className={style.content}>
      <Link to={`/product/${product.id}`} >
      <div  className={style.img_box}>
    <img src={product.images[0]} alt={product.title} />
        </div>
        </Link>

       
        <div className={style.deatil}>
        <div className={style.info}>
        <h3>{product.title}</h3>
        <div className={style.rating}>
        <p className={style.ratingRate}>{product.rating}&#9734;</p>
        </div>
        
        <div className={style.priceDiv}>
        <p>${product.price}</p>
        <p className={style.actualPrice}>${(product.price/(1-(product.discountPercentage/100))).toFixed(2)}</p>
         {parseInt(product.discountPercentage) >0 ? <p className={style.percentageOff} >{parseInt(product.discountPercentage)}% off</p> : <p className={style.percentageOff} >best deal</p>  }
      </div>
        
        </div>
        </div>
       
     
        </div>
      </div>
  )
}

export default Card

Card.propTypes = {
  product: PropTypes.object.isRequired, // Example, adjust as needed
};