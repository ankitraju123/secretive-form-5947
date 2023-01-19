import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SingleProduct from "../../components/SingleProduct";
import { addToCart } from "@/redux/actions";
import { useDispatch } from "react-redux";
import Link from "next/link";

const allProducts = ({ pro_data }) => {
  const dispatch = useDispatch();

  // console.log(pro_data);
  return (
    <Box w="70%" borderWidth="1px" borderRadius="lg" m="auto" p={5}>
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        {pro_data.map((prod) => {
          return (
            <Link href={`./${prod.id}`} key={prod.id}>
              <GridItem w="100%">
                <SingleProduct
                  data={prod}
                  onclick={() => {
                    dispatch(addToCart(prod));
                  }}
                />
              </GridItem>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};

export async function getServerSideProps(context) {
  //console.log(context);
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
