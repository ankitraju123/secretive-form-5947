import axios from "axios"
import {CART_DELETE_DATA,CART_GET_DATA,CART_POST_DATA,ERROR,GET_DATA,LOADING} from "./actionTypes"


export const Getproddata=()=>async(dispatch)=>{

    dispatch({type:LOADING})
try{
    
    let res=await axios.get("")
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
        let res=axios.post("",data)
        dispatch({type:CART_POST_DATA,
                    payload:res.data})
    }
    catch(err){
        dispatch({type:ERROR})
    }
}

export const getCartData=()=>async(dispatch)=>{

    let res=localStorage.getItem("Cartdata")
    dispatch({type:CART_GET_DATA,
              payload:res })
}

export const deleteCartData=(data)=>(dispatch)=>{
    dispatch({type:LOADING})
    try{
       
        let res=axios.delete(``)
        dispatch({type:CART_DELETE_DATA,
                    payload:data})
    }
    catch(err){
        dispatch({type:ERROR})
    }
}

