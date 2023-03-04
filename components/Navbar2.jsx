import React from 'react'
import {
    ListItem,
    UnorderedList,Box
} from '@chakra-ui/react'
  const nav=['Makeup','Skin','Hair','Appliances','Bath & Body','Natural','Mom & Baby','Health & Wellness','Men','Fragrance','Pop Ups']
const Navbar2 = () => {
    return (<>
        <Box display={{ base: 'none', md: 'flex' }} boxShadow={'md'} justifyContent='center' alignContent={'center'} m='4.1rem auto 1rem'>
    <UnorderedList listStyleType={'none'}   justifyContent={'space-between'} w='80%' m='1rem auto' display={{ base: 'none', md: 'flex' }} fontWeight={600} >
    {nav.map((link) => (
                <ListItem  _hover={{
                    textDecoration: 'none',
            color: '#D5418E',
                    cursor:'pointer'
                  }} key={link}>{link}</ListItem>
              ))}       
  </UnorderedList>
        </Box>
  </>
  )
}

export default Navbar2