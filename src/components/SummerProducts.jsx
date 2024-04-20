
import productCss from "./summerProduct.module.css"

export default function SummerProducts ({img, productName, price}) {
    return(<div className="card" style={{width: "20rem"}}>
        <img className={productCss.product_img} src={img} alt={productName} />
        <div className="card-body">
      <p className="card-text">{productName}</p>
      <h3>{price}</h3>
    </div>
    </div>)
}