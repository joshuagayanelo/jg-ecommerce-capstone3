import { useState, useEffect } from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CartCard({cartProp}) {


	const { _id, user, productId, productName, productSku, qty, description, price, subTotal } = cartProp;

	return (
		<Container className="mb-3">
			<Card>
				<Card.Body>
					<Card.Title>{productName}</Card.Title>
					<Card.Subtitle>Description: </Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Text>SKU: {productSku}</Card.Text>
					<Card.Text>{qty}</Card.Text>
					<Card.Text>Sub Total: Php {subTotal}</Card.Text>
			{/*		<Button variant ="primary" as={Link} to={`/products/${_id}`}>Details</Button>*/}
				</Card.Body>
			</Card>			
		</Container>
	);
}