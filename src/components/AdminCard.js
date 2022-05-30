import { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Form, Modal, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
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

export default function AdminCard({productProp}) {

	const { _id, productName, productSku, quantity, description, price, isActive } = productProp;
	// console.log(_id)

	const [isActiveA, setIsActiveA] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [showB, setShowB] = useState(false);
    // const handleCloseB = () => setShow(false);
    // const handleShowB = () => setShow(true);

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const [productNameA, setProductNameA] = useState("");
    const [productSkuA, setProductSkuA] = useState("");
    const [descriptionA, setDescriptionA] = useState("");
    const [priceA, setPriceA] = useState("");
    const [quantityA, setQuantityA] = useState("");

// UPDATE PRODUCT PRODUCT
    const updateProduct = (e) => {
        
        e.preventDefault();

        fetch(`http://localhost:4000/api/products/update/${_id}`, {
            method:"PUT", 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON. stringify({
                productName: productNameA, 
                productSku: productSkuA, 
                description: descriptionA, 
                price: priceA, 
                quantity: quantityA, 
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data === true){

                 Swal.fire({
                    title: "Product updated",
                    icon: "success", 
                    text: "You have successfully updated a product."
                
                })

                window.setTimeout(() => {location.reload()},1000)

            } else {
                Swal.fire({
                    title: "Something went wrong.",
                    icon: "error", 
                    text: "Please try again."
                })
            }
        })

    }


// DEACTIVATE PRODUCT
    const deactivateProduct = () => {
    	//e.preventDefault();

    	fetch(`http://localhost:4000/api/products/archive/${_id}`,{
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
    				title:"Product Deactivated.",
    				icon:"success",
    				text:"You may still activate this product later."
    			})

    			window.setTimeout(() => {location.reload()},1000)
    			
    		} else {
    			Swal.fire({
    				title:"Something went wrong.",
    				icon:"error",
    				text:"Please try again."
    			})
    		}
    	})
    };

    const deactivateAndClose = () => {
    	deactivateProduct();
    	onClose();
    }



// ACTIVATE PRODUCT
    const activateProduct = () => {
    	//e.preventDefault();

    	fetch(`http://localhost:4000/api/products/activate/${_id}`,{
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
    				title:"Product Activated.",
    				icon:"success",
    				text:"Your product is now live."
    			})

    			window.setTimeout(() => {location.reload()},1000)
    			
    		} else {
    			Swal.fire({
    				title:"Something went wrong.",
    				icon:"error",
    				text:"Please try again."
    			})
    		}
    	})
    };

    const activateAndClose = () => {
    	activateProduct();
    	onClose();
    }


    useEffect(() => {
      if((
         productName   !== "" && 
         productSku    !== "" && 
         description       !== "" &&   
         price   !== "" && 
         quantity   !== ""
         )){
         setIsActiveA(true)
      } else {
         setIsActiveA(false)
      }
    }, [productName, productSku, description, price, quantity])

	//console.log(isActive)

	return (
		<Container className="mb-5">		
			<Card>
				<Card.Body>
					<Card.Title>{productName}</Card.Title>
					<Card.Subtitle>Description: </Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Text>SKU: {productSku}</Card.Text>
					<Card.Text>Price: Php {price}</Card.Text>
					<Card.Text>Qty: {quantity}</Card.Text>
					<Card.Text>Is Active: {isActive.toString().toUpperCase()}</Card.Text>

					{/*<Button variant ="primary" as={Link} to={`/products/${_id}`}>Update</Button>*/}
					<Button variant ="primary" className="mr-1 mt-2" onClick={handleShow}>Update</Button>

						{/*UPDATE*/}
						<Modal show={show} onHide={handleClose}>
							<Form onSubmit={(e) => updateProduct(e)}>
						        <Modal.Header closeButton>
						          <Modal.Title>Update product</Modal.Title>
						        </Modal.Header>

						        <Modal.Body>
						          <Form>
						            <Form.Group className="mb-3" controlId="productNameA">
						            	<Alert key="danger" variant="danger">
						            	  NOTE: Please fill up all the fields to completely update the product. Otherwise, a blank field will be saved as blank.
						            	</Alert>
						              {/*<Form.Label>NOTE: Please complete all the fields to update the product. Otherwise, it will be saved as blank.</Form.Label>*/}
						              <Form.Label>Product Name: {productName}</Form.Label>
						              <Form.Control
						                type="text"
						                placeholder="Enter new product name"
						                autoFocus
						                value={productNameA}		
						                required				                
						                onChange={e => {setProductNameA(e.target.value)}}
						              />
						            </Form.Group>

						            <Form.Group className="mb-3" controlId="productSkuA">
						              <Form.Label>SKU: {productSku}</Form.Label>
						              <Form.Control
						                type="text"
						                placeholder="Enter new SKU"
						                autoFocus	
						                value={productSkuA}
						                required						                
						                onChange={e => {setProductSkuA(e.target.value)}}
						              />
						            </Form.Group>
						

							         <Form.Group className="mb-3" controlId="descriptionA">
							           <Form.Label>Description: {description}</Form.Label>
							           <Form.Control 
							           as="textarea" 
							           rows={3} 
							           type="text"
							           placeholder="Enter new description"
							           value={descriptionA}		
							           required
							           onChange={e => {setDescriptionA(e.target.value)}}
							           />
							         </Form.Group>
						

						            <Form.Group className="mb-3" controlId="priceA">
						              <Form.Label>Price: {price}</Form.Label>
						              <Form.Control
						                type="number"
						                placeholder="Enter new price"
						                autoFocus
						                value={priceA}	
						                required
						                onChange={e => {setPriceA(e.target.value)}}
						              />
						            </Form.Group>
						

						            <Form.Group className="mb-3" controlId="quantityA">
						              <Form.Label>Quantity: {quantity}</Form.Label>
						              <Form.Control
						                type="number"
						                placeholder="Enter new quantity"
						                autoFocus
						                value={quantityA}	
						                required
						                onChange={e => {setQuantityA(e.target.value)}}
						              />
						            </Form.Group>
						
						          </Form>
						        </Modal.Body>

						        <Modal.Footer>
						          <Button variant="secondary" onClick={handleClose}>
						            Cancel
						          </Button>
					       
						          <Button variant="primary" type="submit" onClick={handleClose}>
						            Save changes
						          </Button>
						        </Modal.Footer>
						    </Form>
						</Modal>

					{
						(isActive === true) ?
						<Button variant ="danger" className="mr-1 mt-2" onClick={onOpen}>Deactivate</Button>
						:
						<Button variant ="success" className="mr-1 mt-2" onClick={onOpen}>Activate</Button>	
					}

						<AlertDialog
						  isOpen={isOpen}
						  leastDestructiveRef={cancelRef}
						  onClose={onClose}
						>
						  <AlertDialogOverlay>

						  {
						  	(isActive === true) ?	
							    <AlertDialogContent>
							      <AlertDialogHeader fontSize='lg' fontWeight=''>
							        Deactivate Product
							      </AlertDialogHeader>

							      <AlertDialogBody>
							       Are you sure? This product will no longer appear on the product list.
							      </AlertDialogBody>

							      <AlertDialogFooter>
							        <Button 
							        	ref={cancelRef} 
							        	onClick={onClose}
							        	>
							          Cancel
							        </Button>
							        <Button 
							       		//onClick={onClose} 
							       		//onClick={(e) => {removeItem(id)}

							        	variant="danger" 
							       		onClick={() => deactivateAndClose()}
							       		ml={3}
							       		>
							          Deactivate
							        </Button>
							      </AlertDialogFooter>
							    </AlertDialogContent>
							:
								<AlertDialogContent>
								  <AlertDialogHeader fontSize='lg' fontWeight=''>
								    Activate Product
								  </AlertDialogHeader>

								  <AlertDialogBody>
								    Are you sure? This product will be availble on the product list.
								  </AlertDialogBody>

								  <AlertDialogFooter>
								    <Button 
								    	ref={cancelRef} 
								    	onClick={onClose}
								    	>
								      Cancel
								    </Button>
								    <Button 
								   		//onClick={onClose} 
								   		//onClick={(e) => {removeItem(id)}

								    	variant="danger" 
								   		onClick={() => activateAndClose()}
								   		ml={3}
								   		>
								      Activate
								    </Button>
								  </AlertDialogFooter>
								</AlertDialogContent>
						  }

						  </AlertDialogOverlay>
						</AlertDialog>
							
				</Card.Body>
			</Card>			
		</Container>
	);
}