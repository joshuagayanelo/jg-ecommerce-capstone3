import Banner from './../components/Banner';
import Highlights from './../components/Highlights';
import { Container } from 'react-bootstrap';

const bannerHome = {
	title: 'Bentta',
	content: 'Discover what you have been searching for.'
}

export default function Home() {
	return(
		<Container>
			<Banner bannerData = {bannerHome} />
			<Highlights/>
			
		</Container>
	);
};


