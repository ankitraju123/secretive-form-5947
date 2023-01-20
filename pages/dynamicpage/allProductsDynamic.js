import React from "react";
import { Box, Grid, GridItem, Image, Heading, Flex, Button, Text } from "@chakra-ui/react";
import SingleProduct from "../../components/SingleProduct";
import { addToCart } from "@/redux/actions";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const allProducts = ({ pro_data }) => {
  //   console.log(pro_data);
  const dispatch = useDispatch();
  const router= useRouter()
  return (
    <>
      <Box w="100%" m="auto" align="center" p={5}>
        <Image
          src="https://images-static.nykaa.com/uploads/d470e061-8d08-455c-8651-7de67ff104f0.gif"
          alt="cover image"
          borderRadius="lg"
        ></Image>
        <Heading color="#fc2779" m="5">
          All Products
        </Heading>
      </Box>
      <Box w="70%" borderWidth="1px" borderRadius="lg" m="auto" p={5}>
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          {pro_data.map((prod) => {
            return (
              <div>
              <GridItem onClick={()=>router.push(`./${prod.id}`)} w="100%" key={prod.id}>
                <SingleProduct
                  data={prod}
                />
              </GridItem>
              <Box w="100%" h="50px">
        <Flex gap={5}>
          <Button w="100%" backgroundColor="white" onClick={()=>{dispatch(addToCart(prod))}}>
            <Box backgroundColor="white" mr={6}>
              <Image
                src="https://www.shareicon.net/data/2017/02/15/878857_pink_512x512.png"
                alt="wishlist"
                boxSize="35px"
              ></Image>
            </Box>
            <Box
              backgroundColor="#fc2779"
              h="100%"
              w="90%"
              mr={0}
              color="white"
            >
              <Text pt={2.5}>Add To Bag</Text>
            </Box>
          </Button>
        </Flex>
      </Box>
      </div>
             
            );
          })}
        </Grid>
        
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8080/product`);
  const data = await res.json();
  //   console.log(data);

  return {
    props: {
      pro_data: data,
    },
  };
}

export default allProducts;
