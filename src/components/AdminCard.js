import { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Form, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminCard({productProp}) {


	const { _id, productName, productSku, quantity, description, price, isActive } = productProp;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showB, setShowB] = useState(false);
    const handleCloseB = () => setShow(false);
    const handleShowB = () => setShow(true);


	//console.log(isActive)

	return (
		<Container className="mb-3">		
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
					<Button variant ="primary" className="mr-1" onClick={handleShow}>Update</Button>

						{/*UPDATE*/}
						<Modal show={show} onHide={handleClose}>
						        <Modal.Header closeButton>
						          <Modal.Title>Update product</Modal.Title>
						        </Modal.Header>
						        <Modal.Body>
						          <Form>

						            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						              <Form.Label>Product Name</Form.Label>
						              <Form.Control
						                type="email"
						                placeholder="Enter product name"
						                autoFocus
						              />
						            </Form.Group>

						            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						              <Form.Label>SKU Name</Form.Label>
						              <Form.Control
						                type="email"
						                placeholder="Enter product SKU"
						                autoFocus
						              />
						            </Form.Group>
						

						         <Form.Group
						           className="mb-3"
						           controlId="exampleForm.ControlTextarea1"
						         >
						           <Form.Label>Description</Form.Label>
						           <Form.Control as="textarea" rows={3} />
						         </Form.Group>
						

						            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						              <Form.Label>Price</Form.Label>
						              <Form.Control
						                type="email"
						                placeholder="Enter product price"
						                autoFocus
						              />
						            </Form.Group>
						

						            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						              <Form.Label>Quantity</Form.Label>
						              <Form.Control
						                type="email"
						                placeholder="Enter product quantity"
						                autoFocus
						              />
						            </Form.Group>
						
						          </Form>

						        </Modal.Body>
						        <Modal.Footer>
						          <Button variant="secondary" onClick={handleClose}>
						            Cancel
						          </Button>
						          <Button variant="primary" onClick={handleClose}>
						            Save Changes
						          </Button>
						        </Modal.Footer>
						      </Modal>

					<Button variant ="danger" className="mr-1" onClick={handleShowB}>Deactivate</Button>
					{/*<Button variant ="success" className="mr-1">Activate</Button>*/}

						<Modal show={showB} onHide={handleCloseB}>
						        <Modal.Header closeButton>
						          <Modal.Title>Update product</Modal.Title>
						        </Modal.Header>
						        <Modal.Body>
						          <Form>

						            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						              <Form.Label>Product Name</Form.Label>
						              <Form.Control
						                type="email"
						                placeholder="Enter product name"
						                autoFocus
						              />
						            </Form.Group>
						
						          </Form>

						        </Modal.Body>
						        <Modal.Footer>
						          <Button variant="secondary" onClick={handleCloseB}>
						            Cancel
						          </Button>
						          <Button variant="primary" onClick={handleCloseB}>
						            Save Changes
						          </Button>
						        </Modal.Footer>
						</Modal>

				</Card.Body>
			</Card>			
		</Container>
	);
}