// DealCard.js
import React, { useState } from 'react';
import dealCss from "./dealCard.module.css"



const DealCard = ({ deal, setDetail }) => {

   
  const pageDetail = ( d)=>{
       setDetail([{...d}])
      
  }

  return (<>

 

  
    <div className={dealCss.box}>
    <div className={dealCss.contant}>
    <div className={dealCss.img_box}>
  <img src={deal.image} alt={deal.name} />
      </div>
      <div className={dealCss.deatil}>
      <div className={dealCss.info}>
      <h3>{deal.name}</h3>
      <p>Price: ${deal.actualPrice}</p>
      <p>offerPrice: ${deal.offerPrice}</p>
      
      </div>
     <button  onClick={()=>pageDetail(deal)} >View</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default DealCard;

