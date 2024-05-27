
import {  Link } from "react-router-dom";
import cardStyle from "./dealCard.module.css"
import PropTypes from 'prop-types';


const DealCard = (props) => {
 
   const {product} = props
   


return (<>

 

  
    <div className={cardStyle.box}>
    <div className={cardStyle.content}>
     <Link to={`/products/category/${product.category}`} >
    <div  className={cardStyle.img_box}>
    <img  src={product.thumbnail} alt={product.title} />
  
      </div>
      </Link>
     
      <div className={cardStyle.detail}>
      <div className={cardStyle.info}>
     {product.tags? product.tags.length>1? <h3>{product.tags[1]}</h3> : <h3>{product.tags[0]}</h3> : <h3>{product.title}</h3>}

     {product.discountPercentage && <p className={cardStyle.percentageOff} >{ parseInt(product.discountPercentage)>0?`Min. ${parseInt(product.discountPercentage)}% off`: "Most-Loved"}</p>}
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

export default DealCard;

DealCard.propTypes = {
  product: PropTypes.object.isRequired, // Example, adjust as needed
};