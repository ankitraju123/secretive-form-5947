import { ReactNode, useEffect, useState } from "react";
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
import axios from "axios";

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
  const [Login, SetLogin] = useState({});

  //var key;
  useEffect(() => {
    //key=localStorage.getItem('loginkey')
    loginDetail();
  }, []);

  const loginDetail = async () => {
    let userData = await axios.get(`http://localhost:8080/login`);
    SetLogin(userData.data);
  };
  const logout = async () => {
    //localStorage.setItem('loginkey',false)
    //  let userData=await axios.delete(`http://localhost:8080/login/${Login.id}`);
      setLogin(false)
  };
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
            <Link href={"/"}>
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
                  _hover={{ color: "#D5418E" }}
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
                  <Button>{Login.name}</Button>
                </MenuButton>
                <MenuList>
                  <Button onClick={logout}>Logout</Button>
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
