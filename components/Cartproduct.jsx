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

export default function CartProduct({ data,onclick }) {
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
          {data.price}
        </Text>
        <Text color="blue.600" fontSize="2xl">
          {data.preprice}
        </Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          
        <Button onClick={onclick} variant="ghost" colorScheme="red">
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
