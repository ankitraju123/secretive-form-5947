import { Box, Button, Flex, Grid, Heading, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Accordion,  AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  } from '@chakra-ui/react'
  import { ChevronRightIcon } from '@chakra-ui/icons'
  import { useToast } from '@chakra-ui/react'
 const Payment = () => {
  const toast = useToast()
  const paymentSuccess=()=>{
    toast({
      title: 'Payment  Successful.',
      position: 'top',

      // description: "We've created your account for you.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }
  return (
    <Box w={"80%"} margin='auto' >
        <Flex justifyContent={'space-between'}>
        <Box>
    <Heading>Choose payment method</Heading>
    <Text>Choose the payment method you prefer</Text>
        </Box>
        <Image width={350}height={300} alt='pay' src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg'}/>
        </Flex>
        {/* ----------------------- */}
        <Box w='100%' marginTop={"10px"}>
            <Heading size={'md'} >Payment Method Options</Heading>
    <Flex justify={'space-between'}>
        <Box  w='55%'>
            <Flex>
            <Box   w='50%'>
<Grid>
            <Box marginTop={"10px"}  >
            <Flex   alignItems='center' gap={'10px'} >
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/Credit_Debit_Card.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'} >Credit/Debit Card</Text>
                <Text fontSize='sm' >Visa, Mastercard, Rupay & more</Text>
                </Box>
                {/* <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/dropdown-right-arrow.png' alt='rigt'></Image> */}
          <ChevronRightIcon color={'gray'} />
            </Flex>
            </Box>

            <Box  h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPI.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>UPI</Text>
                <Text fontSize='sm' >Google Pay, PhonePe, Paytm & more</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>

            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={15}height={10} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/Netbanking.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>NetBanking</Text>
                <Text fontSize='sm' >Pay through your favourite bank</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'}/>
            </Flex>
            </Box>

            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/Snpl.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>Shop now & Pay later</Text>
                <Text fontSize='sm' >Zest money, Simpl & more</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>

            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/COD.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>Cash on delivery</Text>
                <Text fontSize='sm' >Pay at your doorstep</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>

            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/PaytmPaymentOption.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>Paytm Wallet</Text>
                <Text fontSize='sm' >Link your Paytm wallet and pay</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>

            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/GiftCard.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>Gift card</Text>
                <Text fontSize='sm' >One card for all Nykaa apps</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>
            <Box h={'70px'}  bgColor={'#f3f4f5'} >
            <Flex gap={'10px'} alignItems='center'>
                <Image width={20}height={20} src='https://adn-static1.nykaa.com/media/wysiwyg/Payments/EMI.svg' alt='left'></Image>
                <Box>
                <Text fontWeight={'medium'}>EMI</Text>
                <Text fontSize='sm' >Easy installments</Text>
                </Box>
          <ChevronRightIcon color={'#f3f4f5'} />
            </Flex>
            </Box>
            </Grid>
            </Box>
            {/* ======= rig */}
            <Box w='40%' >
                <Box h={'60%'} >
               <Heading paddingTop={'10px'} boxShadow='md' p='6' rounded='md' bg='white' size={'md'}>Credit/Debit Card</Heading>
               <Box paddingTop={'10px'}>
                <Flex gap={'7px'}>
                <Text fontSize='sm'>WE ACCEPT</Text>
                <Image width={25}height={20} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg'}alt='visa' />
                <Image width={25}height={20} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg'}alt='visa' />
                <Image width={25}height={20} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg'}alt='visa' />
                <Image width={25}height={20} src={'https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg'}alt='visa' />
                </Flex>
               </Box>
               <Input marginTop={'10px'} placeholder='Card Number' size='md' type={'number'} />
               <Box marginTop={'10px'}>
                <Flex>
               <Input placeholder='Card Number'  size="sl"type="month"/>
               <Input  placeholder='CV' htmlSize={4} width='auto' type={'number'} />
                </Flex>
               </Box>
<Button onClick={paymentSuccess} marginTop={'10px'} size='md' height='48px' width='100%'  borderColor='pink' bgColor='#e80071'>
  Pay ₹ 2000 </Button>
   </Box>

            </Box>
            </Flex></Box>

            {/* ----- rigt */}
            <Box  w={'40%'}>

            <Accordion allowToggle w={'70%'}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Bag
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
  
product-------
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        Deliver To
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
 alanallur kerala
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
       Price Details
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Total Amount  ₹ 2200
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Payment


