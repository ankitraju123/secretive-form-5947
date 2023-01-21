import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Flex,
  Button,
  Text,
  Card,
  Select,
} from "@chakra-ui/react";
import SingleProduct from "../../components/SingleProduct";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import Link from "next/link";

const allProducts = ({ pro_data }) => {
  //   console.log(pro_data);
  let limit = 10;
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [perPageProds, setPerPageProds] = useState([]);
  let buttons = "";

  useEffect(() => {
    let end = limit * page;
    let start = end - limit;
    console.log(start, end);
    setPerPageProds(pro_data.slice(start, end));
  }, [page]);

  useEffect(() => {
    setNumPages(pro_data.length / limit);
  }, []);

  useEffect(() => {
    for (let i = 1; i <= numPages; i++) {}
  }, [numPages]);

  const pageHandler = (value) => {
    console.log(value);
    setPage(value);
  };

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
      <Box w="100%">
        <Box w="20%" borderWidth="1px" borderRadius="lg" m="auto">
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
        <Box w="70%" borderWidth="1px" borderRadius="lg" m="auto" p={5}>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            {pro_data.map((prod) => {
              return (
                <Card key={prod.id}>
                  <GridItem w="100%">
                    <SingleProduct data={prod} />
                  </GridItem>
                </Card>
              );
            })}
          </Grid>
        </Box>
      </Box>
      <Box width="50%" m="auto" pt={10} pb={10}>
        <Box ml={30}>
          <Flex gap={5}>
            <Button colorScheme="teal" variant="outline">
              <FcPrevious color="#fc2779" />
            </Button>
            {buttons}

            <Button colorScheme="teal" variant="outline">
              <FcNext color="#fc2779" />
            </Button>
          </Flex>
        </Box>
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
