import CartProduct from '@/components/Cartproduct'
import { deleteCartData, getCartData } from '@/redux/actions'
import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'

const cartpage = () => {
    const router=useRouter()
    const state=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    const [total,setTotal]=useState(0)
    
    //console.log(state[0]);
    const getTotal=()=>{
        let sum=0
        for(let i=0;i<state.length;i++){
            sum+=(state[i].price*state[i].quantity)
            console.log(sum);
        }
        console.log(sum,state[0]);
        setTotal(sum)
    }
    
    useEffect(()=>{
        dispatch(getCartData())
        getTotal()
    },[])
  return (
    <div>
        {
            state.map((e,i)=>{
                return(
                 <div key={i}>
                    
                         <CartProduct data={e} onclick={()=>{dispatch(deleteCartData(e))}} />
                         
                    </div>
                )
            })
        }
        <Box>
        <Text fontSize={30} color="brown">Total <span>{total}</span></Text>
        <Button onClick={()=>router.push("/payment")}>Checkout</Button>
        </Box>
        
       
        
    </div>
  )
}

export default cartpage