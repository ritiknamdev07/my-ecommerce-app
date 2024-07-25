
import  { useContext, useEffect, useRef } from "react";

import dealCss from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ImageSlider from "../ImageSlider/ImageSlider";
import SpecialCard from "../SpecialCard/SpecialCard";
import HomeCard from "../HomeCard/HomeCard";

// import React, { Suspense } from "react";
// const SpecialCard = React.lazy(() => import("../SpecialCard/SpecialCard"));
// const HomeCard = React.lazy(() => import("../HomeCard/HomeCard"));


const useProductsData = () => useContext(AppContext);

const HomePage = () => {
  const { products, loading, error, fetchProducts  } = useProductsData();

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = products? products.map((product) => product.category) : []
  const sameCategory = new Set(categories);
  const sameCategoryArray = Array.from(sameCategory);

  const images = [
    "/slidesImg/img1.jpg",
    "/slidesImg/img4.jpg",
    "/slidesImg/img5.jpg",
    "/slidesImg/img7.jpg",
    "/slidesImg/img8.jpg",

  ];
  // if (loading) return <div><LoadingSpinner /></div>;
   if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ImageSlider images={images} />
      {!loading ?  <>
   <div className={dealCss.specialOuterDiv}>
        {sameCategoryArray.map((category, index) => {
          return (
         products.filter((product) => product.category === category).length >=
              17 && (
              <SpecialCard
                key={index}
                index={index}
                category={category}
                products={products}
                sameCategoryArray={sameCategoryArray}
              />
             
            )
          );
        })}
      </div> 

      <div className={dealCss.mostOuterDiv}>
        {(
         sameCategoryArray.map(
            (category, index) =>
             products.length >1 && products.filter((product) => product.category === category)
                .length < 17 &&(
                <div key={index} className={dealCss.outerDiv}>
                  <div className={dealCss.categoryNameDiv}>
                    {" "}
                    <Link to={`/products/category/${category}`}>
                      <h2 className={dealCss.categoryName}>{category}</h2>
                    </Link>
                    <Link to={`/products/category/${category}`}>
                      <button className={dealCss.categoryBtn}>{">"}</button>
                    </Link>{" "}
                  </div>
                  <div className={dealCss.container}>
                    { products
                      .filter(
                        (product) =>
                          product.category === sameCategoryArray[index]
                      )
                      .slice(0, 4)
                      .map((product) => (
                        <HomeCard key={product.id} product={product} />
                      ))}
                      
                  </div>
                </div>
              )
          )
         
        ) }

       
      </div>

     </> : <LoadingSpinner />}
      
      
    </>
  );
};

export default HomePage;
