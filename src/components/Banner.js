import { Col, Row, Container, Fragment } from 'react-bootstrap'; 
import '../App.css';

export default function Banner({bannerData}) {
	return(
   
       <Container fluid className="ml-auto">
			<div>
			   <p className = "banner-title-content"> {bannerData.content} </p>
			   <h1 className = "banner-title"> {bannerData.title} </h1>
			</div>          
       </Container>
	);
};
