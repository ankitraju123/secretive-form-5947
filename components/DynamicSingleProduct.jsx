import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
  Box,
  Collapse,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions";

export default function DynamicSingleProduct({ product_data }) {
  const dispatch = useDispatch();
  //   console.log(product_data);
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Card mt={10} mb={10}>
      <Box w="100%">
        <Flex gap={20} display={{base:'grid',md:"flex"}}>
          <Box w={{base:'auto',md:"30%"}}>
            <Image w="100%" src={product_data.image} alt="single-product" />
          </Box>

          <Box w="70%" borderLeft="1px solid grey" pl={4} pt={5}>
            <Heading size="lg" color="#fc2779" align="left">
              {product_data.title}
            </Heading>
            <Flex gap={3}>
              <Box mt={4}>
                <Flex gap={2}>
                  <StarIcon boxSize={3} />
                  <StarIcon boxSize={3} />
                  <StarIcon boxSize={3} />
                  <StarIcon boxSize={3} />
                </Flex>
              </Box>
              <Box mt={2.5}>
                <Text>({product_data.rating})</Text>
              </Box>
            </Flex>
            <Box mt={5}>
              <Flex>
                <Box>
                  <Flex gap={2}>
                    <Text color="grey" fontSize="md">
                      MRP:
                    </Text>
                    <Text color="grey" fontSize="md" as="s">
                      {product_data.preprice}
                    </Text>
                    <Text color="black" fontSize="md">
                      ₹{product_data.price}
                    </Text>
                    <Text color="#008945">{product_data.discount}</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Text align="left">Inclusive of all Taxes</Text>
            <Box align="left" mt={4}>
              <Text color="#fc2779">
                Explore the entire range of products available on Nykaa. Browse
                and Shop through the complete range of beauty products.
              </Text>
            </Box>
            <Box pt={7} pb={5} align="left">
              <Button
                backgroundColor="#fc2779"
                variant="solid"
                color="white"
                w="auto"
                onClick={() => {
                  dispatch(addToCart(product_data));
                }}
              >
                Add To Bag
              </Button>
            </Box>
          </Box>
        </Flex>
          </Box>
          <h2
        style={{
          textAlign: "left",
          fontSize: "20px",
          fontWeight: "600",
          margin: "30px 0 20px 0",
        }}
      >
        Product Description
      </h2>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
        }}
        className="second-Box"
      >
        <Box
          style={{
            width: "74%",
            height: "auto",
            paddingTop: "30px",
            paddingLeft: "20px",
          }}
        >
          <Collapse startingHeight={220} in={show}>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "9px",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Olay Total Effects Night & Day Cream Combo Contains:
            </p>
            <p
              style={{
                textAlign: "left",
                paddingLeft: "9px",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              Explore the entire range of{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Kits & Combos{" "}
              </span>
              available on Nykaa. Shop more{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Olay
              </span>{" "}
              products here.You can browse through the complete world of{" "}
              <span style={{ color: "#FC2779", textDecoration: "underline" }}>
                Olay Kits & Combos{" "}
              </span>
              .
              <span style={{ color: "#FC2779", fontSize: "19px" }}>
                Olay Total Effects 7 In One Day Cream - Niacinamide SPF 15
                Normal: (MRP: 899.00/-) | Quantity: 1 | Expiry Date: 15 July
                2025
              </span>
            </p>
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_banner.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_01.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_02.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_footer.png"
            />
            <p style={{ marginBottom: "20px", marginTop: "20px" }}>
              {" "}
              Olay Total Effects Night Cream - Vitamin C,Niacinamide, Green Tea:
              (MRP: 899.00/-) | Quantity: 1 | Expiry Date: 15 May 2025
            </p>
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_banner.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_01.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_img_02.png"
            />
            <Image
              borderRadius="0px"
              width="100%"
              src="https://www.nykaa.com/media/wysiwyg/TE_footer.png"
            />
          </Collapse>
          <Box
            size="sm"
            onClick={handleToggle}
            mt="1rem"
            cursor="pointer"
            borderTop="1px solid grey"
            paddingLeft="10px"
            paddingRight="10px"
            color="#FC2779"
            fontSize="20px"
            paddingTop="10px"
            textAlign="center"
          >
            Read {show ? "Less" : "More"}
          </Box>
          <h2
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontWeight: "600",
              margin: "30px 0 30px 0",
            }}
          >
            Customers also Viewed
          </h2>


          <Tabs variant="enclosed">
            <TabList>
              <Tab
                border="0px"
                fontSize="20px"
                marginRight="20px"
                backgroundColor="white"
                color="#FC2779"
              >
                Ratings & Reviews
              </Tab>
              <Tab
                border="0px"
                fontSize="20px"
                backgroundColor="white"
                color="#FC2779"
              >
                Product Q&A
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel marginBottom="50px">
                <Box display={{ base:'grid', md:"flex" }}>
                                  <Box
                                      display={{ base:'grid', md:"flex" }}
                    style={{
                      borderRight: "1px solid grey",
                      padding: "10px 20px 10px 20px",
                      margin: "20px 20px 20px 0",
                    }}
                  >
                    <Box style={{ paddingRight: "30px" }}>
                      <p style={{ fontSize: "36px" }}>4.4/5</p>
                    </Box>
                    <Box
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "18px" }}>Overall Rating</p>
                      <p style={{ fontSize: "18px", color: "grey" }}>
                        7989 verified ratings
                      </p>
                    </Box>
                  </Box>

                  <Box style={{ padding: "20px 0 10px 0" }}>
                    <p style={{ fontSize: "18px", color: "grey" }}>
                      Write a review and win 100 reward points !
                    </p>
                    <button
                      style={{
                        padding: "10px 23px 10px 23px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#FC2779",
                        border:"1px solid grey",
                        marginTop:"10px"
                      }}
                    >
                      Write Review
                    </button>
                  </Box>
                </Box>
                <h2
                  style={{
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: "600",
                    marginBottom: "30px",
                  }}
                >
                  {" "}
                  Photos From Customers
                </h2>
                <Box className="customer-image" display={{base:'grid',md:'flex'}} gap={5}>
                  <Image
                    src="https://images-static.nykaa.com/prod-review/1670160204188_34709aea-2b23-48c0-a32a-47667e23156d_1.jpg?tr=w-145,h-145,cm-pad_resize"
                  />
                  <Image src="https://images-static.nykaa.com/prod-review/1670138263356_d4c7780d-b7d2-40b7-b9b6-7b1cd7ee9af0_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                  <Image src="https://images-static.nykaa.com/prod-review/1667560471983_a308586a-6779-41d3-8f12-aa09f487510d_1.jpg?tr=w-145,h-145,cm-pad_resize" />
                    </Box>
                <Box className="Reviews">
                  <h2
                    style={{
                      textAlign: "left",
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "30px",
                      marginTop: "30px",
                    }}
                  >
                    Most Useful Review
                  </h2>

                  <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                    <Box display= {{base:"grid",md:"flex"}}>
                                          <Image
                                              w='50px' h={'45px'}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p>
                        Paramita Banerjee Sawant
                      </p>
                    </Box>
                    <Box  width="70%" textAlign={{base:'center',md:"left"}}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="Reviews">
                  <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                    <Box
                    display= {{base:"grid",md:"flex"}}
                    >
                      <Image
                      w='50px' h={'45px'}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        gazal
                      </p>
                    </Box>
                    <Box style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="Reviews">
                  <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                    <Box
                     display= {{base:"grid",md:"flex"}}
                    >
                      <Image
                      w='50px' h={'45px'}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        Anjali Agrawal
                      </p>
                    </Box>
                    <Box style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="Reviews">
                  <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                    <Box
                    display= {{base:"grid",md:"flex"}}
                    >
                      <Image
                        w='50px' h={'45px'}
                        src="https://images-static.nykaa.com/prod-review/default_profile_image.png"
                      />
                      <p
                        style={{
                          paddingLeft: "8px",
                          color: "grey",
                          fontSize: "18px",
                          textAlign: "left",
                          margin: "10px ",
                        }}
                      >
                        bharti agrawal
                      </p>
                    </Box>
                    <Box style={{ width: "70%", textAlign: "left" }}>
                      <button
                        style={{
                          backgroundColor: "green",
                          fontSize: "22px",
                          color: "white",
                          borderRadius: "5px",
                          padding: "5px 10px 5px 10px",
                        }}
                      >
                        5 <span style={{ color: "white" }}>★</span>
                      </button>
                      <p
                        style={{
                          fontSize: "18px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        "Excellent combination from Olay. Totally effective "
                      </p>
                      <p style={{ color: "grey" }}>
                        This combination of day and night creme is the best for
                        my sensitive skin. I am 48 years old anf my skin looks
                        and feels 10 years younger !! Thank you Nykaa ❤
                      </p>
                      <Box display={{base:'grid',md:"flex"}} marginBottom="30px">
                        <button
                          style={{
                            padding: "0px 30px 0px 30px",
                            fontSize: "20px",
                            marginRight: "25px",
                            border: "0.5px solid grey",
                            color: "#FC2779",
                            backgroundColor: "white",
                            height: "50px",
                            marginTop: "10px",
                          }}
                        >
                          Helpful
                        </button>
                        <p
                          style={{
                            color: "grey",
                            fontSize: "18px",
                            paddingTop: "20px",
                          }}
                        >
                          8 people found this helpful
                        </p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <p style={{ height: "100px" }}></p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Card>
  );
}

const best = [
    {
      id: 1,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/5/f5af21e737534800058_1.jpg",
      tit: "Plum Green Tea Alcohol-Free Toner",
      quan: "200ml",
      star: "★★★★☆ 22928",
      price: "Rs.371",
    },
    {
      id: 2,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd0f16c4710032517839.jpg",
      tit: "Neutrogena Hydro Boost Water Gel",
      quan: "2 S",
      star: "★★★★☆ 38783",
      price: "Rs.450",
    },
    {
      id: 3,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/0/00244708904245709730_1.jpg",
      tit: "Nykaa Naturals Skin Potion 24 K Gold Collagen ",
      quan: "30ml",
      star: "★★★★☆ 19819",
      price: "Rs.999",
    },
    {
      id: 4,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/d/d/dd126ca887167485471_1.jpg",
      tit: "Estee Lauder Advanced Night Repair Synchronized",
      quan: "5 S",
      star: "★★★★☆ 15793",
      price: "Rs.5900",
    },
    {
      id: 5,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/a/8a541fbDOTKE00000054-1.jpg",
      tit: "Dot & Key Vitamin c + E Super Bright Glow",
      quan: "60 ml",
      star: "★★★★★ 8214",
      price: "Rs.506",
    },
    {
      id: 6,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd9f16cNYKMCF0000008.jpg",
      tit: "MCaffeine Choco & Shea Body Butter for Winters",
      quan: "250g",
      star: "★★★★★ 20874",
      price: "Rs.549",
    },
    {
      id: 7,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24e616cNYCETA0000010.jpg",
      tit: "Cetaphil Gentle Skin Cleanser",
      quan: "4 S ",
      star: "★★★★★ 56054",
      price: "Rs.259",
    },
    {
      id: 8,
      src: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/8/f8eea7eMINIM00000001_1.jpeg",
      tit: "Minimalist 10% Niacinamide Face Serum With Matmarine",
      quan: "30ml",
      star: "★★★★☆ 17718",
      price: "Rs.599",
    },
  ];