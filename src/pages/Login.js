import Banner from './../components/Banner';
import {Container} from 'react-bootstrap';

const bannerLogin = {
	title: 'Sign in to your account here',
	content: 'View your profile when you sign in.'
}

export default function () {
	return(
		<Container>
			<Banner bannerData = {bannerLogin} />
			<h1 className="text-center mt-3">Login Page</h1>
		</Container>		
	);
}