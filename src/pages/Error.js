import { Container } from 'react-bootstrap';
// import Banner from '../components/Banner';

// const bannerError = {
// 	title: 'Welcome to the Batch 164 Enrollment System',
// 	content: 'Enroll this summer to get amazing discounts!'
// }

export default function ErrorPage () {
	return(
		<Container className="text-center">
			{/*<Banner bannerData={bannerError} />*/}
			<h1 className = "mt-5"> 404 Page not found</h1>
			<button className="btn btn-primary mt-3 align-center" to="/">Go back to Home Page</button>
		</Container>
	);
};


