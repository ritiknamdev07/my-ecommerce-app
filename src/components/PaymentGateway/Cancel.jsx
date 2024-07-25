import style from "./PaymentStatus.module.css"

export default function Cancel () {
    return( 
        <div className={style.container}  >
        <div>
            <img src="../stripePaymentStatus/failed.png" alt="failed payment" />
            </div>
        </div>
    )
}