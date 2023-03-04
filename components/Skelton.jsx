import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText ,Box} from '@chakra-ui/react'
const Skelton = () => {
  return (
    <Box w='269px' h={'500px'} bg='slategray'>
      <Skeleton startColor='gray.400' endColor='gray.100' height='300px'width='100%' />
      <Skeleton width='95%' height='40px' />
      <SkeletonText height='48px' width='90%' noOfLines={5} spacing='3' />
       <Skeleton height='62px' width='100%' mt='12' />
    </Box>
  )
}

export default Skelton