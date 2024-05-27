import { useCallback, useEffect, useMemo, useReducer, useState } from "react"





 const  useProductData = () =>{
    

    const [{products,search, loading, }, dispatch] = useReducer((state, action)=>{
       switch(action.type){
        case "setProducts":
            {return {...state, products: action.payload}}
        case "setSearchValue":
            {return {...state, search: action.payload}}
        case "setLoading":
            {return {loading:action.payload}}
       
       }
    },
    {
        products:[],
        search:"",
        loading: true,
        
    })
const fetchProducts = ()=>{
       
    
       
           fetch( "https://dummyjson.com/products?limit=190")
        .then(res=>{
            if(!res.ok){
                dispatch({type: "setLoading", payload: true})
                throw new Error("Failed to fetch products")
            }
           return res.json()})
        .then((res)=>{
            dispatch({type: "setLoading", payload: false})
            dispatch({type:"setProducts",payload:res.products})
           
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            dispatch({type: "setLoading", payload: false})
          });
        
    
    }
 

    const setSearch = useCallback((value) => {
        
          dispatch({type: "setSearchValue", payload: value})
    },[])

//    const filteredProducts =  useMemo(()=>products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())),[products, search]) ;
    
   
    return {products, search, setSearch,loading, fetchProducts , }
}

export {useProductData}