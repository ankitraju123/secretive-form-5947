import {CART_DELETE_DATA,CART_GET_DATA,CART_POST_DATA,ERROR,GET_DATA,LOADING} from "./actionTypes"

let initialData={
    data:[],
    cart:[],
    isLoading:false,
    isError:false
}


export const Globalreducer=(state=initialData,{type,payload})=>{
    switch(type){
        case LOADING:{
            return{
                ...state,
                isLoading:true
            }
        }
        case ERROR:{
            return{
                ...state,
                isError:true
            }
        }
        case CART_POST_DATA:{
            return{
                ...state,
                cart:[...state.cart,payload],
                isLoading:false,
                isError:false
                
            }
        }
        case CART_GET_DATA:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                cart:payload,

            }
        }
        case CART_DELETE_DATA:{
            let filtered=state.cart.filter((e)=>{
              return  e.id!==payload.id
            })
            return{
                ...state,
                isLoading:false,
                isError:false,
                cart:filtered
            }
        }
        default:return state
    }
}
