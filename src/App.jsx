
import './App.css'

import Card from './components/Card'
import smartphoneDeals from "./product-data/itemData"
import SummerMainPage from './components/SummerMainPage'
import DealsContainer from './components/DealsContainer'
import Cart from './components/Cart'
import { useState } from 'react'




function App() {

  
  const [cart, setCart] = useState([])

  const addItemCart = (x) => {
     let newX = {...x}
     setCart((priv)=>{
      return [...priv, newX]
     })
  }  

  return (<>


 
  <DealsContainer addItemCart={addItemCart} />
  
   {/* <div className="card-parent">
   {smartphoneDeals.map((phoneInfo)=>{
    return <Card 
    key= {5}
    productName={phoneInfo.product_name} 
    price={phoneInfo.price} />
   })}
   </div>
 */}

   
   <div className="summer-main-page">
    <SummerMainPage />
   </div>

   
   

    </>
  )
}

export default App




