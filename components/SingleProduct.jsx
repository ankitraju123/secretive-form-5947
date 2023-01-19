import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";


import { Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";


export default function SingleProduct({ data,onclick }) {
  return (
    <Card size="md">
      <CardBody>
        <Image
          src={data.image}
          alt="productImage"
          borderRadius="sm"
          boxSize="170px"
          m="auto"
        />
        <Box h={10} mt={5} align="center">
          <Text fontSize="sm" align="center" as="b">
            {data.title}
          </Text>
        </Box>
        <Box mt={4}>
          <Flex>
            <Box>
              <Flex gap={2}>
                <Text color="grey" fontSize="md">
                  MRP:
                </Text>
                <Text color="grey" fontSize="md" as="s">
                  {data.preprice}
                </Text>
                <Text color="black" fontSize="md">
                  {data.price}
                </Text>
              </Flex>
            </Box>
            <Box ml="auto">
              <Text color="#008945">{data.discount}</Text>
            </Box>
          </Flex>
        </Box>
        <Box w="50%" m="auto" align="center">
          <Flex gap={3}>
            <Box mt={4}>
              <Flex gap={2}>
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
                <StarIcon boxSize={3} />
              </Flex>
            </Box>
            <Box mt={2.5}>
              <Text>({data.rating})</Text>
            </Box>
          </Flex>
        </Box>
      </CardBody>

      <Box w="100%" h="50px">
        <Flex gap={5}>
          <Button w="100%" backgroundColor="white">
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
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button onClick={onclick} variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </Flex>
      </Box>
    </Card>
  );
}
