import { useState, useEffect } from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure, 
  useToast, 
  Button, 
  ButtonGroup
} from '@chakra-ui/react'

export default function CartCard({cartProp}) {

	const { _id, user, productId, productName, productSku, qty, description, price, subTotal } = cartProp;

	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = React.useRef()
	const toast = useToast();

	const removeItem = () => {
		//e.preventDefault();

		fetch(`https://capstone2-joshuagayanelo.herokuapp.com/api/cart/remove-item/${_id}`,{
			method: "PUT", 
			headers: {
				'Content-Type':'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}

		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				toast({
				  title: 'Item successfully removed',
				  //description: `User ${email} has been verified.`,
				  status: 'success',
				  position: 'top',
				  isClosable: true,
				  duration:3500
				})

				// window.setTimeout(() => {location.reload()},1000)
				setTimeout(window.location.reload.bind(window.location), 1000);

				   
			} else {

				toast({
				  title: 'Incorrect email or password.',
				  status: 'error',
				  position: 'top',
				  isClosable: true,
				  duration:3500
				})

			}
		})
	};

	const removeAndClose = () => {
		removeItem();
		onClose();
	}
	

	return (


					<Container fluid className="mb-3">
						<Card>
							<Card.Body>
								<Card.Title>{productName}</Card.Title>
								<Card.Subtitle>Description: </Card.Subtitle>
								<Card.Text>{description}</Card.Text>
								<Card.Text>SKU: {productSku}</Card.Text>
								<Card.Text>Quantity: {qty}</Card.Text>
								<Card.Text>Sub Total: Php {subTotal}</Card.Text>

								<Button 
									colorScheme='red' 
									rounded={'full'}
									variant="danger" 
									onClick={onOpen}>
								  Remove item
								</Button>

								<AlertDialog
								  isOpen={isOpen}
								  leastDestructiveRef={cancelRef}
								  onClose={onClose}
								>
								  <AlertDialogOverlay>
								    <AlertDialogContent>
								      <AlertDialogHeader fontSize='lg' fontWeight=''>
								        Remove item from cart
								      </AlertDialogHeader>

								      <AlertDialogBody>
								        Are you sure? You can't undo this action afterwards.
								      </AlertDialogBody>

								      <AlertDialogFooter>
								      <ButtonGroup spacing={1}>
								      
								        <Button 
								        	ref={cancelRef} 
								        	onClick={onClose}
								        	mr={'3px'}
								        	>
								          Cancel
								        </Button>

								        <Button 
								       		//onClick={onClose} 
								       		//onClick={(e) => {removeItem(id)}

								        	variant="danger" 
								       		onClick={() => removeAndClose()}
								       		ml={3}
								       		>
								          Remove
								        </Button>
								        </ButtonGroup >
								      </AlertDialogFooter>
								    </AlertDialogContent>
								  </AlertDialogOverlay>
								</AlertDialog>
							</Card.Body>
						</Card>	
					</Container>

		
	);
}