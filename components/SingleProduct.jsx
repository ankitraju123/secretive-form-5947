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
} from "@chakra-ui/react";

export default function SingleProduct({ data }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={data.image}
          alt="productImage"
          borderRadius="lg"
          boxSize="250px"
        />
        <Box h={10} mt={5} align="center">
          <Text fontSize="sm" align="center" as="b">
            {data.title}
          </Text>
        </Box>
        <Text color="blue.600" fontSize="2xl">
          $450
        </Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
