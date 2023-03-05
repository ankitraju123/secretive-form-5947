import CartProduct from "@/components/Cartproduct";
import {
  deleteCartData,
  getCartData,
  totalAmount,
} from "@/redux/products/actions";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useState } from "react";

const Cartpage = () => {
  const router = useRouter();
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  
  const getTotal = () => {
    let sum = 0;
    state.map((ele) => (sum = Number(ele.price) + sum));
    setTotal(sum);
  };

  useEffect(() => {
    dispatch(getCartData());
    dispatch(totalAmount());
    getTotal();
  }, [dispatch,getTotal]);
  return (
    <div>
      {state.map((e, i) => {
        return (
          <div key={i}>
            <CartProduct
              data={e}
              onclick={() => {
                  dispatch(deleteCartData(e));
                  window.location.reload()
              }}
            />
          </div>
        );
      })}
      <Box margin={"auto"} width="50%" textAlign={"center"}>
        <Text fontSize={30} color="brown">
          Total <span>{total}</span>
        </Text>

        <Button onClick={() => router.push("/address")}>Checkout</Button>
      </Box>
    </div>
  );
};

export default Cartpage;
