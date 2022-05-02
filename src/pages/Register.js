import {Container, Form, Button } from 'react-bootstrap';
import Banner from './../components/Banner';
import Swal from 'sweetalert2'

const bannerRegiser = {
	title: 'Sign up here',
	content: 'Create an account to start enrolling to our subjects.'
}

export default function Register() {

	const registerUser = (event) => {
			event.preventDefault();
			Swal.fire({
			icon: 'success',
			title: 'Registration Succesful',
			text: 'Your account has been successfully created. You may now log in.'
		});
	};

	const validateNumber = (event) => {
		event.preventDefault();
		console.log(event);

		const value = event.target.value;
		console.log(value);
		const firstFour = value.substring(0,4);
		const firstFive = value.substring(0,5);
		

		const preFixes = [
		// Globe
		"0817", "09173", "09175", "09176","09178","09253",
		"09255", "09256", "09257", "09258","0905","0906",
		"0915", "0916", "0917", "0927","0935","0936",
		"0937", "0945", "0953", "0955","0956","0965",
		"0966", "0967", "0975", "0976","0977","0978",
		"0979",
		// Sun
		"0922","0923",
		"0924", "0925", "0931", "0932","0933","0934",
		"0940", "0941", "0942", "0943","0973","0974",
		// Smart
		"0908", "0918", "0919", "0920","0921","0928",
		"0929", "0939", "0946", "0947","0949","0951",
		"0961", "0998", "0999", "0966","0977",
		// TNT
		"0907", "0909", "0910", "0912","0930",
		"0938", "0946", "0948", "0950",
		// DITO
		"0895", "0896", "0897", "0898","0991",
		"0992","0993","0994"
		];

		const isValid = preFixes.indexOf(firstFour) != -1 || preFixes.indexOf(firstFive) != -1;
		console.log(isValid);

		const errorMessage = [];
		if(isValid) {
			return true;
		} else {
			errorMessage.push("Mobile number is not valid.") 
			console.log(errorMessage)
		};

	};



	 
	return (
		<Container>
			<Banner bannerData = {bannerRegiser}/>
			<h1 className="text-center mt-3"> Register Page </h1>
			<Form className="mt-5 mb-5" onSubmit={e => registerUser(e)}>
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
				 		// pattern="[0]{1}[8-9]{1}[0-9]{9}"
				 		title="Please enter a valid mobile number."
				 		onKeyUp={e => validateNumber(e)}
				  	/>
				  	<span className="text-danger">{validateNumber.errorMessage}</span>
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