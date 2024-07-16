import React,{ useRef } from "react";
import HomeCard from "../HomeCard/HomeCard"
import style from "./SpecialCardStyle.module.css"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"




const SpecialCard = (props) => {
    const {sameCategoryArray,category, products, index} = props

    const scrollRefs = useRef([]);

// Ensure each category has a ref
if (scrollRefs.current.length !== sameCategoryArray.length) {
  scrollRefs.current = Array(sameCategoryArray.length).fill().map((_, i) => scrollRefs.current[i] || React.createRef());
}

const scrollLeft = (index) => {
  scrollRefs.current[index].current.scrollBy({
    left: -1000, 
    behavior: "smooth",
  });
};

const scrollRight = (index) => {
  scrollRefs.current[index].current.scrollBy({
    left: 1000,
    behavior: "smooth",
  });
};

    return(
      <div >

  
  <div className={style.categoryNameDiv}>
    {" "}
    <Link to={`/products/category/${category}`}>
      <h2 className={style.categoryName}>{category}</h2>
    </Link>
    <Link to={`/products/category/${category}`}>
      <button className={style.categoryBtn}>{">"}</button>
    </Link>{" "}
  </div>

  <div className={style.specialDiv}>
    <button
      className={`${style.scrollButton} ${style.left}`}
      onClick={() => scrollLeft(index)}
    >
      &#9664;
    </button>
    <div ref={scrollRefs.current[index]} className={style.specialContainer}>
      {products
        .filter((product) => product.category === category)
        .slice(0, 10)
        .map((product) => (
          
  <div key={product.id} className={style.box}>
      <div className={style.content}>
        <Link to={`/products/category/${category}`}>
          <div className={style.img_box}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </Link>
        <div className={style.detail}>
       <div className={style.info}>
         {product.tags ? (
           product.tags.length > 1 ? (
             <h3 className={style.cardTitle} >{product.tags[1]}</h3>
           ) : (
             <h3 className={style.cardTitle} >{product.tags[0]}</h3>
           )
         ) : (
           <h3  className={style.cardTitle} >{product.title}</h3>
         )}
         {product.discountPercentage && (
           <p className={style.percentageOff}>
             {parseInt(product.discountPercentage) > 0
               ? `Min. ${parseInt(product.discountPercentage)}% off`
               : "Most-Loved"}
           </p>
         )}
     
       </div>
     </div>
   </div>
     </div> 
         

    ))}
    
  
       
    </div>
    <button
      className={`${style.scrollButton} ${style.right}`}
      onClick={() => scrollRight(index)}
    >
      &#9654;
    </button>
  </div>


  </div>
    )
  }

  SpecialCard.propTypes = {
    sameCategoryArray : PropTypes.array.require,
    category: PropTypes.string.require,
    products: PropTypes.array.require,
    index: PropTypes.number.require
  }

  export default SpecialCard




