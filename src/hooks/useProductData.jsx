import { useCallback,  useReducer,  } from "react"





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
 
 

    const setSearch = useCallback((value) => {
        
          dispatch({type: "setSearchValue", payload: value})
    },[])
   
   
    return {products, search, setSearch,loading, fetchProducts ,error }
}

export {useProductData}