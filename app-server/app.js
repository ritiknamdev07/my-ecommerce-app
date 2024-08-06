const express = require("express")
const app = express()
const cors = require("cors");
const stripe  = require("stripe")("sk_test_51PLk7gH3ROV2ahHYVSKu5n1Ojl2OzJ7IZTkPd3oCUFPz4EpLBpUBSrgiuLzueZh3DoqaeU5knSf0md6BZpTEeueg005shfCOos")

app.use(express.json())
app.use(cors());

// checkout api
app.post("/api/create-checkout-session", async(req,res)=>{
    const {products} = req.body 
   
    const lineItems = products.map(pro=>({
      price_data:{
            currency: "usd",
            product_data:{
                name:pro.title
            },
            unit_amount: pro.price*100
        },
        quantity:pro.quantity
    }))
    const session = await stripe.checkout.sessions.create({

        payment_method_types:["card"],

        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',

      });

      res.json({id:session.id})
} )

app.listen(7000,()=>{
    console.log("server is start");
})