
import style from "./PaymentStatus.module.css"

export default function Success () {
    return( 
        <div className={style.container}  >
        <div>
            <img src="../stripePaymentStatus/success.png" alt="success payment" />
            </div>
        </div>
    )
}