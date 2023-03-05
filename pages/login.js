import React, { useEffect, useState } from "react";
import { Spinner, useToast } from "@chakra-ui/react";
import {Box,Heading,Input,Button,Text} from "@chakra-ui/react";
import Link from "next/link";
//import {CloseIcon} from '@chakra-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/actions";
import {useRouter} from 'next/router';
import axios from "axios";
const Loginpage = () => {
  const router = useRouter();
  const toast = useToast()
  const [state, setState] = useState({
    email: "",
    password: "",
  });
    const {email,password}=state;
  const handleSubmit = async(e) => {
      e.preventDefault();
     let user=await axios.get(`http://localhost:8080/user?email=${state.email}&password=${state.password}`)
      if(user.data.length>0)
      {
          let data=await axios.post('http://localhost:8080/login',user.data[0])
          localStorage.setItem('loginkey',true)
          alert('Login Successfully')
          router.push('/')
          return
    } else if(user.data.length===0)
    {
     alert('kuch bi') 
    }
    console.log(user.data)
   
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