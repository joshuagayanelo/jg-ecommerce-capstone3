import Banner from './../components/Banner';
import {Container} from 'react-bootstrap';

export default function () {
	return(
		<Container>
			<Banner/>
			<h1 className="text-center mt-3">Login Page</h1>
		</Container>		
	);
}