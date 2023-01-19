import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  useDisclosure,
  Container,
  Center,
  Menu,
} from "@chakra-ui/react";
import {
  AiOutlineMobile,
  AiOutlineGift,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { GoLocation, GoSearch } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Link from "next/link";
const Nav1List = [
  {
    id:1,
    name: "Get App",
    icon: <AiOutlineMobile />,
  },
  {
    id:2,
    name: "Store & Events",
    icon: <GoLocation />,
  },
  {
    id:3,
    name: "Gift Card",
    icon: <AiOutlineGift />,
  },
  {
    id:4,
    name: "Help",
    icon: <IoIosHelpCircleOutline />,
  },
];
const Navbar = () => {
  return (
    <Box
      width={"full"}
      h={10}
      backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2022/cms/banner/top_strip_16dec22.jpg)`}
      position={"fixed"}
      top="0"
      className="z-20"
    >
      <Box
        display={"flex"}
        w={{ base: "100%", md: "80%", lg: "80%" }}
        m={"auto"}
        justifyContent={{ base: "space-between", md: "none" }}
        Text={2}
        alignItems={"center"}
        textAlign="center"
      >
        <Link href="#" rel="noopener noreferrer">
          <Text
            fontWeight={{ base: 650 }}
            fontSize={{ base: "11.8px", md: "14px", lg: "18px" }}
            _hover={{ color: "white" }}
            color="white"
            className="animate-pulse duration-75"
          >
            BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
          </Text>
        </Link>
        {/*<Menus />*/}
        <Box display={"flex"}>
          {" "}
          {Nav1List.map((e) => {
            return (
              <Box
                display={{ base: "none", md: "none", lg: "flex" }}
                fontSize={{ base: "10px", md: "11px", lg: "15px" }}
                flexDirection={{ base: "none", s: "none", md: "row" }}
                alignItems={"center"}
                fontWeight={{ base: 100, lg: 500 }}
                _hover={{ color: "white" }}
                color="white"
                    m={{base: "0px",lg: "0rem 0.9rem"}}
                    key={e.id}
              >
                <Text fontSize={22}>{e.icon}</Text>
                <Text>{e.name} |</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
