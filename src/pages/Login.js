import Banner from './../components/Banner';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { useState, useEffect } from 'react';

const bannerLogin = {
	title: 'Sign in to your account here',
	content: 'View your profile when you sign in.'
}

export default function Login() {
	// Define an event that will determine the moment when this function will run.
	const loginUser = (e) => {
		e.preventDefault();

		setEmail("");
		setPassword("");

		Swal.fire({
			icon: 'success',
			title: 'You are now logged in',
			text: ''
		});
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if(email !== "" && password !==""){
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [email, password])

	return(
		<Container>
			<Banner bannerData = {bannerLogin} />
			<h1 className="text-center mt-3">Login Page</h1>

			<Form className="mt-5" onSubmit={(e) => loginUser(event)}>
				{/*Email address*/}
				<Form.Group controlId="userEmail">
					<Form.Label>Email:</Form.Label>	
					<Form.Control 
						type="email"
						placeholder="Enter your email address here"
						required
						value={email}
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
					<Button className="btn" variant="primary" type="submit">
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