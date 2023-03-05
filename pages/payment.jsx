import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

const Payment = () => {
  const [payment, setPayment] = useState(1);
  const state = useSelector((store) => store.cart);
  let sum = 0;
  state.map((to) => (sum = Number(to.price) + sum));
  console.log(sum);
  const toast = useToast();
  const paymentSuccess = () => {
    toast({
      title: "Payment  Successful.",
      description: "Your Order is Confirmed",
      position: "bottom",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const gray = {
    backgroundColor: "#f3f4f5",
  };
  const white = {
    backgroundColor: "white",
    borderLeft: "3px solid #e80071",
  };
  return (
    <Box w={"100%"} margin="auto">
      <Flex justifyContent={"space-between"} w="80%" m={"auto"}>
        <Box>
          <Heading>Choose payment method</Heading>
          <Text>Choose the payment method you prefer</Text>
        </Box>
        <Image
          width={350}
          height={300}
          alt="pay"
          src={
            "https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg"
          }
        />
      </Flex>
      <br />
      <Heading size={"md"} ml={{ base: 20, md: 40 }}>
        Payment Method Options
      </Heading>
      <Box
        w="100%"
        display={{ base: "grid", md: "flex" }}
        justifyContent={"space-evenly"}
        gap={20}
        m="2rem auto"
      >
        <Box w={{ base: "100%", md: "85%" }}>
          <Flex display={{ base: "grid", md: "flex" }} gap={50}>
            <Box w={{ base: "100%", md: "55%" }} cursor="pointer">
              <Grid>
                <Box
                  onClick={() => setPayment(1)}
                  cursor="pointer"
                  h={"70px"}
                  marginTop={"10px"}
                  style={payment == 1 ? white : gray}
                >
                  <Flex alignItems="center" gap={"10px"}>
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Credit_Debit_Card.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>Credit/Debit Card</Text>
                      <Text fontSize="sm">Visa, Mastercard, Rupay & more</Text>
                    </Box>
                    {payment == 1 ? (
                      <ChevronRightIcon marginLeft="auto" color="gray" />
                    ) : (
                      ""
                    )}
                  </Flex>
                </Box>
                <Box
                  onClick={() => setPayment(3)}
                  cursor="pointer"
                  h={"70px"}
                  style={payment == 3 ? white : gray}
                >
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPI.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>UPI</Text>
                      <Text fontSize="sm">
                        Google Pay, PhonePe, Paytm & more
                      </Text>
                    </Box>
                    {payment == 3 ? (
                      <ChevronRightIcon marginLeft="auto" color="gray" />
                    ) : (
                      ""
                    )}
                  </Flex>
                </Box>

                <Box h={"70px"} bgColor={"#f3f4f5"}>
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={15}
                      height={10}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Netbanking.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>NetBanking</Text>
                      <Text fontSize="sm">Pay through your favourite bank</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box h={"70px"} bgColor={"#f3f4f5"}>
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Snpl.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>Shop now & Pay later</Text>
                      <Text fontSize="sm">Zest money, Simpl & more</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box
                  h={"70px"}
                  onClick={() => setPayment(2)}
                  cursor="pointer"
                  style={payment == 2 ? white : gray}
                >
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/COD.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>Cash on delivery</Text>
                      <Text fontSize="sm">Pay at your doorstep</Text>
                    </Box>
                    {payment == 2 ? (
                      <ChevronRightIcon marginLeft="auto" color="gray" />
                    ) : (
                      ""
                    )}
                  </Flex>
                </Box>

                <Box h={"70px"} bgColor={"#f3f4f5"}>
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/PaytmPaymentOption.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>Paytm Wallet</Text>
                      <Text fontSize="sm">Link your Paytm wallet and pay</Text>
                    </Box>
                  </Flex>
                </Box>

                <Box h={"70px"} bgColor={"#f3f4f5"}>
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/GiftCard.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>Gift card</Text>
                      <Text fontSize="sm">One card for all Nykaa apps</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box h={"70px"} bgColor={"#f3f4f5"}>
                  <Flex gap={"10px"} alignItems="center">
                    <Image
                      width={20}
                      height={20}
                      src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/EMI.svg"
                      alt="left"
                    ></Image>
                    <Box>
                      <Text fontWeight={"medium"}>EMI</Text>
                      <Text fontSize="sm">Easy installments</Text>
                    </Box>
                  </Flex>
                </Box>
              </Grid>
            </Box>
            <Box w={{ base: "100%", md: "55%" }}>
              <Accordion allowToggle w={"full"}>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Bag
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>product------</AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Deliver To
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Price Details
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>Total Amount ₹ {sum}</AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box w={{ base: "90%", md: "40%" }} p={5} m="auto">
              {payment == 1 ? (
                <Box id="cardpay">
                  <Heading
                    paddingTop={"10px"}
                    boxShadow="md"
                    p="6"
                    rounded="md"
                    bg="white"
                    size={"md"}
                  >
                    Credit/Debit Card
                  </Heading>
                  <Box p={"10px"}>
                    <Flex gap={"7px"}>
                      <Text fontSize="sm">WE ACCEPT</Text>
                      <Image
                        width={25}
                        height={20}
                        src={
                          "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg"
                        }
                        alt="visa"
                      />
                      <Image
                        width={25}
                        height={20}
                        src={
                          "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg"
                        }
                        alt="visa"
                      />
                      <Image
                        width={25}
                        height={20}
                        src={
                          "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg"
                        }
                        alt="visa"
                      />
                      <Image
                        width={25}
                        height={20}
                        src={
                          "https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg"
                        }
                        alt="visa"
                      />
                    </Flex>
                  </Box>
                  <Input
                    marginTop={"10px"}
                    placeholder="Card Number"
                    size="md"
                    type={"number"}
                  />
                  <Box marginTop={"10px"}>
                    <Flex>
                      <Input placeholder="Card Number" size="sl" type="month" />
                      <Input
                        placeholder="CV"
                        htmlSize={4}
                        width="auto"
                        type={"number"}
                      />
                    </Flex>
                  </Box>
                  <Button
                    onClick={paymentSuccess}
                    marginTop={"10px"}
                    size="md"
                    height="48px"
                    width="100%"
                    borderColor="pink"
                    bgColor="#e80071"
                  >
                    Pay ₹ {sum}{" "}
                  </Button>
                </Box>
              ) : (
                ""
              )}

              {payment == 2 ? (
                <Box>
                  <Heading
                    paddingTop={"10px"}
                    boxShadow="md"
                    p="6"
                    rounded="md"
                    bg="white"
                    size={"md"}
                  >
                    Cash On Delivery
                  </Heading>

                  <Button
                    onClick={() =>
                      toast({
                        title: "Order  Successful.",
                        description: "Your Order is Confirmed",
                        position: "top",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      })
                    }
                    marginTop={"10px"}
                    size="md"
                    height="48px"
                    width="100%"
                    borderColor="pink"
                    bgColor="#e80071"
                  >
                    Place order
                  </Button>
                </Box>
              ) : (
                ""
              )}
              {payment == 3 ? (
                <Box>
                  <Heading
                    paddingTop={"10px"}
                    boxShadow="md"
                    p="6"
                    rounded="md"
                    bg="white"
                    size={"md"}
                  >
                    UPI
                  </Heading>
                  <Text>1. Select UPI App</Text>
                  <Box>
                    <Flex justifyContent={"space-around"}>
                      <Image
                        width={50}
                        height={50}
                        src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/fashion_icons/googlePay.svg"
                        alt="goopay"
                      />
                      <Image
                        width={50}
                        height={50}
                        src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/PhonePe.svg"
                        alt="phone"
                      />
                      <Image
                        width={60}
                        height={60}
                        src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/Paytm.svg"
                        alt="paytm"
                      />
                      <Image
                        width={60}
                        height={60}
                        src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/UPI-Logo-vector%201.svg"
                        alt="upi"
                      />
                    </Flex>
                  </Box>
                  <Text>2. Enter UPI/VPA Id</Text>
                  <Input
                    placeholder="Enter UPI ID"
                    width="auto"
                    type={"number"}
                  />

                  <Button
                    onClick={paymentSuccess}
                    marginTop={"10px"}
                    size="md"
                    height="48px"
                    width="100%"
                    borderColor="pink"
                    bgColor="#e80071"
                  >
                    Verify & Pay ₹ {sum}
                  </Button>
                </Box>
              ) : (
                ""
              )}
              {/* == */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
