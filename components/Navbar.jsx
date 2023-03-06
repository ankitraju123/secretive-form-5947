import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  Stack,
  Image,Text
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NavLink from "./NavLink";
import {SlBasket} from "react-icons/si"
const Links = [
  { name: "Categories", id: "/productpage/products" },
  { name: "Brands", id: "/productpage/products" },
  { name: "Luxe", id: "/productpage/products" },
  { name: "Nykaa Fashion", id: "/productpage/products" },
  {name: "Beauty Advice",id: "/productpage/products"},
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const [Login, SetLogin] = useState({});

  useEffect(() => {
    loginDetail();
  }, [login, Login]);

  const loginDetail = async () => {
    let res = await fetch(`https://nykaa-com.onrender.com/login`);
    let data = await res.json();
    if (data.length > 0) {
      SetLogin(data[0]);
      setLogin(true);
    }
  };
  const logout = () => {
    fetch(`https://nykaa-com.onrender.com/login/${Login.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setLogin(false);
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
          <Flex alignItems={"center"} w={'20%'} gap={8} >
            {login ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Button>{Login && Login.name}</Button>
                </MenuButton>
                <MenuList>
                  <Button onClick={logout} w='full' p={1} bg='none'>Logout</Button>
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
                  <Link href={'/cartpage'} ><Text fontWeight={600} mr='1rem' display={{base:'none',md:'flex'}}>Cart</Text></Link>
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
                          <Link href="/cartpage"><Text fontWeight={600} p={2}>Cart</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
