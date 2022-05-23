import {useState, useEffect, useContext} from 'react';
import {Container, Row, Column, Card, Button, Col} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

export default function CourseView () {

	const {user} = useContext(UserContext);
	
	const navigate = useNavigate();

	//The userParams hook allows us to retrieve the courseId passed via the URL
	const {courseId} = useParams();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	const enroll = (courseId) => {

		fetch("http://localhost:4000/api/users/enroll", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				courseId: courseId
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(data === true) {
				Swal.fire({
					title:"Successfully enrolled.",
					icon:"success",
					text:"You have successfully enrolled for this course."
				})

				navigate('/courses')

			} else {
				Swal.fire({
					title:"Something went wrong.",
					icon:"error",
					text:"Please try again."
				})
			}
		})
	};

	useEffect(() => {
		// console.log(courseId)
		fetch(`http://localhost:4000/api/courses/${courseId}`)
		.then(res => res.json())
		.then(data => {
			// console.log(data);
			setName(data.name)
			setDescription(data.description)
			setPrice(data.price)
		})
	},[courseId])

	return(

		<Container className="mt-5">
			<Row>
				<Col lg={{span:6, offset:3}}>
					<Card>
						<Card.Body className="text-center">
							<Card.Title>{name}</Card.Title>
							<Card.Subtitle>Description: </Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>{price}</Card.Text>
							<Card.Subtitle>Class Schedule:</Card.Subtitle>
							<Card.Text>5:30PM - 9:30PM</Card.Text>
							
							{
								user.id !== null ?
									<Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>
								:
									<Link className="btn btn-danger" to="/login">Login to enroll</Link>
							}

						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

		)
}