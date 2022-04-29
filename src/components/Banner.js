import { Col, Row } from 'react-bootstrap'; 

export default function Banner({bannerData}) {
	return(
       <Row>
			<Col className = "p-5 m-3">
			   <h1 className = "text-center text-success"> {bannerData.title} </h1>
			   <p className = "text-center my-4"> {bannerData.content} </p>
			</Col>          
       </Row>
	);
};
