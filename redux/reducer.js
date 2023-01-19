import {CART_DELETE_DATA,CART_GET_DATA,CART_POST_DATA,ERROR,GET_DATA,LOADING} from "./actionTypes"

let initialData={
    data:[],
    cart:[],
    isLoading:false,
    isError:false
}


export const Globalreducer=(state=initialData,{type,payload})=>{
    switch(type){
        
        default:return state
    }
}
