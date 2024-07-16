import { Link, useParams } from "react-router-dom";
import React, { Suspense, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import style from "./productCategory.module.css";
import { AppContext } from "../../context";
import useFilterProducts from "../../hooks/useFilterProducts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
//import CategoryCard from "./CategoryCard";

const CategoryCard = React.lazy(() => import("./CategoryCard"));

const useProductsData = () => useContext(AppContext);
export default function ProductCategory() {
  window.scrollTo(0, 0);

  const { categoryName } = useParams();
  const { products, fetchProducts } = useProductsData();

  const [filters, setFilters] = useState({
    selectedDiscounts: {
      discount10: false,
      discount20: false,
      discount30: false,
      discount40: false,
    },
    selectedBrands: [],
    selectedRatings: [],
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedCategoryProducts = useMemo(
    () => products.filter((product) => product.category === categoryName),
    [products, categoryName]
  );

  const { selectedDiscounts, selectedBrands, selectedRatings } = filters;

  const selectedDiscountValues = Object.keys(selectedDiscounts).filter(
    (key) => selectedDiscounts[key]
  );

  const filteredProducts = useMemo(
    () =>
      selectedCategoryProducts.filter((product) => {
        const passDiscountFilter =
          selectedDiscountValues.length === 0 ||
          selectedDiscountValues.some(
            (discount) =>
              parseInt(product.discountPercentage) >=
              parseInt(discount.replace("discount", ""))
          );
        const passBrandFilter =
          selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const passRatingFilter =
          selectedRatings.length === 0 ||
          selectedRatings.includes(String(parseInt(product.rating)));
        return passDiscountFilter && passBrandFilter && passRatingFilter;
      }),
    [
      selectedBrands,
      selectedCategoryProducts,
      selectedRatings,
      selectedDiscountValues,
    ]
  );

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedDiscounts: {
        ...prevFilters.selectedDiscounts,
        [name]: checked,
      },
    }));
  };

  const handleBrandChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFilters({
      ...filters,
      selectedBrands: selectedOptions,
    });
  };

  const handleRatingChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFilters({
      ...filters,
      selectedRatings: selectedOptions,
    });
  };

  const [sortOption, setSortOption] = useState("priceLowToHigh"); // Default sorting option

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortProducts = (products, sortOption) => {
    return products.sort((a, b) => {
      if (sortOption === "priceHighToLow") {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
  };

  const sortedProducts = sortProducts(filteredProducts, sortOption);

  const uniqueBrands = useMemo(() => {
    const brandSet = new Set();
    selectedCategoryProducts.map((product) => brandSet.add(product.brand));
    const brandsArray = Array.from(brandSet);
    return brandsArray;
  }, [selectedCategoryProducts]);

  return (
    <>
      <div className={style.mainPage}>
        <div className={style.filterDiv}>
          <h1>Filter</h1>
        </div>
        <div className={style.sidebarContainer}>
          <div className={style.sidebar}>
            <div className={style.categoryDiv}>
              <h2>CATEGORIES</h2>
              <h3>{categoryName}</h3>

            
            </div>

            <div className={style.ratingContainer}>
              <h2>CUSTOMER RATINGS</h2>
              <div className={style.productRating}>
                <select
                  multiple
                  value={filters.selectedRatings}
                  onChange={handleRatingChange}
                >
                  <option value="4">4★ & above</option>
                  <option value="3">3★ & above</option>
                  <option value="2">2★ & above</option>
                  <option value="1">1★ & above</option>
                </select>
              </div>
            </div>

            {uniqueBrands.length > 1 && (
              <div>
                <h2>BRAND</h2>

                <div className={style.brands}>
                  <select
                    multiple
                    value={filters.selectedBrands}
                    onChange={handleBrandChange}
                  >
                    {uniqueBrands.map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div>
              <h2>DISCOUNT</h2>
              <div className={style.discountDiv}>
                <label>
                  <input
                    type="checkbox"
                    name="discount40"
                    checked={filters.selectedDiscounts.discount40}
                    onChange={handleCheckboxChange}
                  />{" "}
                  40% or more
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="discount30"
                    checked={filters.selectedDiscounts.discount30}
                    onChange={handleCheckboxChange}
                  />{" "}
                  30% or more
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="discount20"
                    checked={filters.selectedDiscounts.discount20}
                    onChange={handleCheckboxChange}
                  />{" "}
                  20% or more
                </label>
                <label>
                  {" "}
                  <input
                    type="checkbox"
                    name="discount10"
                    checked={filters.selectedDiscounts.discount10}
                    onChange={handleCheckboxChange}
                  />{" "}
                  10% or more
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={style.sortDiv}>
          <h2>Sort by</h2>

          <button
            onClick={() => handleSortChange(event)}
            value="priceLowToHigh"
            className={
              sortOption === "priceLowToHigh"
                ? `${style.sortBtnLow} ${style.sortBtn} `
                : style.sortBtn
            }
          >
            Price--Low to High
          </button>

          <button
            onClick={() => handleSortChange(event)}
            value="priceHighToLow"
            className={
              sortOption === "priceHighToLow"
                ? `${style.sortBtnHigh} ${style.sortBtn} `
                : style.sortBtn
            }
          >
            Price--High to Low
          </button>
        </div>

        <div className={style.container}>
          {sortedProducts.map((product) => (
            <Suspense fallback={<LoadingSpinner/>} key={product.id}>
            <CategoryCard product={product} />
            </Suspense>
          ))}
        </div>
      </div>
    </>
  );
}

// const CategoryCard = (props) => {
//   const { product } = props;
//   const {
//     id,
//     images,
//     title,
//     rating,
//     brand,
//     description,
//     price,
//     discountPercentage,
//     stock,
//   } = product;

//   return (
//     <Link to={`/product/${id}`}>
//       <div className={`${style.box} `}>
//         <div className={style.content}>
//           <div className={style.img_box}>
//             <img src={images[0]} alt={title} />
//           </div>
//         </div>

//         <div className={style.detailsProductInfo}>
//           <div className={style.midSectionProductInfo}>
//             <h3 className={style.productTitle}>{title}</h3>

//             <div className={style.rating}>
//               <p className={style.ratingRate}>{rating}&#9734;</p>
//             </div>
//             {brand && <p style={{ color: "#524C42" }}>Brand: {brand}</p>}
//           </div>
//           <p className={style.ProductDescription}>{description}</p>
//         </div>

//         <div className={style.priceDiv}>
//           <p className={style.price}>${price}</p>

//           <p className={style.actualPriceText}>
//             ${(price / (1 - discountPercentage / 100)).toFixed(2)}
//           </p>

//           <div className={style.percentageOff}>
//             <p style={{ color: "#388e3c" }}>
//               {parseInt(discountPercentage) > 1
//                 ? parseInt(discountPercentage) + "% off"
//                 : "best deal"}
//             </p>
//           </div>
//           {price > 10 && <p>Free delivery</p>}
//           {discountPercentage > 12 && (
//             <h4 className={style.LowestPriceMonth}>
//               Lowest Price in this Month
//             </h4>
//           )}
//           {stock < 30 && <p className={style.onlyFew}>only few left</p>}
//         </div>
//       </div>
//     </Link>
//   );
// };
// CategoryCard.propTypes = {
//   product: PropTypes.object.isRequired, // Example, adjust as needed
// };

// export { CategoryCard };
