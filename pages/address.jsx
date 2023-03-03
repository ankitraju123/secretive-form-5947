import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";

import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

function Address() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [addaress, setAdaddress] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [pincode, setpincodes] = useState("");
  const [house, sethouse] = useState("");
  const [area, setarea] = useState("");
  var addata = [];
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/payment`);
  };
    const submitdata=() =>
    {
        const newItem = {
          name: address,
          phone: phone,
          email: email,
          pincode: pincode,
          house: house,
          area: area,
          id: Date.now(),
        };
        if(address===""&phone===""&pincode===""&house===""&area==="")
        {
          return  alert('please fill')
        } else
        {
            addata.push(newItem);
            setAdaddress([...addaress,newItem]);
            localStorage.setItem("address",JSON.stringify(addata));
            onClose();
        }
  };

  return (
    <>
      <Box w={"80%"} margin="auto">
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading>Choose Address</Heading>
            <Text>
              Detailed address will help our delivery partner reach your
              doorstep quickly
            </Text>
          </Box>
          <Box>
            <Image
              width={400}
              height={400}
              src={
                "https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg"
              }
              alt="addrses"
            />
          </Box>
        </Flex>
        <Flex gap="20px" display={{ base: "grid", md: "flex" }} m={5}>
          <Box
            p={5}
            onClick={onOpen}
            cursor={"pointer"}
            textAlign={"center"}
            color={"#e80071"}
            display="grid"
            border="1px"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AddIcon margin="auto" />
            <Heading size={"md"}>Add New Address</Heading>
          </Box>
          <Box gap="20px" display={{ base: "grid", md: "flex" }}>
          
            { addaress.map((Address)=>( <Box
                key={Address.id}
                w={"full"}
                h="auto"
                border="1px"
                padding={"20px"}
              >
                <Heading size={"md"}>{Address.name}</Heading>
                <Text size={"md"}>{Address.area}</Text>
                <Text size={"md"}>{Address.house}</Text>
                <Text size={"md"}>{Address.phone}</Text>
                <Button
                  onClick={() => handleClick()}
                  bgColor="#e80071"
                  color={"white"}
                >
                  Deliver here
                </Button>
              </Box>))}
            
          </Box>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">New Address</DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px" m={'auto'}>
          <Heading size={"sm"} >Contact</Heading>
              <Box display={'grid'} gap={5}>
                <Input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  ref={firstField}
                  id="username"
                  placeholder="Name"
                  isRequired
                />
                <Input
                  onChange={(e) => setphone(e.target.value)}
                  value={phone}
                  type="number"
                  ref={firstField}
                  id="username"
                  placeholder="Phone"
                  isRequired
                />
                <Input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  ref={firstField}
                  id="username"
                  placeholder="Email ID(Optional)"
                  isRequired
                />
              </Box>

              <Heading size={"sm"}>Address</Heading>

              <Box>
                <InputGroup>
                  <Input
                    onChange={(e) => setpincodes(e.target.value)}
                    value={pincode}
                    type="number"
                    ref={firstField}
                    id="username"
                    placeholder="Pincode"
                    isRequired
                  />
                </InputGroup>
              </Box>

              <Box>
                <Input
                  onChange={(e) => sethouse(e.target.value)}
                  value={house}
                  type="text"
                  ref={firstField}
                  id="username"
                  placeholder="House/Flate/Office No"
                  isRequired
                />
                <FormLabel htmlFor="desc"></FormLabel>
                <Textarea
                  value={area}
                  isRequired
                  onChange={(e) => setarea(e.target.value)}
                  id="desc"
                  placeholder="Road Name/Area/Colony"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={submitdata} bgColor="#e80071" color={"white"}>
              Ship to this address
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Address;
