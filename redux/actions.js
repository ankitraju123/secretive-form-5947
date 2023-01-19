import axios from "axios"
import {CART_DELETE_DATA,CART_GET_DATA,CART_POST_DATA,ERROR,GET_DATA,LOADING} from "./actionTypes"


export const Getproddata=()=>async(dispatch)=>{

    dispatch({type:LOADING})
try{
    
    let res=await axios.get("http://localhost:8080/product")
    let data=res.data
    dispatch({
        type:GET_DATA,
        payload:data
    })
}
catch(err){
    dispatch({type:ERROR})
}
    
}

export const addToCart=(data)=>(dispatch)=>{
    try{
        let res=axios.post("http://localhost:8080/cart",data)
        dispatch({type:CART_POST_DATA,
                    payload:res.data})
    }
    catch(err){
        dispatch({type:ERROR})
    }
}

export const getCartData=()=>async(dispatch)=>{

    let res= await axios.get("http://localhost:8080/cart")
   
    dispatch({type:CART_GET_DATA,
              payload:res.data })
}

export const deleteCartData=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    try{
       
        let res= axios.delete(`http://localhost:8080/cart/${data.id}`)
        dispatch({type:CART_DELETE_DATA,
                    payload:data})
    }
    catch(err){
        dispatch({type:ERROR})
    }
}

