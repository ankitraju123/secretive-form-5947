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
                                                </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="#">
                                    <Box className="d">
                                        <Button className="d-btn"> Nykaa Fashion</Button>
                                        <Box className="d-content">
                                            <Box className="row" style={{display: 'flex'}}>
                                                <Box className="column">
                                                    <h3>What is new?</h3>
                                                    <Text><Link to="#">Recently Added</Link></Text>
                                                    <br />
                                                    <h3>Women</h3>
                                                    <Text><Link to="#">Indianwear</Link></Text>
                                                    <Text><Link to="#">Westerwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Bags</Link></Text>
                                                    <Text><Link to="#">Lingerie</Link></Text>
                                                    <Text><Link to="#">Sportswear</Link></Text>
                                                    <Text><Link to="#">Sleep & Lounge</Link></Text>
                                                    <Text><Link to="#">Jewellery</Link></Text>
                                                    <Text><Link to="#">Watches</Link></Text>
                                                    <Text><Link to="#">Accessories</Link></Text>
                                                    <br />
                                                    <h3>Global Store</h3>
                                                    <br />
                                                    <h3>Men</h3>

                                                    <Text><Link to="#">Topwear</Link></Text>
                                                    <Text><Link to="#">Bottomwear</Link></Text>
                                                    <Text><Link to="#">Ethnicwear</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Topwear</Link></Text>
                                                    <Text><Link to="#">Bottomwear</Link></Text>
                                                    <Text><Link to="#">Ethnicwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Atheisure</Link></Text>
                                                    <Text><Link to="#">Innerwear & Sleepwear</Link></Text>
                                                    <Text><Link to="#">Watches</Link></Text>
                                                    <Text><Link to="#">Accessories</Link></Text>
                                                    <Text><Link to="#">Bags</Link></Text>
                                                    <br />
                                                    <h3>Style Guide</h3>
                                                    <br />
                                                    <h3>Tech</h3>
                                                    <Text><Link to="#">Smart Wearables</Link></Text>
                                                    <Text><Link to="#">Headphones</Link></Text>
                                                    <Text><Link to="#">Speakers</Link></Text>
                                                    <Text><Link to="#">Chargers & Cables</Link></Text>
                                                    <Text><Link to="#">Power Bank</Link></Text>
                                                    <br />
                                                    <h3>Kids</h3>
                                                    <Text><Link to="#">Westernwear</Link></Text>
                                                    <Text><Link to="#">Indianwear</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Winterwear</Link></Text>
                                                    <Text><Link to="#">Footwear</Link></Text>
                                                    <Text><Link to="#">Toys & Games</Link></Text>
                                                    <Text><Link to="#">Feeding</Link></Text>
                                                    <Text><Link to="#">Sportswear</Link></Text>
                                                    <Text><Link to="#">Sleep & Lounge</Link></Text>
                                                    <br />
                                                    <h3>Home</h3>
                                                    <br />
                                                    <Text><Link to="#">Kitchen & Dining</Link></Text>
                                                    <Text><Link to="#">Decor</Link></Text>
                                                    <Text><Link to="#">Bedding</Link></Text>
                                                    <Text><Link to="#">Bath</Link></Text>
                                                    <Text><Link to="#">Storage</Link></Text>
                                                    <Text><Link to="#">Floor Coverings</Link></Text>
                                                    <Text><Link to="#">Kitchen Appliances</Link></Text>
                                                    <br />
                                                    <h3>House of Nykaa</h3>
                                                    <br />
                                                    <Text><Link to="#">Twenty Dresses By</Link></Text>
                                                    <Text><Link to="#">Gajra Gang</Link></Text>
                                                    <Text><Link to="#">Nykaa Feshion</Link></Text>
                                                    <Text><Link to="#">RSVP By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Nykaa By Nykaa</Link></Text>
                                                </Box>
                                                <Box className="column">
                                                    <Text><Link to="#">Pipa Bella</Link></Text>
                                                    <Text><Link to="#">IYKYK By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Kica</Link></Text>
                                                    <Text><Link to="#">Twig And Twine</Link></Text>
                                                    <Text><Link to="#">Likha By Nykaa Fashion</Link></Text>
                                                    <Text><Link to="#">Gloot</Link></Text>
                                                    <Text><Link to="#">Nyri</Link></Text>
                                                    <Text><Link to="#">Azai By Nykaa Fashion</Link></Text>
                                                    <br />
                                                    <h3>Top Brands</h3>
                                                    <Text><Link to="#">ONLY</Link></Text>
                                                    <Text><Link to="#">W</Link></Text>
                                                    <Text><Link to="#">Vero Moda</Link></Text>
                                                    <Text><Link to="#">Fabindia</Link></Text>
                                                    <Text><Link to="#">Na-Kd</Link></Text>
                                                    <Text><Link to="#">AND</Link></Text>
                                                    <Text><Link to="#">Revolve</Link></Text>
                                                    <Text><Link to="#">Label Shaurya Sanadhya</Link></Text>
                                                    <Text><Link to="#">Biba</Link></Text>
                                                    <Text><Link to="#">Koton</Link></Text>
                                                    <Text><Link to="#">I Saw It First</Link></Text>
                                                    <Text><Link to="#">Swatantra</Link></Text>
                                                    <Text><Link to="#">Forever New</Link></Text>
                                                </Box>