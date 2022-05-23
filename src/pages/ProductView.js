import {useState, useEffect, useContext} from 'react';
import {Container, Row, Column, Card, Button, Col, Form} from 'react-bootstrap';
import {useParams, useNavigate} from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

export default function CourseView () {

	const {user} = useContext(UserContext);
	
	const navigate = useNavigate();

	//The userParams hook allows us to retrieve the courseId passed via the URL
	const {productId} = useParams();

	const [name, setName] = useState("");
	const [productIdA, setProductIdA] = useState("");
	const [productNameA, setProductNameA] = useState("");
	const [productSku, setProductSku] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const [countQty, setCountQty] = useState(0)
	 
		const handleClick1 = () => {
		  setCountQty(countQty + 1)
		}
		 
		const handleClick2 = () => {
		  if(countQty >= 1) {
			setCountQty(countQty - 1)
		  }
		}




	const addToCart = (productId) => {

		fetch("http://localhost:4000/api/cart/add-to-cart/", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				user:user.id,
				productId: productIdA,
				productName: productNameA,
				productSku: productSku,
				description:description,
				qty:countQty,
				price:price
			})
		})


		.then(res => res.json())
		.then(data => {
			//console.log(data)

			if(data === true) {
				Swal.fire({
					title:"Added to cart.",
					icon:"success",
					text:"You can check your cart to review your items."
				})

				navigate('/products')

			} else {
				Swal.fire({
					title:"Something went wrong.",
					icon:"error",
					text:"Please try again."
				})
			}
		})
	};

	// console.log(user.id)
	// console.log(productIdA)
	//console.log(countQty)
	// console.log(price)
	// console.log(description)
	// console.log(productSku)
	//console.log(productNameA)

	const checkQty = 
	
	useEffect(() => {
		// console.log(productId)
		fetch(`http://localhost:4000/api/products/${productId}`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setProductNameA(data.productName)
			setProductSku(data.productSku)
			setDescription(data.description)
			setPrice(data.price)
			setQuantity(data.quantity)
			setProductIdA(data._id)


		})
	},[productId])

	return(

		<Container className="mt-5">
			<Row>
				<Col lg={{span:6, offset:3}}>
					<Card>
						<Card.Body className="">
							<Card.Title>{name}</Card.Title>
							<Card.Subtitle>Description: </Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>Php {price}</Card.Text>
							<Card.Subtitle>Available:</Card.Subtitle>
							<Card.Text>{quantity}</Card.Text>

							{/*<Card.Subtitle>Class Schedule:</Card.Subtitle>*/}
							{/*<Card.Text>5:30PM - 9:30PM</Card.Text>*/}
							

							<Form>
							  <Form.Group className="mb-3" controlId="formBasicEmail">
							    {/*<Form.Label>Enter Qty</Form.Label>*/}
							    <Card.Text>Quantity: {countQty}</Card.Text>
							    <Button variant="success" onClick={() => handleClick2()}>-</Button>
							    <Button variant="primary" onClick={() => handleClick1()}>+</Button>
							  </Form.Group>
						
							</Form>
							
							{
								user.id !== null ?
									
									<Button variant="primary" onClick={() => addToCart(productId)}>Add to cart</Button>
								:
									<Link className="btn btn-danger" to="/login">Add to cart</Link>
							}

						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

		)
}