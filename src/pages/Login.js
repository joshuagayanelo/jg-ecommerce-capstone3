import Banner from './../components/Banner';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'; 

const bannerLogin = {
	title: 'Sign in to your account here',
	content: 'View your profile when you sign in.'
}

export default function Login() {
	// Define an event that will determine the moment when this function will run.
	const loginUser = (event) => {
		event.preventDefault();
		Swal.fire({
			icon: 'success',
			title: 'Login Succesful',
			text: 'You have inserted the correct credentials.'
		});
	};

	return(
		<Container>
			<Banner bannerData = {bannerLogin} />
			<h1 className="text-center mt-3">Login Page</h1>
			<Form className="mt-5" onSubmit={event => loginUser(event)}>
				{/*Email address*/}
				<Form.Group>
					<Form.Label>Email:</Form.Label>	
					<Form.Control 
						type="email"
						placeholder="Enter your email address here"
					/>	
				</Form.Group>
				{/*Password*/}
				<Form.Group>	
					<Form.Label>Password:</Form.Label>	
					<Form.Control 
						type="password"
						placeholder="Please enter your password here"
					/>
				</Form.Group>

				<Button 
					className="btn-block" 
					variant="success"
					type="submit"
				>
					Login
				</Button>

				<Button
					className="btn-block"
					variant="secondary"
					disabled
				>
					Login
				</Button>

			</Form>

		</Container>		
	);
};	