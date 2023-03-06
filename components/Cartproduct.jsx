import React from "react";

import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { decrement, deleteCartData, increment } from "@/redux/products/actions";
import { useDispatch } from "react-redux";

export default function CartProduct({ data, onclick, INC, DEC }) {
  const dispatch = useDispatch();

  return (
    <>
      <Box className="cart-main" display={{base:'grid',md:'flex'}} border={'1px lightgray'} borderRadius={15} p={3} _hover={{boxShadow:'lg'}}>
        <Box className="cart-img">
          <Image width={{base:"auto",md:'15vw'}} src={data.image} alt="img" />
        </Box>
        <Box className="cart-details">
          <h2>{data.title}</h2>
          <h2>Rs-{data.price}</h2> 
        <Box style={{ marginTop: "8%" }}>
          <Button onClick={() => dispatch(deleteCartData(data))} w="100px" bg={"#D5418E"} color='white'>
            Remove
          </Button>
        </Box>
        </Box>
      </Box>
    </>
  );
}
