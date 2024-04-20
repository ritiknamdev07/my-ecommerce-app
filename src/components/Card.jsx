
import cardCss from "./card.module.css"

const Card = ({productName, price}) => {
    return(<div className={cardCss.card} style={{width: "18rem"}}>
    <img className={cardCss.img} src="src\product-data\img-phone\download.jpg" alt="product-img"/>
    <div className="card-body">
      <p className="card-text">{productName}</p>
      <h3>{price}</h3>
    </div>
  </div>)
}

export default Card