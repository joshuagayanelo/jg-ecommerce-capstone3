import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { useState, useEffect, useContext } from 'react';
import UserContext from '../UserContext'
import { Navigate } from 'react-router-dom';


export default function Login() {

	// "useContext" hook is used to deconstruct/unpack the data of the UserContext Object.

	const {user, setUser} = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);
	// Define an event that will determine the moment when this function will run.
	
	const loginUser = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}, 
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			
			console.log(data)
			if(typeof data.accessToken !== "undefined") {
				localStorage.setItem('token', data.accessToken)
				retrieveUserDetails(data.accessToken)

				Swal.fire({
					icon: 'success',
					title: `User ${email} has been verified. `,
					text: 'Welcome to Bentta.'
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: `Incorrect email or password`,
					text: 'Please check your login details and try again.'
				});
			}

		})

	};

	const retrieveUserDetails = (token) => {
		fetch('http://localhost:4000/api/users/admin',{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {

			console.log(data)
			setUser({
				id: data._id,
				isAdmin: data.isAdmin

			})
		})
	}

	useEffect(() => {
		if(email !== "" && password !==""){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])


	return(

		(user.isAdmin === true) ?

		<Navigate to='/admin-dashboard'/>

		:

		<Container>
			
			<h1 className="text-center mt-3">Admin Login Page</h1>
		
			<Form className="mt-5" onSubmit={(e) => loginUser(e)}>
				{/*Email address*/}
				<Form.Group controlId="userEmail">
					<Form.Label>Email:</Form.Label>	
					<Form.Control 
						type="email"
						placeholder="Enter your email address here"
						required
						value={email}
						// pattern=
						onChange={e => {setEmail(e.target.value)}}

					/>	
				</Form.Group>
				{/*Password*/}
				<Form.Group controlId="password">	
					<Form.Label>Password:</Form.Label>	
					<Form.Control 
						type="password"
						placeholder="Please enter your password here"
						required
						value={password}
						onChange={e => {setPassword(e.target.value)}}
					/>
				</Form.Group>

				{
					isActive ?
					<Button className="btn" variant="primary" type="submit" onClick={() => window.location.reload(false)}>
						Login
					</Button>
					:
					<Button className="btn" variant="secondary" disabled>
						Login
					</Button>
				}

			</Form>

		</Container>		
	);
};	