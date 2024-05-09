
import dealCss from "./dealCard.module.css"



const DealCard = ({ deal, setDetail, }) => {

   
  const pageDetail = ( d)=>{
       setDetail([{...d}])
      
      
  }

 let actualPrices = parseInt(deal.price/(1-(deal.discountPercentage/100)))



return (<>

 

  
    <div onClick={()=>pageDetail(deal)} className={dealCss.box}>
    <div className={dealCss.contant}>
    <div className={dealCss.img_box}>
  <img src={deal.images[0]} alt={deal.title} />
      </div>
      <div className={dealCss.deatil}>
      <div className={dealCss.info}>
      <h3>{deal.title}</h3>
      <div className={dealCss.rating}>
      <p className={dealCss.ratingRate}>{deal.rating}&#9734;</p>
      </div>
      
      <div className={dealCss.priceDiv}>
      <p>${deal.price}</p>
      {actualPrices?<p className={dealCss.actualPrice}>${actualPrices}</p>:<p className={dealCss.actualPrice}>${deal.actualPrice}</p>}
      <div className={dealCss.percentageOff}>
       {deal.discountPercentage && <p>{deal.discountPercentage}%off</p>}
    </div>
      
      </div>
      </div>
     
     {/* <button  onClick={()=>pageDetail(deal)} >View</button> */}
      </div>
    </div>
    </div>
   
    </>
  );
};

export default DealCard;

