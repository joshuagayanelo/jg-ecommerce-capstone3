import { useState, useEffect } from 'react';
import { Card, Button, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminCard({productProp}) {


	const { _id, productName, productSku, quantity, description, price, isActive } = productProp;

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
					<Button variant ="primary" className="mr-1">Update</Button>
					<Button variant ="danger" className="mr-1">Deactivate</Button>
					{/*<Button variant ="success" className="mr-1">Activate</Button>*/}
				</Card.Body>
			</Card>			
		</Container>
	);
}