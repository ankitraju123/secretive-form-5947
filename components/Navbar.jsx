import React,{useState} from 'react'
import {Box,Heading,Text,Button,Input,InputGroup,InputLeftElement,Image,useDisclosure,Container,Center} from "@chakra-ui/react";
import {AiOutlineMobile,AiOutlineGift,AiOutlineArrowRight} from "react-icons/ai";
import {GoLocation,GoSearch} from "react-icons/go";
import {IoIosHelpCircleOutline} from "react-icons/io";
import
{
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react';
import {BsArrowLeft} from "react-icons/bs";
//import {MdOutlineShoppingBasket} from "react-icons/md";
import {Link} from 'react-router-dom';
import {useGoogleLogin} from '@react-oauth/google';
import axios from 'axios';
import
{
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
} from '@chakra-ui/react';
import
{
    List,
    ListItem
} from '@chakra-ui/react';
import
{
    AlertDialog,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import {FcGoogle} from "react-icons/fc";
import "../App.css";
import Logo from '../../public/loGo1.jpg';
import Menus from './Menu';
import DrawerLogin from './DrawerLogin';
import Drawers from './DrawerNologin';
const Navbar=() =>
{

    const cancelRef=React.useRef()

    const Nav1List=[
        {
            name: "Get App",
            icon: <AiOutlineMobile />
        },{
            name: "Store & Events",
            icon: <GoLocation />
        },{
            name: "Gift Card",
            icon: <AiOutlineGift />
        },{
            name: "Help",
            icon: <IoIosHelpCircleOutline />
        }
    ]
    const Price=249;
    const discount=30;
    const shipping=70;
    //const totalprice=((shipping+Price)-discount);
    const offerPrice=(Price-discount);
    const {isOpen,onOpen,onClose}=useDisclosure();
    const btnRef=React.useRef();
    const [detial,setDetail]=useState([]);
    const [verfiy,Setverfiy]=useState(false);
    const [count,setCount]=useState(0);
    const [price,setPrice]=useState(Price)
    const [quantity,setQuantity]=useState(1);
    const [data,setData]=useState([])    


    const handleClick=(e) =>
    {
        setQuantity(e.target.value)

    }
    console.log(price)
    const login=useGoogleLogin({
        onSuccess: async respose =>
        {
            try
            {
                const res=await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })    
                Setverfiy(true)
                setDetail([...detial,res.data])

            } catch(err)
            {
                console.log(err)

            }

        }
    });
