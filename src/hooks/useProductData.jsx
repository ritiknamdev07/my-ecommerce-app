import { useCallback, useEffect, useMemo, useReducer, useState } from "react"





 const  useProductData = () =>{
    

    const [{products,search, loading,error }, dispatch] = useReducer((state, action)=>{
       switch(action.type){
        case "setProducts":
            {return {...state, products: action.payload}}
        case "setSearchValue":
            {return {...state, search: action.payload}}
        case "setLoading":
            {return {loading:action.payload}}
        case "setError":
                return { ...state, error: action.payload };    
        default:
                return state;
        
       }
    },
    {
        products:[],
        search:"",
        loading: true,
        error: null,
        
    })

 const fetchProducts = ()=>{
       
    
       
           fetch( "https://dummyjson.com/products?limit=195")
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
            dispatch({ type: "setError", payload: error.message });
          });
        
    
    }
 
// const fetchProducts = async () => {
//     try {
//       dispatch({ type: "setLoading", payload: true });
//       const response = await fetch("https://dummyjson.com/products?limit=195");
//       console.log(response);
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       dispatch({ type: "setProducts", payload: data.products });
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     } finally {
//       dispatch({ type: "setLoading", payload: false });
//     }
//   }
 

    const setSearch = useCallback((value) => {
        
          dispatch({type: "setSearchValue", payload: value})
    },[])

//    const filteredProducts =  useMemo(()=>products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())),[products, search]) ;
    
   
    return {products, search, setSearch,loading, fetchProducts ,error }
}

export {useProductData}