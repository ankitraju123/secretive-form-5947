import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box onClick={onClick}>
          <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        left={{base:'96%',md:"100%"}}
        bottom="20%"
        position="absolute"
        transform={'translate(0%, 30%)'}
        zIndex={10}>
        <BiRightArrowAlt color='white'   />
      </IconButton>
      </Box>
        
       
      
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box onClick={onClick}>
         <IconButton
         aria-label="left-arrow"
         colorScheme="messenger"
         borderRadius="full"
         right={{base:'96%',md:"100%"}}
         bottom="20%"
         position="absolute"
         transform={'translate(0%, 40%)'}
         zIndex={10}>
        <BiLeftArrowAlt />
        
      </IconButton>
      </Box>
    );
  }
  
function Carouseltwo({passed}) {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <Box className="Carouseltwo">
    
      {/* Right Icon */}
     
      <Slider {...settings}>
        {passed.map((item,i) => (
          <Box className="card" key={i}>
            <Box className="card-top">
              <img
                src={
                     item.linkImg
                }
                alt="img"
                onError={handleErrorImage}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Carouseltwo;