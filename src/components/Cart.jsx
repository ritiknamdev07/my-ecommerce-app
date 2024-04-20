

import dealCss from "./dealCard.module.css"


import { useSelector } from "react-redux"

export default function Cart(){
 
    const items = useSelector((state)=>state.cart.value)

    const noItem = items.length
    const totalAmount = items.reduce((a,b)=> a +b.offerPrice, 0)
    
  

    
    return(<div>
  
    this is cart

    <h2>Number of {noItem > 1? "items" : "item" } = {noItem}</h2>
    <h1>Total Amount = {totalAmount} </h1>
    
    {items.map((item)=>{
            return(<div key={item.offerPrice} className={dealCss.conatiner}>
                <div className={dealCss.box}>
                <div className={dealCss.contant}>
                <div className={dealCss.img_box}>
              <img src={item.image} alt={item.name} />
                  </div>
                  <div className={dealCss.deatil}>
                  <div className={dealCss.info}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.actualPrice}</p>
                  <p>offerPrice: ${item.offerPrice}</p>
                  
                  </div>

                  </div>
                </div>
                </div>
                </div>
            )
        })}
    </div>)
}