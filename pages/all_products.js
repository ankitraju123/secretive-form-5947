import React from "react";
import { Box, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import SingleProduct from "../components/SingleProduct";
import { addToCart } from "@/redux/actions";
import { useDispatch } from "react-redux";

const allProducts = ({ pro_data }) => {
  const dispatch = useDispatch();

  //   console.log(pro_data);
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
              <GridItem w="100%" key={prod.id}>
                <SingleProduct data={prod} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>

      <Box w="70%" borderWidth="1px" borderRadius="lg" m="auto" p={5}>
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
          {pro_data.map((prod) => {
            return (
              <GridItem w="100%" key={prod.id}>
                <SingleProduct
                  data={prod}
                  onclick={() => {
                    dispatch(addToCart(prod));
                  }}
                />
              </GridItem>
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
