import axios from "axios";
import React from "react";
import { Box, Image } from "@chakra-ui/react";
import DynamicSingleProduct from "/components/DynamicSingleProduct";

const Pages = ({ data }) => {
  // console.log(data);
  return (
    <>
      <Box w="100%" m="auto" align="center" p={5}>
        <Image
          src="https://images-static.nykaa.com/uploads/c118419f-32dc-4a2d-8df9-e8d14c4c9ed2.jpg?tr=w-1200,cm-pad_resize"
          alt="cover image"
          borderRadius="lg"
        ></Image>
      </Box>
      <Box w="80%" m="auto" align="center">
        <DynamicSingleProduct product_data={data} />
      </Box>
    </>
  );
};


export async function getStaticPaths() {
  let r = await fetch(`https://nykaa-mock-api-6or1.onrender.com/product`);
  let d = await r.json();

  return {
    paths: d.map((el) => ({ params: { MId: String(el.MId) } })),
    fallback: false,
  };
}


export async function getStaticProps(context) {
  // console.log(context)
  const { MId } = context.params;
  const res = await axios.get(`https://nykaa-mock-api-6or1.onrender.com/product/${MId}`);
  return {
    props: {
      data: res.data,
    },
  };
}

export default Pages;
