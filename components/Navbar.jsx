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
  List,ListItem
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
      <Box>
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
      
      <Box boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' position={'fixed'} w='100%' top={10} bgColor={'white'} className="z-20 ">

      <Box w={'80%'} h={{lg: 68,md: "auto",s: "auto"}} m={'auto'} display={'flex'} justifyContent={'space-between'} fontWeight={500} fontSize={'16px'}>
          <Box display={{base: 'grid',lg: 'flex'}} justifyContent={'space-evenly'} alignItems='center' gap={10} textAlign={'start'}>
              <List spacing={1} display={{base: 'grid',md: 'flex',lg: 'flex'}} >
                  <Heading textAlign={'center'} ><Link href="/"><Image w={'83px'} src="" alt='lgo'/></Link></Heading>

                  <ListItem _hover={{color: 'white'}} textAlign={{base: "start",md: 'center',lg: 'center'}}>

                      <li><Link href="" ><div className="d">
                          <Button className="d-btn">Categories</Button> </div> </Link> </li> </ListItem>

                  <ListItem>
                      
                          <Box className="d">
                              <Button className="d-btn">Brands</Button>
                          </Box>
                     
                  </ListItem>
                  <ListItem>
                     
                          <Box className="d">
                              <Button className="d-btn">Luxe</Button>
                              <Box className="d-content">
                                  <Box className="row">
                                      <Box className="column">
                                          <h3>Makeup Collection Face</h3>
                                          <Text><Link href="#">Foundation</Link></Text>
                                          <Text><Link href="#">Compact</Link></Text>
                                          <Text><Link href="#">Highlighter</Link></Text>
                                          <Text><Link href="#">Setting Spray</Link></Text>
                                          <Text><Link href="#">Primer</Link></Text>
                                          <Text><Link href="#">Concealer</Link></Text>
                                          <Text><Link href="#">Blush</Link></Text>
                                          <Text><Link href="#">Loose Powder</Link></Text>
                                          <Text><Link href="#">Bronzer</Link></Text>
                                          <Text><Link href="#">Makeup Remover</Link></Text>
                                          <Text><Link href="#">Tinted Moisturizer</Link></Text>
                                          <Text><Link href="#">Contouring</Link></Text>
                                          <Text><Link href="#">BB & CC Cream</Link></Text>
                                          <Text><Link href="#">Face Palette</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <h3>Eyes</h3>
                                          <Text><Link href="#">Eye Shadow</Link></Text>
                                          <Text><Link href="#">Mascra</Link></Text>
                                          <Text><Link href="#">Eyliner & kajal</Link></Text>
                                          <Text><Link href="#">Brows</Link></Text>
                                          <Text><Link href="#">Eye Primer</Link></Text>
                                          <Text><Link href="#">Conclealer</Link></Text>
                                          <Text><Link href="#">Lashes</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <h3>Lips</h3>
                                          <Text><Link href="#">Lipstick</Link></Text>
                                          <Text><Link href="#">Liquid Lipstick</Link></Text>
                                          <Text><Link href="#">Lip Balm</Link></Text>
                                          <Text><Link href="#">Lip Plumper</Link></Text>
                                          <Text><Link href="#">Lip Liner</Link></Text>
                                          <Text><Link href="#">Lip Tint</Link></Text>
                                          <br />
                                          <h3>Nails</h3>
                                          <Text><Link href="#">Nail Polish</Link></Text>
                                          <Text><Link href="#">Nail Care</Link></Text>
                                          <Text><Link href="#">Nail Polish Remover</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <h3>Tools & Brushes</h3>
                                          <Text><Link href="#">Face Brush</Link></Text>
                                          <Text><Link href="#">Eye Brush</Link></Text>
                                          <Text><Link href="#">Applicators</Link></Text>
                                          <Text><Link href="#">Lip Brush</Link></Text>
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                    
                  </ListItem>

                  <ListItem>
                      
                          <Box className="d">
                              <Button className="d-btn"> Nykaa Fashion</Button>
                              <Box className="d-content">
                                  <Box className="row" style={{display: 'flex'}}>
                                      <Box className="column">
                                          <h3>What is new?</h3>
                                          <Text><Link href="#">Recently Added</Link></Text>
                                          <br />
                                          <h3>Women</h3>
                                          <Text><Link href="#">Indianwear</Link></Text>
                                          <Text><Link href="#">Westerwear</Link></Text>
                                          <Text><Link href="#">Footwear</Link></Text>
                                          <Text><Link href="#">Bags</Link></Text>
                                          <Text><Link href="#">Lingerie</Link></Text>
                                          <Text><Link href="#">Sportswear</Link></Text>
                                          <Text><Link href="#">Sleep & Lounge</Link></Text>
                                          <Text><Link href="#">Jewellery</Link></Text>
                                          <Text><Link href="#">Watches</Link></Text>
                                          <Text><Link href="#">Accessories</Link></Text>
                                          <br />
                                          <h3>Global Store</h3>
                                          <br />
                                          <h3>Men</h3>

                                          <Text><Link href="#">Topwear</Link></Text>
                                          <Text><Link href="#">Bottomwear</Link></Text>
                                          <Text><Link href="#">Ethnicwear</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <Text><Link href="#">Topwear</Link></Text>
                                          <Text><Link href="#">Bottomwear</Link></Text>
                                          <Text><Link href="#">Ethnicwear</Link></Text>
                                          <Text><Link href="#">Footwear</Link></Text>
                                          <Text><Link href="#">Atheisure</Link></Text>
                                          <Text><Link href="#">Innerwear & Sleepwear</Link></Text>
                                          <Text><Link href="#">Watches</Link></Text>
                                          <Text><Link href="#">Accessories</Link></Text>
                                          <Text><Link href="#">Bags</Link></Text>
                                          <br />
                                          <h3>Style Guide</h3>
                                          <br />
                                          <h3>Tech</h3>
                                          <Text><Link href="#">Smart Wearables</Link></Text>
                                          <Text><Link href="#">Headphones</Link></Text>
                                          <Text><Link href="#">Speakers</Link></Text>
                                          <Text><Link href="#">Chargers & Cables</Link></Text>
                                          <Text><Link href="#">Power Bank</Link></Text>
                                          <br />
                                          <h3>Kids</h3>
                                          <Text><Link href="#">Westernwear</Link></Text>
                                          <Text><Link href="#">Indianwear</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <Text><Link href="#">Winterwear</Link></Text>
                                          <Text><Link href="#">Footwear</Link></Text>
                                          <Text><Link href="#">Toys & Games</Link></Text>
                                          <Text><Link href="#">Feeding</Link></Text>
                                          <Text><Link href="#">Sportswear</Link></Text>
                                          <Text><Link href="#">Sleep & Lounge</Link></Text>
                                          <br />
                                          <h3>Home</h3>
                                          <br />
                                          <Text><Link href="#">Kitchen & Dining</Link></Text>
                                          <Text><Link href="#">Decor</Link></Text>
                                          <Text><Link href="#">Bedding</Link></Text>
                                          <Text><Link href="#">Bath</Link></Text>
                                          <Text><Link href="#">Storage</Link></Text>
                                          <Text><Link href="#">Floor Coverings</Link></Text>
                                          <Text><Link href="#">Kitchen Appliances</Link></Text>
                                          <br />
                                          <h3>House of Nykaa</h3>
                                          <br />
                                          <Text><Link href="#">Twenty Dresses By</Link></Text>
                                          <Text><Link href="#">Gajra Gang</Link></Text>
                                          <Text><Link href="#">Nykaa Feshion</Link></Text>
                                          <Text><Link href="#">RSVP By Nykaa Fashion</Link></Text>
                                          <Text><Link href="#">Nykaa By Nykaa</Link></Text>
                                      </Box>
                                      <Box className="column">
                                          <Text><Link href="#">Pipa Bella</Link></Text>
                                          <Text><Link href="#">IYKYK By Nykaa Fashion</Link></Text>
                                          <Text><Link href="#">Kica</Link></Text>
                                          <Text><Link href="#">Twig And Twine</Link></Text>
                                          <Text><Link href="#">Likha By Nykaa Fashion</Link></Text>
                                          <Text><Link href="#">Gloot</Link></Text>
                                          <Text><Link href="#">Nyri</Link></Text>
                                          <Text><Link href="#">Azai By Nykaa Fashion</Link></Text>
                                          <br />
                                          <h3>Top Brands</h3>
                                          <Text><Link href="#">ONLY</Link></Text>
                                          <Text><Link href="#">W</Link></Text>
                                          <Text><Link href="#">Vero Moda</Link></Text>
                                          <Text><Link href="#">Fabindia</Link></Text>
                                          <Text><Link href="#">Na-Kd</Link></Text>
                                          <Text><Link href="#">AND</Link></Text>
                                          <Text><Link href="#">Revolve</Link></Text>
                                          <Text><Link href="#">Label Shaurya Sanadhya</Link></Text>
                                          <Text><Link href="#">Biba</Link></Text>
                                          <Text><Link href="#">Koton</Link></Text>
                                          <Text><Link href="#">I Saw It First</Link></Text>
                                          <Text><Link href="#">Swatantra</Link></Text>
                                          <Text><Link href="#">Forever New</Link></Text>
                                      </Box>


                                      <Box className="column">
                                          <Image src='https://www.nykaa.com/media/wysiwyg/2022/NF-megamenua.jpg' alt='photo' />
                                      </Box>
                                  </Box>
                              </Box>
                          </Box>
                      
                  </ListItem>
                  <ListItem>
                      <Box className="d">
                          <Button className="d-btn">Beauty Advice</Button>
                          <Box className="d-content" >
                              <Box className="row" style={{display: "flex"}}>
                                  <Box className="column">

                                      <Image src='https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg' alt='nyka first' />
                                      <h3>Beauty Book</h3>
                                      <Text>Nykaa Digital Magzine</Text>
                                  </Box>
                                  <Box className="column">
                                      <Image src='https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png' alt='nyka center' />
                                      <h3>NYKAA TV</h3>
                                      <Text>MasterClasses By Experts & Vloggers</Text>
                                  </Box>
                                  <Box className="column">
                                      <Image width={240} borderRadius='5px' src='https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg' alt='nyka last' />
                                      <h3>BEAUTY BUYING GUIDES</h3>
                                      <Text>Tips To Explore While You Shop</Text>
                                  </Box>
                              </Box>
                          </Box>
                      </Box>
              </ListItem>
              </List>
                    </Box>
                    </Box>

            </Box>
          </Box>
            
                    
  );
};

export default Navbar;
