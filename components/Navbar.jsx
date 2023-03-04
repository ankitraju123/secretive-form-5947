import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NavLink from "./NavLink";
//const Links = [
//  "Categories",
//  "Brands",
//  "Luxe",
//  "Nykaa Fashion",
//  "Beauty Advice",
//];
const Links = [
    { name: "Categories", id: "/productpage/products" },
    { name: "Brands", id: "/productpage/products" },
    { name: "Luxe", id: "/productpage/products" },
    { name: "Nykaa Fashion", id: "/productpage/products" },
    { name: "Beauty Advice", id: "/productpage/products" },
];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);

  return (
    <>
      <Box
        bg={"white"}
        px={4}
        position={"fixed"}
        w={"100%"}
        zIndex={9999999999}
        top={"0"}
        boxShadow={"lg"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"80%"}
          m="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
                      <Link href={'/'}>
                      <Image src="logo.jpg" alt="logo" w={55} borderRadius={50} />
                      </Link>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontWeight={600}
            >
              {Links.map((link) => (
                  <NavLink
                  key={link}
                  to={link.id}
                  name={link.name}
                  fontSize={15}
                  bg="none"
                  _hover={{ bg: "red.400" }}
                  onClick={() => onClose()}
              />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {login ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>Link 3</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link href={"/login"}>
                <Button
                  bg={"#D5418E"}
                  color="white"
                  _hover={{ bg: "pink.400" }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
               <NavLink
               key={link}
               to={link.id}
               name={link.name}
               fontSize={15}
               bg="none"
               onClick={() => onClose()}
           />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
