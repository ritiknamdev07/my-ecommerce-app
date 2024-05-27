//https://fakestoreapi.com/products 19 products only 19p api
//https://dummyjson.com/products?limit=100

import { useContext, useEffect } from "react";
import DealCard from "./DealCard";
import dealCss from "./dealCard.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

const useProductsData = () => useContext(AppContext);

const DealsContainer = () => {
  const { products, loading, fetchProducts,  } = useProductsData();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const categories =  products.map((product)=>product.category)
  const sameCategory = new Set(categories)
  const sameCategoryArray = Array.from(sameCategory)
  

  // const tags = products.map(product=>product.tags)
  // const sameTags = new Set(tags)
  // const sameTagsArray = Array.from(sameTags)

 const selectedProducts  = sameCategoryArray.slice(0,6)

  return (
    <> 

      <div className={dealCss.mostOuterDiv} >
      
        { !loading ? (
         
          sameCategoryArray.map((category, index)=>
          <div key={index} className={dealCss.outerDiv} >
         <div className={dealCss.categoryNameDiv} > <Link to={`/products/category/${category}`} ><h2>{category}</h2> </Link>  </div>
          <div className={dealCss.container} >{
            products.filter(product=>  product.category=== sameCategoryArray[index]  )
            .slice(0,4)
            .map(product=><DealCard key={product.id}  product={product} />)
         
          
          }</div></div>
        )
        
        ) : (
          <LoadingSpinner />
        ) }
        </div>
    </>
  );
};

export default DealsContainer;
  {/* products.map((product) => (
           product.category=== sameCategoryArray[index]  &&  <DealCard key={product.id}  product={product} />
          )) */}