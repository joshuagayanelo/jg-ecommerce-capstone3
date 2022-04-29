import {Container} from 'react-bootstrap';
import Banner from './../components/Banner'

const bannerRegiser = {
	title: 'Sign up here',
	content: 'Create an account to start enrolling to our subjects.'
}

export default function Register() {
	return (
		<Container>
			<Banner bannerData = {bannerRegiser}/>
			<h1 className="text-center mt-3"> Register Page </h1>
		</Container>
	);
};