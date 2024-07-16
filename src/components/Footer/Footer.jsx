import style from "./Footer.module.css"
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";
const Footer = () => {
const list =  { companyList : ["about us", "oue services", "privacy policy" ],
     getHelpList : [ "FaQ", "shipping", "returns", "order status", "payment options", "report infringement"],
    onlineShopList : ["cancellation", "terms of use", "security", "privacy", "sitemap", "grievance redressal", "EPR compliance"],
}



      const {companyList, getHelpList, onlineShopList } = list
    return(
        <footer className={style.footer} >
        <div className={style.container}>
          <div className={style.row}>
          <FooterColumn
        heading={"about"} 
        lists={companyList}

        />
         <FooterColumn
        heading={"get help"} 
        lists={getHelpList}

        />
         <FooterColumn 
         heading={"consumer policy"} 
         lists= {onlineShopList}
         />
         <div className={style.footerCol} >
    <h4>contact us</h4>
    <div className={style.socialLinks}>
  
     <li><TiSocialFacebook /></li>
     <li><TiSocialYoutube /></li>
     <li><SlSocialTwitter /></li>
     
   
    </div>

    </div>

          </div>
         </div>
          <hr className={style.hr} />
          <div className={style.lastContainer} >
            <div className={style.lastDiv} >
             <img src="/footerImg/image1.png" alt="Become a Seller" /> <h5>Become a Seller</h5>
            </div>
            <div className={style.lastDiv} >
            <img src="/footerImg/image2.png" alt="Advertise" /> <h5>Advertise</h5>
            </div>
            <div className={style.lastDiv} >
            <img src="/footerImg/image3.png" alt="Gift Cards" /> <h5>Gift Cards</h5>
            </div>
            <div className={style.lastDiv} >
            <img src="/footerImg/image4.png" alt="Help Center" /> <h5>Help Center</h5>
            </div>
          
            <div className={style.lastDiv} >
              <img src="../image.png" alt="img" />
            </div>
          </div>
        </footer>
    )
}


const FooterColumn = (props) => {
    const {heading, lists} = props
   return(
    <div className={style.footerCol} >
    <h4>{heading}</h4>
    <div >
    <ul >
      {lists.map((list,index)=><li className={style.listDiv} key={index} >{list}</li>)}
    </ul>
    </div>
    
    </div>
   )
}


export default Footer