import { useState, useEffect } from 'react';
import { Card, Button, Container} from 'react-bootstrap';
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
  useDisclosure
} from '@chakra-ui/react'

export default function CartCard({cartProp}) {

	const { _id, user, productId, productName, productSku, qty, description, price, subTotal } = cartProp;

	const { isOpen, onOpen, onClose } = useDisclosure()
	const cancelRef = React.useRef()



	const removeItem = (e) => {
		//e.preventDefault();

		fetch(`http://localhost:4000/api/cart/remove-item/${_id}`,{
			method: "PUT", 
			headers: {
				'Content-Type':'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}

		})
		.then(res => res.json())
		.then(data => {
			if(data === true) {
				Swal.fire({
					title:"Item removed.",
					icon:"success",
					// text:"You can check your cart to review your items."
				})

				window.location.reload(false);
				
			} else {
				Swal.fire({
					title:"Something went wrong.",
					icon:"error",
					text:"Please try again."
				})
			}
		})
	};


	const removeAndClose = () => {
		
		removeItem(_id);
		onClose();
	}

	return (
		<Container className="mb-3">
			<Card>
				<Card.Body>
					<Card.Title>{productName}</Card.Title>
					<Card.Subtitle>Description: </Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Text>SKU: {productSku}</Card.Text>
					<Card.Text>Quantity: {qty}</Card.Text>
					<Card.Text>Sub Total: Php {subTotal}</Card.Text>
{/*					<Button variant="danger"
						onClick={(e) => removeItem(_id)}
					>Remove from cart</Button>*/}

					<Button colorScheme='red' onClick={onOpen}>
					  Remove item
					</Button>

					<AlertDialog
					  isOpen={isOpen}
					  leastDestructiveRef={cancelRef}
					  onClose={onClose}
					>
					  <AlertDialogOverlay>
					    <AlertDialogContent>
					      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
					        Renmove item from cart
					      </AlertDialogHeader>

					      <AlertDialogBody>
					        Are you sure? You can't undo this action afterwards.
					      </AlertDialogBody>

					      <AlertDialogFooter>
					        <Button ref={cancelRef} onClick={onClose}>
					          Cancel
					        </Button>
					        <Button 
					        	colorScheme='red' 
					       		//onClick={onClose} 
					       		//onClick={(e) => {removeItem(id)}
					       		onClick={() => removeAndClose()}
					       		ml={3}
					       		>
					          Remove
					        </Button>
					      </AlertDialogFooter>
					    </AlertDialogContent>
					  </AlertDialogOverlay>
					</AlertDialog>

	
				</Card.Body>
			</Card>			
		</Container>
	);
}