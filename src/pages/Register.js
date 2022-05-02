import {Container, Form, Button } from 'react-bootstrap';
import Banner from './../components/Banner';
import Swal from 'sweetalert2';

const bannerRegiser = {
	title: 'Sign up here',
	content: 'Create an account to start enrolling to our subjects.'
}

export default function Register() {

	const registrationProcess = (event) => {
			event.preventDefault();
			Swal.fire({
			icon: 'success',
			title: 'Registration Succesful',
			text: 'Your account has been successfully created. You may now log in.'
		});
	};

	return (
		<Container>
			<Banner bannerData = {bannerRegiser}/>
			<h1 className="text-center mt-3"> Register Page </h1>
			<Form className="mt-5 mb-5" onSubmit={elo => registrationProcess(elo)}>
				 {/*firstName*/}
				 <Form.Group>
				 	<Form.Label>First Name:</Form.Label>
				 	<Form.Control 
				 		type="text"
				 		placeholder="Please enter your first name here"
				 		required
				 	/>
				 </Form.Group>

				 {/*lastName*/}
				  <Form.Group>
				  	<Form.Label>Last Name:</Form.Label>
				  	<Form.Control 
				 		type="text"
				 		placeholder="Please enter your first name here"
				 		required
				  	/>
				  </Form.Group>

				 {/*email*/}
				  <Form.Group>
				  	<Form.Label>Email Address:</Form.Label>
				  	<Form.Control 
				 		type="email"
				 		placeholder="Please enter your email address"
				 		required
				  	/>
				  </Form.Group>

				 {/*mobileNo*/}
				  <Form.Group>
				  	<Form.Label>Mobile Number:</Form.Label>
				  	<Form.Control 
				 		type="text"
				 		placeholder="Please enter your mobile number"
				 		required
				  	/>
				  </Form.Group>

				 {/*password*/}
				  <Form.Group>
				  	<Form.Label>Password:</Form.Label>
				  	<Form.Control 
				 		type="password"
				 		placeholder="Please enter your password"
				 		required
				  	/>
				  </Form.Group>

				 {/*confirm-password*/}
				  <Form.Group>
				  	<Form.Label>Confirm Password:</Form.Label>
				  	<Form.Control 
				 		type="password"
				 		placeholder="Confirm your password"
				 		required
				  	/>
				  </Form.Group>

				<Button 
					className="btn-block mt-4" 
					variant="success"
					type="submit"
				>
					Sign me up
				</Button>

				<Button 
					className="btn-block" 
					variant="success"
					type="submit"
					disabled
				>
					Sign me up
				</Button>

			</Form>			
		</Container>
	);
};