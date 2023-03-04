import axios from "axios";
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

export const Getproddata = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get(
      "https://nykaa-mock-api-6or1.onrender.com/product"
    );
    let data = res.data;
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const addToCart = (data) => async (dispatch) => {
  //   console.log(typeof data);
  try {
    await axios.post("https://nykaa-mock-api-6or1.onrender.com/cart", data);
    dispatch({ type: CART_POST_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const getCartData = () => async (dispatch) => {
  let res = await axios.get("https://nykaa-mock-api-6or1.onrender.com/cart");

  dispatch({ type: CART_GET_DATA, payload: res.data });
};

export const deleteCartData = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = axios.delete(
      `https://nykaa-mock-api-6or1.onrender.com/cart/${data.id}`
    );
    dispatch({ type: CART_DELETE_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const increment = (id) => (dispatch) => {
  dispatch({ type: INC, payload: id });
};
export const decrement = (id) => (dispatch) => {
  dispatch({ type: DEC, payload: id });
};
export const totalAmount = () => (dispatch) => {
  dispatch({ type: TOTAL_AMOUNT });
};
//import axios from 'axios';
//import * as types from './actionType';

//const getProductsReq=()=>{
//    return{
//        type:types.GET_PRODUCTS_REQUEST,
//    }
//}
//const getProductsSucess=(payload)=>{
//    return{
//        type:types.GET_PRODUCTS_SUCESS,
//        payload
//    }
//}
//const getProductsError=()=>{
//    return{
//        type:types.GET_PRODUCTS_ERROR,
//    }
//}
////for single product
//const getSingleProductsReq=()=>{
//    return{
//        type:types.GET_SINGLE_PRODUCTS_REQUEST,
//    }
//}
//const getSingleProductsSucess=(payload)=>{
//    return{
//        type:types.GET_SINGLE_PRODUCTS_SUCESS,
//        payload
//    }
//}
//const getSingleProductsError=()=>{
//    return{
//        type:types.GET_SINGLE_PRODUCTS_ERROR,
//    }
//}

//const addCartReq=()=>{
//    return{
//        type:types.ADD_CART_REQ,
//    }
//}
//const addCartSucess=(payload)=>{
//    return{
//        type:types.ADD_CART_SUCESS,
//        payload
//    }
//}
//const addCartError=()=>{
//    return{
//        type:types.ADD_CART_ERROR,
//    }
//}

//const getCartReq=()=>{
//    return{
//        type:types.GET_CART_REQ,
//    }
//}
//const getCartSucess=(payload)=>{
//    return{
//        type:types.GET_CART_SUCESS,
//        payload
//    }
//}
//const getCartError=()=>{
//    return{
//        type:types.GET_CART_ERROR,
//    }
//}
//const getProducts=(params) =>async dispatch =>{
//    dispatch(getProductsReq())
//    try {
//        const r = await axios.get('https://nykaa-data-base.vercel.app/product', params);
//        dispatch(getProductsSucess(r.data));
//    } catch (e) {
//        dispatch(getProductsError());
//    }
//}

////for single products
//const getSingleProduct=(id)=>async (dispatch)=>{
//    try{
//        dispatch(getSingleProductsReq())
//        const r=await axios.get(`https://nykaa-data-base.vercel.app/product/${id}`)
//        dispatch(getSingleProductsSucess(r.data))
//    }catch(err){
//        dispatch(getSingleProductsError())
//    }
//}

//const addCarts=(payload) =>async (dispatch) =>{
//    dispatch(addCartReq())
//    try {
//        const r = await axios.post('https://nykaa-data-base.vercel.app/cart', payload);
//        dispatch(addCartSucess(r.data));
//    } catch (e) {
//        dispatch(addCartError());
//    }

//}
//const getCartItem=() =>async dispatch =>{
//    dispatch(getCartReq())
//    try {
//        const r = await axios.get('https://nykaa-data-base.vercel.app/cart');
//        dispatch(getCartSucess(r.data));
//        console.log('CART-ACTION', r.data);
//    } catch (e) {
//        dispatch(getCartError());
//    }
//}

////for update the cart quanity
// const updateProductInCart = (id, quantity) => async (dispatch) => {
//    dispatch({ type: types.UPDATE_CART_REQUEST });
//    return axios
//        .patch(`https://nykaa-data-base.vercel.app/cart/${id}`,{quantity:quantity})
//        .then((res) => {
//            dispatch({
//                type: types.UPDATE_CART_SUCCESS,
//                payload: {
//                    quantity,
//                    id
//                },
//            });

//        })
//        .catch((error) => {
//            dispatch({
//                type: types.UPDATE_CART_FAILURE,
//            });
//        })
//    // try {
//    //     dispatch({ type: types.UPDATE_CART_REQUEST });
//    //     dispatch({
//    //         type: types.UPDATE_CART_SUCCESS,
//    //         payload: {
//    //             quantity,
//    //             id
//    //         },
//    //     });
//    //     await fetch(`https://nykaa-data-base.vercel.app/cart/${id}`, {
//    //         method: "PATCH",
//    //         body: JSON.stringify({
//    //             quantity: quantity,
//    //         })
//    //     });
//    // } catch (error) {
//    //     dispatch({
//    //         type: types.UPDATE_CART_FAILURE,
//    //     });
//    // }
//};



//const deleteProductRequest = () => {
//    return {
//        type: types.DELETE_PRODUCT_REQUEST
//    }
//}
//const deleteProductSuccess = (payload) => {

//    return {
//        type: types.DELETE_PRODUCT_SUCCESS,
//        payload
//    }
//}
//const deleteProductFailure = () => {
//    return {
//        type: types.DELETE_PRODUCT_FAILURE,

//    }
//}
//const deleteProducts = (id) => (dispatch) => {
//    dispatch(deleteProductRequest())
//    return axios
//        .delete(`https://nykaa-data-base.vercel.app/cart/${id}`)
//        .then((result) => {
//            dispatch(deleteProductSuccess(result.data))

//        })
//        .catch((error) => {
//            dispatch(deleteProductFailure())
//        })
//}


//export {getProducts,addCarts,getCartItem,updateProductInCart,deleteProducts,getSingleProduct}