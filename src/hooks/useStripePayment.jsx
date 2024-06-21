import { loadStripe } from "@stripe/stripe-js"
import { useCallback, useEffect, useState } from "react";

const useStripePayment = () => {
   
    const makePayment = async(productsData)=>{
        const stripe = await loadStripe("pk_test_51PLk7gH3ROV2ahHYqH4XZUFPHF8wJvVN9y99NCia55zhb3B3YNCGUQaL0oW4NO3mQ1deXgieSNWsWlTZWZnbul1w0094ZtkyeZ")

        const body = {
            products: productsData
        }
        const headers = {
            "Content-Type": "application/json"
        }

        
        const response = await fetch("http://localhost:7000/api/create-checkout-session",{
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })
        .catch(error=>alert(error,"in fetch"))
      
        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });
 
        if(result.error){
            console.log(result.error);
        }
    }

  const getPaymentData = useCallback((productsData)=>makePayment(productsData),[])
   
     
    return  getPaymentData

}

export default useStripePayment