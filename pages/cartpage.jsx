import CartProduct from '@/components/Cartproduct'
import SingleProduct from '@/components/SingleProduct'
import { deleteCartData, getCartData } from '@/redux/actions'
import { Button, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Router,useRouter } from 'next/router'

const cartpage = () => {
    const router=useRouter()
    const state=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    console.log(state);
    useEffect(()=>{
        dispatch(getCartData())
    },[])
  return (
    <div>
        {
            state.map((e,i)=>{
                return(
                    <div key={i}>
                    <GridItem w="100%" key={e.id}>
                     <CartProduct data={e} onclick={()=>{dispatch(deleteCartData(e))}} />
                     </GridItem>

                    </div>
                )
            })
        }
        <Button onClick={()=>router.push("/payment")}>Checkout</Button>
       
        <Text>Total </Text><span></span>
    </div>
  )
}

export default cartpage