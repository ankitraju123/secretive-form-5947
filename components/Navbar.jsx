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