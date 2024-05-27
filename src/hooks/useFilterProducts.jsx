import { useCallback, useReducer, useState } from "react"
import { useProductData } from "./useProductData"

const useFilterProducts = () => {
    const {products} = useProductData()
 
    const [{category}, dispatch] = useReducer((state, action)=>{
        switch(action.type){
            case "setCategory":
                {return {...state, products: action.payload}}
        }
    },{category:""})

    const setProductsToFilter = (values)=>{
        console.log(values);
        dispatch({type:"setCategory", payload: values})
    }
   const brandNames = useCallback(()=> products.map((product)=>(product.category===category)
       
    
),[category,products])


    return {setProductsToFilter}
}

export default useFilterProducts