import { useState, useEffect } from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function ProductsCard({productProp}) {


	const {productName, description, price, _id } = productProp;

	return (
		<Container className="mb-3">
			<Card>
				<Card.Body>
					<Card.Title>{productName}</Card.Title>
					<Card.Subtitle>Description: </Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					{/*<Card.Subtitle>Price</Card.Subtitle>*/}
					<Card.Text>P {price}</Card.Text>
					<Button variant ="primary" as={Link} to={`/products/${_id}`}>Details</Button>
				</Card.Body>
			</Card>			
		</Container>
	);
}