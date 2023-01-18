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
    const logout=() =>
    {
        setDetail([]);
        Setverfiy(false)
    }
    console.log(detial,"done")
    return (
        <Box>

<Box width={'full'} h={10} backgroundImage={`url(https://adn-static1.nykaa.com/media/wysiwyg/2022/cms/banner/top_strip_16dec22.jpg)`} position={'fixed'} top='0' className='z-20'>

<Box display={'flex'} w={{base: '100%',md: '80%',lg: '80%'}} m={'auto'} justifyContent={{base: 'space-between',md: 'none'}} Text={2} alignItems={'center'} textAlign='center'  >
    <Link to="#" rel='noopener noreferrer'><Text fontWeight={{base: 650}} fontSize={{base: '11.8px',md: '14px',lg: '18px'}} _hover={{color: 'white'}} color='white' className='animate-pulse duration-75'>BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</Text></Link>
    <Menus />
    <Box display={'flex'}> {
        Nav1List.map((e) =>
        {
            return (<Box display={{base: 'none',md: 'none',lg: 'flex'}} fontSize={{base: '10px',md: '11px',lg: '15px'}} flexDirection={{base: 'none',s: "none",md: 'row'}} alignItems={'center'} fontWeight={{base: 100,lg: 500}} _hover={{color: 'white'}} color='white' m={{base: '0px',lg: '0rem 0.9rem'}}>
            <Text fontSize={22}>{e.icon}</Text>
            <Text>{e.name} |</Text>
        </Box>
        )
    })
}
</Box>
</Box>
            </Box>

            <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position={'fixed'} w='100%' top={10} bgColor={'white'} className="z-20 ">

                <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={'16px'}>
                    <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
                        <List spacing={1} display={{base: 'grid',md: 'flex',lg: 'flex'}} >
                            <Heading textAlign={'center'} ><Link to="/"><Image w={'83px'} src={Logo} /></Link></Heading>
        
                            <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>

                                <li><Link to="/product" ><div className="d">
                                    <Button className="d-btn">Categories</Button> </div> </Link> </li> </ListItem>

                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Brands</Button>
                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn">Luxe</Button>
                                        <Box className="d-content">
                                            <Box className="row">
                                                <Box className="column">
                                                    <h3>Makeup Collection Face</h3>
                                                    <Text><Link to="#">Foundation</Link></Text>
                                                    <Text><Link to="#">Compact</Link></Text>
                                                    <Text><Link to="#">Highlighter</Link></Text>
                                                    <Text><Link to="#">Setting Spray</Link></Text>
                                                    <Text><Link to="#">Primer</Link></Text>
                                                    <Text><Link to="#">Concealer</Link></Text>
                                                    <Text><Link to="#">Blush</Link></Text>
                                                    <Text><Link to="#">Loose Powder</Link></Text>
                                                    <Text><Link to="#">Bronzer</Link></Text>
                                                    <Text><Link to="#">Makeup Remover</Link></Text>
                                                    <Text><Link to="#">Tinted Moisturizer</Link></Text>
                                                    <Text><Link to="#">Contouring</Link></Text>
                                                    <Text><Link to="#">BB & CC Cream</Link></Text>
                                                    <Text><Link to="#">Face Palette</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Eyes</h3>
                                                    <Text><Link to="#">Eye Shadow</Link></Text>
                                                    <Text><Link to="#">Mascra</Link></Text>
                                                    <Text><Link to="#">Eyliner & kajal</Link></Text>
                                                    <Text><Link to="#">Brows</Link></Text>
                                                    <Text><Link to="#">Eye Primer</Link></Text>
                                                    <Text><Link to="#">Conclealer</Link></Text>
                                                    <Text><Link to="#">Lashes</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Lips</h3>
                                                    <Text><Link to="#">Lipstick</Link></Text>
                                                    <Text><Link to="#">Liquid Lipstick</Link></Text>
                                                    <Text><Link to="#">Lip Balm</Link></Text>
                                                    <Text><Link to="#">Lip Plumper</Link></Text>
                                                    <Text><Link to="#">Lip Liner</Link></Text>
                                                    <Text><Link to="#">Lip Tint</Link></Text>
                                                    <br />
                                                    <h3>Nails</h3>
                                                    <Text><Link to="#">Nail Polish</Link></Text>
                                                    <Text><Link to="#">Nail Care</Link></Text>
                                                    <Text><Link to="#">Nail Polish Remover</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <h3>Tools & Brushes</h3>
                                                    <Text><Link to="#">Face Brush</Link></Text>
                                                    <Text><Link to="#">Eye Brush</Link></Text>
                                                    <Text><Link to="#">Applicators</Link></Text>
                                                    <Text><Link to="#">Lip Brush</Link></Text>
                                                </Box>