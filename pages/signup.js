import React,{useState} from 'react'
import {Box,Input,Button,Heading,Text} from '@chakra-ui/react';
import Link from 'next/link';
import { useToast } from "@chakra-ui/react";
import axios from 'axios';
const Register=() =>
{
  const toast = useToast()

    //const [sign,setSign]=useState({});
    const [input,setInput]=useState({
        email: "",
        password: "",
        confirmpassword: 0,
        name: ""
    });


    const handleInputChange=(e) =>
    {
        const {name,value}=e.target;
        setInput({...input,[name]: value})
    }
    const sigin=async(e) =>
    {
        e.preventDefault();
        //setSign([...input,input])
        let compare=await axios.get(`http://localhost:8080/user?email=${input.email}`)
        console.log(compare.length)
        if(compare.data.length>0)
        {
            alert("email hai bhai phle hi")
            return
        } else
        {       
            if(input.password!==input.confirmpassword)
            {
                alert('check password')
                return
            } else
            {          
                let data=await axios.post('http://localhost:8080/user',input)
                toast({
                    title: 'Register Successfully',
                    position:"top-center",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
            }
        }
        console.log(compare,compare.length)

        //console.log(await data.json())
    }
    return (
      <Box bgColor={'#f3f3f3'} p={5}>
    <Box w={{base:'auto',md:"400px"}} m='auto' bgColor={'white'}  p={{base:"5rem 10px",md:5}} justifyContent='center' alignItems={'center'} textAlign={'center'}>
    <Heading mb={5}>Register</Heading>
    <hr />
    <Box display={'flex'} m={'2rem 1rem'} fontSize={16} textAlign='center' width={'100%'} >
        <Text >Register to Earn</Text>&nbsp;<Text color={'#d5418e'}>2000  Reward Points!</Text>
    </Box>
    <form onSubmit={sigin}>
        <Input type='text' name='name' placeholder='Name' required border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired/>
        &nbsp;
        <Input type='email' name='email' placeholder='Email Address' required border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired />
        &nbsp;

        <Input type='password' name='confirmpassword' required placeholder='Confirm password' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired />
        &nbsp;

        <Input type='password' name='password' required placeholder='Password' border={'none'} bgColor={'#f3f3f3'} borderBottom={'1px solid #d5418e'} onChange={handleInputChange} isRequired/>
        &nbsp;
        &nbsp;
        <br />
        <br />

        <Button type='submit' bgColor="#d5418e" color={'white'} w='100%' m={'3rem 0'}>REGISTER</Button>
                </form>
                <Text>
            If you have Account with us{" "}
            <Link href="/login" style={{ color: "#d5418e" }}>
              Click Here
            </Link>
          </Text>
            </Box>
            
            </Box>
  )
}

export default Register;