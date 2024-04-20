// DealsContainer.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for API requests
import React, { useState } from 'react';
import DealCard from './DealCard';
import { Data } from '../product-data/Data';
import dealCss from "./dealCard.module.css"

import { useDispatch } from 'react-redux';
import { addToCart } from '../features/add to cart/addToCartSlice';

const DealsContainer = () => {
//   const [deals, setDeals] = useState([]);

//   useEffect(() => {
//     // Fetch deals data from the API
//     axios.get('https://api.flipkart.com/deals/smartphones')
//       .then((response) => {
//         setDeals(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching deals:', error);
//       });
//   }, []);



const [detail, setDetail] = useState([])

const dispatch = useDispatch()

 const handleClose = () => {
  setDetail([])
  
 }

 const handleDispatch = (item) => {
  dispatch(addToCart({name: item.name, image: [item.image], actualPrice: item.actualPrice, offerPrice: item.offerPrice   }))
  setDetail([])
 }



  return (<>


  
    
      {detail.map((x)=>{
        return( <>
          <div className={dealCss.detail_container}>
          <div className={dealCss.d_contant}>  
          <button  onClick={handleClose} className={dealCss.close} >X</button>
        <div className={dealCss.detail_info}>
        <div className={dealCss.img_box}>
   <img src={x.image} alt={x.name} />
      </div>
      <div className={dealCss.d_pro_info}>
      
      <h3>{x.name}</h3>
      <p>Price: ${x.actualPrice}</p>
      <p>offerPrice: ${x.offerPrice}</p>
      <p>{x.discretion}</p>

    <button onClick={()=>handleDispatch(x)} >Add to Cart</button>
      </div>
      </div>
      </div>
      </div>
        
 
      </>)
      })}




    <div className={dealCss.conatiner}>

    
 
      {Data.map((deal) => (
        <DealCard key={deal.offerPrice} setDetail={setDetail} deal={deal}  />
      ))}
   
    </div>
 
    </> );
};

export default DealsContainer;
