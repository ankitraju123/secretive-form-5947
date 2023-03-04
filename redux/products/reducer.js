//import { Action } from "@remix-run/router";
import {
  CART_DELETE_DATA,
  CART_GET_DATA,
  CART_POST_DATA,
  DEC,
  ERROR,
  GET_DATA,
  INC,
  LOADING,
  TOTAL_AMOUNT,
} from "./actionType";

let initialData = {
  data: [],
  cart: [],
  total: 0,
  isLoading: false,
  isError: false,
};

export const Globalreducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case CART_POST_DATA: {
      return {
        ...state,
        cart: [...state.cart, payload],
        isLoading: false,
        isError: false,
      };
    }
    case CART_GET_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: payload,
      };
    }
    case CART_DELETE_DATA: {
      let filtered = state.cart.filter((e) => {
        return e.id !== payload.id;
      });
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: filtered,
      };
    }
    case INC: {
      let updated = state.cart.map((ele) => {
        if (ele.id === payload) {
          return {
            ...ele,
            quantity: ele.quantity + 1,
          };
        }
        return ele;
      });
      return {
        ...state,
        cart: updated,
      };
    }
    case DEC: {
      let updated = state.cart
        .map((ele) => {
          if (ele.id === payload) {
            return {
              ...ele,
              quantity: ele.quantity - 1,
            };
          }
          return ele;
        })
        .filter((ele) => {
          return ele.quantity != 0;
        });
      return {
        ...state,
        cart: updated,
      };
    }
    case TOTAL_AMOUNT: {
      let { total } = state.cart.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;
          accum.total += quantity * price;
          console.log(accum);
          return accum;
        },
        { total: 0 }
      );
      return {
        ...state,
        total: total,
      };
    }

    default:
      return state;
  }
};

//import * as types from './actionType';


//const initialState={
//    products:[],
//    singleProducts:[],
//    cart:[],
//    isLoading:false,
//    isError:false,
//}
//const reducer=(oldState=initialState,action)=>{
//    const {type,payload}=action;
//    switch(type){
//        case types.GET_PRODUCTS_REQUEST:{
//            return{
//                ...oldState,
//                isLoading:true
//            }
//        }
//        case types.GET_PRODUCTS_SUCESS:{
//            return{
//                ...oldState,
//                isLoading:false,
//                products:payload,
//            }
//        }
//        case types.GET_PRODUCTS_ERROR:{
//            return{
//                ...oldState,
//                isLoading:false,
//                isError:true,
//            }
//        }
//        case types.GET_SINGLE_PRODUCTS_REQUEST:{
//            return{
//                ...oldState,
//                isLoading:true
//            }
//        }
//        case types.GET_SINGLE_PRODUCTS_SUCESS:{
//            return{
//                ...oldState,
//                isLoading:false,
//                singleProducts:payload,
//            }
//        }
//        case types.GET_SINGLE_PRODUCTS_ERROR:{
//            return{
//                ...oldState,
//                isLoading:false,
//                isError:true,
//            }
//        }

//        case types.ADD_CART_REQ:{
//            return{
//                ...oldState,
//                isLoading:true
//            }
//        }
//        case types.ADD_CART_SUCESS:{
//            return{
//                ...oldState,
//                isLoading:false,
//                cart:[...oldState.cart,payload],
//            }
//        }
//        case types.ADD_CART_ERROR:{
//            return{
//                ...oldState,
//                isLoading:false,
//                isError:true,
//            }
//        }
//        case types.GET_CART_REQ:{
//            return{
//                ...oldState,
//                isLoading:true
//            }
//        }
//        case types.GET_CART_SUCESS:{
//            return{
//                ...oldState,
//                isLoading:false,
//                cart:payload
//            }
//        }
//        case types.GET_CART_ERROR:{
//            return{
//                ...oldState,
//                isLoading:false,
//                isError:true,
//            }
//        }
//        case types.UPDATE_CART_REQUEST:
//            return {
//              ...oldState,
//              isLoading: true,
//              isError: false,
//            };
//          case types.UPDATE_CART_SUCCESS:
//            return {
//              ...oldState,
//              isLoading: false,
//              isError: false,
//              cart: oldState.cart.map((cart) => {
//                if (cart.id === payload.id) {
//                  cart.quantity = payload.quantity;
//                  return cart;
//                }
//                return cart;
//              })
//            };
      
//          case types.UPDATE_CART_FAILURE:
//            return {
//              ...oldState,
//              isLoading: false,
//              isError: true,
//            };
//        default:{
//            return oldState
//        }
//    }
//}
//export {reducer};
