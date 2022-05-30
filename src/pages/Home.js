import Banner from './../components/Banner';
import Category from './../components/Category';
import ProductHome from './../components/ProductHome';
import Highlights from './../components/Highlights';
import { Container, Row, Col } from 'react-bootstrap';

import {
  Image, 
  SimpleGrid
} from '@chakra-ui/react';

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
		<Container fluid className="">

			<Row className="home-section">

				<Col xs={12} md={1}>
					<div></div>
				</Col>

				<Col xs={12} md={5}>
					<Banner bannerData = {bannerHome} />
				</Col>

				<Col xs={12} md={5}>
					<Container fluid className="imageOne">
					 <Image src="./products/group1.png" />
					</Container>
				</Col>

				<Col md={1}>
					<div></div>
				</Col>
			</Row>

			<Row className="home-section2 text-right">
				<Col xs={12} md={0} >
					<div></div>
				</Col>

				<Col xs={{span: 12, order: 2}} md={{span: 5, order: 1}}>
					<Container fluid className="imageOne">
					 <Image src="./products/image2.jpg" />
					</Container>
				</Col>

				<Col xs={{span: 12, order: 1}} md={{span: 5, order: 2}}> 

					<Category categoryData = {categoryHome} />

				</Col>

				<Col xs={12} md={1} >
					<div></div>
				</Col>
			</Row>

			<Row className="home-section3 text-center">
				<Col xs={12} md={12}>
					<ProductHome productHomeData = {productHomeA} />
				</Col>

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image1.jpg" />
					</Container>
				</Col>

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image6.jpg" />
					</Container>
				</Col>

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image3.jpg" />
					</Container>
				</Col>

			</Row>

			<Row className="home-section4 text-center">

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image4.jpg" />
					</Container>
				</Col>

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image2.jpg" />
					</Container>
				</Col>

				<Col xs={12} md={4}>
					<Container fluid className="imageOne">
					 <Image src="./products/image5.jpg" />
					</Container>
				</Col>

			</Row>

		</Container>
	);
};


