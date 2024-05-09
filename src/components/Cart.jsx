

import { removeTOCart } from "../features/add to cart/addToCartSlice"
import { useDispatch } from 'react-redux';
import style from "./cart.module.css"


import { useSelector } from "react-redux"

export default function Cart(){
 
    const items = useSelector((state)=>state.cart.value)

    const noItem = items.length

   
    
    const totalAmount = items.reduce((a,b)=>a+b.price,0)
    
  
    const dispatch = useDispatch()

    
    return( <>
    <div className={style.container_1}>
    {noItem? <div className={style.mainDiv} >
    <div className={style.mainContainer}>
  
    <div>
    <div className={style.itemsDiv} >
    {items.map((item)=>{
            return(<div key={item.offerPrice}  className={style.container}>
                <div className={style.box}> 
                <div className={style.content}>
                <div className={style.img_box}>
              <img src={item.image} alt={item.name} />
                  </div>
                  <div className={style.detail}>
                  <div className={style.info}>
                  <div className={style.nameDiv}>
                  <h3>{item.name}</h3>
                  <div style={{display:'flex',alignItems: "center" }} >
                  <p className={style.ratingRate}>{item.rating}&#9734;</p>
                  {item.brand&&<p style={{color: "#544C42", marginLeft:"15px"}} >Brand: {item.brand}</p>}
                  </div>
                  <p>{item.description}</p>
                  </div>
                  <div className={style.priceDiv} >
                  <p>Price: ${item.price}</p>
                  {item.brand?<p style={{color:"#948979", textDecoration:"line-through"}}>${parseInt(item.price/(1-(item.discountPercentage/100)))}</p>:<p style={{color:"#948979",textDecoration:"line-through"}}>${item.actualPrice}</p>}
                  {item.discountPercentage && <p style={{color:"#388e3c"}} >{item.discountPercentage}%off</p>}
                  </div>
                  </div>

                  </div>
                </div>
                <button onClick={()=>dispatch(removeTOCart(item.id))} >Remove</button>

                </div>
                </div>
            )
        })}
       
       

        </div>
        {/* here */}
        </div>

        <div className={style.accountCart}>
        <div className={style.accountCartChild}>
       <h2>PRICE DETAILS</h2>
       <hr />

       <h3>Price({noItem} {noItem > 1? "items" : "item" })  </h3>
       <h3>Discount</h3>
       <hr />


<h2>Total Amount = {totalAmount} </h2>
        </div>
        </div>
    </div>
    <div className={style.orderDiv}>
        <button>Place Order</button>
        </div>
    </div> : <div><h1>
        there are item in the cart
    </h1></div>  }
    
    
    
    </div> </>)
}