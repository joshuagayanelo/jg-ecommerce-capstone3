import {Fragment, useEffect, useState, useContext} from 'react'
import { Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext';
import React from 'react';
import {Link} from 'react-router-dom';



import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { CheckIcon } from '@chakra-ui/icons';

export default function Checkout() {

	// const { _id, user, productId, productName, productSku, qty, description, price, subTotal } = cartProp;

	//console.log(cartProp)
	const [cart, setCart] = useState([])

	  useEffect(() => {
        fetch('http://localhost:4000/api/cart/my-cart/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
        
        	let total = 0;
            setCart(data.forEach(cart => {
           		total += cart.subTotal;
           		 
                	
            }))

        })
    }, [])


return (

	<Container maxW={'7xl'}>

	       <Stack spacing={{ base: 6, md: 10 }}>
	         <Box as={'header'}>
	           <Heading
	             lineHeight={1.1}
	             fontWeight={600}
	             fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
	             Php 12345
	           </Heading>
	           <Text
	             color={useColorModeValue('gray.900', 'gray.400')}
	             fontWeight={300}
	             fontSize={'2xl'}>
	             Total
	           </Text>
	         </Box>

		         <Button
		           rounded={'full'}
		           w={'full'}
		           mt={8}
		           size={'lg'}
		           py={'7'}
		           bg={useColorModeValue('gray.900', 'gray.50')}
		           color={useColorModeValue('white', 'gray.900')}
		           textTransform={'uppercase'}
		           _hover={{
		             transform: 'translateY(2px)',
		             boxShadow: 'lg',
		           }}
		           onClick={() => addToCart(productId)}
		           >
		           Checkout
		         </Button>

	         <Stack direction="row" alignItems="center" justifyContent={'center'} className="cartFooter">
	           <MdLocalShipping />
	           <Text>2-3 business days delivery</Text>
	         </Stack>
	       </Stack>
	    
	   </Container>

	// <div>
	// 	 <Box
	// 	 style={{
	// 	     fontSize:'1rem'
	// 	 }}>
	// 	     Total
	// 	 </Box>

	// 	 <Box>
	// 	     <Stack direction={'row'} align={'center'} justify={'center'}>
	// 	       <Text fontSize={'3xl'}>Php</Text>
	// 	       <Text fontSize={'5xl'} fontWeight={400}>
	// 	        	1234
	// 	       </Text>
	// 	         {/* <Text color={'gray.500'}>/month</Text>*/}
	// 	     </Stack>
	// 	 </Box>

	// 	 <Button 
	// 	 fontSize={'sm'}
	// 	 fontWeight={400}
	// 	 color={'black'}
	// 	 borderRadius='1px'
	// 	 //borderColor='gray'
	// 	 width='90%'
	// 	 bg={'#ECD444'}
	// 	 variant={'solid'}
	// 	 // href={'/register'}
	// 	// onClick={() => toRegister()}
	// 	 _hover={{
	// 	   bg: '#ECD444',
	// 	   color:'black',
	// 	   colorScheme:'black'
	// 	 }}
	// 	 >
	// 	     Checkout
	// 	 </Button>
	// </div>

	);

}