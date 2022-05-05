import { useState, useEffect } from 'react';
import { Card, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function CourseCard({courseProp}) {


	// Use the state hook for this component to be able to store its 
	/*
		Syntax:
			const [getter, setter] = useSate(initialGetterValue)
	*/

	const [count, setCount] = useState(0)
	const [seats, setSeats] = useState(30)

	function enroll() {

			setCount(count + 1)
			setSeats(seats - 1)
			console.log('Enrollees: ' + count)
		}

		useEffect(() => {
			if(seats === 0){
				alert('No more seats available!');
			}
			// console.log('ayun')
		},[seats]);

	// 	if(seatCount  == 0){
	// 		Swal.fire('Sorry, there are no more seats available.')

	// 	} else {

	// 		setCount(count + 1)
	// 		setSeatCount(seatCount - 1)
	// 	}
	// }

	// console.log(props.courseProp);
	const {name, description, price } = courseProp;

	return (
		<Card>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Subtitle>Description</Card.Subtitle>
				<Card.Text>{description}</Card.Text>
				<Card.Subtitle>Price</Card.Subtitle>
				<Card.Text>{price}</Card.Text>
				<Card.Text>Enrollees: {count}</Card.Text>
				<Card.Text>Available seats: {seats}</Card.Text>
				<Button variant ="primary" onClick={enroll}>Enroll</Button>
			</Card.Body>
		</Card>
	);
}