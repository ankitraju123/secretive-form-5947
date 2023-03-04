import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carouselchakra({cards}) {
  const [slider, setSlider] = React.useState([])
 
  return (
    <Box
      position={'relative'}
      height={'auto'}
      width={"80%"}
      margin="auto"
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={{base:'96%',md:"100%"}}
        top="50%"
        transform={{base:'translate(-860%, -50%)',md:'translate(-2460%, -50%)'}}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={{base:'96%',md:"10%"}}
        top="45%"
        transform={{base:'translate(860%, -180%)',md:'translate(210%, 0%)'}}
        zIndex={222222}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt color='white'  />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'300px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="100%"
            borderRadius="15px"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}