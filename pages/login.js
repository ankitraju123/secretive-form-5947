import React, { useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import {Box,Heading,Input,Button,Text} from "@chakra-ui/react";
import Link from "next/link";
//import {CloseIcon} from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/actions";
import {useRouter} from 'next/router';
const Loginpage = () => {
 const data=JSON.parse(localStorage.getItem('userData'))
  const router = useRouter();
  const toast = useToast()
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.email!=email || data.password!=password) {
      return   toast({
        title: 'Login',
        position:"top-center",
        description: "Wrong Crediantial",
        status: 'error',
        duration: 3000,
          isClosable: true,
        
      });
    }
    //  dispatch(login(email,password))
    toast({
        title: 'Login',
        position:"top-center",
        description: "Wrong Crediantial",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push("/")
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <Box bgColor={"#f3f3f3"} p={15}>
      <Box mt={"50px"}>
        <Box
          w={"26%"}
          m="auto"
          bgColor={"white"}
          p={10}
          justifyContent="center"
          alignItems={"center"}
          textAlign={"center"}
        >
          <Heading mb={5} fontSize={35}>
            Login
          </Heading>
                  <form
                      onSubmit={handleSubmit}
                  >
            <Input
              type="email"
              placeholder="Enter Email Address"
              bgColor={"#f3f3f3"}
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
            &nbsp;
            <Input
             type="password"
              placeholder="Enter Password"
              bgColor={"#f3f3f3"}
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <Button
              bgColor="#d5418e"
              color={"white"}
              w="100%"
              m={"3rem 0"}
              type="submit"
            >
              Proceed
            </Button>
          </form>
          <Text>
            If don't have Account with us{" "}
            <Link href="/signup" style={{ color: "#d5418e" }}>
              Click Here
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Loginpage;