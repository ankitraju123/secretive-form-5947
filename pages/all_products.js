import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SingleProduct from "../components/SingleProduct";

const allProducts = ({ pro_data }) => {
  //   console.log(pro_data);
  return (
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
