import { useState, useEffect } from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CourseCard({courseProp}) {


	// Use the state hook for this component to be able to store its 
	/*
		Syntax:
			const [getter, setter] = useSate(initialGetterValue)
	*/

	// const [count, setCount] = useState(0)
	// const [seats, setSeats] = useState(30)

	// function enroll() {

	// 		setCount(count + 1)
	// 		setSeats(seats - 1)
	// 		console.log('Enrollees: ' + count)
	// 	}

	// 	useEffect(() => {
	// 		if(seats === 0){
	// 			alert('No more seats available!');
	// 		}
	// 		// console.log('ayun')
	// 	},[seats]);

	// 	if(seatCount  == 0){
	// 		Swal.fire('Sorry, there are no more seats available.')

	// 	} else {

	// 		setCount(count + 1)
	// 		setSeatCount(seatCount - 1)
	// 	}
	// }

	// console.log(props.courseProp);

	const {name, description, price, _id } = courseProp;

	return (
		<Container className="mb-3">
			<Card>
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Subtitle>Description</Card.Subtitle>
					<Card.Text>{description}</Card.Text>
					<Card.Subtitle>Price</Card.Subtitle>
					<Card.Text>Php: {price}</Card.Text>
					<Button variant ="primary" as={Link} to={`/courses/${_id}`}>Details</Button>
				</Card.Body>
			</Card>			
		</Container>
	);
}