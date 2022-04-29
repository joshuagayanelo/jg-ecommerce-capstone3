import { Container } from 'react-bootstrap';
import Banner from './../components/Banner';

export default function ErrorPage () {
	return(
		<Container>
			<Banner/>
			<h1 className = "text-center text-danger"> 404 Page not found</h1>
		</Container>
	);
};