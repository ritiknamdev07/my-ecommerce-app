
import { Link } from "react-router-dom";
import SummerProducts from "./SummerProducts";
import { Data } from "../product-data/Data";
import productCss from "./summerProduct.module.css"

export default function SummerMainPage () {

    return(<div>
  
    <div className={productCss.summer_div}>
    <h1> <Link to="/summer-products" > Summer Products </Link></h1>
    <div className={productCss.card}>
 
     {Data.map((d) => <SummerProducts key={d.offerPrice} productName = {d.name} img = {d.image} price = {d.actualPrice} />)}
    </div>
    </div>
    </div>
    )
}