import Banner from './../components/Banner';
import Category from './../components/Category';
import ProductHome from './../components/ProductHome';
import Highlights from './../components/Highlights';
import { Container } from 'react-bootstrap';

const bannerHome = {
	title: 'Bentta',
	content: "Discover what you've been searching for."
}

const categoryHome = {
	title: 'Pag',
	title2: 'Likha',
	content1: "We take our",
	content2: "craftsmanship seriuosly..."
}

const productHomeA = {
	title: 'Aming Produkto',
	content: "Take a look at our luxury line of curated products."
}

export default function Home() {
	return(
		<div className="home-section">
			<Container>
				<Banner bannerData = {bannerHome} />
			</Container>

			<div className="home-section2 text-right">
				<Category categoryData = {categoryHome} />
			</div>

			<div className="home-section3 text-center">
				<ProductHome productHomeData = {productHomeA} />
			</div>
		</div>	

	);
};


