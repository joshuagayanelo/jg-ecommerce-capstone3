import { Container, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Banner from '../components/Banner';

// const bannerError = {
// 	title: 'Welcome to the Batch 164 Enrollment System',
// 	content: 'Enroll this summer to get amazing discounts!'
// }

export default function ErrorPage () {
	return(
		<Container className="text-center">
			{/*<Banner bannerData={bannerError} />*/}
			<h1 className = "mt-5"> Awts...</h1>
			<p className = "mt-1 mb-3">404 Page Not Found</p>
			<Button variant="primary" as={Link } to="/" >Take me back home</Button>
		</Container>
	);
};


