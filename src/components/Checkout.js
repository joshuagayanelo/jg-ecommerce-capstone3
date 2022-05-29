import {Fragment, useEffect, useState, useContext} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext';
import React from 'react';
import {Link} from 'react-router-dom';



import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
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

	<div>
		 <Box
		 style={{
		     fontSize:'1rem'
		 }}>
		     Total
		 </Box>

		 <Box>
		     <Stack direction={'row'} align={'center'} justify={'center'}>
		       <Text fontSize={'3xl'}>Php</Text>
		       <Text fontSize={'5xl'} fontWeight={400}>
		        	1234
		       </Text>
		         {/* <Text color={'gray.500'}>/month</Text>*/}
		     </Stack>
		 </Box>

		 <Button 
		 fontSize={'sm'}
		 fontWeight={400}
		 color={'black'}
		 borderRadius='1px'
		 //borderColor='gray'
		 width='90%'
		 bg={'#ECD444'}
		 variant={'solid'}
		 // href={'/register'}
		// onClick={() => toRegister()}
		 _hover={{
		   bg: '#ECD444',
		   color:'black',
		   colorScheme:'black'
		 }}
		 >
		     Checkout
		 </Button>
	</div>

	);

}